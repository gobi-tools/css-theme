import { exit } from 'process';
import * as fs from 'fs';

const TMP_FOLDER = 'tmp';
const THEMES_FOLDER = 'src/themes';
const BASE_FOLDER = 'src/base';
const RESET_FILE = '01.reset.css';
const OUTPUT_FILE = 'theme.css';

// 1. setup workspace dir
try {
  fs.rmSync(TMP_FOLDER, { recursive: true, force: true });
  fs.mkdirSync(TMP_FOLDER);
} catch {
  exit(0);
}

// 2. copy the normal themes
const themes = fs.readdirSync(THEMES_FOLDER);
for (const theme of themes) {
  const origin = `${THEMES_FOLDER}/${theme}`;
  const dest = `${TMP_FOLDER}/${theme}`;
  fs.copyFileSync(origin, dest);
  console.log(`Copied ${origin} => ${dest}`);
}

// 3. create main theme file
const baseCss = fs.readFileSync(`${BASE_FOLDER}/${RESET_FILE}`, 'utf-8');
const extraCssFiles = fs.readdirSync(BASE_FOLDER).filter((f) => f !== RESET_FILE);

const extraCsss = [];
for (const extraCssFile of extraCssFiles) {
  const extraCss = fs.readFileSync(`${BASE_FOLDER}/${extraCssFile}`, 'utf-8');
  extraCsss.push(extraCss);
}

// 4. write the filal file
const css = [baseCss, ...extraCsss].join('\n');
fs.writeFileSync(`${TMP_FOLDER}/${OUTPUT_FILE}`, css);