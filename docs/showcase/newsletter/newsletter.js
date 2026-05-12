// showcase/newsletter/react-srv-hydrate-Newsletter.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/newsletter/Newsletter.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Newsletter() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { className: "circle", width: "30", height: "30", src: "https://picsum.photos/id/42/30/30" }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { className: "align-center", children: /* @__PURE__ */ jsx("h4", { children: /* @__PURE__ */ jsx("b", { children: "My newsletter" }) }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Subscribe" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { children: "abc" })
  ] });
}

// showcase/newsletter/react-srv-hydrate-Newsletter.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(Newsletter, globalThis.__INITIAL_PROPS__ || {})
  );
}
