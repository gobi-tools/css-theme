import { exit } from 'process';
import * as fs from 'fs';

const TMP_FOLDER = 'tmp';
const THEMES_FOLDER = 'src/themes';
const BASE_FOLDER = 'src/base';
const RESET_FILE = '01.reset.css';

// 1. setup workspace dir
try {
  fs.rmSync(TMP_FOLDER, { recursive: true, force: true });
  fs.mkdirSync(TMP_FOLDER);
} catch {
  exit(0);
}

// 2. create main theme file
const baseCss = fs.readFileSync(`${BASE_FOLDER}/${RESET_FILE}`, 'utf-8');
const extraCssFiles = fs.readdirSync(BASE_FOLDER).filter((f) => f !== RESET_FILE);
console.log(`Extracted ${BASE_FOLDER}/${RESET_FILE}`);

const extraCsss = [];
for (const extraCssFile of extraCssFiles) {
  const extraCss = fs.readFileSync(`${BASE_FOLDER}/${extraCssFile}`, 'utf-8');
  extraCsss.push(extraCss);
  console.log(`Extracted ${BASE_FOLDER}/${extraCssFile}`);
}

// 3. get all the theme files
const themes = fs.readdirSync(THEMES_FOLDER);
for (const theme of themes) { 
  const themeCss = fs.readFileSync(`${THEMES_FOLDER}/${theme}`, 'utf-8');
  const css = [baseCss, ...extraCsss, themeCss].join('\n');
  fs.writeFileSync(`${TMP_FOLDER}/${theme}`, css);
}