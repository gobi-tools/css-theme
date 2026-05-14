// showcase/landing-page/react-srv-hydrate-LandingPage.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/landing-page/LandingPage.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LandingPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Platform" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Industries" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Resources" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Security" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("select", { children: [
        /* @__PURE__ */ jsx("option", { selected: true, children: "En" }),
        /* @__PURE__ */ jsx("option", { children: "Fr" }),
        /* @__PURE__ */ jsx("option", { children: "De" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Request Demo" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("div", { className: "align-center", children: [
      /* @__PURE__ */ jsx("h1", { children: "Hopper" }),
      /* @__PURE__ */ jsx("h4", { children: "The first agentic development environment for the mainframe" }),
      /* @__PURE__ */ jsx("p", { children: "Use AI agents to navigate TN3270, inspect datasets, write JCL, debug jobs, query VSAM, and operate inside z/OS from a modern development environment." }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("button", { children: "Download for Linux" }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Read the Announcement" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Other platforms" }) })
    ] }) })
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
