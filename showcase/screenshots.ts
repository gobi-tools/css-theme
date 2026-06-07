import path from "node:path";
import { chromium } from "playwright";

const outputDir = "./docs/showcase";

const WIDTH = 1200;
const HEIGHT = 900;

async function main(colorScheme: 'light' | 'dark') {
  const browser = await chromium.launch();

  const context = await browser.newContext({
    colorScheme,
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  async function screenshot(url: string, output: string) {
    await page.goto(url, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(outputDir, output),
      fullPage: false,
    });

    console.log(`✓ Saved ${output}`);
  }

  const data = [
    { url: 'http://localhost:8080/showcase/basic/basic.html', output: `basic/basic.${colorScheme}.png` },
    { url: 'http://localhost:8080/showcase/blog/blog.html', output: `blog/blog.${colorScheme}.png` },
    { url: 'http://localhost:8080/showcase/newsletter/newsletter.html', output: `newsletter/newsletter.${colorScheme}.png` },
    { url: 'http://localhost:8080/showcase/food-delivery/food_delivery.html', output: `food-delivery/food_delivery.${colorScheme}.png` },
    { url: 'http://localhost:8080/showcase/landing-page/landing_page.html', output: `landing-page/landing_page.${colorScheme}.png` },
    { url: 'http://localhost:8080/showcase/app/app.html', output: `app/app.${colorScheme}.png` },
  ];

  for (const { url, output } of data) {
    await screenshot(url, output);
  }

  await browser.close();
}

main('light');
main('dark');
