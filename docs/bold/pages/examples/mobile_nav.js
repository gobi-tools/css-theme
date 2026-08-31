// pages/pages/examples/react-srv-hydrate-MobileNav.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/examples/MobileNav.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileNav() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }),
          /* @__PURE__ */ jsx("path", { d: "m18 15 4-4" }),
          /* @__PURE__ */ jsx("path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Docs" })
      ] }) }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsxs("a", { href: "", children: [
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("path", { d: "m10 8 4 4-4 4" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "More" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Option 1" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Option 2" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] })
  ] });
}

// pages/pages/examples/react-srv-hydrate-MobileNav.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(MobileNav, globalThis.__INITIAL_PROPS__ || {})
  );
}
