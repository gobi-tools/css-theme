import { PUB_SUBDOMAIN } from "../utils/constants";
import { EThemes } from "../utils/types";

export default function Document(props: { theme: EThemes, children: any }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Title</title>

        <meta name="description" content="CSS Theme Demo" />
        <meta name="author" content="CSS Theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />

        <link rel="stylesheet" href={`/res/theme.${props.theme}.min.css`} />
        <link rel="stylesheet" href={`/${PUB_SUBDOMAIN}/res/theme.${props.theme}.min.css`} />
      </head>
      <body>
        <div className="container-wide">
          {props.children}
        </div>
      </body>
    </html>
  );
}