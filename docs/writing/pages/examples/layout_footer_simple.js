// pages/pages/examples/react-srv-hydrate-LayoutFooterSimple.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/examples/LayoutFooterSimple.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutFooterSimple() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Title" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }),
    /* @__PURE__ */ jsxs("footer", { children: [
      "This is a simple footer with a ",
      /* @__PURE__ */ jsx("a", { href: "", children: "link" }),
      "."
    ] })
  ] });
}

// pages/pages/examples/react-srv-hydrate-LayoutFooterSimple.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(LayoutFooterSimple, globalThis.__INITIAL_PROPS__ || {})
  );
}
