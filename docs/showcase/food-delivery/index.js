// showcase/food-delivery/react-srv-hydrate-Index.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/food-delivery/Index.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "disable-mobile", style: { backgroundColor: "var(--color-primary-faint)" }, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Sign In" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { type: "reset", children: "Sign Up" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("div", { style: { backgroundColor: "var(--color-primary-faint)" }, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "align-center", children: "Restaurants, takeaways, supermarkets and shops. Delivered." }),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "group", children: [
        /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
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
        /* @__PURE__ */ jsx("button", { type: "submit", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
          /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "align-center", children: /* @__PURE__ */ jsxs("button", { type: "reset", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: /* @__PURE__ */ jsx("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }) }),
        /* @__PURE__ */ jsx("span", { children: "Use current location" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsx("h2", { children: "Become a member" }),
          /* @__PURE__ */ jsx("p", { children: "As a delivery driver, make money and work on your schedule. Sign up in minutes." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Start earning" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsx("h2", { children: "Become a merchant" }),
          /* @__PURE__ */ jsx("p", { children: "Attract new customers and grow sales, starting with 0% commissions for up to 30 days." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Sign up" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card", children: [
          /* @__PURE__ */ jsx("h2", { children: "Get the best experience" }),
          /* @__PURE__ */ jsx("p", { children: "Experience the best your neighborhood has to offer, all in one app." }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Get the app" }) }),
            /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row group", children: [
        /* @__PURE__ */ jsx("div", { className: "hide-on-desktop", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/42/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Everything you crave, delivered." }),
          /* @__PURE__ */ jsx("p", { children: "Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Find restaurants" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/42/640/480", width: "100%" }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row group", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/103/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Delivery for less" }),
          /* @__PURE__ */ jsx("p", { children: "Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Get pass" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "row group", children: [
        /* @__PURE__ */ jsx("div", { className: "hide-on-desktop", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/348/640/480", width: "100%" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Convenience stores at your doorstep." }),
          /* @__PURE__ */ jsx("p", { children: "Stock up on snacks, household essentials, candy, or vitamins \u2014 all delivered in under an hour." }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Shop now" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("img", { className: "rounded", src: "https://picsum.photos/id/348/640/480", width: "100%" }) })
      ] }),
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "align-center", style: { backgroundImage: 'url("https://picsum.photos/id/130/640/480")', backgroundSize: "cover" }, children: [
        /* @__PURE__ */ jsx("h1", { children: "Get grocery and convenience store essentials" }),
        /* @__PURE__ */ jsx("h4", { children: "Grocery delivery, exactly how you want it." }),
        /* @__PURE__ */ jsx("p", { children: "Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more." }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Shop Groceries" }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("header", { className: "align-center", children: /* @__PURE__ */ jsxs("div", { style: { backgroundColor: "var(--color-primary-faint)" }, children: [
        /* @__PURE__ */ jsx("h2", { children: "Helping you with to-dos and gifting" }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Beauty essentials from top brands" }),
            /* @__PURE__ */ jsx("p", { children: "Get all your beauty and self-care needs delivered at home or on-the-go" }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Show beauty" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Flowers for any occasion" }),
            /* @__PURE__ */ jsx("p", { children: "Shop hand-picked and thoughtfully-arranged blooms from florists near you." }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Send flowers" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", { className: "hide-on-mobile" }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Restock the minibar" }),
            /* @__PURE__ */ jsx("p", { children: "Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast." }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Show alcohol" }) }),
            /* @__PURE__ */ jsx("hr", { className: "hide-on-desktop" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "What your pets need, and want" }),
            /* @__PURE__ */ jsx("p", { children: "Finally, something cat people and dog people agree on \u2014 pet supplies delivery. Shop pet food, chew toys, and even costumes." }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("button", { children: "Get pet supplies" }) })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}

// showcase/food-delivery/react-srv-hydrate-Index.jsx
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
