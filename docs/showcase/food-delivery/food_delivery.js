// showcase/food-delivery/react-srv-hydrate-FoodDelivery.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/food-delivery/FoodDelivery.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FoodDelivery() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "disable-mobile primary", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Sign In" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { type: "reset", children: "Sign Up" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "primary", children: [
      /* @__PURE__ */ jsx("h1", { className: "align-center", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { role: "group", children: [
        /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "address-search",
            type: "search",
            placeholder: "Enter delivery address"
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
          /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "align-center", children: /* @__PURE__ */ jsxs("button", { type: "reset", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }) }),
        /* @__PURE__ */ jsx("span", { children: "Use current location" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "row", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Become a member" }),
          /* @__PURE__ */ jsx("p", { children: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Start earning" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Become a merchant" }),
          /* @__PURE__ */ jsx("p", { children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Sign up" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Get the best experience" }),
          /* @__PURE__ */ jsx("p", { children: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Get the app" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row", role: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "hide-on-desktop", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/42/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("hgroup", { children: [
            /* @__PURE__ */ jsx("h2", { children: "Sed ut perspiciatis unde." }),
            /* @__PURE__ */ jsx("p", { children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione." })
          ] }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Find restaurants" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/42/640/480", width: "100%" }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row", role: "group", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/103/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("hgroup", { children: [
            /* @__PURE__ */ jsx("h2", { children: "Omnis iste natus" }),
            /* @__PURE__ */ jsx("p", { children: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius." })
          ] }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Get pass" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row", role: "group", children: [
        /* @__PURE__ */ jsx("div", { className: "hide-on-desktop", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/348/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("hgroup", { children: [
            /* @__PURE__ */ jsx("h2", { children: "Sit voluptatem accusantium." }),
            /* @__PURE__ */ jsx("p", { children: "ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam, quis nostrum." })
          ] }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Shop now" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/348/640/480", width: "100%" }) })
      ] }),
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "align-center big-banner", children: [
        /* @__PURE__ */ jsxs("hgroup", { children: [
          /* @__PURE__ */ jsx("h1", { children: "Lorem ipsum dolor sit amet." }),
          /* @__PURE__ */ jsx("h4", { children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
          /* @__PURE__ */ jsx("p", { children: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Shop Groceries" }) })
      ] }) }),
      /* @__PURE__ */ jsx("header", { className: "align-center", children: /* @__PURE__ */ jsxs("div", { className: "primary", children: [
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Sed ut perspiciatis unde omnis" }),
              /* @__PURE__ */ jsx("p", { children: "Iste natus error sit voluptatem accusantium doloremque laudantium" })
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Show beauty" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Totam rem aperiam eaque" }),
              /* @__PURE__ */ jsx("p", { children: "Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Send flowers" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", { className: "hide-on-mobile" }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Dicta sunt explicabo" }),
              /* @__PURE__ */ jsx("p", { children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Show alcohol" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Voluptatem sequi nesciunt neque" }),
              /* @__PURE__ */ jsx("p", { children: "Quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Get pet supplies" }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Terms of service" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Privacy" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Locations" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) })
    ] }) }) })
  ] });
}

// showcase/food-delivery/react-srv-hydrate-FoodDelivery.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(FoodDelivery, globalThis.__INITIAL_PROPS__ || {})
  );
}
