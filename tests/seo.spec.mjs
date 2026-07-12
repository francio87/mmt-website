import { readFile } from 'node:fs/promises';
import { test, expect } from '@playwright/test';

const siteUrl = 'https://marmittedeigiganti.com';
const pages = [
  ['/', '/'],
  ['/it/', '/it/'],
  ['/en/', '/en/'],
  ['/cookie-policy/', '/cookie-policy/'],
  ['/it/cookie-policy/', '/it/cookie-policy/'],
  ['/en/cookie-policy/', '/en/cookie-policy/']
];

for (const [path, canonicalPath] of pages) {
  test(`${path} has consistent canonical and hreflang metadata`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteUrl}${canonicalPath}`);
    await expect(page.locator('link[rel="alternate"][hreflang="it"]')).toHaveAttribute('href', `${siteUrl}/it/${path.includes('cookie-policy') ? 'cookie-policy/' : ''}`);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', `${siteUrl}/en/${path.includes('cookie-policy') ? 'cookie-policy/' : ''}`);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', `${siteUrl}/${path.includes('cookie-policy') ? 'cookie-policy/' : ''}`);
  });
}

test('generated sitemap contains only canonical routes', async () => {
  const index = await readFile('dist/sitemap-index.xml', 'utf8');
  const sitemapUrl = index.match(/<loc>([^<]+)<\/loc>/)?.[1];
  expect(sitemapUrl).toBeTruthy();

  const sitemap = await readFile(`dist${new URL(sitemapUrl).pathname}`, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(new Set(urls)).toEqual(new Set(pages.map(([, canonicalPath]) => `${siteUrl}${canonicalPath}`)));
});

test('attraction schema and external links use the configured destinations', async ({ page }) => {
  await page.goto('/it/');
  const schema = await page.locator('script[type="application/ld+json"]').evaluate((element) => JSON.parse(element.textContent));
  const attraction = schema['@graph'].find((item) => item['@type'] === 'TouristAttraction');
  expect(attraction.hasMap).toBe('https://www.google.com/maps/search/?api=1&query=43.683280,12.776999');
  expect(attraction.sameAs).toEqual(['https://www.instagram.com/marmittedeigiganti/']);

  const externalLinks = await page.locator('main a[target="_blank"]').evaluateAll((links) => links.map(({ href, rel }) => ({ href, rel })));
  expect(externalLinks).not.toHaveLength(0);
  for (const { href, rel } of externalLinks) {
    const url = new URL(href);
    expect(url.protocol).toBe('https:');
    expect(['www.google.com', 'www.instagram.com', 'www.comune.fossombrone.ps.it', 'commons.wikimedia.org', 'creativecommons.org', 'it.wikipedia.org']).toContain(url.hostname);
    expect(rel.split(/\s+/)).toContain('noopener');
    expect(rel.split(/\s+/)).toContain('noreferrer');
  }
});
