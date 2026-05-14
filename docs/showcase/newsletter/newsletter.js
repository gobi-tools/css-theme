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
      /* @__PURE__ */ jsx("li", { className: "align-center", children: /* @__PURE__ */ jsx("h3", { children: "My newsletter" }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Subscribe" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Lorem ipsum dolor sit amet" }),
      /* @__PURE__ */ jsx("h5", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
      /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("img", { className: "circle", width: "40", height: "40", src: "https://picsum.photos/id/50/30/30" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: "Author Name" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("small", { children: "Published today \u2022 Paid" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("button", { type: "reset", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /* @__PURE__ */ jsx("path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "130" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "reset", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /* @__PURE__ */ jsx("path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "20" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "reset", children: [
            /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "m2 9 3-3 3 3" }),
                  /* @__PURE__ */ jsx("path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }),
                  /* @__PURE__ */ jsx("path", { d: "m22 15-3 3-3-3" }),
                  /* @__PURE__ */ jsx("path", { d: "M11 6h6a2 2 0 0 1 2 2v10" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "5" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Share" })
      ] })
    ] }) })
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
