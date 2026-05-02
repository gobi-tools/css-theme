// pages/pages/showcase/react-srv-hydrate-MobileTypography.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/showcase/MobileTypography.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileTypography() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("main", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsxs("p", { children: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    /* @__PURE__ */ jsx("b", { children: "tempor" }),
    " incididunt ut labore et dolore magna aliqua."
  ] }) }) }) });
}

// pages/pages/showcase/react-srv-hydrate-MobileTypography.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(MobileTypography, globalThis.__INITIAL_PROPS__ || {})
  );
}
