import { PUB_SUBDOMAIN } from "../utils/constants";
import { EThemes } from "../utils/types";

type TThemeMode = 'light-dark' | 'light' | 'dark';

const ThemeToDarkMode: Record<EThemes, TThemeMode> = {
  // light / dark
  [EThemes.Default]: 'light-dark',
  [EThemes.App]: 'light-dark',
  [EThemes.Blog]: 'light-dark',
  // light
  [EThemes.Newsletter]: 'light',
  [EThemes.Landing]: 'light',
  [EThemes.Delivery]: 'light',
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

        <link rel="stylesheet" href={`/res/theme.${theme}.min.css`}/>
        <link rel="stylesheet" href={`/${PUB_SUBDOMAIN}/res/theme.${theme}.min.css`}/>
        <link rel="stylesheet" href={`/res/custom.${typography}.css`}/>
        <link rel="stylesheet" href={`/${PUB_SUBDOMAIN}/res/custom.${typography}.css`}/>
      </head>
      <body>
        <div className="container-wide">
          {children}
        </div>
      </body>
    </html>
  );
}