// showcase/basic/react-srv-hydrate-Basic.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/basic/Basic.tsx
import { useState } from "https://esm.sh/react@19.2.0";
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Basic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("h2", { children: "Acme Inc" }) }),
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Features" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Pricing" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Sign Up" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("header", { className: "hide-on-desktop", children: [
      /* @__PURE__ */ jsx("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("h2", { children: "Acme Inc" }) }),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: "reset", onClick: () => setIsMenuOpen(!isMenuOpen), children: [
          !isMenuOpen && /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M4 5h16" }),
            /* @__PURE__ */ jsx("path", { d: "M4 12h16" }),
            /* @__PURE__ */ jsx("path", { d: "M4 19h16" })
          ] }),
          isMenuOpen && /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
            /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
          ] })
        ] }) })
      ] }) }),
      isMenuOpen && /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", {}),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Features" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Pricing" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Sign Up" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "align-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("hgroup", { children: [
        /* @__PURE__ */ jsx("h1", { children: "Ship and scale your startup faster with Acme" }),
        /* @__PURE__ */ jsx("p", { children: "Acme Cloud is the all-in-one platform that helps engineering teams plan, build, and deploy without the overhead." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("button", { children: "Get Started" }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Learn More" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("img", { width: "100%", style: { aspectRatio: 16 / 9 }, src: "https://picsum.photos/id/20/600/200" }),
          /* @__PURE__ */ jsx("h3", { children: "Deploy in seconds" }),
          /* @__PURE__ */ jsx("p", { children: "Push to main and we handle the rest \u2014 automatic builds, previews, and zero-downtime rollouts on every commit." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("img", { width: "100%", style: { aspectRatio: 16 / 9 }, src: "https://picsum.photos/id/42/600/200" }),
          /* @__PURE__ */ jsx("h3", { children: "Scale without thinking" }),
          /* @__PURE__ */ jsx("p", { children: "Auto-scaling infrastructure that grows with your traffic, so you only pay for what you actually use." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("header", { className: "align-center secondary", children: /* @__PURE__ */ jsxs("aside", { children: [
        /* @__PURE__ */ jsxs("hgroup", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Start shipping in minutes" }),
          /* @__PURE__ */ jsx("p", { children: "Free for up to 5 teammates. No credit card required." })
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("button", { children: [
          /* @__PURE__ */ jsx("span", { children: "Sign up for free" }),
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
            /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { children: "About us" }),
        /* @__PURE__ */ jsx("p", { children: "Acme Cloud gives modern engineering teams the infrastructure to ship products customers love." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { children: "Quick Links" }),
        /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "secondary", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { children: "Legal" }),
        /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "secondary", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Terms of Service" }) })
        ] }) })
      ] })
    ] }) }) })
  ] });
}

// showcase/basic/react-srv-hydrate-Basic.jsx
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
