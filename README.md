# Classless CSS Theme

A mostly classless CSS theme that is both very versatile and extensible.

## Setup

To setup, you can run 

```bash
npm i 
```

provided you have [Node](https://nodejs.org/en)/[NPM](https://www.npmjs.com/) installed.

To build, you can run

```bash
npm run build
```

which will populate the `dist` folder with the minifed css/

## Use

To use, you can include the following in your HTML `head`er, which will load the *base* theme: 

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.min.css"
>
```

To include any of the other provided themes, `app`, `writing` or `bold`, you can use: 

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.app.min.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.writing.min.css"
>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.bold.min.css"
>
```
