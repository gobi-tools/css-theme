// pages/pages/examples/react-srv-hydrate-MobileMenu.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/examples/MobileMenu.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileMenu() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("menu", { children: [
      /* @__PURE__ */ jsx("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M4 11a9 9 0 0 1 9 9" }),
          /* @__PURE__ */ jsx("path", { d: "M4 4a16 16 0 0 1 16 16" }),
          /* @__PURE__ */ jsx("circle", { cx: "5", cy: "19", r: "1" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Latest" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ jsx("path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }),
          /* @__PURE__ */ jsx("circle", { cx: "10", cy: "7", r: "4" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Profile" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] })
  ] });
}

// pages/pages/examples/react-srv-hydrate-MobileMenu.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(MobileMenu, globalThis.__INITIAL_PROPS__ || {})
  );
}
