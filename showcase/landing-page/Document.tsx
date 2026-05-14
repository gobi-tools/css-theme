import React from 'react';
export const PUB_SUBDOMAIN = 'css-theme';

export default function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Showcase - Landing Page</title>

        <meta name="description" content="CSS Theme Demo" />
        <meta name="author" content="CSS Theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />

        <link rel="stylesheet" href={`/res/theme.default.min.css`} />
        <link rel="stylesheet" href={`/${PUB_SUBDOMAIN}/res/theme.default.min.css`} />

        <link rel="stylesheet" href={`/showcase/landing-page/custom.css`} />
        <link rel="stylesheet" href={`/${PUB_SUBDOMAIN}/showcase/landing-page/custom.css`} />
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}