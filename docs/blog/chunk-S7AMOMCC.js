// pages/pages/examples/LayoutHeaderSection.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutHeaderSection() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Title" }),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("aside", { className: "secondary inverted", children: /* @__PURE__ */ jsx("div", { role: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("b", { children: "Try Now" }),
          /* @__PURE__ */ jsx("br", {}),
          "Subtitle"
        ] }),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "Download" })
      ] }) }) }) }) })
    ] })
  ] });
}

export {
  LayoutHeaderSection
};
