import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

for (const viewport of viewports) {
  test(`visual home ${viewport.name}`, async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('mmt-cookie-consent', JSON.stringify({ value: 'rejected', updatedAt: '2026-07-12T00:00:00.000Z', version: '2026-07-12' })));
    await page.setViewportSize(viewport);
    await page.goto('/it/', { waitUntil: 'networkidle' });
    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page).toHaveScreenshot(`home-${viewport.name}.png`, { animations: 'disabled', caret: 'hide' });
  });
}
