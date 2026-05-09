// pages/pages/showcase/react-srv-hydrate-MobileColumns.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/pages/showcase/MobileColumns.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileColumns() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("main", { style: { maxWidth: "600px", marginInline: "auto" }, children: /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("code", { style: { width: "100%" }, children: "col" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("code", { style: { width: "100%" }, children: "col" }) })
  ] }) }) }) });
}

// pages/pages/showcase/react-srv-hydrate-MobileColumns.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(MobileColumns, globalThis.__INITIAL_PROPS__ || {})
  );
}
