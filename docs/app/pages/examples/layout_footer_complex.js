// pages/pages/examples/react-srv-hydrate-LayoutFooterComplex.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/examples/LayoutFooterComplex.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutFooterComplex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Title" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("article", { className: "primary", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("b", { children: "COMPANY" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Our Story" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Careers" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("b", { children: "DEVELOPERS" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "API" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "gap" })
    ] }) }) })
  ] });
}

// pages/pages/examples/react-srv-hydrate-LayoutFooterComplex.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(LayoutFooterComplex, globalThis.__INITIAL_PROPS__ || {})
  );
}
