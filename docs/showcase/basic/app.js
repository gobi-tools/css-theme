// showcase/basic/react-srv-hydrate-App.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/basic/App.tsx
import { Fragment, jsx } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Basic() {
  return /* @__PURE__ */ jsx(Fragment, { children: "test" });
}

// showcase/basic/react-srv-hydrate-App.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(Basic, globalThis.__INITIAL_PROPS__ || {})
  );
}
