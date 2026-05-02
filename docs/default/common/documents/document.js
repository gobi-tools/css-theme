// pages/common/documents/react-srv-hydrate-Document.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/common/documents/Document.tsx
import { jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
var ThemeToDarkMode = {
  // light / dark
  ["default" /* Default */]: "light-dark",
  ["app" /* App */]: "light-dark",
  ["writing" /* Writing */]: "light-dark",
  ["scholar" /* Scholar */]: "light-dark",
  // light
  ["bold" /* Bold */]: "light",
  ["sunset" /* Sunset */]: "light",
  ["pink" /* Pink */]: "light",
  // dark
  ["forest" /* Forest */]: "dark",
  ["betty" /* Betty */]: "dark",
  ["gold" /* Gold */]: "dark"
};
function Document({ theme, children }) {
  const typography = ThemeToDarkMode[theme] ?? "light-dark";
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("title", { children: "Title" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "CSS Theme Demo" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "CSS Theme" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "light dark" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: `https://cdn.jsdelivr.net/gh/gobi-tools/css-theme@refs/heads/main/dist/theme.${theme}.min.css` }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: `https://raw.githubusercontent.com/gobi-tools/css-theme/refs/heads/main/pages/res/custom.${typography}.css` })
    ] }),
    /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsx("div", { className: "container-wide", children }) })
  ] });
}

// pages/common/documents/react-srv-hydrate-Document.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(Document, globalThis.__INITIAL_PROPS__ || {})
  );
}
