// pages/pages/examples/react-srv-hydrate-MobileBreadcrumbs.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/examples/MobileBreadcrumbs.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileBreadcrumbs() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ol", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Library" }) }),
      /* @__PURE__ */ jsxs("li", { "aria-selected": true, children: [
        /* @__PURE__ */ jsx("a", { href: "", children: "Data" }),
        /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Not visible" }) }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }) })
  ] });
}

// pages/pages/examples/react-srv-hydrate-MobileBreadcrumbs.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(MobileBreadcrumbs, globalThis.__INITIAL_PROPS__ || {})
  );
}
