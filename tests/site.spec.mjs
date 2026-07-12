import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

for (const viewport of viewports) {
  test(`home ${viewport.name} has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/it/');
    await expect(page.locator('main .hero h1')).toHaveCount(1);
    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.locator('#luogo-title')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
    if (viewport.name === 'mobile') {
      await page.getByRole('button', { name: 'Apri menu di navigazione' }).click();
      await expect(page.locator('[data-nav]')).toHaveClass(/is-open/);
    }
  });
}

test('English page is translated in static HTML and the lightbox works with keyboard', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'San Lazzaro Gorge: the Metauro canyon near Fossombrone' })).toBeVisible();
  await page.locator('[data-lightbox-index="0"]').click();
  const dialog = page.locator('[data-gallery-dialog]');
  await expect(dialog).toHaveAttribute('open', '');
  await dialog.click({ position: { x: 4, y: 4 } });
  await expect(dialog).not.toHaveAttribute('open', '');
  await page.locator('[data-lightbox-index="0"]').click();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toHaveAttribute('open', '');
});

test('analytics stays unloaded until consent', async ({ page }) => {
  await page.goto('/it/');
  await expect(page.locator('[data-cookie-banner]')).toBeVisible();
  expect(await page.evaluate(() => Boolean(window.gtag))).toBe(false);
  await page.getByRole('button', { name: 'Rifiuta' }).click();
  await page.waitForLoadState('domcontentloaded');
  expect(await page.evaluate(() => Boolean(window.gtag))).toBe(false);
  expect(await page.evaluate(() => localStorage.getItem('mmt-cookie-consent'))).toContain('rejected');
});

test('custom interaction events require Analytics consent', async ({ page }) => {
  await page.goto('/it/');
  await page.locator('[data-analytics-event="gallery_open"]').first().click();
  expect(await page.evaluate(() => Boolean(window.gtag))).toBe(false);
  expect(await page.evaluate(() => Boolean(window.dataLayer))).toBe(false);

  await page.evaluate(() => localStorage.setItem('mmt-cookie-consent', JSON.stringify({ value: 'accepted', updatedAt: new Date().toISOString(), version: '2026-07-12' })));
  await page.reload();
  await page.locator('[data-analytics-event="gallery_open"]').first().click();
  await expect.poll(() => page.evaluate(() => window.dataLayer.some((entry) => {
    const [command, eventName, parameters] = Array.from(entry);
    return command === 'event' && eventName === 'gallery_open' && parameters?.language === 'it' && parameters?.gallery_item === 1;
  }))).toBe(true);
});

test('changing preferences revokes Analytics and deletes its cookies', async ({ page }) => {
  await page.goto('/it/');
  await page.getByRole('button', { name: 'Accetta' }).click();
  await expect.poll(() => page.evaluate(() => Boolean(window.gtag))).toBe(true);
  await page.evaluate(() => {
    document.cookie = '_ga=test; path=/';
    document.cookie = '_ga_J2K8PKY3C2=test; path=/';
  });

  await page.goto('/it/cookie-policy/');
  await page.getByRole('button', { name: 'Modifica preferenze cookie' }).click();
  await expect(page.locator('[data-cookie-banner]')).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('mmt-cookie-consent'))).toBeNull();
  expect(await page.evaluate(() => window['ga-disable-G-J2K8PKY3C2'])).toBe(true);
  expect(await page.evaluate(() => document.cookie)).not.toContain('_ga');

  await page.getByRole('button', { name: 'Rifiuta' }).click();
  await page.waitForLoadState('domcontentloaded');
  expect(await page.evaluate(() => Boolean(window.gtag))).toBe(false);
});
