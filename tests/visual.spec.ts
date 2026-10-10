import { test, expect } from '@playwright/test';
import fg from "fast-glob";
import path from 'path';
import { fileURLToPath } from 'url';
import { EThemes } from '../pages/common/utils/types';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '../docs/pages');

// get all the themes
const themes = [EThemes.Default];
// const themes = Object.keys(EThemes);

// get all html files
const files = fg.sync('**/*.html', {
  cwd: DIST_DIR,
})
  .filter(f => !f.startsWith('examples'))
  .filter(f => !f.startsWith('showcase'))
  .map(f => `pages/${f}`);
files.push('index.html');

// run all the tests
for (const theme of themes) {
  for (const file of files) {
    const route = `/${theme.toLowerCase()}/${file.replace(/\\/g, '/')}`;

    test(`visual: ${route}`, async ({ page }) => {
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
}