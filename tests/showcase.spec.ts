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
    await page.goto(route);

    await page.addStyleTag({
      content: `
        * {
          animation: none !important;
          transition: none !important;
        }
      `,
    });

    const snapshotName = route
      .replace(/\.html$/, '')
      .replace(/\//g, '__');

    expect(await page.screenshot()).toMatchSnapshot(
      `${snapshotName}.png`
    );
  });
}