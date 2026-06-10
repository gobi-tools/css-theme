// showcase/landing-page/react-srv-hydrate-Document.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/landing-page/Document.tsx
import { jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
var PUB_SUBDOMAIN = "css-theme";
function Document({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("title", { children: "Showcase - Landing Page" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "CSS Theme Demo" }),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "CSS Theme" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "light dark" }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: `/res/theme.landing.min.css` }),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: `/${PUB_SUBDOMAIN}/res/theme.landing.min.css` })
    ] }),
    /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsx("div", { children }) })
  ] });
}

// showcase/landing-page/react-srv-hydrate-Document.jsx
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
