import { EThemes } from "../utils/types";

type TThemeMode = 'light-dark' | 'light' | 'dark';

const ThemeToDarkMode: Record<EThemes, TThemeMode> = {
  // light / dark
  [EThemes.Default]: 'light-dark',
  [EThemes.App]: 'light-dark',
  [EThemes.Writing]: 'light-dark',
  [EThemes.Scholar]: 'light-dark',
  // light
  [EThemes.Bold]: 'light',
  [EThemes.Sunset]: 'light',
  [EThemes.Pink]: 'light',
  // dark
  [EThemes.Forest]: 'dark',
  [EThemes.Betty]: 'dark',
  [EThemes.Gold]: 'dark'
};

export default function Document({ theme, children }) {

  const typography = ThemeToDarkMode[theme] ?? 'light-dark';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Title</title>

        <meta name="description" content="CSS Theme Demo" />
        <meta name="author" content="CSS Theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />

        <link rel="stylesheet" href={`https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.${theme}.min.css`}/>
        <link rel="stylesheet" href={`https://raw.githubusercontent.com/gobi-tools/css-theme/refs/heads/main/public/custom.${typography}.css`}/>
      </head>
      <body>
        <div className="container-wide">
          {children}
        </div>
      </body>
    </html>
  );
}