// showcase/newspaper/react-srv-hydrate-Newspaper.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/newspaper/Newspaper.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Newspaper() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("menu", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M4 11a9 9 0 0 1 9 9" }),
          /* @__PURE__ */ jsx("path", { d: "M4 4a16 16 0 0 1 16 16" }),
          /* @__PURE__ */ jsx("circle", { cx: "5", cy: "19", r: "1" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Subscription" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ jsx("path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }),
          /* @__PURE__ */ jsx("circle", { cx: "10", cy: "7", r: "4" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: "Profile" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "secondary", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "News" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Politics" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Sports" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Local" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Culture" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Food & Drink" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "col", children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("img", { width: "100%", className: "article-img", src: "https://picsum.photos/id/42/420/300" }) }),
          /* @__PURE__ */ jsx("h1", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
          /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx("small", { children: "10 minutes ago" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("blockquote", { className: "card", style: { paddingBottom: "var(--space-l)" }, children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: "MOST READ" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }) }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }) }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Ut enim ad minim veniam, quis nostrud exercitation" }) }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Ullamco laboris nisi ut aliquip ex ea commodo consequat" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("mark", { className: "primary", children: "Politics" }) }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
              /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/43/300/250" }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
              /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/57/300/250" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
              /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/49/300/250" }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
              /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/48/300/250" }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("mark", { className: "primary", children: "Big Reads" }) }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/76/300/250" }) }),
            /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/84/300/250" }) }),
            /* @__PURE__ */ jsx("h4", { children: "Ut enim ad minim veniam, quis nostrud exercitation" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("img", { className: "article-img", width: "100%", src: "https://picsum.photos/id/63/300/250" }) }),
            /* @__PURE__ */ jsx("h4", { children: "Ullamco laboris nisi ut aliquip ex ea commodo consequat" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About Us" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Staff" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Standards" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Newsletters" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "RSS Feeds" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Jobs" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Coontact Us" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Tips" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Inquieries" }) })
      ] }) }) })
    ] }) }) })
  ] });
}

// showcase/newspaper/react-srv-hydrate-Newspaper.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(Newspaper, globalThis.__INITIAL_PROPS__ || {})
  );
}
