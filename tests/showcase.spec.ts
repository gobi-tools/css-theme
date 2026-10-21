import { test, expect } from '@playwright/test';

const showcases = [
  'basic/basic.html',
  'food-delivery/food_delivery.html',
  'newsletter/newsletter.html',
  'landing-page/landing_page.html',
  'blog/blog.html',
  'app/app.html',
];

for (const showcase of showcases) {
  const route = `/showcase/${showcase}`;

  test(`showcase ${route}`, async ({ page }) => {
    const snapshotName = route
      .replace(/\.html$/, '')
      .replace(/\//g, '__');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);

    await expect(page).toHaveScreenshot(`${snapshotName}.png`, {
      fullPage: true,
      animations: 'disabled',
      scale: 'css',
    });
  });
}