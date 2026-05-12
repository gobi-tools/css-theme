// showcase/newsletter/react-srv-hydrate-Index.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/newsletter/Index.tsx
import { jsx } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsx("div", { children: "anc" });
}

// showcase/newsletter/react-srv-hydrate-Index.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(Index, globalThis.__INITIAL_PROPS__ || {})
  );
}
