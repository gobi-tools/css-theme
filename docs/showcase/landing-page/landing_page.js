// showcase/landing-page/react-srv-hydrate-LandingPage.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/landing-page/LandingPage.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LandingPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("aside", { className: "primary inverted align-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("b", { children: "Introducing FooBar" }),
      " \u2014 The best product in its category"
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("nav", { className: "container-wide", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Product" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Industries" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Resources" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("select", { children: [
        /* @__PURE__ */ jsx("option", { selected: true, children: "En" }),
        /* @__PURE__ */ jsx("option", { children: "Fr" }),
        /* @__PURE__ */ jsx("option", { children: "De" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Request Demo" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("article", { className: "align-center", children: [
      /* @__PURE__ */ jsxs("hgroup", { children: [
        /* @__PURE__ */ jsx("h1", { children: "FooBar" }),
        /* @__PURE__ */ jsx("h4", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
        /* @__PURE__ */ jsx("p", { children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("button", { children: "Download" }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Announcement" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Other platforms" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("img", { className: "rounded", width: "100%", style: { aspectRatio: 16 / 9 }, src: "https://picsum.photos/id/2/1200/500?grayscale" }) }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("hgroup", { children: [
        /* @__PURE__ */ jsx("h2", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }),
        /* @__PURE__ */ jsx("p", { children: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." })
      ] }) }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("div", { className: "align-center", children: /* @__PURE__ */ jsx("h2", { children: "Pricing" }) }),
        /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h2", { children: "Hobby" }),
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: "Free" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Includes:" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "No credit card required" }),
              /* @__PURE__ */ jsx("li", { children: "All platforms" }),
              /* @__PURE__ */ jsx("li", { children: "All core FooBar features" })
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { children: "Download" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card", children: [
            /* @__PURE__ */ jsxs("hgroup", { children: [
              /* @__PURE__ */ jsx("h2", { children: "Eterprise" }),
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: "Custom" }) })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Everything in Hobby, plus:" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "SAML SSO" }),
              /* @__PURE__ */ jsx("li", { children: "MCP Server Access" }),
              /* @__PURE__ */ jsx("li", { children: "Admin and Model Controls" })
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { children: "Contact Sales" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("aside", { children: /* @__PURE__ */ jsx("div", { role: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("hgroup", { children: [
          /* @__PURE__ */ jsx("h4", { children: "Join our Community" }),
          /* @__PURE__ */ jsx("p", { children: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet" })
        ] }) }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Join our Discord" })
      ] }) }) }) }) })
    ] }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("aside", { className: "primary inverted", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { role: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("hgroup", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Need access?" }),
        /* @__PURE__ */ jsx("p", { children: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." })
      ] }) }),
      /* @__PURE__ */ jsx("button", { type: "reset", children: "Request Credentials" })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("article", { className: "primary", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("b", { children: "COMPANY" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Our Story" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Careers" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Team" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("b", { children: "DEVELOPERS" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "API" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Vulnerabilities" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("b", { children: "MORE" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Privacy Policy" }) })
      ] }) }) })
    ] }) }) })
  ] });
}

// showcase/landing-page/react-srv-hydrate-LandingPage.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(LandingPage, globalThis.__INITIAL_PROPS__ || {})
  );
}
