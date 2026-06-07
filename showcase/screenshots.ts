import path from "node:path";
import { chromium } from "playwright";

const outputDir = "./docs/showcase";

const WIDTH = 1200;
const HEIGHT = 900;

async function main() {
  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: WIDTH,
      height: HEIGHT,
    },
    deviceScaleFactor: 2,
  });

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
    { url: 'http://localhost:8080/showcase/basic/basic.html', output: 'basic/basic.png' },
    { url: 'http://localhost:8080/showcase/blog/blog.html', output: 'blog/blog.png' },
    { url: 'http://localhost:8080/showcase/newsletter/newsletter.html', output: 'newsletter/newsletter.png' },
    { url: 'http://localhost:8080/showcase/food-delivery/food_delivery.html', output: 'food-delivery/food_delivery.png' },
    { url: 'http://localhost:8080/showcase/landing-page/landing_page.html', output: 'landing-page/landing_page.png' },
    { url: 'http://localhost:8080/showcase/app/app.html', output: 'app/app.png' },
  ];

  for (const { url, output } of data) {
    await screenshot(url, output);
  }

  await browser.close();
}

main();
