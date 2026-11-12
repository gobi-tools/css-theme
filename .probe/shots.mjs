import { chromium } from 'playwright';
import * as fs from 'fs';

const dir = process.argv[2] || '.probe/shots';
fs.mkdirSync(dir, { recursive: true });

const pages = [
  ['index', 'http://localhost:8124/index.html'],
  ['typography', 'http://localhost:8124/default/pages/docs/basics/typography.html'],
  ['carousel', 'http://localhost:8124/default/pages/docs/layout/carousel.html'],
  ['modal', 'http://localhost:8124/default/pages/docs/layout/modal.html'],
  ['forms', 'http://localhost:8124/default/pages/docs/forms/forms_normal.html'],
  ['blog', 'http://localhost:8124/showcase/blog/blog.html'],
  ['header-complex', 'http://localhost:8124/default/pages/examples/layout_header_complex.html'],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
for (const [name, url] of pages) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${dir}/${name}.png`, fullPage: true });
    console.log('ok', name);
  } catch (e) {
    console.log('FAIL', name, String(e).slice(0, 80));
  }
}
await browser.close();
