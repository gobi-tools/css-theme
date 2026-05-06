// pages/pages/showcase/react-srv-hydrate-LayoutHeaderSection.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/showcase/LayoutHeaderSection.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutHeaderSection() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Home" }) }) }) }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Title" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("div", { style: { backgroundColor: "light-dark(var(--color-secondary-muted), var(--color-accent-faint))" }, children: /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("b", { children: "Try Now" }),
          /* @__PURE__ */ jsx("br", {}),
          "Subtitle"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "gap" }),
        /* @__PURE__ */ jsx("button", { children: "Download" })
      ] }) }) }) }) })
    ] })
  ] });
}

// pages/pages/showcase/react-srv-hydrate-LayoutHeaderSection.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(LayoutHeaderSection, globalThis.__INITIAL_PROPS__ || {})
  );
}
