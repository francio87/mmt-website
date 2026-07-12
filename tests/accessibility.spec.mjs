import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('mobile navigation remains available without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/it/');
  await expect(page.getByRole('navigation', { name: 'Navigazione principale' })).toBeVisible();
  await context.close();
});

for (const path of ['/it/', '/en/', '/it/cookie-policy/', '/en/cookie-policy/']) {
  test(`accessibility ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
