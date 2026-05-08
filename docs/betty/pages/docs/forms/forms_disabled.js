// pages/pages/docs/forms/react-srv-hydrate-FormsDisabled.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// pages/common/components/DocsLayout.tsx
import { useEffect as useEffect2, useState as useState7 } from "https://esm.sh/react@19.2.0";

// pages/common/effects/useRoute.ts
import { useState, useEffect } from "https://esm.sh/react@19.2.0";

// pages/common/utils/constants.ts
var PUB_SUBDOMAIN = "css-theme";

// pages/common/effects/useRoute.ts
function useRoute() {
  const [route, setRoute] = useState(void 0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const baseRoute = path.includes(PUB_SUBDOMAIN) ? PUB_SUBDOMAIN : "";
      setRoute(baseRoute);
    }
  }, []);
  return route;
}

// pages/common/utils/types.ts
var PRODUCT_NAME = "CSS Theme";

// pages/pages/docs/basics/Buttons.tsx
import { jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Buttons({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Two types of buttons styles are supported: standard and outlined (for ",
          /* @__PURE__ */ jsx("code", { children: "reset" }),
          " type buttons)."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("button", { children: "Button" }),
          /* @__PURE__ */ jsx("button", { type: "reset", children: "Button" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<button>Button</button>
<button type="reset">
  Button
</button>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Both types can be marked as ",
          /* @__PURE__ */ jsx("code", { children: "disabled" }),
          ", meaning no interaction will be possible with them."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("button", { disabled: true, children: "Disabled" }),
          /* @__PURE__ */ jsx("button", { type: "reset", disabled: true, children: "Disabled" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<button disabled>
  Button
</button>
<button 
  type="reset" 
  disabled>
  Button
</button>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { children: "Buttons can be improved by adding svg icons, either to the left or to the right of the main button title." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsxs("button", { children: [
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
                  /* @__PURE__ */ jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Home" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "reset", children: [
            /* @__PURE__ */ jsx("span", { children: "Play" }),
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
                  /* @__PURE__ */ jsx("path", { d: "M21 4v16" }),
                  /* @__PURE__ */ jsx("path", { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("small", { children: [
          "You can learn more about icons ",
          /* @__PURE__ */ jsx("a", { href: "", children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<!-- left side icon -->
<button>
  <svg ...></svg>
  <span>Home</span> 
</button>

<!-- right side icon -->
<button type="reset">
  <span>Play</span>
  <svg ...></svg>
</button>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { children: "You can even create icon-only buttons by completely omitting the title." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx("path", { d: "M4 11a9 9 0 0 1 9 9" }),
                /* @__PURE__ */ jsx("path", { d: "M4 4a16 16 0 0 1 16 16" }),
                /* @__PURE__ */ jsx("circle", { cx: "5", cy: "19", r: "1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("button", { type: "reset", children: /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  }
                ),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<button>
  <svg ...></svg>
</button>
<button type="reset">
  <dvg ...></svg>
</button>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "You can style buttons semantically with the help of the ",
          /* @__PURE__ */ jsx("code", { children: "success" }),
          " and ",
          /* @__PURE__ */ jsx("code", { children: "error" }),
          " classes."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("button", { className: "success", children: "Confirm" }),
          /* @__PURE__ */ jsxs("button", { type: "reset", className: "error", children: [
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
                  /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
                  /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Cancel" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<button 
  class="success">
  Confirm
</button>

<button 
  type="reset" 
  class="error">
  <svg ...></svg>
  <span>Cancel</span>
</button>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Finally, buttons can be grouped together by wrapping them in a parent tag that has the ",
          /* @__PURE__ */ jsx("code", { children: "group" }),
          " class."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "group", children: [
          /* @__PURE__ */ jsx("button", { children: "Button 1" }),
          /* @__PURE__ */ jsx("button", { type: "reset", children: "Button 2" }),
          /* @__PURE__ */ jsx("button", { type: "reset", children: "Button 3" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "group", children: [
          /* @__PURE__ */ jsx("button", { type: "reset", children: /* @__PURE__ */ jsx(
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
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("button", { type: "reset", children: /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx("path", { d: "M7 10v12" }),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsx("path", { d: "M12 2v13" }),
                /* @__PURE__ */ jsx("path", { d: "m16 6-4-4-4 4" }),
                /* @__PURE__ */ jsx("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("small", { children: [
          "You can learn more about groups ",
          /* @__PURE__ */ jsx("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: `<p class="group">
  <button>
    Button 1
  </button>
  <button type="reset">
    Button 2
  </button>
  <button type="reset">
    Button 3
  </button>
</p>

<p class="group">
  <button type="reset">
    <svg ...></svg>
  </button>
  <button type="reset">
    <svg ...></svg>
  </button>
  <button>
    <svg ...></svg>
  </button>
</p>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Typography.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Typography({ theme }) {
  return /* @__PURE__ */ jsxs2(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs2("section", { className: "row", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("p", { children: [
          "Typography is based purely on ",
          /* @__PURE__ */ jsx2("a", { href: "https://en.wikipedia.org/wiki/CSS#CSS_3" /* CSS3 */, target: "_blank", children: "CSS3" }),
          ", meaning it can handle everything from basic paragraphs:"
        ] }),
        /* @__PURE__ */ jsx2("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })
      ] }),
      /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("pre", { children: /* @__PURE__ */ jsx2("code", { children: `<p>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor 
  incididunt ut labore et 
  dolore magna aliqua. 
  Ut enim ad minim veniam, 
  quis nostrud exercitation 
  ullamco laboris nisi ut 
  aliquip ex ea 
  commodo consequat.
</p>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs2("section", { className: "row", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("p", { children: [
          "To all sorts of text modifiers, like ",
          /* @__PURE__ */ jsx2("code", { children: "b" }),
          ", ",
          /* @__PURE__ */ jsx2("code", { children: "i" }),
          ", ",
          /* @__PURE__ */ jsx2("code", { children: "em" }),
          " tags and many more."
        ] }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("i", { children: "italic" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("em", { children: "emphasized" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("dfn", { children: "definition" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("cite", { children: "citation" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("b", { children: "bold" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("strong", { children: "strong" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("del", { children: "deleted" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("s", { children: "corrected" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("u", { children: "underlined" }) }),
        /* @__PURE__ */ jsx2("p", { children: /* @__PURE__ */ jsx2("q", { children: "quotation" }) })
      ] }),
      /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("pre", { children: /* @__PURE__ */ jsx2("code", { children: `<i>italic</i>
<em>emphasized</em>
<dfn>definition</dfn>
<cite>citation</cite>

<b>bold</b>
<strong>strong</strong>
<del>deleted</del>
<s>corrected</s>
<u>underlined</u>
<q>quotation</q>

<small>smaller</small>
<sub>subscript</sub>
<sup>supescript</sup>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs2("section", { className: "row", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsxs2("p", { children: [
          "Finally, it supports all six ",
          /* @__PURE__ */ jsx2("code", { children: "heading" }),
          " types."
        ] }),
        /* @__PURE__ */ jsx2("h1", { children: "Heading 1" }),
        /* @__PURE__ */ jsx2("h2", { children: "Heading 2" }),
        /* @__PURE__ */ jsx2("h3", { children: "Heading 3" }),
        /* @__PURE__ */ jsx2("h4", { children: "Heading 4" }),
        /* @__PURE__ */ jsx2("h5", { children: "Heading 5" }),
        /* @__PURE__ */ jsx2("h6", { children: "Heading 6" })
      ] }),
      /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("pre", { children: /* @__PURE__ */ jsx2("code", { children: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Blockquotes.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Blockquotes({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs3(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs3("section", { className: "row", children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("p", { children: "Blockquotes (or block quotations) are visually separate from the surrounding text." }),
        /* @__PURE__ */ jsx3("blockquote", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" })
      ] }),
      /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3("pre", { children: /* @__PURE__ */ jsx3("code", { children: `<blockquote>
  Lorem ipsum ...
</blockquote>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs3("section", { className: "row", children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("p", { children: "It's not just text that can be included in a blockquote element, but code, icons, and many other elements." }),
        /* @__PURE__ */ jsxs3("blockquote", { children: [
          "Press ",
          /* @__PURE__ */ jsx3("kbd", { children: "Ctrl + Q" }),
          " to quit"
        ] }),
        /* @__PURE__ */ jsxs3("blockquote", { children: [
          /* @__PURE__ */ jsxs3("span", { className: "group", children: [
            /* @__PURE__ */ jsxs3(
              "svg",
              {
                xmlns: " http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx3("path", { d: "M12 16v-4" }),
                  /* @__PURE__ */ jsx3("path", { d: "M12 8h.01" })
                ]
              }
            ),
            /* @__PURE__ */ jsx3("span", { children: "Information" })
          ] }),
          /* @__PURE__ */ jsx3("br", {}),
          /* @__PURE__ */ jsxs3("p", { children: [
            "Your package will be delivered on ",
            /* @__PURE__ */ jsx3("b", { children: "Tuesday at 08:00." })
          ] })
        ] }),
        /* @__PURE__ */ jsx3("p", { children: /* @__PURE__ */ jsxs3("small", { children: [
          "You can learn more about groups ",
          /* @__PURE__ */ jsx3("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "here" }),
          "."
        ] }) }),
        /* @__PURE__ */ jsx3("p", { children: /* @__PURE__ */ jsxs3("small", { children: [
          "You can learn more about icons ",
          /* @__PURE__ */ jsx3("a", { href: "", children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3("pre", { children: /* @__PURE__ */ jsx3("code", { children: `<blockquote>
  Press 
  <kbd>Ctrl + Q</kbd>
  to quit
</blockquote>
            
<blockquote>
  <span class="group">
    <svg ... ></svg>
    <span>Information</span>
  </span>
  <br/>
  <p>
    Your package will 
    be delivered on 
    <b>Tuesday at 08:00</b>.
  </p>
</blockquote>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs3("section", { className: "row", children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsxs3("p", { children: [
          "Blockquotes can also be styled using the ",
          /* @__PURE__ */ jsx3("code", { children: "success" }),
          " and ",
          /* @__PURE__ */ jsx3("code", { children: "error" }),
          " classes."
        ] }),
        /* @__PURE__ */ jsxs3("blockquote", { className: "success", children: [
          /* @__PURE__ */ jsx3("h4", { children: "Success" }),
          /* @__PURE__ */ jsx3("p", { children: "The operation was completed successfully" })
        ] }),
        /* @__PURE__ */ jsxs3("blockquote", { className: "error", children: [
          /* @__PURE__ */ jsx3("p", { children: "Unknown error" }),
          /* @__PURE__ */ jsxs3("code", { children: [
            "Server responsed with ",
            /* @__PURE__ */ jsx3("b", { children: "Error 500" })
          ] })
        ] }),
        /* @__PURE__ */ jsx3("p", { children: /* @__PURE__ */ jsxs3("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx3("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3("pre", { children: /* @__PURE__ */ jsx3("code", { children: `<blockquote class="success">
  <h4>Success</h4>
  <p>
    The operation was 
    completed successfully
  </p>
</blockquote>

<blockquote class="error">
  <p>Unknown error</p>
  <code>
    Server responsed with 
    <b>Error 500</b>
  </code>
</blockquote>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Code.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Code({ theme }) {
  return /* @__PURE__ */ jsx4(DocLayout, { theme, children: /* @__PURE__ */ jsx4("section", { children: /* @__PURE__ */ jsxs4("div", { className: "row", children: [
    /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx4("p", { children: "Code can be displayed both inline as well as part of a stand alone code block." }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "Inline code ",
        /* @__PURE__ */ jsx4("code", { children: "console.log('abc')" })
      ] }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "Keyboard shortcut ",
        /* @__PURE__ */ jsx4("kbd", { children: "Ctrl + S" })
      ] }),
      /* @__PURE__ */ jsx4("pre", { children: /* @__PURE__ */ jsx4("code", { children: "console.log('abc')" }) }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "The theme doesn't handle syntax highlighting out of the box. That can be handled separately, by using a system such as ",
        /* @__PURE__ */ jsx4("a", { href: "http://hilite.me/" /* Syntax_Hilite */, target: "_blank", children: "hilite.me" }),
        " or ",
        /* @__PURE__ */ jsx4("a", { href: "https://highlightjs.org/" /* Syntax_HighlightJS */, target: "_blank", children: "higlightjs.org" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4("pre", { children: /* @__PURE__ */ jsx4("code", { children: `<p>
  Inline code <code>...</code>
</p>
<p>
  Keyboard shortcut 
  <kbd>...</kbd>
</p>
<pre>
  <code>....</code>
</pre>` }) }) })
  ] }) }) });
}

// pages/pages/docs/basics/Figures.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Figures({ theme }) {
  return /* @__PURE__ */ jsxs5(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs5("section", { className: "row", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx5("p", { children: "Figures can contain a single image and an associated caption." }),
        /* @__PURE__ */ jsxs5("figure", { children: [
          /* @__PURE__ */ jsx5("img", { width: "640", height: "480", src: "https://picsum.photos/id/16/640/480", alt: "ssample image " }),
          /* @__PURE__ */ jsx5("figcaption", { children: "Sample caption" })
        ] })
      ] }),
      /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsx5("pre", { children: /* @__PURE__ */ jsx5("code", { children: `<figure>
  <img 
    width="640" 
    height="480" 
    src="..." 
    alt="ssample image " />
  <figcaption>
    Sample caption
  </figcaption>
</figure>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs5("section", { className: "row", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx5("p", { children: "Or they can contain multiple figures, each with its own separate caption, as well as a caption for the parent figure." }),
        /* @__PURE__ */ jsxs5("figure", { children: [
          /* @__PURE__ */ jsxs5("figure", { children: [
            /* @__PURE__ */ jsx5("img", { width: "200", height: "240", src: "https://picsum.photos/id/16/200/240", alt: "first image" }),
            /* @__PURE__ */ jsx5("figcaption", { children: "Caption for the first image" })
          ] }),
          /* @__PURE__ */ jsxs5("figure", { children: [
            /* @__PURE__ */ jsx5("img", { width: "240", height: "240", src: "https://picsum.photos/id/16/240/240", alt: "second image" }),
            /* @__PURE__ */ jsx5("figcaption", { children: "Caption for the second image" })
          ] }),
          /* @__PURE__ */ jsx5("figcaption", { children: "Caption for the figure group" })
        ] })
      ] }),
      /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsx5("pre", { children: /* @__PURE__ */ jsx5("code", { children: `<figure>
  <figure>
    <img 
      width="200" 
      height="240" 
      src="..." 
      alt="first image" />
    <figcaption>
      Caption for the 
      first image
    </figcaption>
  </figure>
  
  <figure>
    <img 
      width="240" 
      height="240" 
      src="..." 
      alt="second image" />
    <figcaption>
      Caption for the 
      second image
    </figcaption>
  </figure>
  
  <figcaption>
    Caption for the 
    figure group
  </figcaption>
</figure>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Links.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Links({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsx6(DocLayout, { theme, children: /* @__PURE__ */ jsxs6("section", { className: "row", children: [
    /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsxs6("p", { children: [
        "Navigation elements can be styled in a standard, success or error way (by applying the corresponding ",
        /* @__PURE__ */ jsx6("code", { children: "success" }),
        " and ",
        /* @__PURE__ */ jsx6("code", { children: "error" }),
        " classes)"
      ] }),
      /* @__PURE__ */ jsxs6("p", { children: [
        "Basic ",
        /* @__PURE__ */ jsx6("a", { href: "", children: "link" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs6("p", { children: [
        "Success ",
        /* @__PURE__ */ jsx6("a", { href: "", className: "success", children: "link" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs6("p", { children: [
        "Error ",
        /* @__PURE__ */ jsx6("a", { href: "", className: "error", children: "link" }),
        "."
      ] }),
      /* @__PURE__ */ jsx6("p", { children: /* @__PURE__ */ jsxs6("small", { children: [
        "You can learn more about classes ",
        /* @__PURE__ */ jsx6("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
        "."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsx6("pre", { children: /* @__PURE__ */ jsx6("code", { children: `<a href="...">
  link
</a>
<a 
  href="..." 
  class="success">
  success
</a>
<a 
  href="..." 
  class="error">
  error
</a>` }) }) })
  ] }) });
}

// pages/pages/docs/basics/Summary.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Summary({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs7(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs7("section", { className: "row", children: [
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx7("p", { children: "The summary and details html tag is used to present a short piece of information that can be expanded to offer more insights." }),
        /* @__PURE__ */ jsxs7("details", { children: [
          /* @__PURE__ */ jsx7("summary", { children: "Info" }),
          /* @__PURE__ */ jsx7("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
        ] }),
        /* @__PURE__ */ jsxs7("details", { children: [
          /* @__PURE__ */ jsx7("summary", { children: "More info Info" }),
          /* @__PURE__ */ jsx7("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
        ] })
      ] }),
      /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7("pre", { children: /* @__PURE__ */ jsx7("code", { children: `<details>
  <summary>Summary</summary>
  <p>Details</p>
</details>

<details>...</details>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs7("section", { className: "row", children: [
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsxs7("p", { children: [
          "The basic summary can be combined both with the ",
          /* @__PURE__ */ jsx7("code", { children: "card" }),
          " class as well as the ",
          /* @__PURE__ */ jsx7("code", { children: "success" }),
          " and ",
          /* @__PURE__ */ jsx7("code", { children: "error" }),
          " classes to form a more visually appealing element."
        ] }),
        /* @__PURE__ */ jsxs7("details", { className: "card", children: [
          /* @__PURE__ */ jsx7("summary", { children: "Note" }),
          /* @__PURE__ */ jsx7("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
        ] }),
        /* @__PURE__ */ jsxs7("details", { className: "card success", children: [
          /* @__PURE__ */ jsx7("summary", { children: "Success" }),
          /* @__PURE__ */ jsxs7("p", { children: [
            "Operation finished ",
            /* @__PURE__ */ jsx7("code", { children: "OK" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs7("details", { className: "card error", children: [
          /* @__PURE__ */ jsx7("summary", { children: "Error" }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx7("p", { children: "Unknown error occurred" }),
            /* @__PURE__ */ jsx7("button", { children: "Ack" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7("p", { children: /* @__PURE__ */ jsxs7("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx7("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) }),
        /* @__PURE__ */ jsx7("p", { children: /* @__PURE__ */ jsxs7("small", { children: [
          "You can learn more about cards ",
          /* @__PURE__ */ jsx7("a", { href: RouteMaster.doc("cards" /* Cards */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7("pre", { children: /* @__PURE__ */ jsx7("code", { children: `<details class="card">
  <summary>Note</summary>
  <p>
    Lorem ipsum dolor sit 
    amet, consectetur 
    adipiscing elit, 
    sed do eiusmod tempor 
    incididunt ut labore 
    et dolore magna aliqua.
  </p>
</details>
            
<details class="card success">
  <summary>Success</summary>
  <p>
    Operation finished 
    <code>
      OK
    </code>
  </p>
</details>
  
<details class="card error">
  <summary>Error</summary>
  <div>
    <p>
      Unknown error occurred
    </p>
    <button>Ack</button>
  </div>
</details>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Table.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Table({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs8(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs8("section", { className: "row", children: [
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx8("p", { children: "Tables are given a light glow up with no borders except the bottom one (to visually separate rows) and a light color switch when highlighting." }),
        /* @__PURE__ */ jsxs8("table", { children: [
          /* @__PURE__ */ jsx8("thead", { children: /* @__PURE__ */ jsxs8("tr", { children: [
            /* @__PURE__ */ jsx8("th", { children: "Item" }),
            /* @__PURE__ */ jsx8("th", { children: "Value" }),
            /* @__PURE__ */ jsx8("th", { children: "Comment" })
          ] }) }),
          /* @__PURE__ */ jsxs8("tbody", { children: [
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: "Item 1.1" }),
              /* @__PURE__ */ jsx8("td", { children: "20.35" }),
              /* @__PURE__ */ jsx8("td", { children: "In stock" })
            ] }),
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: "Item 2.1" }),
              /* @__PURE__ */ jsx8("td", { children: "15.99" }),
              /* @__PURE__ */ jsx8("td", { children: "Out of stock" })
            ] }),
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: "Item 5.1" }),
              /* @__PURE__ */ jsx8("td", { children: "14.23" }),
              /* @__PURE__ */ jsx8("td", { children: "In stock" })
            ] }),
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: "Item 22" }),
              /* @__PURE__ */ jsx8("td", { children: "10.11" }),
              /* @__PURE__ */ jsx8("td", { children: "In stock" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8("pre", { children: /* @__PURE__ */ jsx8("code", { children: `<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Value</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1.1</td>
      <td>20.35</td>
      <td>In stock</td>
    </tr>
    ....
  </tbody>
</table>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs8("section", { className: "row", children: [
      /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx8("p", { children: "Tables can, of course, contain any number of elements, as shown in the expample below." }),
        /* @__PURE__ */ jsxs8("table", { children: [
          /* @__PURE__ */ jsx8("thead", { children: /* @__PURE__ */ jsxs8("tr", { children: [
            /* @__PURE__ */ jsx8("th", {}),
            /* @__PURE__ */ jsx8("th", { children: "ID" }),
            /* @__PURE__ */ jsx8("th", { children: "Username" }),
            /* @__PURE__ */ jsx8("th", { children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxs8("tbody", { children: [
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("img", { className: "circle", width: "32", height: "32", src: "https://picsum.photos/id/16/80/80", alt: "profile pic" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("code", { children: "04b720d8" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("a", { href: "", children: "@user-1" }) }),
              /* @__PURE__ */ jsxs8("td", { children: [
                /* @__PURE__ */ jsx8("button", { children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Edit", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
                  /* @__PURE__ */ jsx8("path", { d: "m15 5 4 4" })
                ] }) }),
                /* @__PURE__ */ jsx8("button", { className: "error", children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Delete", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
                  /* @__PURE__ */ jsx8("path", { d: "M3 6h18" }),
                  /* @__PURE__ */ jsx8("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("img", { className: "circle", width: "32", height: "32", src: "https://picsum.photos/id/16/40/40", alt: "profile pic" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("code", { children: "3edf8166" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("a", { href: "", children: "@user-253" }) }),
              /* @__PURE__ */ jsxs8("td", { children: [
                /* @__PURE__ */ jsx8("button", { children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Edit", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
                  /* @__PURE__ */ jsx8("path", { d: "m15 5 4 4" })
                ] }) }),
                /* @__PURE__ */ jsx8("button", { className: "error", children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Delete", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
                  /* @__PURE__ */ jsx8("path", { d: "M3 6h18" }),
                  /* @__PURE__ */ jsx8("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs8("tr", { children: [
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("img", { className: "circle", width: "32", height: "32", src: "https://picsum.photos/id/16/32/32", alt: "profile pic" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("code", { children: "90b4e981" }) }),
              /* @__PURE__ */ jsx8("td", { children: /* @__PURE__ */ jsx8("a", { href: "", children: "@user-1182" }) }),
              /* @__PURE__ */ jsxs8("td", { children: [
                /* @__PURE__ */ jsx8("button", { children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Edit", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
                  /* @__PURE__ */ jsx8("path", { d: "m15 5 4 4" })
                ] }) }),
                /* @__PURE__ */ jsx8("button", { className: "error", children: /* @__PURE__ */ jsxs8("svg", { "aria-label": "Delete", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
                  /* @__PURE__ */ jsx8("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
                  /* @__PURE__ */ jsx8("path", { d: "M3 6h18" }),
                  /* @__PURE__ */ jsx8("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
                ] }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx8("p", { children: /* @__PURE__ */ jsxs8("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx8("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) }),
        /* @__PURE__ */ jsx8("p", { children: /* @__PURE__ */ jsxs8("small", { children: [
          "You can learn more about images ",
          /* @__PURE__ */ jsx8("a", { href: RouteMaster.doc("figures" /* Figures */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8("pre", { children: /* @__PURE__ */ jsx8("code", { children: `<table>
  <thead>
    <tr>
      <th></th>
      <th>ID</th>
      <th>User</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img 
          class="circle" 
          width="32" 
          height="32" 
          src="..."/>
      </td>
      <td>
        <code>...</code>
      </td>
      <td>
        <a href="...">...</a>
      </td>
      <td>
        <button>
          <svg...></svg>
        </button>
        <button class="error">
          <avg...></svg>
        </button>
      </td>
    </tr>
    ....
  </tbody>
</table>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Tags.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Tags({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs9(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs9("section", { className: "row", children: [
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsxs9("p", { children: [
          "You can mark any text, keyword or piece of information with the ",
          /* @__PURE__ */ jsx9("code", { children: "mark" }),
          " html tag."
        ] }),
        /* @__PURE__ */ jsx9("p", { children: /* @__PURE__ */ jsx9("mark", { children: "v15.20.30" }) })
      ] }),
      /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("pre", { children: /* @__PURE__ */ jsx9("code", { children: `<mark>v15.20.30</mark>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "row", children: [
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsx9("p", { children: "You can append svg icons to the start and each of each piece of highlighted content." }),
        /* @__PURE__ */ jsxs9("p", { children: [
          /* @__PURE__ */ jsxs9("mark", { children: [
            /* @__PURE__ */ jsxs9(
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
                  /* @__PURE__ */ jsx9(
                    "path",
                    {
                      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                    }
                  ),
                  /* @__PURE__ */ jsx9("path", { d: "m9 12 2 2 4-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx9("span", { children: "released" })
          ] }),
          /* @__PURE__ */ jsxs9("mark", { children: [
            /* @__PURE__ */ jsx9("span", { children: "error" }),
            /* @__PURE__ */ jsxs9(
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
                  /* @__PURE__ */ jsx9(
                    "path",
                    {
                      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                    }
                  ),
                  /* @__PURE__ */ jsx9("path", { d: "m9 12 2 2 4-4" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx9("p", { children: /* @__PURE__ */ jsxs9("small", { children: [
          "You can learn more about icons ",
          /* @__PURE__ */ jsx9("a", { href: RouteMaster.doc("icons" /* Icons */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("pre", { children: /* @__PURE__ */ jsx9("code", { children: `<mark>
  <svg ...></svg>
  <span>released</span>
</mark>
<mark>
  <span>error</span>
  <svg ...></svg>
</mark>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "row", children: [
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsxs9("p", { children: [
          "You  can assign the ",
          /* @__PURE__ */ jsx9("code", { children: "success" }),
          " and ",
          /* @__PURE__ */ jsx9("code", { children: "error" }),
          " classes to change the appearance of the highlighted content."
        ] }),
        /* @__PURE__ */ jsxs9("p", { children: [
          /* @__PURE__ */ jsx9("mark", { className: "success", children: "Process OK" }),
          /* @__PURE__ */ jsx9("mark", { className: "error", children: "Error 400" })
        ] }),
        /* @__PURE__ */ jsx9("p", { children: /* @__PURE__ */ jsxs9("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx9("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("pre", { children: /* @__PURE__ */ jsx9("code", { children: `<mark class="success">
  Process OK
</mark>
<mark class="error">
  Error 400
</mark>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs9("section", { className: "row", children: [
      /* @__PURE__ */ jsxs9("div", { children: [
        /* @__PURE__ */ jsxs9("p", { children: [
          "Finally, if you wrap a number of highlighted pieces of text in a html element with the ",
          /* @__PURE__ */ jsx9("code", { children: "group" }),
          " class, they will be grouped together."
        ] }),
        /* @__PURE__ */ jsxs9("p", { className: "group", children: [
          /* @__PURE__ */ jsx9("mark", { children: "npm" }),
          /* @__PURE__ */ jsx9("mark", { className: "success", children: "1.0.3" }),
          /* @__PURE__ */ jsx9("mark", { className: "error", children: /* @__PURE__ */ jsxs9(
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
              className: "lucide lucide-x-icon lucide-x",
              children: [
                /* @__PURE__ */ jsx9("path", { d: "M18 6 6 18" }),
                /* @__PURE__ */ jsx9("path", { d: "m6 6 12 12" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx9("p", { children: /* @__PURE__ */ jsxs9("small", { children: [
          "You can learn more about groups ",
          /* @__PURE__ */ jsx9("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("pre", { children: /* @__PURE__ */ jsx9("code", { children: `<p class="group">
  <mark>
    npm
  </mark>
  <mark class="success">
    1.0.3
  </mark>
  <mark class="error">
    <svg ...></svg>
  </mark>
</p>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/basics/Lists.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Lists({ theme }) {
  return /* @__PURE__ */ jsxs10(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs10("section", { className: "row", children: [
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx10("p", { children: "Both ordered and unordered lists are styled such that they have a bit more vertical spacing." }),
        /* @__PURE__ */ jsx10("p", { children: "As usual, lists can contain any number of other elements (text, links, etc) and can be nested quite deep." }),
        /* @__PURE__ */ jsxs10("ul", { children: [
          /* @__PURE__ */ jsx10("li", { children: "Item 1" }),
          /* @__PURE__ */ jsx10("li", { children: "Item 2" }),
          /* @__PURE__ */ jsxs10("ol", { children: [
            /* @__PURE__ */ jsx10("li", { children: "Item 1" }),
            /* @__PURE__ */ jsx10("li", { children: "Item 2" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10("pre", { children: /* @__PURE__ */ jsx10("code", { children: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <ol>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
  </ol>
</ul>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs10("section", { className: "row", children: [
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsxs10("p", { children: [
          "Definition lists are styled such that ",
          /* @__PURE__ */ jsx10("code", { children: "dd" }),
          " elements are inlined compared to ",
          /* @__PURE__ */ jsx10("code", { children: "dt" }),
          " elements."
        ] }),
        /* @__PURE__ */ jsxs10("dl", { children: [
          /* @__PURE__ */ jsx10("dt", { children: "Coffee" }),
          /* @__PURE__ */ jsx10("dd", { children: "Black hot drink" }),
          /* @__PURE__ */ jsx10("dt", { children: "Milk" }),
          /* @__PURE__ */ jsx10("dd", { children: "White cold drink" })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("div", { children: /* @__PURE__ */ jsx10("pre", { children: /* @__PURE__ */ jsx10("code", { children: `<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/forms/FormsCheckbox.tsx
import { useState as useState2 } from "https://esm.sh/react@19.2.0";
import { jsx as jsx11, jsxs as jsxs11 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FormsCheckbox({ theme }) {
  const [radio, setRadio] = useState2("bread");
  return /* @__PURE__ */ jsxs11(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs11("section", { className: "row", children: [
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsx11("p", { children: "To allow multiple items to be selected, you can use lighlty styled checkbox inputs." }),
        /* @__PURE__ */ jsxs11("form", { children: [
          /* @__PURE__ */ jsx11("p", { children: /* @__PURE__ */ jsx11("b", { children: "Options" }) }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "egg", children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", id: "egg", name: "sandwich", value: "egg" }),
            /* @__PURE__ */ jsx11("span", { children: "Egg" })
          ] }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "cheese", children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", id: "cheese", name: "sandwich", value: "cheese" }),
            /* @__PURE__ */ jsx11("span", { children: "Cheese" })
          ] }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "ham", children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", id: "ham", name: "sandwich", value: "ham" }),
            /* @__PURE__ */ jsx11("span", { children: "Ham" })
          ] })
        ] }),
        /* @__PURE__ */ jsx11("p", { children: "These work well even for complex, multi-line, checkboxes" }),
        /* @__PURE__ */ jsxs11("form", { children: [
          /* @__PURE__ */ jsx11("p", { children: /* @__PURE__ */ jsx11("b", { children: "Todos" }) }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "friday", children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", id: "friday", name: "todos", value: "friday" }),
            /* @__PURE__ */ jsxs11("span", { children: [
              /* @__PURE__ */ jsx11("b", { children: "Friday" }),
              /* @__PURE__ */ jsx11("br", {}),
              /* @__PURE__ */ jsx11("span", { children: "- Order lunch" }),
              /* @__PURE__ */ jsx11("br", {}),
              /* @__PURE__ */ jsx11("span", { children: "- Go to work" }),
              /* @__PURE__ */ jsx11("span", { children: "- Eat lunch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "saturday", children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", id: "saturday", name: "todos", value: "saturday" }),
            /* @__PURE__ */ jsxs11("span", { children: [
              /* @__PURE__ */ jsx11("b", { children: "Saturday" }),
              /* @__PURE__ */ jsx11("br", {}),
              /* @__PURE__ */ jsx11("span", { children: "- Order lunch" }),
              /* @__PURE__ */ jsx11("br", {}),
              /* @__PURE__ */ jsx11("span", { children: "- Eat lunch" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11("pre", { children: /* @__PURE__ */ jsx11("code", { children: `<form>
  <div className="row">
    <div>
      <p><b>Options</b></p>

      <label for="egg">
        <input 
          type="checkbox" 
          id="egg" 
          name="sandwich" 
          value="egg" />
        <span>Egg</span>
      </label>
      ...
    </div>
    ...
  </div>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs11("section", { className: "row", children: [
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsx11("p", { children: "If you want only one item to be selected out of a list of multiple options, you can use radio inputs." }),
        /* @__PURE__ */ jsxs11("form", { children: [
          /* @__PURE__ */ jsx11("p", { children: /* @__PURE__ */ jsx11("b", { children: "Wrapping" }) }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "bread", children: [
            /* @__PURE__ */ jsx11("input", { type: "radio", id: "bread", name: "radio", value: "bread", checked: radio === "bread", onChange: (e) => setRadio(e.target.value) }),
            /* @__PURE__ */ jsx11("span", { children: "Bread" })
          ] }),
          /* @__PURE__ */ jsxs11("label", { htmlFor: "salad", children: [
            /* @__PURE__ */ jsx11("input", { type: "radio", id: "salad", name: "radio", value: "salad", checked: radio === "salad", onChange: (e) => setRadio(e.target.value) }),
            /* @__PURE__ */ jsx11("span", { children: "Salad" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11("pre", { children: /* @__PURE__ */ jsx11("code", { children: `<form>
  <div className="row">
    <p><b>Wrapping</b></p>

    <label for="bread">
      <input 
        type="radio" 
        id="bread" 
        name="radio" 
        value="bread" />
      <span>Bread</span>
    </label>
    ...
  </div>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs11("section", { className: "row", children: [
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsxs11("p", { children: [
          "To handle the majority of edge cases gracefully it's best practice to place the checkbox or radio ",
          /* @__PURE__ */ jsx11("code", { children: "input" }),
          " element inside a ",
          /* @__PURE__ */ jsx11("code", { children: "label" }),
          " element. This will ensure vertical and horizontal alignment is consistent."
        ] }),
        /* @__PURE__ */ jsx11("p", { children: "You can also place the inputs and labels as siblings and alignment will still work, although multiline labels won't look right and clicking on the label won't automatically select the corresponding input." }),
        /* @__PURE__ */ jsxs11("form", { children: [
          /* @__PURE__ */ jsx11("p", { children: /* @__PURE__ */ jsx11("b", { children: "Extras" }) }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", name: "pickles", id: "pickles", value: "pickles" }),
            /* @__PURE__ */ jsx11("label", { htmlFor: "pickes", children: "Pickles" })
          ] }),
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx11("input", { type: "checkbox", name: "mustard", id: "mustard", value: "mustard" }),
            /* @__PURE__ */ jsx11("label", { htmlFor: "mustard", children: "Mustard" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11("pre", { children: /* @__PURE__ */ jsx11("code", { children: `<form>
  <div className="row">
    <div>
      <p><b>Extras</b></p>

      <div>
        <input 
          type="checkbox" 
          id="pickles" 
          name="pickles" 
          value="pickles" />
        <label for="pickles">
          Pickless
        </label>
      </div>
      ...
    </div>
    ...
  </div>
</form>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/forms/FormsGrouped.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FormsGrouped({ theme }) {
  return /* @__PURE__ */ jsxs12(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs12("section", { className: "row", children: [
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsxs12("p", { children: [
          "Simple forms, with a small number of inputs, can be grouped horizontally by applying the ",
          /* @__PURE__ */ jsx12("code", { children: "group" }),
          " class to a parent tag. In such a case, auxiliary elemnents such as input labels should not be used."
        ] }),
        /* @__PURE__ */ jsx12("form", { children: /* @__PURE__ */ jsxs12("div", { className: "group", children: [
          /* @__PURE__ */ jsx12("input", { id: "email", type: "email", placeholder: "Email" }),
          /* @__PURE__ */ jsx12("input", { type: "submit", value: "Subscribe" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("pre", { children: /* @__PURE__ */ jsx12("code", { children: `<form>
  <div class="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      type="submit" 
      value="Subscribe"/>
  </div>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs12("section", { className: "row", children: [
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx12("p", { children: "This can be used to great effect for search inputs." }),
        /* @__PURE__ */ jsx12("form", { children: /* @__PURE__ */ jsxs12("div", { className: "group", children: [
          /* @__PURE__ */ jsx12("button", { disabled: true, children: /* @__PURE__ */ jsxs12(
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
                /* @__PURE__ */ jsx12("path", { d: "m21 21-4.34-4.34" }),
                /* @__PURE__ */ jsx12("circle", { cx: "11", cy: "11", r: "8" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx12("input", { type: "search", id: "search", placeholder: "Search" }),
          /* @__PURE__ */ jsx12("input", { type: "submit", value: "Search" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("pre", { children: /* @__PURE__ */ jsx12("code", { children: `<form>
  <div class="group">
    <button disabled>
      <svg ...></svg>
    </button>
    <input 
      id="search" 
      type="search" 
      placeholder="Search"/>
    <input 
      type="submit" 
      value="Search"/>
  </div>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs12("section", { className: "row", children: [
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsxs12("p", { children: [
          "You can still wrap form elements inside a ",
          /* @__PURE__ */ jsx12("code", { children: "fieldset" }),
          " with an appropriate ",
          /* @__PURE__ */ jsx12("code", { children: "legend" }),
          " tag."
        ] }),
        /* @__PURE__ */ jsx12("form", { children: /* @__PURE__ */ jsxs12("fieldset", { children: [
          /* @__PURE__ */ jsx12("legend", { children: "Selection" }),
          /* @__PURE__ */ jsxs12("div", { className: "group", children: [
            /* @__PURE__ */ jsxs12("select", { id: "delivery", defaultValue: "fast", children: [
              /* @__PURE__ */ jsx12("option", { value: "fast", children: "Fast" }),
              /* @__PURE__ */ jsx12("option", { value: "standard", children: "Standard" })
            ] }),
            /* @__PURE__ */ jsx12("input", { type: "date", id: "delivery-date" }),
            /* @__PURE__ */ jsx12("input", { type: "submit", value: "Confirm" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("pre", { children: /* @__PURE__ */ jsx12("code", { children: `<form>
  <fieldset>
    <legend>
      Selection
    </legend>
    <div class="group">
      <select id="delivery">
        <option 
          value="fast" 
          selected>
          Fast
        </option>
        <option 
          value="standard">
          Standard
        </option>
      </select>
      <input 
        type="date" 
        id="delivery-date"/>
      <input 
        type="submit" 
        value="Confirm"/>
    </div>
  </fieldset>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs12("section", { className: "row", children: [
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx12("p", { children: "And you can group checkbox and radio in order to display them horizontally as well." }),
        /* @__PURE__ */ jsx12("form", { children: /* @__PURE__ */ jsxs12("div", { className: "group", children: [
          /* @__PURE__ */ jsxs12("label", { htmlFor: "ch_1", children: [
            /* @__PURE__ */ jsx12("input", { type: "checkbox", id: "ch_1", name: "check", value: "ch_1" }),
            /* @__PURE__ */ jsx12("span", { children: "Check #1" })
          ] }),
          /* @__PURE__ */ jsxs12("label", { htmlFor: "ch_2", children: [
            /* @__PURE__ */ jsx12("input", { type: "checkbox", id: "ch_2", name: "check", value: "ch_2" }),
            /* @__PURE__ */ jsx12("span", { children: "Check #2" })
          ] }),
          /* @__PURE__ */ jsxs12("label", { htmlFor: "ch_3", children: [
            /* @__PURE__ */ jsx12("input", { type: "checkbox", id: "ch_3", name: "check", value: "ch_3" }),
            /* @__PURE__ */ jsx12("span", { children: "Check #3" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("pre", { children: /* @__PURE__ */ jsx12("code", { children: `<form>
  <div class="group">
    <label for="ch_1">
      <input 
        type="checkbox" 
        id="ch_1" 
        name="check"
        value="ch_1" />
      <span>Check #1</span>
    </label>
    ...
</form>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/forms/FormsNormal.tsx
import { useState as useState3 } from "https://esm.sh/react@19.2.0";
import { jsx as jsx13, jsxs as jsxs13 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FormsNormal({ theme }) {
  const route = useRoute();
  const [volume, setVolume] = useState3(50);
  return /* @__PURE__ */ jsxs13(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs13("section", { className: "row", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsxs13("p", { children: [
          "All ",
          /* @__PURE__ */ jsx13("a", { href: "https://www.w3schools.com/html/html_forms.asp" /* HtmlFormsDocs */, target: "_blank", children: "HTML form elements" }),
          " are supported and can be easily arranged into a pleasantly looking and functional form. There is no JavaScript required and no extra CSS."
        ] }),
        /* @__PURE__ */ jsxs13("form", { children: [
          /* @__PURE__ */ jsxs13("label", { htmlFor: "email", children: [
            /* @__PURE__ */ jsx13("span", { children: "Email" }),
            /* @__PURE__ */ jsx13("input", { type: "email", placeholder: "Email Address", id: "email" })
          ] }),
          /* @__PURE__ */ jsxs13("label", { htmlFor: "password", children: [
            /* @__PURE__ */ jsx13("span", { children: "Password" }),
            /* @__PURE__ */ jsx13("input", { type: "password", id: "password", placeholder: "Password" })
          ] }),
          /* @__PURE__ */ jsx13("input", { type: "submit", value: "Login" }),
          /* @__PURE__ */ jsxs13("p", { children: [
            "Don't have an account? ",
            /* @__PURE__ */ jsx13("a", { href: "", children: "Sign up" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("pre", { children: /* @__PURE__ */ jsx13("code", { children: `<form>
  <fieldset>
    <legend>
      Login
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        name="email"
        placeholder="..." 
        id="email"/>
    </label>

    <label for="password">
      <span>
        Password
      </span>
      <input 
        type="password" 
        name="password"
        id="password" 
        placeholder="..."/>  
    </label>
    
    <input 
      type="submit" 
      value="Login"/>

    <p>
      Don't have an account?
      <a href="...">
        Sign up
      </a>.
    </p>
  </fieldset>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs13("section", { className: "row", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx13("p", { children: "Textareas are supported as well and by default they expand to fit the available horizontal space." }),
        /* @__PURE__ */ jsxs13("form", { children: [
          /* @__PURE__ */ jsx13("textarea", { rows: 4, id: "textarea", placeholder: "Write your comments..." }),
          /* @__PURE__ */ jsx13("input", { type: "submit", value: "Comment" })
        ] })
      ] }),
      /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("pre", { children: /* @__PURE__ */ jsx13("code", { children: `<form>
  <textarea 
    rows="4" 
    id="textarea" 
    name="textarea"
    placeholder="...">
  </textarea>
  <input 
    type="submit" 
    value="Comment"/>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs13("section", { className: "row", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx13("p", { children: "Ranged inputs are also supported." }),
        /* @__PURE__ */ jsxs13("form", { children: [
          /* @__PURE__ */ jsxs13("label", { htmlFor: "volume", children: [
            /* @__PURE__ */ jsx13("span", { children: "Volume (range)" }),
            /* @__PURE__ */ jsx13("input", { type: "range", id: "volume", name: "volume", min: 0, max: 100, step: 1, value: volume, onChange: (e) => setVolume(Number(e.target.value)) })
          ] }),
          /* @__PURE__ */ jsx13("input", { type: "submit", value: "Tune" })
        ] })
      ] }),
      /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("pre", { children: /* @__PURE__ */ jsx13("code", { children: `<form>
  <label for="volume">
    <span>
      Volume (range)
    </span>
    <input 
      type="range" 
      id="volume" 
      name="volume" 
      min="0" 
      max="100" 
      step="1" 
      value="50"/>
  </label>
  <input 
    type="submit" 
    value="Tune"/>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsx13("section", { children: /* @__PURE__ */ jsxs13("div", { className: "row", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsxs13("p", { children: [
          "If you want your forms to stand out more, you can wrap the inputs inside a ",
          /* @__PURE__ */ jsx13("code", { children: "fieldset" }),
          " and assign a ",
          /* @__PURE__ */ jsx13("code", { children: "legend" }),
          "."
        ] }),
        /* @__PURE__ */ jsx13("form", { children: /* @__PURE__ */ jsxs13("fieldset", { children: [
          /* @__PURE__ */ jsx13("legend", { children: "Details" }),
          /* @__PURE__ */ jsxs13("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsxs13("label", { htmlFor: "first-name", children: [
              /* @__PURE__ */ jsx13("span", { children: "First name" }),
              /* @__PURE__ */ jsx13("input", { type: "text", id: "first-name", placeholder: "First name" })
            ] }) }),
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsxs13("label", { htmlFor: "last-name", children: [
              /* @__PURE__ */ jsx13("span", { children: "Last name" }),
              /* @__PURE__ */ jsx13("input", { type: "text", id: "last-name", placeholder: "Last name" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs13("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsxs13("label", { htmlFor: "delivery", children: [
              /* @__PURE__ */ jsx13("span", { children: "Delivery Time" }),
              /* @__PURE__ */ jsxs13("select", { id: "delivery", defaultValue: "mornibgt", children: [
                /* @__PURE__ */ jsx13("option", { value: "morning", children: "Morning" }),
                /* @__PURE__ */ jsx13("option", { value: "evening", children: "Evening" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsxs13("label", { htmlFor: "delivery-date", children: [
              /* @__PURE__ */ jsx13("span", { children: "Delivery Date" }),
              /* @__PURE__ */ jsx13("input", { type: "date", id: "delivery-date" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs13("blockquote", { className: "success", children: [
            "Order total is ",
            /* @__PURE__ */ jsx13("b", { children: "$33.59" })
          ] }),
          /* @__PURE__ */ jsxs13("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("input", { type: "reset", className: "error", value: "Reset" }) }),
            /* @__PURE__ */ jsx13("div", { className: "gap" }),
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("input", { type: "submit", value: "Confirm" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx13("p", { children: "You can make forms as simple or as complex as you want." }),
        /* @__PURE__ */ jsxs13("p", { children: [
          "In the example above we're separating inputs into two separate ",
          /* @__PURE__ */ jsx13("a", { href: RouteMaster.doc("cols" /* Columns */, theme, route), children: "columns" }),
          ", so we can pack more information in the same space."
        ] }),
        /* @__PURE__ */ jsxs13("p", { children: [
          "We're also using ",
          /* @__PURE__ */ jsx13("a", { href: RouteMaster.doc("blockquotes" /* Blockquotes */, theme, route), children: "blockquotes" }),
          " to highlight important information."
        ] }),
        /* @__PURE__ */ jsxs13("p", { children: [
          "We're using both ",
          /* @__PURE__ */ jsx13("code", { children: "submit" }),
          " and ",
          /* @__PURE__ */ jsx13("code", { children: "reset" }),
          " type inputs. Please note these inputs are styled to look exactly like ",
          /* @__PURE__ */ jsx13("a", { href: RouteMaster.doc("blockquotes" /* Blockquotes */, theme, route), children: "buttons" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13("pre", { children: /* @__PURE__ */ jsx13("code", { children: `<form>
  <fieldset>
    <legend>
      Order details
    </legend>

    <!-- name row -->
    <div 
      class="row disable-mobile">
      <div>
        <label 
          for="first-name">
          <span>
            First name
          </span>
          <input 
            type="text" 
            id="first-name" 
            placeholder="..."/>
        </label>
      </div>
      <div>
        <label 
          for="last-name">
          <span>
            Last name
          </span>
          <input 
            type="text" 
            id="last-name" 
            placeholder="..."/>
        </label>
      </div>
    </div>

    <!-- other rows --> 
    <!-- .... -->

    <blockquote class="success">
      Order total is 
      <b>$33.59</b>
    </blockquote>

    <div 
      class="row disable-mobile">
      <div>
        <input 
          type="reset" 
          class="error" 
          value="Reset"//>
      </div>
      <div></div>
      <div>
        <input 
          type="submit" 
          value="Confirm"/> 
      </div>
    </div>
  </fieldset>
</form>` }) }) })
    ] }) })
  ] });
}

// pages/pages/docs/forms/FormsValidation.tsx
import { useState as useState4 } from "https://esm.sh/react@19.2.0";
import { jsx as jsx14, jsxs as jsxs14 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FormsValidation({ theme }) {
  const [name, setName] = useState4("a");
  const [email, setEmail] = useState4("");
  const [comment, setComment] = useState4("");
  return /* @__PURE__ */ jsxs14(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs14("section", { className: "row", children: [
      /* @__PURE__ */ jsxs14("div", { children: [
        /* @__PURE__ */ jsxs14("p", { children: [
          "Helper styles for form validation come out of the box for any ",
          /* @__PURE__ */ jsx14("code", { children: "input" }),
          " and ",
          /* @__PURE__ */ jsx14("code", { children: "textarea" }),
          " elements marked as ",
          /* @__PURE__ */ jsx14("b", { children: "required" }),
          "."
        ] }),
        /* @__PURE__ */ jsx14("p", { children: "Error styles apply to an input if either they start out as invalid or if the user types something, switches focus, and leaves the input invalid." }),
        /* @__PURE__ */ jsx14("p", { children: "Empty inputs do not display error styles." }),
        /* @__PURE__ */ jsxs14("p", { children: [
          "Adjacent text elements with the ",
          /* @__PURE__ */ jsx14("code", { children: "error" }),
          " class can also have error styles applied, so as to act as guides for the user."
        ] }),
        /* @__PURE__ */ jsx14("form", { action: "", method: "post", children: /* @__PURE__ */ jsxs14("fieldset", { children: [
          /* @__PURE__ */ jsx14("legend", { children: "Input" }),
          /* @__PURE__ */ jsxs14("label", { htmlFor: "name", children: [
            /* @__PURE__ */ jsx14("span", { children: "Name" }),
            /* @__PURE__ */ jsx14(
              "input",
              {
                id: "name",
                name: "name",
                required: true,
                placeholder: "Name...",
                pattern: ".{4,100}",
                title: "Name must be at least 4 characters",
                value: name,
                onChange: (e) => setName(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx14("div", { className: "error", children: /* @__PURE__ */ jsx14("small", { className: "error", children: "Enter a name between 4 and 100 characters" }) })
          ] }),
          /* @__PURE__ */ jsxs14("label", { htmlFor: "email", children: [
            /* @__PURE__ */ jsx14("span", { children: "Email" }),
            /* @__PURE__ */ jsx14(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                placeholder: "Email...",
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs14("label", { htmlFor: "comment", children: [
            /* @__PURE__ */ jsx14("span", { children: "Comment" }),
            /* @__PURE__ */ jsx14(
              "textarea",
              {
                rows: 5,
                id: "comment",
                name: "comment",
                placeholder: "Enter your comment",
                required: true,
                minLength: 10,
                maxLength: 500,
                value: comment,
                onChange: (e) => setComment(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx14("div", { className: "error", children: /* @__PURE__ */ jsx14("small", { children: "Enter a meaningful comment" }) })
          ] }),
          /* @__PURE__ */ jsx14("input", { type: "submit", value: "Submit" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsx14("pre", { children: /* @__PURE__ */ jsx14("code", { children: `<form action="/" method="post">
  <fieldset>
    <legend>
      Input
    </legend>

    <label for="name">
      <span>
        Name
      </span>
      <input
        id="name"
        name="name"
        required
        placeholder="Name..."
        pattern=".{4,100}"
        title="Name ..."
        value="a"/>
      <div className="error">
        <small>
          Enter ...
        </small>
      </div>
    </label>
    
    <label for="email">
      <span>
        Email
      </span>
      <input 
        id="email" 
        name="email" 
        type="email" 
        required 
        placeholder="Email..."/>
    </label>

    <label for="comment">
      <span>
        Comment
      </span>
      <textarea
        rows="5"
        id="comment"
        name="comment"
        placeholder="..."
        required
        minLength="10"
        maxLength="500">
      </textarea>
      <div className="error">
        <small>
          Enter ...
        </small>
      </div>
    </label>
    
    <input 
      type="submit" 
      value="Submit"/>
  </fieldset>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs14("section", { className: "row", children: [
      /* @__PURE__ */ jsxs14("div", { children: [
        /* @__PURE__ */ jsxs14("p", { children: [
          "Inputs that present a more limited range of options to a user, such as ",
          /* @__PURE__ */ jsx14("code", { children: "select" }),
          ", ",
          /* @__PURE__ */ jsx14("code", { children: "radio" }),
          " and ",
          /* @__PURE__ */ jsx14("code", { children: "check" }),
          " buttons, won't display a error styles but can be set as required."
        ] }),
        /* @__PURE__ */ jsx14("form", { children: /* @__PURE__ */ jsxs14("fieldset", { children: [
          /* @__PURE__ */ jsx14("legend", { children: "Countries" }),
          /* @__PURE__ */ jsxs14("select", { id: "country", name: "country", required: true, children: [
            /* @__PURE__ */ jsx14("option", { value: "", disabled: true, selected: true, hidden: true, children: "Please select a country" }),
            /* @__PURE__ */ jsx14("option", { value: "uk", children: "United Kingdom" }),
            /* @__PURE__ */ jsx14("option", { value: "fr", children: "France" }),
            /* @__PURE__ */ jsx14("option", { value: "de", children: "Germany" })
          ] }),
          /* @__PURE__ */ jsxs14("label", { children: [
            /* @__PURE__ */ jsx14("input", { type: "checkbox", name: "terms", required: true }),
            "I accept the terms and conditions"
          ] }),
          /* @__PURE__ */ jsx14("input", { type: "submit", value: "Submit" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsx14("pre", { children: /* @__PURE__ */ jsx14("code", { children: `<form>
  <fieldset>
    <legend>
      Countries
    </legent>
    
    <select 
      id="country" 
      name="country" 
      required>
      <option 
        value="" 
        disabled 
        selected 
        hidden>
        Please select 
        a country
      </option>

      <option value="uk">
        United Kingdom
      </option>
      <option value="fr">
        France
      </option>
      <option value="de">
        Germany
      </option>
    </select>

    <label>
      <input 
        type="checkbox" 
        name="terms" 
        required/>
      I accept the 
      terms and conditions
    </label>

    <input 
      type="submit" 
      value="Submit"/>
  </fieldset>
</form>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/dialogs/Modal.tsx
import { useRef } from "https://esm.sh/react@19.2.0";
import { jsx as jsx15, jsxs as jsxs15 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Modal({ theme }) {
  const dialogRef = useRef(null);
  const openDialog = () => dialogRef.current?.showModal();
  return /* @__PURE__ */ jsx15(DocLayout, { theme, children: /* @__PURE__ */ jsxs15("section", { className: "row", children: [
    /* @__PURE__ */ jsxs15("div", { children: [
      /* @__PURE__ */ jsx15("p", { children: "Native browser dialogs are supported out of the box and are styled as modals. Child elements are styled the same as any other element." }),
      /* @__PURE__ */ jsx15("p", { children: "Click the button below to open the modal dialog." }),
      /* @__PURE__ */ jsx15("p", { children: /* @__PURE__ */ jsx15("button", { onClick: openDialog, children: "Open modal" }) }),
      /* @__PURE__ */ jsx15(DialogModal, { ref: dialogRef })
    ] }),
    /* @__PURE__ */ jsx15("div", { children: /* @__PURE__ */ jsx15("pre", { children: /* @__PURE__ */ jsx15("code", { children: `<button id="openBtn">Open modal</button>

<dialog id="modal">
  <h2>Dialog</h2>
  <p>Lorem ipsum...</p>

  <form method="dialog">
    <div class="group">
      <div class="row">
        <button 
          value="cancel" 
          class="error" 
          formNoValidate>
          Cancel
        </button>
        <div class="gap">
        </div>
        <button value="confirm">
          Confirm
        </button>
      </div>
    </div>
  </form>
</dialog>
` }) }) })
  ] }) });
}
function DialogModal(props) {
  return /* @__PURE__ */ jsxs15("dialog", { ref: props.ref, children: [
    /* @__PURE__ */ jsx15("h2", { children: "Dialog" }),
    /* @__PURE__ */ jsx15("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ jsx15("form", { method: "dialog", children: /* @__PURE__ */ jsx15("div", { className: "group", children: /* @__PURE__ */ jsxs15("div", { className: "row", children: [
      /* @__PURE__ */ jsx15("button", { className: "error", value: "cancel", formNoValidate: true, children: "Cancel" }),
      /* @__PURE__ */ jsx15("div", { className: "gap" }),
      /* @__PURE__ */ jsx15("button", { value: "confirm", children: "Confirm" })
    ] }) }) })
  ] });
}

// pages/pages/docs/navigation/Navigation.tsx
import { jsx as jsx16, jsxs as jsxs16 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Navigation({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs16(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs16("section", { className: "row", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsxs16("p", { children: [
          "The most basic navigation element is created by placing an unordered list within a ",
          /* @__PURE__ */ jsx16("code", { children: "nav" }),
          " element. It's suitable as the top level navigation for a document, where each item can be a link to a different page."
        ] }),
        /* @__PURE__ */ jsx16("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Item 1" }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Item 2" }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Item 3" }) })
        ] }) }),
        /* @__PURE__ */ jsx16("p", { children: "Links may contain icons to enhance the look and feel of the navigation bar as well as collapsible items." }),
        /* @__PURE__ */ jsx16("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("a", { href: "", children: [
            /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx16("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
              /* @__PURE__ */ jsx16("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
            ] }),
            /* @__PURE__ */ jsx16("span", { children: "Home" })
          ] }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("a", { href: "", children: [
            /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx16("path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }),
              /* @__PURE__ */ jsx16("path", { d: "m18 15 4-4" }),
              /* @__PURE__ */ jsx16("path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" })
            ] }),
            /* @__PURE__ */ jsx16("span", { children: "Docs" })
          ] }) }),
          /* @__PURE__ */ jsxs16("li", { children: [
            /* @__PURE__ */ jsxs16("a", { href: "", children: [
              /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right", children: [
                /* @__PURE__ */ jsx16("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ jsx16("path", { d: "m10 8 4 4-4 4" })
              ] }),
              /* @__PURE__ */ jsx16("span", { children: "More" })
            ] }),
            /* @__PURE__ */ jsxs16("ul", { children: [
              /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Option 1" }) }),
              /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Option 2" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs16("p", { children: [
          "Navigtion items may use the ",
          /* @__PURE__ */ jsx16("code", { children: "aria-selected" }),
          " attribute to denote they are selected."
        ] }),
        /* @__PURE__ */ jsx16("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { "aria-selected": true, children: /* @__PURE__ */ jsx16("a", { href: "", children: "Selected" }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Unselected" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16("pre", { children: /* @__PURE__ */ jsx16("code", { children: `<header>
  <nav>
    <ul>
      <!-- simple nav item -->
      <li>
        <a href="...">
          Item 1
        </a>
      </li>
      <!-- selected -->
      <li aria-selected>
        <a href="...">
          Item 2
        </a>
      </li>
      <!-- with icon -->
      <li>
        <a href="...">
          <svg ...></svg>
          <span>
            Item 3
          </span>
        </a>
        <!-- collapsible -->
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          </li>
          ...
        </ul>
      </li>
    </ul>
  </nav>
</header>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs16("section", { className: "row", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsxs16("p", { children: [
          "You can use other elements such as ",
          /* @__PURE__ */ jsx16("code", { children: "select" }),
          ", ",
          /* @__PURE__ */ jsx16("code", { children: "input" }),
          ", ",
          /* @__PURE__ */ jsx16("code", { children: "img" }),
          ", etc to add more functionality to the navigation bar."
        ] }),
        /* @__PURE__ */ jsx16("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("a", { href: "", children: [
            /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx16("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
              /* @__PURE__ */ jsx16("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
            ] }),
            /* @__PURE__ */ jsx16("span", { children: "Home" })
          ] }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("select", { id: "selector", defaultValue: "opt-1", style: { minWidth: "100px" }, children: [
            /* @__PURE__ */ jsx16("option", { value: "opt-1", children: "Val 1" }),
            /* @__PURE__ */ jsx16("option", { value: "opt-2", children: "Val 2" }),
            /* @__PURE__ */ jsx16("option", { value: "opt-3", children: "Val 3" })
          ] }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("input", { type: "search", placeholder: "Search ...", id: "search" }) })
        ] }) }),
        /* @__PURE__ */ jsx16("br", {})
      ] }),
      /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16("pre", { children: /* @__PURE__ */ jsx16("code", { children: `<li>
  <img 
    height="24" 
    src="..." 
    alt="logo"/>
</li>
<li>
  <select>...</select>
</li>
<li>
  <input 
    type="search" 
    placeholder="Search..."/>
</li>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs16("section", { className: "row", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsxs16("p", { children: [
          "Navigation can be split into a left and a right section by placing a ",
          /* @__PURE__ */ jsx16("code", { children: "gap" }),
          " list item."
        ] }),
        /* @__PURE__ */ jsx16("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Home" }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: "Menu" }) }),
          /* @__PURE__ */ jsx16("li", { className: "gap" }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: /* @__PURE__ */ jsx16("button", { children: "Download" }) }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: /* @__PURE__ */ jsx16("button", { type: "reset", children: /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx16("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
            /* @__PURE__ */ jsx16("path", { d: "M9 18c-4.51 2-5-2-7-2" })
          ] }) }) }) })
        ] }) }),
        /* @__PURE__ */ jsx16("br", {})
      ] }),
      /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16("pre", { children: /* @__PURE__ */ jsx16("code", { children: `<!-- left side -->
<li>...</li>
<li>...</li>

<!-- gap -->
<li class="gap"></li>

<!-- right side -->
<li>...</li>
<li>...</li>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs16("section", { className: "row", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsxs16("p", { children: [
          "Navigation can be combined with the ",
          /* @__PURE__ */ jsx16("code", { children: "card" }),
          " class to create a more striking display."
        ] }),
        /* @__PURE__ */ jsx16("nav", { className: "card disable-mobile", children: /* @__PURE__ */ jsxs16("ul", { children: [
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("a", { href: "", children: [
            /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx16("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
              /* @__PURE__ */ jsx16("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
            ] }),
            /* @__PURE__ */ jsx16("span", { children: "Home" })
          ] }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs16("a", { href: "", children: [
            /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx16("path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }),
              /* @__PURE__ */ jsx16("path", { d: "m18 15 4-4" }),
              /* @__PURE__ */ jsx16("path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" })
            ] }),
            /* @__PURE__ */ jsx16("span", { children: "Docs" })
          ] }) }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("input", { type: "search", placeholder: "Search..." }) }),
          /* @__PURE__ */ jsx16("li", { className: "gap" }),
          /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16("a", { href: "", children: /* @__PURE__ */ jsx16("button", { type: "reset", children: /* @__PURE__ */ jsxs16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx16("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
            /* @__PURE__ */ jsx16("path", { d: "M9 18c-4.51 2-5-2-7-2" })
          ] }) }) }) })
        ] }) }),
        /* @__PURE__ */ jsx16("br", {})
      ] }),
      /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16("pre", { children: /* @__PURE__ */ jsx16("code", { children: `<nav class="card">
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    <li class="gap">...</li>
    <li>...</li>
  </ul>
</nav>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs16("section", { className: "row", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsx16("p", { children: "Finally, the navigation bar is responsive. On large displays it expands horizontally and on smaller displays it switches to a vertical layout." }),
        /* @__PURE__ */ jsxs16("figure", { children: [
          /* @__PURE__ */ jsx16("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-nav" /* MobileNav */, theme, route) }),
          /* @__PURE__ */ jsx16("figcaption", { children: "Showcase of navigation on a smaller device" })
        ] })
      ] }),
      /* @__PURE__ */ jsx16("div", { children: /* @__PURE__ */ jsx16("pre", { children: /* @__PURE__ */ jsx16("code", { children: `<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>Docs</span>
        </a>
      </li>
      <li>
        <a href="...">
          <svg ...></svg>
          <span>More</span>
        </a>
        <ul>
          <li>
            <a href="...">
              Option 1
            </a>
          <li>
          <li>
            <a href="...">
              Option 2
            </a>
          <li>
        </ul>
      </li>
    </ul>
  </nav>
</header>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/navigation/Tabs.tsx
import { useState as useState5 } from "https://esm.sh/react@19.2.0";
import { Fragment, jsx as jsx17, jsxs as jsxs17 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Tab1() {
  return /* @__PURE__ */ jsxs17(Fragment, { children: [
    /* @__PURE__ */ jsx17("h4", { children: "Home" }),
    /* @__PURE__ */ jsx17("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ jsx17("p", { children: /* @__PURE__ */ jsx17("button", { children: "Edit" }) })
  ] });
}
function Tab2() {
  return /* @__PURE__ */ jsxs17(Fragment, { children: [
    /* @__PURE__ */ jsx17("h4", { children: "Projects" }),
    /* @__PURE__ */ jsx17("p", { children: /* @__PURE__ */ jsxs17("ul", { children: [
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17("a", { href: "", children: "user123/test" }) }),
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17("a", { href: "", children: "user123/notes" }) }),
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17("a", { href: "", children: "user_451/financials" }) })
    ] }) })
  ] });
}
function Tab3() {
  return /* @__PURE__ */ jsxs17(Fragment, { children: [
    /* @__PURE__ */ jsx17("h4", { children: "Users" }),
    /* @__PURE__ */ jsx17("div", { className: "group", children: /* @__PURE__ */ jsxs17("div", { className: "row", children: [
      /* @__PURE__ */ jsx17("img", { className: "circle", width: "36", height: "36", src: "https://picsum.photos/id/16/80/80", alt: "profile pic" }),
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx17("b", { children: "user123" }),
        /* @__PURE__ */ jsx17("br", {}),
        /* @__PURE__ */ jsx17("span", { children: "active" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx17("br", {}),
    /* @__PURE__ */ jsx17("div", { className: "group", children: /* @__PURE__ */ jsxs17("div", { className: "row", children: [
      /* @__PURE__ */ jsx17("img", { className: "circle", width: "36", height: "36", src: "https://picsum.photos/id/16/40/40", alt: "profile pic" }),
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx17("b", { children: "user_451" }),
        /* @__PURE__ */ jsx17("br", {}),
        /* @__PURE__ */ jsx17("span", { children: "active" })
      ] })
    ] }) })
  ] });
}
function Tabs({ theme }) {
  const route = useRoute();
  const [selected, setSelected] = useState5("tab-1");
  return /* @__PURE__ */ jsxs17(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs17("section", { className: "row", children: [
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx17("p", { children: "Standard navigation is suitable for switching between pages, meaning independent pieces of content on your website." }),
        /* @__PURE__ */ jsxs17("p", { children: [
          "Tabbed navigation is suitable for switching between various bits of content within a particular page. It can be created by using an ordered list inside a ",
          /* @__PURE__ */ jsx17("code", { children: "nav" }),
          " element."
        ] }),
        /* @__PURE__ */ jsx17("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs17("ol", { children: [
          /* @__PURE__ */ jsx17("li", { "aria-selected": selected === "tab-1", children: /* @__PURE__ */ jsxs17("a", { onClick: () => setSelected("tab-1"), children: [
            /* @__PURE__ */ jsxs17("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx17("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
              /* @__PURE__ */ jsx17("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
            ] }),
            /* @__PURE__ */ jsx17("span", { children: "Home" })
          ] }) }),
          /* @__PURE__ */ jsx17("li", { "aria-selected": selected === "tab-2", children: /* @__PURE__ */ jsxs17("a", { onClick: () => setSelected("tab-2"), children: [
            /* @__PURE__ */ jsxs17("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx17("path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }),
              /* @__PURE__ */ jsx17("circle", { cx: "12", cy: "13", r: "1" })
            ] }),
            /* @__PURE__ */ jsx17("span", { children: "Projects" })
          ] }) }),
          /* @__PURE__ */ jsx17("li", { "aria-selected": selected === "tab-3", children: /* @__PURE__ */ jsxs17("a", { onClick: () => setSelected("tab-3"), children: [
            /* @__PURE__ */ jsxs17("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx17("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
              /* @__PURE__ */ jsx17("circle", { cx: "12", cy: "7", r: "4" })
            ] }),
            /* @__PURE__ */ jsx17("span", { children: "Users" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx17("br", {}),
        /* @__PURE__ */ jsxs17("div", { className: "card", children: [
          selected === "tab-1" ? /* @__PURE__ */ jsx17(Tab1, {}) : null,
          selected === "tab-2" ? /* @__PURE__ */ jsx17(Tab2, {}) : null,
          selected === "tab-3" ? /* @__PURE__ */ jsx17(Tab3, {}) : null
        ] })
      ] }),
      /* @__PURE__ */ jsx17("div", { children: /* @__PURE__ */ jsx17("pre", { children: /* @__PURE__ */ jsx17("code", { children: `<main>
  <nav>
    <ol>
      <li>
        <a onclick="...">
          <svg ...></svg>
          <span>
            Home
          </span>
        </a>
      </li>
      <li>...</li>
      <li>...</li>
    </ol>
  </nav>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</main>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs17("section", { className: "row", children: [
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx17("p", { children: "It's also responsive. On larger screens it will expand horizontally, whilst on smaller screens (or smaller containers in general) it will expand vertically." }),
        /* @__PURE__ */ jsxs17("figure", { children: [
          /* @__PURE__ */ jsx17("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-tabs-nav" /* MobileTabsNav */, theme, route) }),
          /* @__PURE__ */ jsx17("figcaption", { children: "Showcase of tabbed navigation in a smaller container or device." })
        ] })
      ] }),
      /* @__PURE__ */ jsx17("div", { children: /* @__PURE__ */ jsx17("pre", { children: /* @__PURE__ */ jsx17("code", { children: `<div className="row">
  <aside>
    <nav>
      <ol>
        <li>
          <a onclick="...">
            <svg ...></svg>
            <span>
              Home
            </span>
          </a>
        </li>
        <li>...</li>
        <li>...</li>
      </ol>
    </nav>
  </aside>
  <div>
    <div id="content-1">
      ...
    </div>
    <div id="content-2">
      ...
    </div>
    <div id="content-3">
      ...
    </div>
  </div>
</div>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/navigation/Menu.tsx
import { jsx as jsx18, jsxs as jsxs18 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Menu({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs18(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs18("section", { className: "row", children: [
      /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsx18("p", { children: "Menu type navigation can be used both as the top level navigation as well as part of various page elements." }),
        /* @__PURE__ */ jsx18("p", { children: "It's best suited when each navigation item is paired with a specific icon." }),
        /* @__PURE__ */ jsxs18("menu", { className: "disable-mobile", children: [
          /* @__PURE__ */ jsx18("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs18("a", { href: "", children: [
            /* @__PURE__ */ jsxs18("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx18("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
              /* @__PURE__ */ jsx18("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
            ] }),
            /* @__PURE__ */ jsx18("span", { children: "Home" })
          ] }) }),
          /* @__PURE__ */ jsx18("li", { children: /* @__PURE__ */ jsxs18("a", { href: "", children: [
            /* @__PURE__ */ jsxs18("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx18("path", { d: "M4 11a9 9 0 0 1 9 9" }),
              /* @__PURE__ */ jsx18("path", { d: "M4 4a16 16 0 0 1 16 16" }),
              /* @__PURE__ */ jsx18("circle", { cx: "5", cy: "19", r: "1" })
            ] }),
            /* @__PURE__ */ jsx18("span", { children: "Latest" })
          ] }) }),
          /* @__PURE__ */ jsx18("li", { children: /* @__PURE__ */ jsxs18("a", { href: "", children: [
            /* @__PURE__ */ jsxs18("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
              /* @__PURE__ */ jsx18("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }),
              /* @__PURE__ */ jsx18("path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }),
              /* @__PURE__ */ jsx18("circle", { cx: "10", cy: "7", r: "4" })
            ] }),
            /* @__PURE__ */ jsx18("span", { children: "Profile" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18("pre", { children: /* @__PURE__ */ jsx18("code", { children: `<main>
  <menu>
    <li aria-selected>
      <a href="...">
        <svg .../>
        <span>Home</span>
      </a>
    </li>
    ...
  </menu>
</main>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs18("section", { className: "row", children: [
      /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsxs18("p", { children: [
          "More importantly, on tablets and mobile devices, the top level navigation (housed inside a ",
          /* @__PURE__ */ jsx18("code", { children: "header" }),
          " element) will automatically move from the top of the page to the bottom, mimicking the classic mobile navigation."
        ] }),
        /* @__PURE__ */ jsxs18("figure", { children: [
          /* @__PURE__ */ jsx18("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-menu" /* MobileMenu */, theme, route) }),
          /* @__PURE__ */ jsx18("figcaption", { children: "Showcase of menu navigation on smaller device" })
        ] })
      ] }),
      /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18("pre", { children: /* @__PURE__ */ jsx18("code", { children: `<header>
  <menu>
    ...
  </menu>
</header>` }) }) })
    ] })
  ] });
}

// pages/pages/showcase/DekstopMenu.tsx
import { Fragment as Fragment2, jsx as jsx19, jsxs as jsxs19 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function DesktopMenu() {
  return /* @__PURE__ */ jsxs19(Fragment2, { children: [
    /* @__PURE__ */ jsx19("header", { style: { maxWidth: "600px" }, className: "disable-mobile", children: /* @__PURE__ */ jsxs19("menu", { children: [
      /* @__PURE__ */ jsx19("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs19("a", { href: "", children: [
        /* @__PURE__ */ jsxs19("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx19("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx19("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx19("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs19("a", { href: "", children: [
        /* @__PURE__ */ jsxs19("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx19("path", { d: "M4 11a9 9 0 0 1 9 9" }),
          /* @__PURE__ */ jsx19("path", { d: "M4 4a16 16 0 0 1 16 16" }),
          /* @__PURE__ */ jsx19("circle", { cx: "5", cy: "19", r: "1" })
        ] }),
        /* @__PURE__ */ jsx19("span", { children: "Latest" })
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs19("a", { href: "", children: [
        /* @__PURE__ */ jsxs19("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx19("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ jsx19("path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }),
          /* @__PURE__ */ jsx19("circle", { cx: "10", cy: "7", r: "4" })
        ] }),
        /* @__PURE__ */ jsx19("span", { children: "Profile" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx19("main", { children: /* @__PURE__ */ jsxs19("article", { children: [
      /* @__PURE__ */ jsx19("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx19("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }) })
  ] });
}

// pages/pages/showcase/LayoutHeaderNav.tsx
import { Fragment as Fragment3, jsx as jsx20, jsxs as jsxs20 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutHeaderNav() {
  return /* @__PURE__ */ jsxs20(Fragment3, { children: [
    /* @__PURE__ */ jsx20("header", { children: /* @__PURE__ */ jsx20("nav", { children: /* @__PURE__ */ jsxs20("ul", { children: [
      /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20("a", { href: "", children: "Home" }) }),
      /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsx20("a", { href: "", children: "About" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs20("main", { children: [
      /* @__PURE__ */ jsx20("h1", { children: "Title" }),
      /* @__PURE__ */ jsx20("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] })
  ] });
}

// pages/pages/showcase/LayoutHeaderComplex.tsx
import { Fragment as Fragment4, jsx as jsx21, jsxs as jsxs21 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutHeaderComplex() {
  return /* @__PURE__ */ jsxs21(Fragment4, { children: [
    /* @__PURE__ */ jsxs21("header", { children: [
      /* @__PURE__ */ jsx21("nav", { children: /* @__PURE__ */ jsx21("ul", { children: /* @__PURE__ */ jsx21("li", { children: /* @__PURE__ */ jsx21("a", { href: "", children: "Home" }) }) }) }),
      /* @__PURE__ */ jsxs21("div", { className: "align-center", style: { backgroundColor: "light-dark(var(--color-secondary-muted), var(--color-accent-faint))" }, children: [
        /* @__PURE__ */ jsx21("h2", { children: "My blog" }),
        /* @__PURE__ */ jsx21("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
        /* @__PURE__ */ jsx21("form", { children: /* @__PURE__ */ jsxs21("div", { className: "group", children: [
          /* @__PURE__ */ jsx21("input", { type: "email", placeholder: "name@example.com" }),
          /* @__PURE__ */ jsx21("input", { type: "submit", value: "Subscribe" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs21("main", { children: [
      /* @__PURE__ */ jsx21("h1", { children: "Title" }),
      /* @__PURE__ */ jsx21("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] })
  ] });
}

// pages/pages/showcase/MobileColumns.tsx
import { Fragment as Fragment5, jsx as jsx22, jsxs as jsxs22 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileColumns() {
  return /* @__PURE__ */ jsx22(Fragment5, { children: /* @__PURE__ */ jsx22("main", { style: { maxWidth: "600px", marginInline: "auto" }, children: /* @__PURE__ */ jsx22("article", { children: /* @__PURE__ */ jsxs22("div", { className: "row", children: [
    /* @__PURE__ */ jsx22("div", { children: /* @__PURE__ */ jsx22("p", { children: /* @__PURE__ */ jsx22("code", { style: { width: "100%" }, children: "col" }) }) }),
    /* @__PURE__ */ jsx22("div", { children: /* @__PURE__ */ jsx22("p", { children: /* @__PURE__ */ jsx22("code", { style: { width: "100%" }, children: "col" }) }) })
  ] }) }) }) });
}

// pages/pages/showcase/MobileMenu.tsx
import { Fragment as Fragment6, jsx as jsx23, jsxs as jsxs23 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileMenu() {
  return /* @__PURE__ */ jsxs23(Fragment6, { children: [
    /* @__PURE__ */ jsx23("header", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsxs23("menu", { children: [
      /* @__PURE__ */ jsx23("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs23("a", { href: "", children: [
        /* @__PURE__ */ jsxs23("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx23("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx23("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx23("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx23("li", { children: /* @__PURE__ */ jsxs23("a", { href: "", children: [
        /* @__PURE__ */ jsxs23("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx23("path", { d: "M4 11a9 9 0 0 1 9 9" }),
          /* @__PURE__ */ jsx23("path", { d: "M4 4a16 16 0 0 1 16 16" }),
          /* @__PURE__ */ jsx23("circle", { cx: "5", cy: "19", r: "1" })
        ] }),
        /* @__PURE__ */ jsx23("span", { children: "Latest" })
      ] }) }),
      /* @__PURE__ */ jsx23("li", { children: /* @__PURE__ */ jsxs23("a", { href: "", children: [
        /* @__PURE__ */ jsxs23("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx23("path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ jsx23("path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }),
          /* @__PURE__ */ jsx23("circle", { cx: "10", cy: "7", r: "4" })
        ] }),
        /* @__PURE__ */ jsx23("span", { children: "Profile" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx23("main", { children: /* @__PURE__ */ jsxs23("article", { children: [
      /* @__PURE__ */ jsx23("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx23("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }) })
  ] });
}

// pages/pages/showcase/MobileNav.tsx
import { Fragment as Fragment7, jsx as jsx24, jsxs as jsxs24 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileNav() {
  return /* @__PURE__ */ jsxs24(Fragment7, { children: [
    /* @__PURE__ */ jsx24("header", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsx24("nav", { children: /* @__PURE__ */ jsxs24("ul", { children: [
      /* @__PURE__ */ jsx24("li", { children: /* @__PURE__ */ jsxs24("a", { href: "", children: [
        /* @__PURE__ */ jsxs24("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx24("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx24("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx24("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx24("li", { children: /* @__PURE__ */ jsxs24("a", { href: "", children: [
        /* @__PURE__ */ jsxs24("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx24("path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }),
          /* @__PURE__ */ jsx24("path", { d: "m18 15 4-4" }),
          /* @__PURE__ */ jsx24("path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" })
        ] }),
        /* @__PURE__ */ jsx24("span", { children: "Docs" })
      ] }) }),
      /* @__PURE__ */ jsxs24("li", { children: [
        /* @__PURE__ */ jsxs24("a", { href: "", children: [
          /* @__PURE__ */ jsxs24("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-circle-chevron-right-icon lucide-circle-chevron-right", children: [
            /* @__PURE__ */ jsx24("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx24("path", { d: "m10 8 4 4-4 4" })
          ] }),
          /* @__PURE__ */ jsx24("span", { children: "More" })
        ] }),
        /* @__PURE__ */ jsxs24("ul", { children: [
          /* @__PURE__ */ jsx24("li", { children: /* @__PURE__ */ jsx24("a", { href: "", children: "Option 1" }) }),
          /* @__PURE__ */ jsx24("li", { children: /* @__PURE__ */ jsx24("a", { href: "", children: "Option 2" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx24("main", { children: /* @__PURE__ */ jsxs24("article", { children: [
      /* @__PURE__ */ jsx24("h1", { children: "Heading 1" }),
      /* @__PURE__ */ jsx24("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })
    ] }) })
  ] });
}

// pages/pages/showcase/MobileTabs.tsx
import { useState as useState6 } from "https://esm.sh/react@19.2.0";
import { jsx as jsx25, jsxs as jsxs25 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileTabs() {
  const [selected, setSelected] = useState6("tab-1");
  return /* @__PURE__ */ jsx25("main", { children: /* @__PURE__ */ jsxs25("div", { style: { display: "flex", flexDirection: "row", gap: "var(--space-6)" }, children: [
    /* @__PURE__ */ jsx25("aside", { children: /* @__PURE__ */ jsx25("nav", { children: /* @__PURE__ */ jsxs25("ol", { children: [
      /* @__PURE__ */ jsx25("li", { "aria-selected": selected === "tab-1", children: /* @__PURE__ */ jsxs25("a", { onClick: () => setSelected("tab-1"), children: [
        /* @__PURE__ */ jsxs25("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx25("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
          /* @__PURE__ */ jsx25("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
        ] }),
        /* @__PURE__ */ jsx25("span", { children: "Home" })
      ] }) }),
      /* @__PURE__ */ jsx25("li", { "aria-selected": selected === "tab-2", children: /* @__PURE__ */ jsxs25("a", { onClick: () => setSelected("tab-2"), children: [
        /* @__PURE__ */ jsxs25("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx25("path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }),
          /* @__PURE__ */ jsx25("circle", { cx: "12", cy: "13", r: "1" })
        ] }),
        /* @__PURE__ */ jsx25("span", { children: "Projects" })
      ] }) }),
      /* @__PURE__ */ jsx25("li", { "aria-selected": selected === "tab-3", children: /* @__PURE__ */ jsxs25("a", { onClick: () => setSelected("tab-3"), children: [
        /* @__PURE__ */ jsxs25("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
          /* @__PURE__ */ jsx25("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
          /* @__PURE__ */ jsx25("circle", { cx: "12", cy: "7", r: "4" })
        ] }),
        /* @__PURE__ */ jsx25("span", { children: "Users" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs25("div", { className: "card", style: { flexGrow: 1 }, children: [
      selected === "tab-1" ? /* @__PURE__ */ jsx25(Tab1, {}) : null,
      selected === "tab-2" ? /* @__PURE__ */ jsx25(Tab2, {}) : null,
      selected === "tab-3" ? /* @__PURE__ */ jsx25(Tab3, {}) : null
    ] })
  ] }) });
}

// pages/pages/showcase/MobileTypography.tsx
import { Fragment as Fragment8, jsx as jsx26, jsxs as jsxs26 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function MobileTypography() {
  return /* @__PURE__ */ jsx26(Fragment8, { children: /* @__PURE__ */ jsx26("main", { style: { maxWidth: "600px" }, children: /* @__PURE__ */ jsx26("article", { children: /* @__PURE__ */ jsxs26("p", { children: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    /* @__PURE__ */ jsx26("b", { children: "tempor" }),
    " incididunt ut labore et dolore magna aliqua."
  ] }) }) }) });
}

// pages/pages/docs/extra/DarkMode.tsx
import { jsx as jsx27, jsxs as jsxs27 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function DarkMode({ theme }) {
  return /* @__PURE__ */ jsx27(DocLayout, { theme, children: /* @__PURE__ */ jsxs27("section", { className: "row", children: [
    /* @__PURE__ */ jsxs27("div", { children: [
      /* @__PURE__ */ jsx27("p", { children: `Support for dark mode depends on the specific theme. Some themes have a "light" aspect, some have a "dark" aspect and some change automatically based on the user's prefferences.` }),
      /* @__PURE__ */ jsxs27("p", { children: [
        "By default you can add a ",
        /* @__PURE__ */ jsx27("b", { children: "meta" }),
        " tag with the ",
        /* @__PURE__ */ jsx27("code", { children: "color-scheme" }),
        " name and ",
        /* @__PURE__ */ jsx27("code", { children: "light dark" }),
        " value. Themes that support both light and dark modes will adapt dynamically. Themes with only one mode will be unnaffected."
      ] }),
      /* @__PURE__ */ jsx27("p", { children: "For light / dark themes, if you force light or dark modes by specifing the corresponding color scheme." }),
      /* @__PURE__ */ jsxs27("table", { children: [
        /* @__PURE__ */ jsx27("thead", { children: /* @__PURE__ */ jsxs27("tr", { children: [
          /* @__PURE__ */ jsx27("th", { children: "Theme" }),
          /* @__PURE__ */ jsx27("th", { children: "Light" }),
          /* @__PURE__ */ jsx27("th", { children: "Dark" })
        ] }) }),
        /* @__PURE__ */ jsxs27("tbody", { children: [
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Default" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "App" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Writing" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Scholar" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Bold" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Sunset" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Sunset" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Green" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Betty" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] }),
          /* @__PURE__ */ jsxs27("tr", { children: [
            /* @__PURE__ */ jsx27("td", { children: "Gold" }),
            /* @__PURE__ */ jsx27("td", { children: "\u274C" }),
            /* @__PURE__ */ jsx27("td", { children: "\u2705" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx27("div", { children: /* @__PURE__ */ jsx27("pre", { children: /* @__PURE__ */ jsx27("code", { children: `<html>
  <head>
    <!-- both variants -->
    <meta 
      name="color-scheme" 
      content="light dark"/>
    
    <!-- only dark variant -->
    <meta 
      name="color-scheme" 
      content="dark"/>
  </head>
</html>` }) }) })
  ] }) });
}

// pages/pages/docs/extra/Icons.tsx
import { jsx as jsx28, jsxs as jsxs28 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Icons({ theme }) {
  return /* @__PURE__ */ jsxs28(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs28("section", { className: "row", children: [
      /* @__PURE__ */ jsxs28("div", { children: [
        /* @__PURE__ */ jsx28("p", { children: "The framework can combine any svg or raster icon with a multitude of html elements to create more interesting components." }),
        /* @__PURE__ */ jsx28("p", { children: "When inside buttons the width & height is aligned to match the font size." }),
        /* @__PURE__ */ jsx28("p", { children: /* @__PURE__ */ jsxs28("button", { children: [
          /* @__PURE__ */ jsxs28(
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
                /* @__PURE__ */ jsx28("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
                /* @__PURE__ */ jsx28(
                  "path",
                  {
                    d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx28("span", { children: "Home" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx28("div", { children: /* @__PURE__ */ jsx28("pre", { children: /* @__PURE__ */ jsx28("code", { children: `<p>
  <!-- with <svg> element -->
  <button>
    <svg ...></svg>
    <span>Home</span>
  </button>

  <!-- with <img> element -->
  <button>
    <img src="..."/>
  </button>
</p>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs28("section", { className: "row", children: [
      /* @__PURE__ */ jsxs28("div", { children: [
        /* @__PURE__ */ jsx28("p", { children: "If they are used in a standalone mode then they should have a clear width and height specified." }),
        /* @__PURE__ */ jsxs28("div", { className: "group", children: [
          /* @__PURE__ */ jsxs28(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx28("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
                /* @__PURE__ */ jsx28("circle", { cx: "12", cy: "10", r: "3" })
              ]
            }
          ),
          /* @__PURE__ */ jsx28("b", { children: "Test Address, SE11 8CL" })
        ] })
      ] }),
      /* @__PURE__ */ jsx28("div", { children: /* @__PURE__ */ jsx28("pre", { children: /* @__PURE__ */ jsx28("code", { children: `<div class="group">
  <svg 
    width="20" 
    height="20" ...></svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/extra/Mobile.tsx
import { jsx as jsx29, jsxs as jsxs29 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Mobile({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs29(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs29("section", { className: "row", children: [
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsx29("p", { children: "The CSS framework is design to handle various screen sizes, from wide (desktop) to narrow (mobile)." }),
        /* @__PURE__ */ jsxs29("p", { children: [
          "The threshold between wide and narrow happens at ",
          /* @__PURE__ */ jsx29("b", { children: "600px" }),
          "."
        ] }),
        /* @__PURE__ */ jsx29("p", { children: "Most elements, like paragraphs of text, buttons, etc, will layout or cascade naturally." }),
        /* @__PURE__ */ jsxs29("figure", { children: [
          /* @__PURE__ */ jsx29("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-typography" /* MobileTypography */, theme, route) }),
          /* @__PURE__ */ jsxs29("figcaption", { children: [
            "More information ",
            /* @__PURE__ */ jsx29("a", { href: RouteMaster.doc("typography" /* Typographty */, theme, route), children: "here" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsx29("pre", { children: /* @__PURE__ */ jsx29("code", { children: `<!-- elements that -->
<!-- resize naturally -->
<!-- on mobile -->
<p>
  Lorem ipsum ....
</p>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "row", children: [
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsx29("p", { children: "Navigation elements are one example where there's a distinct transition between wide and narrow displays. In wide displays they're arranged horizontally whist in narrow displays they're aranged vertically, to conserve space." }),
        /* @__PURE__ */ jsxs29("figure", { children: [
          /* @__PURE__ */ jsx29("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-nav" /* MobileNav */, theme, route) }),
          /* @__PURE__ */ jsxs29("figcaption", { children: [
            "More information ",
            /* @__PURE__ */ jsx29("a", { href: RouteMaster.doc("navigation" /* Navigation */, theme, route), children: "here" }),
            " or ",
            /* @__PURE__ */ jsx29("a", { href: RouteMaster.doc("tabs" /* Tabs */, theme, route), children: "here" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsx29("pre", { children: /* @__PURE__ */ jsx29("code", { children: `<header>
  <nav>
    <ul>
      <li><a ...>...</a></li>
      ....
    </ul>
  </nav>
</header>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "row", children: [
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsx29("p", { children: "Header menu elements are another example. On wide displays they are arrange horizontally, at the top of the page. On narrow displays they still maintain the horizontal arrangement, but are displayed at the bottom of the page, to simulate mobile app displays." }),
        /* @__PURE__ */ jsxs29("figure", { children: [
          /* @__PURE__ */ jsx29("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-menu" /* MobileMenu */, theme, route) }),
          /* @__PURE__ */ jsxs29("figcaption", { children: [
            "More information ",
            /* @__PURE__ */ jsx29("a", { href: RouteMaster.doc("menu" /* Menu */, theme, route), children: "here" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsx29("pre", { children: /* @__PURE__ */ jsx29("code", { children: `<header>
  <menu>
    <li><a ...>...</a></li>
    ....
  </menu>
</header>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "row", children: [
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsxs29("p", { children: [
          "Finally, elements that have the ",
          /* @__PURE__ */ jsx29("code", { children: "row" }),
          " class also behave differentely. In wide displats, they're arrange horizontally, with a gap between them. In narrow displays the flip to a vertical arrangement, with no gap between them."
        ] }),
        /* @__PURE__ */ jsxs29("figure", { children: [
          /* @__PURE__ */ jsx29("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-columns" /* MobileColumns */, theme, route) }),
          /* @__PURE__ */ jsxs29("figcaption", { children: [
            "More information ",
            /* @__PURE__ */ jsx29("a", { href: RouteMaster.doc("cols" /* Columns */, theme, route), children: "here" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx29("div", { children: /* @__PURE__ */ jsx29("pre", { children: /* @__PURE__ */ jsx29("code", { children: `<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs29("section", { className: "row", children: [
      /* @__PURE__ */ jsxs29("div", { children: [
        /* @__PURE__ */ jsxs29("p", { children: [
          "You can instruct an element to ignore mobile transitions by applying the ",
          /* @__PURE__ */ jsx29("code", { children: "disable-mobile" }),
          " class."
        ] }),
        /* @__PURE__ */ jsxs29("p", { children: [
          "You can also instruct elements to be hidden on mobile, via the ",
          /* @__PURE__ */ jsx29("code", { children: "hiden-on-mobile" }),
          " class, or be hidden on desktop, via the ",
          /* @__PURE__ */ jsx29("code", { children: "hiden-on-desktop" }),
          " class."
        ] })
      ] }),
      /* @__PURE__ */ jsx29("div", {})
    ] })
  ] });
}

// pages/pages/docs/custom/Cards.tsx
import { jsx as jsx30, jsxs as jsxs30 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Cards({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs30(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsxs30("p", { children: [
          "By wrapping together a number of HTML elements inside a parent with the ",
          /* @__PURE__ */ jsx30("code", { children: "card" }),
          " class, you can create a basic card-type layout."
        ] }),
        /* @__PURE__ */ jsxs30("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card", children: [
            /* @__PURE__ */ jsx30("span", { children: /* @__PURE__ */ jsx30("b", { children: "Title" }) }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) }),
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card success", children: [
            /* @__PURE__ */ jsx30("span", { children: /* @__PURE__ */ jsx30("b", { children: "Title" }) }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card">
  <span>
    <b>Title</b>
  </span>
  <p>
    Lorem ipsum ...
  </p>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsxs30("p", { children: [
          "Cards can wrap headings and paragraphs and can be styled with ",
          /* @__PURE__ */ jsx30("code", { children: "success" }),
          " and ",
          /* @__PURE__ */ jsx30("code", { children: "error" }),
          " classes."
        ] }),
        /* @__PURE__ */ jsxs30("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card", children: [
            /* @__PURE__ */ jsx30("h3", { children: "Title" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) }),
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card error", children: [
            /* @__PURE__ */ jsx30("h3", { children: "Title" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx30("p", { children: /* @__PURE__ */ jsxs30("small", { children: [
          "You can learn more about classes ",
          /* @__PURE__ */ jsx30("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card error">
  <h3>Title</h3>
  <p>
    Lorem ipsum ...
  </p>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsx30("p", { children: "The starting paragraph of a card will be styled so it's more proeminent." }),
        /* @__PURE__ */ jsxs30("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card", children: [
            /* @__PURE__ */ jsx30("p", { children: "Title" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) }),
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card success", children: [
            /* @__PURE__ */ jsx30("p", { children: "Title" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card">
  <p>Title</p>
  <p>
    Lorem ipsum ...
  </p>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsx30("p", { children: "Likewise, the first image tag used in a card will be styled as a header image." }),
        /* @__PURE__ */ jsxs30("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card", children: [
            /* @__PURE__ */ jsx30("img", { height: "80", src: "https://picsum.photos/id/16/320/80", alt: "header image" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) }),
          /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsxs30("div", { className: "card error", children: [
            /* @__PURE__ */ jsx30("img", { height: "80", src: "https://picsum.photos/id/16/420/80", alt: "header image" }),
            /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card">
  <img 
    height="80" 
    src="..." 
    alt="..." />
  <p>
    Lorem ipsum ...
  </p>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsx30("p", { children: "You can combine elements inside a card to produce quite compelx results, as the example below shows." }),
        /* @__PURE__ */ jsx30("p", { children: "By adding a header image, a title, paragraph and a button, we've created an interesting visual element in a few lines of HTML." }),
        /* @__PURE__ */ jsxs30("div", { className: "card", children: [
          /* @__PURE__ */ jsx30("img", { height: "160", src: "https://picsum.photos/id/16/480/160", alt: "header image" }),
          /* @__PURE__ */ jsx30("h4", { children: "Title" }),
          /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
          /* @__PURE__ */ jsx30("p", { children: /* @__PURE__ */ jsx30("button", { children: "Button" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card">
  <img 
    height="160" 
    src="..." 
    alt="..." />
  <h4>
    Title
  </h4>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <button>
      Button
    </button>
  </p>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs30("section", { className: "row", children: [
      /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsx30("p", { children: "If we combine groups, columns and cards, we can experiment with even more daring layouts. All without having to write any custom CSS." }),
        /* @__PURE__ */ jsxs30("div", { className: "card", children: [
          /* @__PURE__ */ jsx30("div", { className: "group", children: /* @__PURE__ */ jsxs30("div", { className: "row", children: [
            /* @__PURE__ */ jsx30("img", { width: "80", height: "80", src: "https://picsum.photos/id/16/80/80", alt: "header image" }),
            /* @__PURE__ */ jsxs30("div", { children: [
              /* @__PURE__ */ jsx30("b", { children: "Title" }),
              /* @__PURE__ */ jsx30("br", {}),
              /* @__PURE__ */ jsx30("span", { children: "Subtitle" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx30("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
          /* @__PURE__ */ jsxs30("p", { children: [
            /* @__PURE__ */ jsx30("mark", { children: "v12.5.3" }),
            /* @__PURE__ */ jsx30("mark", { className: "success", children: "success" })
          ] }),
          /* @__PURE__ */ jsx30("hr", {}),
          /* @__PURE__ */ jsx30("p", { children: /* @__PURE__ */ jsx30("button", { children: "Button" }) })
        ] }),
        /* @__PURE__ */ jsx30("p", { children: /* @__PURE__ */ jsxs30("small", { children: [
          "You can learn more about groups ",
          /* @__PURE__ */ jsx30("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "here" }),
          "."
        ] }) }),
        /* @__PURE__ */ jsx30("p", { children: /* @__PURE__ */ jsxs30("small", { children: [
          "You can learn more about columns ",
          /* @__PURE__ */ jsx30("a", { href: RouteMaster.doc("cols" /* Columns */, theme, route), children: "here" }),
          "."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx30("div", { children: /* @__PURE__ */ jsx30("pre", { children: /* @__PURE__ */ jsx30("code", { children: `<div class="card">
  <div class="group">
    <div className="row">
      <img 
        width="80" 
        height="80" 
        src="..."/>
      <div>
        <b>
          Title
        </b>
        <br/>
        <span>
          Subtitle
        </span>
      </div>
    </div>
  </div>
  <p>
    Lorem ipsum ...
  </p>
  <p>
    <mark>
      v12.5.3
    </mark>
    <mark class="success">
      success
    </mark>
  </p>
  <hr/>
  <p>
    <button>
      Button
    </button>
  </p>
</div>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/custom/Classes.tsx
import { jsx as jsx31, jsxs as jsxs31 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Classes({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsx31(DocLayout, { theme, children: /* @__PURE__ */ jsx31("section", { children: /* @__PURE__ */ jsxs31("div", { children: [
    /* @__PURE__ */ jsxs31("p", { children: [
      PRODUCT_NAME,
      " aims to be plug & play as much as possible. In this section we've also seen a number of CSS classes that can be used to allow it to support many more cases."
    ] }),
    /* @__PURE__ */ jsx31("p", { children: "Below is the full list of supported classes and the effect they produce:" }),
    /* @__PURE__ */ jsxs31("table", { children: [
      /* @__PURE__ */ jsx31("thead", { children: /* @__PURE__ */ jsxs31("tr", { children: [
        /* @__PURE__ */ jsx31("th", { children: "Class" }),
        /* @__PURE__ */ jsx31("th", { children: "Effect" })
      ] }) }),
      /* @__PURE__ */ jsxs31("tbody", { children: [
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "align-center" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Aligns elements centrally on the horizontal axis. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("header" /* Header */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "card" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Transforms an element into a card. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("cards" /* Cards */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "circle" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Rounds the edges off an element so it's a perfect circle. Useful for images. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("table" /* Table */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "container-medium" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Sets the maximum size of the container to ",
            /* @__PURE__ */ jsx31("code", { children: "var(--width-container-medium)" }),
            ". See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("containers" /* Containers */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "container-narrow" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Sets the maximum size of the container to ",
            /* @__PURE__ */ jsx31("code", { children: "var(--width-container-narrow)" }),
            ". See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("containers" /* Containers */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "container-wide" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Sets the maximum size of the container to ",
            /* @__PURE__ */ jsx31("code", { children: "var(--width-container-wide)" }),
            ". See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("containers" /* Containers */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "error" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Applies an error-type style of an element by changing its background, foreground or text color. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("tags" /* Tags */, theme, route), children: "here" }),
            " or ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("table" /* Table */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "gap" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Used in between ",
            /* @__PURE__ */ jsx31("code", { children: "col" }),
            " elements. Provides a gap between them so they can be separated into left and right sides. Has no effect on mobile displays. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("navigation" /* Navigation */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "group" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Groups various elements, like buttons or inputs, together, horizontally. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "hide-on-mobile" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Hides an element if on small displays. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("mobile" /* Mobile */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "hide-on-desktop" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Hides an element if on large displays. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("mobile" /* Mobile */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "row" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Transforms child elements into horizontally aligned columns. Also the ",
            /* @__PURE__ */ jsx31("code", { children: "col-N" }),
            " class. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("cols" /* Columns */, theme, route), children: "here" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxs31("tr", { children: [
          /* @__PURE__ */ jsx31("td", { children: /* @__PURE__ */ jsx31("code", { children: "success" }) }),
          /* @__PURE__ */ jsxs31("td", { children: [
            "Applies a success-type style to an element by changing its background, foreground or text color. See ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("buttons" /* Buttons */, theme, route), children: "here" }),
            " or ",
            /* @__PURE__ */ jsx31("a", { href: RouteMaster.doc("summary" /* Summary */, theme, route), children: "here" }),
            "."
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}

// pages/pages/docs/custom/Columns.tsx
import { jsx as jsx32, jsxs as jsxs32 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Columns({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs32(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs32("section", { className: "row", children: [
      /* @__PURE__ */ jsxs32("div", { children: [
        /* @__PURE__ */ jsxs32("p", { children: [
          "Any layout element, such a or ",
          /* @__PURE__ */ jsx32("code", { children: "div" }),
          " or ",
          /* @__PURE__ */ jsx32("code", { children: "section" }),
          " tag, can arrange its children in columns of equal width, by combining the ",
          /* @__PURE__ */ jsx32("code", { children: "row" }),
          " and ",
          /* @__PURE__ */ jsx32("code", { children: "col" }),
          " classes."
        ] }),
        /* @__PURE__ */ jsxs32("div", { className: "card", children: [
          /* @__PURE__ */ jsxs32("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) }),
            /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) })
          ] }),
          /* @__PURE__ */ jsxs32("div", { className: "row disable-mobile", children: [
            /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) }),
            /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) }),
            /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32("pre", { children: /* @__PURE__ */ jsx32("code", { children: `<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
<div class="row">
  <div class="col">...</div>
  <div class="col">...</div>
  <div class="col">...</div>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs32("section", { className: "row", children: [
      /* @__PURE__ */ jsxs32("div", { children: [
        /* @__PURE__ */ jsxs32("p", { children: [
          "This system uses the same naming convention as the popular ",
          /* @__PURE__ */ jsx32("a", { href: "https://getbootstrap.com/docs/5.3/examples/grid/" /* Bootstrap */, target: "_blanl", children: "Bootstrap CSS library" }),
          ". And just like Bootstrap, columns can have various widths, by using the ",
          /* @__PURE__ */ jsx32("code", { children: "col-2" }),
          " to ",
          /* @__PURE__ */ jsx32("code", { children: "col-6" }),
          " classes."
        ] }),
        /* @__PURE__ */ jsx32("div", { className: "card", children: /* @__PURE__ */ jsxs32("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx32("div", { className: "col-2", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col-2" }) }),
          /* @__PURE__ */ jsx32("div", { className: "col", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col" }) }),
          /* @__PURE__ */ jsx32("div", { className: "col-6", children: /* @__PURE__ */ jsx32("code", { style: { width: "100%" }, children: "col-6" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32("pre", { children: /* @__PURE__ */ jsx32("code", { children: `<div class="row">
  <div class="col-2">...</div>
  <div class="col">...</div>
  <div class="col-6">...</div>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs32("section", { className: "row", children: [
      /* @__PURE__ */ jsxs32("div", { children: [
        /* @__PURE__ */ jsx32("p", { children: "Columns are fully responsive. On smaller devices they transition to a row based layout, with columns being laid out vertically, one below the other." }),
        /* @__PURE__ */ jsxs32("p", { children: [
          "In such a layout the gap that's usually present in a horizontal layout dissapears. This means that each element within a column must provide its owne element with bottom padding (like a ",
          /* @__PURE__ */ jsx32("code", { children: "p" }),
          ", etc)."
        ] }),
        /* @__PURE__ */ jsxs32("figure", { children: [
          /* @__PURE__ */ jsx32("iframe", { scrolling: "no", width: "100%", height: 300, src: RouteMaster.showcase("mobile-columns" /* MobileColumns */, theme, route) }),
          /* @__PURE__ */ jsx32("figcaption", { children: "Showcase of columns on a smaller device." })
        ] })
      ] }),
      /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32("pre", { children: /* @__PURE__ */ jsx32("code", { children: `<div class="row">
  <div>
    <p>
      <code>...</code>
    </p>
  </div>
  <div>
    <p>
      <code>...</code>
    </p>
  </div>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs32("section", { className: "row", children: [
      /* @__PURE__ */ jsxs32("div", { children: [
        /* @__PURE__ */ jsxs32("p", { children: [
          "Finally, you can even omit the ",
          /* @__PURE__ */ jsx32("code", { children: "col" }),
          " class entirely. A ",
          /* @__PURE__ */ jsx32("b", { children: "div" }),
          " element will expand to fill as much width as available. Multiple ",
          /* @__PURE__ */ jsx32("b", { children: "divs" }),
          " will eqpand equaly. And any other element (like an ",
          /* @__PURE__ */ jsx32("b", { children: "image" }),
          ", etc) will expand naturally. This makes layouts like the one below possible and easy to write."
        ] }),
        /* @__PURE__ */ jsx32("div", { className: "card", children: /* @__PURE__ */ jsxs32("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx32("img", { width: "80", height: "80", src: "https://picsum.photos/id/16/80/80", alt: "ssample image " }),
          /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32("pre", { children: /* @__PURE__ */ jsx32("code", { children: `<div class="row">
  <p 
    width="80" 
    height="80" ...>
    <svg .../>
  </p>
  <div>...</div>
</div>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/custom/Containers.tsx
import { jsx as jsx33, jsxs as jsxs33 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Containers({ theme }) {
  return /* @__PURE__ */ jsx33(DocLayout, { theme, children: /* @__PURE__ */ jsxs33("section", { className: "row", children: [
    /* @__PURE__ */ jsxs33("div", { children: [
      /* @__PURE__ */ jsx33("p", { children: "There are three classes that allow you to set different content widths:" }),
      /* @__PURE__ */ jsxs33("table", { children: [
        /* @__PURE__ */ jsx33("thead", { children: /* @__PURE__ */ jsxs33("tr", { children: [
          /* @__PURE__ */ jsx33("th", { children: "Class" }),
          /* @__PURE__ */ jsx33("th", { children: "Width" }),
          /* @__PURE__ */ jsx33("th", { children: "Info" })
        ] }) }),
        /* @__PURE__ */ jsxs33("tbody", { children: [
          /* @__PURE__ */ jsxs33("tr", { children: [
            /* @__PURE__ */ jsx33("td", { children: /* @__PURE__ */ jsx33("code", { children: "container-narrow" }) }),
            /* @__PURE__ */ jsx33("td", { children: "800px" }),
            /* @__PURE__ */ jsx33("td", { children: "This is the default viewport. Suitable for blogs, articles, etc." })
          ] }),
          /* @__PURE__ */ jsxs33("tr", { children: [
            /* @__PURE__ */ jsx33("td", { children: /* @__PURE__ */ jsx33("code", { children: "container-medium" }) }),
            /* @__PURE__ */ jsx33("td", { children: "1200px" }),
            /* @__PURE__ */ jsx33("td", { children: "A slighlty larger viewport that allows more content on the screen whilst at the same time still centering it." })
          ] }),
          /* @__PURE__ */ jsxs33("tr", { children: [
            /* @__PURE__ */ jsx33("td", { children: /* @__PURE__ */ jsx33("code", { children: "container-wide" }) }),
            /* @__PURE__ */ jsx33("td", { children: "1600px" }),
            /* @__PURE__ */ jsx33("td", { children: "The largest viewport. Suitable for apps, dashboard, etc." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx33("p", { children: "Of course, on mobile devices or tables, the viewport will adjust accordingly." })
    ] }),
    /* @__PURE__ */ jsx33("div", { children: /* @__PURE__ */ jsx33("pre", { children: /* @__PURE__ */ jsx33("code", { children: `<header class="container-medium">
  <nav>
    ....
  </nav>
</header>
<main class="container-medium">
  ...
</main>
<footer class="container-medium">
 ...
</footer>` }) }) })
  ] }) });
}

// pages/pages/docs/custom/Groups.tsx
import { jsx as jsx34, jsxs as jsxs34 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Groups({ theme }) {
  return /* @__PURE__ */ jsxs34(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs34("section", { className: "row", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsxs34("p", { children: [
          "Some elements are visually meant to ",
          /* @__PURE__ */ jsx34("q", { children: "stick" }),
          " together. In such a case, you can wrap them in a parent that's been given the ",
          /* @__PURE__ */ jsx34("code", { children: "group" }),
          " class."
        ] }),
        /* @__PURE__ */ jsxs34("p", { children: [
          "In the case of a group of ",
          /* @__PURE__ */ jsx34("code", { children: "buttons" }),
          ", all horizontal spacing and borders between them dissapear."
        ] }),
        /* @__PURE__ */ jsxs34("p", { className: "group", children: [
          /* @__PURE__ */ jsx34("button", { children: "Option 1" }),
          /* @__PURE__ */ jsx34("button", { type: "reset", children: "Option 2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34("pre", { children: /* @__PURE__ */ jsx34("code", { children: `<p class="group">
  <button>
    Option 1
  </button>f
  <button type="reset">
    Option 2
  </button>
</p>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs34("section", { className: "row", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsxs34("p", { children: [
          "In the case of a group of ",
          /* @__PURE__ */ jsx34("code", { children: "marks" }),
          ", they're also pulled together and have any vertical space dissapear."
        ] }),
        /* @__PURE__ */ jsxs34("p", { className: "group", children: [
          /* @__PURE__ */ jsx34("mark", { children: "#test" }),
          /* @__PURE__ */ jsx34("mark", { className: "success", children: "v1.0.0" })
        ] })
      ] }),
      /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34("pre", { children: /* @__PURE__ */ jsx34("code", { children: `<p class="group">
  <mark>
    #test
  </mark>
  <mark 
    className="success">
    v1.0.0
  </mark>
</p>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs34("section", { className: "row", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsx34("p", { children: "Grouping elements really shines in the case of forms and form inputs. You can see below an example of a compact login form." }),
        /* @__PURE__ */ jsx34("form", { children: /* @__PURE__ */ jsxs34("div", { className: "group", children: [
          /* @__PURE__ */ jsx34("input", { id: "email", type: "email", placeholder: "Email" }),
          /* @__PURE__ */ jsx34("input", { id: "password", type: "password", placeholder: "Password" }),
          /* @__PURE__ */ jsx34("input", { type: "submit", value: "Login" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34("pre", { children: /* @__PURE__ */ jsx34("code", { children: `<form>
  <div class="group">
    <input 
      id="email" 
      type="email" 
      placeholder="Email"/>
    <input 
      id="password" 
      type="password" 
      placeholder="Password"/>
    <input 
      type="submit" 
      value={"Login"}/>
  </div>
</form>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs34("section", { className: "row", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsx34("p", { children: "Grouping elements can be used to style icons and text together." }),
        /* @__PURE__ */ jsxs34("div", { className: "group", children: [
          /* @__PURE__ */ jsxs34(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx34("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
                /* @__PURE__ */ jsx34("circle", { cx: "12", cy: "10", r: "3" })
              ]
            }
          ),
          /* @__PURE__ */ jsx34("b", { children: "Test Address, SE11 8CL" })
        ] })
      ] }),
      /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34("pre", { children: /* @__PURE__ */ jsx34("code", { children: `<div class="group">
  <svg 
    width="20" 
    height="20" ...>
  </svg>
  <b>
    Test Address, SE11 8CL
  </b>
</div>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs34("section", { className: "row", children: [
      /* @__PURE__ */ jsxs34("div", { children: [
        /* @__PURE__ */ jsx34("p", { children: "Other elements, such as images, can also be grouped, although the impact isn't as pronounced." }),
        /* @__PURE__ */ jsxs34("p", { className: "group", children: [
          /* @__PURE__ */ jsx34("img", { width: "80", height: "80", src: "https://picsum.photos/id/16/80/80", alt: "image 1" }),
          /* @__PURE__ */ jsx34("img", { width: "80", height: "80", src: "https://picsum.photos/id/16/120/120", alt: "image 2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx34("div", { children: /* @__PURE__ */ jsx34("pre", { children: /* @__PURE__ */ jsx34("code", { children: `<p class="group">
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 1"/>
  <img 
    width="80" 
    height="80" 
    src="..." 
    alt="image 2"/>
</p>` }) }) })
    ] })
  ] });
}

// pages/pages/docs/layout/Header.tsx
import { jsx as jsx35, jsxs as jsxs35 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Header({ theme }) {
  const route = useRoute();
  return /* @__PURE__ */ jsxs35(DocLayout, { theme, children: [
    /* @__PURE__ */ jsxs35("section", { className: "row", children: [
      /* @__PURE__ */ jsxs35("div", { children: [
        /* @__PURE__ */ jsxs35("p", { children: [
          "A ",
          /* @__PURE__ */ jsx35("code", { children: "header" }),
          " is used to define the introductory content of a page or section. The simplest top level header can contain a navigation element:"
        ] }),
        /* @__PURE__ */ jsx35("iframe", { scrolling: "no", width: "100%", height: 275, src: RouteMaster.showcase("layout-header-simple" /* LayoutHeaderSimple */, theme, route) })
      ] }),
      /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35("pre", { children: /* @__PURE__ */ jsx35("code", { children: `<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
      <li>
        <a href="...">
          About
        </a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs35("section", { className: "row", children: [
      /* @__PURE__ */ jsxs35("div", { children: [
        /* @__PURE__ */ jsx35("p", { children: "More compelx headers can contain both the navigation as well as a call to action, a brand promo, etc." }),
        /* @__PURE__ */ jsx35("iframe", { scrolling: "no", width: "100%", height: 500, src: RouteMaster.showcase("layout-header-sub" /* LayoutHeaderComplex */, theme, route) })
      ] }),
      /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35("pre", { children: /* @__PURE__ */ jsx35("code", { children: `<header>
  <nav>
    <ul>
      <li>
        <a href="...">
          Home
        </a>
      </li>
    </ul>
  </nav>
  <div class="align-center">
    <h2>
      My blog
    </h2>
    <p>
      Lorem ipsum...
    </p>
    <form action="...">
      <div class="group">
        <input 
          type="email" 
          placeholder="..."/>
        <input 
          type="submit" 
          value="Subscribe"/>
      </div>
    </form>
  </div>
</header>
<main>
  <h1>Title</h1>
  <p>Lorem ipsum...</p>
</main>` }) }) })
    ] }),
    /* @__PURE__ */ jsxs35("section", { className: "row", children: [
      /* @__PURE__ */ jsxs35("div", { children: [
        /* @__PURE__ */ jsx35("p", { children: "Section headers can be combined with other elements to form banners:" }),
        /* @__PURE__ */ jsx35("iframe", { scrolling: "no", width: "100%", height: 500, src: RouteMaster.showcase("layout-header-section" /* LayoutHeaderSection */, theme, route) })
      ] }),
      /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35("pre", { children: /* @__PURE__ */ jsx35("code", { children: `>main>
  <section>
    <header>
      <div>
        <div class="group">
          <div class="row">
            <div>
              ...
            </div>
            <div class="gap">
            </div>
            <button>
              ...
            </button>
          </div>
        </div>
      </div>
    </header>
  </section>
</main>` }) }) })
    ] })
  ] });
}

// pages/pages/showcase/LayoutHeaderSection.tsx
import { Fragment as Fragment9, jsx as jsx36, jsxs as jsxs36 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function LayoutHeaderSection() {
  return /* @__PURE__ */ jsxs36(Fragment9, { children: [
    /* @__PURE__ */ jsx36("header", { children: /* @__PURE__ */ jsx36("nav", { children: /* @__PURE__ */ jsx36("ul", { children: /* @__PURE__ */ jsx36("li", { children: /* @__PURE__ */ jsx36("a", { href: "", children: "Home" }) }) }) }) }),
    /* @__PURE__ */ jsxs36("main", { children: [
      /* @__PURE__ */ jsx36("h1", { children: "Title" }),
      /* @__PURE__ */ jsx36("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsx36("section", { children: /* @__PURE__ */ jsx36("header", { children: /* @__PURE__ */ jsx36("div", { style: { backgroundColor: "light-dark(var(--color-secondary-muted), var(--color-accent-faint))" }, children: /* @__PURE__ */ jsx36("div", { className: "group", children: /* @__PURE__ */ jsxs36("div", { className: "row", children: [
        /* @__PURE__ */ jsxs36("div", { children: [
          /* @__PURE__ */ jsx36("b", { children: "Try Now" }),
          /* @__PURE__ */ jsx36("br", {}),
          "Subtitle"
        ] }),
        /* @__PURE__ */ jsx36("div", { className: "gap" }),
        /* @__PURE__ */ jsx36("button", { children: "Download" })
      ] }) }) }) }) })
    ] })
  ] });
}

// pages/common/utils/routes.ts
var RouteMaster = class _RouteMaster {
  static baseRoute = "";
  static home(theme, domain) {
    const base = _RouteMaster.getBase(domain);
    return `${base}${theme}/`;
  }
  static doc(route, theme, domain) {
    const base = _RouteMaster.getBase(domain);
    switch (route) {
      // basics
      case "typography" /* Typographty */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Typography)}`;
      case "buttons" /* Buttons */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Buttons)}`;
      case "blockquotes" /* Blockquotes */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Blockquotes)}`;
      case "code" /* Code */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Code)}`;
      case "figures" /* Figures */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Figures)}`;
      case "lists" /* Lists */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Lists)}`;
      case "links" /* Links */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Links)}`;
      case "summary" /* Summary */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Summary)}`;
      case "table" /* Table */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Table)}`;
      case "tags" /* Tags */:
        return `${base}${theme}/pages/docs/basics/${htmlName(Tags)}`;
      // forms
      case "forms-check" /* FormsCheck */:
        return `${base}${theme}/pages/docs/forms/${htmlName(FormsCheckbox)}`;
      case "forms-disabled" /* FormsDisabled */:
        return `${base}${theme}/pages/docs/forms/${htmlName(FormsDisabled)}`;
      case "forms-grouped" /* FormsGrouped */:
        return `${base}${theme}/pages/docs/forms/${htmlName(FormsGrouped)}`;
      case "forms-normal" /* FormsNormal */:
        return `${base}${theme}/pages/docs/forms/${htmlName(FormsNormal)}`;
      case "forms-validation" /* FormsValidation */:
        return `${base}${theme}/pages/docs/forms/${htmlName(FormsValidation)}`;
      // layout
      case "header" /* Header */:
        return `${base}${theme}/pages/docs/layout/${htmlName(Header)}`;
      // modal
      case "modal" /* Modal */:
        return `${base}${theme}/pages/docs/dialogs/${htmlName(Modal)}`;
      // navigation
      case "navigation" /* Navigation */:
        return `${base}${theme}/pages/docs/navigation/${htmlName(Navigation)}`;
      case "tabs" /* Tabs */:
        return `${base}${theme}/pages/docs/navigation/${htmlName(Tabs)}`;
      case "menu" /* Menu */:
        return `${base}${theme}/pages/docs/navigation/${htmlName(Menu)}`;
      // extra
      case "dark-mode" /* DarkMode */:
        return `${base}${theme}/pages/docs/extra/${htmlName(DarkMode)}`;
      case "icons" /* Icons */:
        return `${base}${theme}/pages/docs/extra/${htmlName(Icons)}`;
      case "mobile" /* Mobile */:
        return `${base}${theme}/pages/docs/extra/${htmlName(Mobile)}`;
      // custom
      case "cards" /* Cards */:
        return `${base}${theme}/pages/docs/custom/${htmlName(Cards)}`;
      case "classes" /* Classes */:
        return `${base}${theme}/pages/docs/custom/${htmlName(Classes)}`;
      case "cols" /* Columns */:
        return `${base}${theme}/pages/docs/custom/${htmlName(Columns)}`;
      case "containers" /* Containers */:
        return `${base}${theme}/pages/docs/custom/${htmlName(Containers)}`;
      case "groups" /* Groups */:
        return `${base}${theme}/pages/docs/custom/${htmlName(Groups)}`;
    }
  }
  static getDocFromRoute(path) {
    const items = path.split("/docs/");
    const last = items.pop();
    const [folder, doc] = last.split("/");
    switch (folder) {
      case "basics": {
        switch (doc) {
          case htmlName(Typography):
            return "typography" /* Typographty */;
          case htmlName(Buttons):
            return "buttons" /* Buttons */;
          case htmlName(Blockquotes):
            return "blockquotes" /* Blockquotes */;
          case htmlName(Code):
            return "code" /* Code */;
          case htmlName(Figures):
            return "figures" /* Figures */;
          case htmlName(Links):
            return "links" /* Links */;
          case htmlName(Lists):
            return "lists" /* Lists */;
          case htmlName(Summary):
            return "summary" /* Summary */;
          case htmlName(Table):
            return "table" /* Table */;
          case htmlName(Tags):
            return "tags" /* Tags */;
        }
      }
      case "forms": {
        switch (doc) {
          case htmlName(FormsCheckbox):
            return "forms-check" /* FormsCheck */;
          case htmlName(FormsDisabled):
            return "forms-disabled" /* FormsDisabled */;
          case htmlName(FormsGrouped):
            return "forms-grouped" /* FormsGrouped */;
          case htmlName(FormsNormal):
            return "forms-normal" /* FormsNormal */;
          case htmlName(FormsValidation):
            return "forms-validation" /* FormsValidation */;
        }
      }
      case "layout": {
        switch (doc) {
          case htmlName(Header):
            return "header" /* Header */;
        }
      }
      case "dialogs": {
        switch (doc) {
          case htmlName(Modal):
            return "modal" /* Modal */;
        }
      }
      case "navigation": {
        switch (doc) {
          case htmlName(Navigation):
            return "navigation" /* Navigation */;
          case htmlName(Tabs):
            return "tabs" /* Tabs */;
          case htmlName(Menu):
            return "menu" /* Menu */;
        }
      }
      case "extra": {
        switch (doc) {
          case htmlName(DarkMode):
            return "dark-mode" /* DarkMode */;
          case htmlName(Icons):
            return "icons" /* Icons */;
          case htmlName(Mobile):
            return "mobile" /* Mobile */;
        }
      }
      case "custom": {
        switch (doc) {
          case htmlName(Cards):
            return "cards" /* Cards */;
          case htmlName(Classes):
            return "classes" /* Classes */;
          case htmlName(Columns):
            return "cols" /* Columns */;
          case htmlName(Containers):
            return "containers" /* Containers */;
          case htmlName(Groups):
            return "groups" /* Groups */;
        }
      }
    }
    return void 0;
  }
  static showcase(route, theme, domain) {
    const base = _RouteMaster.getBase(domain);
    switch (route) {
      case "desktop-menu" /* DekstopMenu */:
        return `${base}${theme}/pages/showcase/${htmlName(DesktopMenu)}`;
      case "layout-header-simple" /* LayoutHeaderSimple */:
        return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderNav)}`;
      case "layout-header-sub" /* LayoutHeaderComplex */:
        return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderComplex)}`;
      case "layout-header-section" /* LayoutHeaderSection */:
        return `${base}${theme}/pages/showcase/${htmlName(LayoutHeaderSection)}`;
      case "mobile-columns" /* MobileColumns */:
        return `${base}${theme}/pages/showcase/${htmlName(MobileColumns)}`;
      case "mobile-menu" /* MobileMenu */:
        return `${base}${theme}/pages/showcase/${htmlName(MobileMenu)}`;
      case "mobile-nav" /* MobileNav */:
        return `${base}${theme}/pages/showcase/${htmlName(MobileNav)}`;
      case "mobile-tabs-nav" /* MobileTabsNav */:
        return `${base}${theme}/pages/showcase/${htmlName(MobileTabs)}`;
      case "mobile-typography" /* MobileTypography */:
        return `${base}${theme}/pages/showcase/${htmlName(MobileTypography)}`;
    }
  }
  static getBase(domain) {
    if (!domain) return "/";
    return domain === "" ? "/" : `/${domain}/`;
  }
};
function htmlName(elem) {
  return `${toKebabCase(elem.name)}.html`;
}
function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}

// pages/common/components/TopNav.tsx
import { jsx as jsx37, jsxs as jsxs37 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function TopNav({ theme }) {
  const route = useRoute();
  const onThemeChange = (e) => {
    const newTheme = e.target.value;
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.includes(theme)) {
        const newPath = path.replace(theme, newTheme);
        window.location.href = newPath;
      } else {
        if (path.includes(PUB_SUBDOMAIN)) {
          const splitPath = path.split("/");
          const index = splitPath.indexOf(PUB_SUBDOMAIN) + 1;
          splitPath.splice(index, 0, newTheme);
          const newPath = splitPath.join("/");
          window.location.href = newPath;
        } else {
          const newPath = `/${newTheme}${path}`;
          window.location.href = newPath;
        }
      }
    }
  };
  return /* @__PURE__ */ jsx37("nav", { children: /* @__PURE__ */ jsxs37("ul", { children: [
    /* @__PURE__ */ jsx37("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs37("a", { href: RouteMaster.home(theme, route), children: [
      /* @__PURE__ */ jsxs37("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx37("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
        /* @__PURE__ */ jsx37("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      ] }),
      /* @__PURE__ */ jsx37("span", { children: "Home" })
    ] }) }),
    /* @__PURE__ */ jsx37("li", { className: "gap hide-on-mobile" }),
    /* @__PURE__ */ jsx37("li", { className: "hide-on-desktop", children: /* @__PURE__ */ jsxs37("a", { href: "https://github.com/gobi-tools/css-theme" /* GitHub */, target: "blank", children: [
      /* @__PURE__ */ jsxs37("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx37("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
        /* @__PURE__ */ jsx37("path", { d: "M9 18c-4.51 2-5-2-7-2" })
      ] }),
      /* @__PURE__ */ jsx37("span", { children: "GitHub" })
    ] }) }),
    /* @__PURE__ */ jsx37("li", { children: /* @__PURE__ */ jsxs37("select", { name: "theme-selector", onChange: onThemeChange, children: [
      /* @__PURE__ */ jsxs37("optgroup", { label: "Light/Dark", children: [
        /* @__PURE__ */ jsx37("option", { value: "default" /* Default */, selected: theme === "default" /* Default */, children: "Default" }),
        /* @__PURE__ */ jsx37("option", { value: "app" /* App */, selected: theme === "app" /* App */, children: "App" }),
        /* @__PURE__ */ jsx37("option", { value: "writing" /* Writing */, selected: theme === "writing" /* Writing */, children: "Writing" }),
        /* @__PURE__ */ jsx37("option", { value: "scholar" /* Scholar */, selected: theme === "scholar" /* Scholar */, children: "Scholar" })
      ] }),
      /* @__PURE__ */ jsxs37("optgroup", { label: "Light Only", children: [
        /* @__PURE__ */ jsx37("option", { value: "bold" /* Bold */, selected: theme === "bold" /* Bold */, children: "Bold" }),
        /* @__PURE__ */ jsx37("option", { value: "sunset" /* Sunset */, selected: theme === "sunset" /* Sunset */, children: "Sunset" }),
        /* @__PURE__ */ jsx37("option", { value: "pink" /* Pink */, selected: theme === "pink" /* Pink */, children: "Pink" })
      ] }),
      /* @__PURE__ */ jsxs37("optgroup", { label: "Dark Only", children: [
        /* @__PURE__ */ jsx37("option", { value: "forest" /* Forest */, selected: theme === "forest" /* Forest */, children: "Forest" }),
        /* @__PURE__ */ jsx37("option", { value: "betty" /* Betty */, selected: theme === "betty" /* Betty */, children: "Betty" }),
        /* @__PURE__ */ jsx37("option", { value: "gold" /* Gold */, selected: theme === "gold" /* Gold */, children: "Gold" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx37("li", { className: "hide-on-mobile", children: /* @__PURE__ */ jsx37("a", { href: "https://github.com/gobi-tools/css-theme" /* GitHub */, target: "blank", children: /* @__PURE__ */ jsx37("button", { type: "reset", children: /* @__PURE__ */ jsxs37("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx37("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
      /* @__PURE__ */ jsx37("path", { d: "M9 18c-4.51 2-5-2-7-2" })
    ] }) }) }) })
  ] }) });
}

// pages/common/components/HomeLayout.tsx
import { Fragment as Fragment10, jsx as jsx38, jsxs as jsxs38 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function HomeLayout({ theme, children }) {
  return /* @__PURE__ */ jsxs38(Fragment10, { children: [
    /* @__PURE__ */ jsx38("header", { children: /* @__PURE__ */ jsx38(TopNav, { theme }) }),
    /* @__PURE__ */ jsx38("main", { children: /* @__PURE__ */ jsx38("article", { children }) })
  ] });
}

// pages/common/components/DocsLayout.tsx
import { jsx as jsx39, jsxs as jsxs39 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function DocLayout({ theme, children }) {
  const route = useRoute();
  const [isMenuOpen, setIsMenuOpen] = useState7(false);
  const [selectedDoc, setSelectedDoc] = useState7(void 0);
  useEffect2(() => {
    if (typeof window !== "undefined") {
      const doc = RouteMaster.getDocFromRoute(window.location.pathname);
      setSelectedDoc(doc);
    }
  }, []);
  return /* @__PURE__ */ jsx39(HomeLayout, { theme, children: /* @__PURE__ */ jsxs39("div", { className: "row", children: [
    /* @__PURE__ */ jsxs39("aside", { children: [
      /* @__PURE__ */ jsxs39("div", { className: "hide-on-desktop group", children: [
        /* @__PURE__ */ jsxs39("div", { className: "row", children: [
          /* @__PURE__ */ jsx39("div", { children: /* @__PURE__ */ jsx39("button", { onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? /* @__PURE__ */ jsxs39("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx39("path", { d: "M18 6 6 18" }),
            /* @__PURE__ */ jsx39("path", { d: "m6 6 12 12" })
          ] }) : /* @__PURE__ */ jsxs39("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx39("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
            /* @__PURE__ */ jsx39("path", { d: "M7 8h10" }),
            /* @__PURE__ */ jsx39("path", { d: "M7 12h10" }),
            /* @__PURE__ */ jsx39("path", { d: "M7 16h10" })
          ] }) }) }),
          /* @__PURE__ */ jsx39("span", { children: /* @__PURE__ */ jsx39("b", { children: "Chapters" }) })
        ] }),
        /* @__PURE__ */ jsx39("hr", {})
      ] }),
      /* @__PURE__ */ jsxs39("nav", { className: isMenuOpen === false ? "hide-on-mobile" : isMenuOpen === void 0 ? "hide-on-mobile" : "", children: [
        /* @__PURE__ */ jsx39("b", { children: "Basics" }),
        /* @__PURE__ */ jsxs39("ol", { children: [
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "typography" /* Typographty */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("typography" /* Typographty */, theme, route), children: "Typography" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "buttons" /* Buttons */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("buttons" /* Buttons */, theme, route), children: "Buttons" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "tags" /* Tags */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("tags" /* Tags */, theme, route), children: "Tags" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "links" /* Links */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("links" /* Links */, theme, route), children: "Links" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "lists" /* Lists */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("lists" /* Lists */, theme, route), children: "Lists" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "blockquotes" /* Blockquotes */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("blockquotes" /* Blockquotes */, theme, route), children: "Blokquotes" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "summary" /* Summary */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("summary" /* Summary */, theme, route), children: "Summary" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "code" /* Code */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("code" /* Code */, theme, route), children: "Code" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "table" /* Table */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("table" /* Table */, theme, route), children: "Table" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "figures" /* Figures */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("figures" /* Figures */, theme, route), children: "Figures" }) })
        ] }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Forms" }),
        /* @__PURE__ */ jsxs39("ol", { children: [
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "forms-normal" /* FormsNormal */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("forms-normal" /* FormsNormal */, theme, route), children: "Normal" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "forms-check" /* FormsCheck */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("forms-check" /* FormsCheck */, theme, route), children: "Checks & Radios" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "forms-grouped" /* FormsGrouped */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("forms-grouped" /* FormsGrouped */, theme, route), children: "Grouped" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "forms-disabled" /* FormsDisabled */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("forms-disabled" /* FormsDisabled */, theme, route), children: "Disabled" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "forms-validation" /* FormsValidation */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("forms-validation" /* FormsValidation */, theme, route), children: "Validation" }) })
        ] }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Layout" }),
        /* @__PURE__ */ jsx39("ol", { children: /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "header" /* Header */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("header" /* Header */, theme, route), children: "Headers" }) }) }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Dialogs" }),
        /* @__PURE__ */ jsx39("ol", { children: /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "modal" /* Modal */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("modal" /* Modal */, theme, route), children: "Modal" }) }) }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Navigation" }),
        /* @__PURE__ */ jsxs39("ol", { children: [
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "navigation" /* Navigation */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("navigation" /* Navigation */, theme, route), children: "Basic" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "tabs" /* Tabs */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("tabs" /* Tabs */, theme, route), children: "Tabs" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "menu" /* Menu */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("menu" /* Menu */, theme, route), children: "Menu" }) })
        ] }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Extra" }),
        /* @__PURE__ */ jsxs39("ol", { children: [
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "dark-mode" /* DarkMode */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("dark-mode" /* DarkMode */, theme, route), children: "Dark Mode" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "icons" /* Icons */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("icons" /* Icons */, theme, route), children: "Icons" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "mobile" /* Mobile */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("mobile" /* Mobile */, theme, route), children: "Mobile" }) })
        ] }),
        /* @__PURE__ */ jsx39("br", {}),
        /* @__PURE__ */ jsx39("b", { children: "Custom" }),
        /* @__PURE__ */ jsxs39("ol", { children: [
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "cards" /* Cards */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("cards" /* Cards */, theme, route), children: "Cards" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "cols" /* Columns */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("cols" /* Columns */, theme, route), children: "Columns" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "containers" /* Containers */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("containers" /* Containers */, theme, route), children: "Containers" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "groups" /* Groups */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("groups" /* Groups */, theme, route), children: "Groups" }) }),
          /* @__PURE__ */ jsx39("li", { "aria-selected": selectedDoc === "classes" /* Classes */, children: /* @__PURE__ */ jsx39("a", { href: RouteMaster.doc("classes" /* Classes */, theme, route), children: "Classes" }) })
        ] }),
        /* @__PURE__ */ jsx39("br", {})
      ] })
    ] }),
    /* @__PURE__ */ jsx39("div", { children })
  ] }) });
}

// pages/pages/docs/forms/FormsDisabled.tsx
import { jsx as jsx40, jsxs as jsxs40 } from "https://esm.sh/react@19.2.0/jsx-runtime";
function FormsDisabled({ theme }) {
  return /* @__PURE__ */ jsx40(DocLayout, { theme, children: /* @__PURE__ */ jsxs40("section", { className: "row", children: [
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsxs40("p", { children: [
        "A form can have all or part of its inputs set as ",
        /* @__PURE__ */ jsx40("code", { children: "disabled" }),
        " to prevent any user interaction."
      ] }),
      /* @__PURE__ */ jsx40("form", { children: /* @__PURE__ */ jsxs40("fieldset", { children: [
        /* @__PURE__ */ jsx40("legend", { children: "Disabled form" }),
        /* @__PURE__ */ jsxs40("label", { htmlFor: "email", children: [
          /* @__PURE__ */ jsx40("span", { children: "Email" }),
          /* @__PURE__ */ jsx40("input", { type: "email", id: "email", placeholder: "N/A", disabled: true })
        ] }),
        /* @__PURE__ */ jsxs40("label", { htmlFor: "address", children: [
          /* @__PURE__ */ jsx40("span", { children: "Address" }),
          /* @__PURE__ */ jsx40("input", { type: "text", id: "address", placeholder: "Address", disabled: true })
        ] }),
        /* @__PURE__ */ jsxs40("label", { htmlFor: "delivery", children: [
          /* @__PURE__ */ jsx40("span", { children: "Delivery" }),
          /* @__PURE__ */ jsxs40("select", { id: "delivery", defaultValue: "fast", disabled: true, children: [
            /* @__PURE__ */ jsx40("option", { value: "fast", children: "Fast" }),
            /* @__PURE__ */ jsx40("option", { value: "standard", children: "Standard" })
          ] })
        ] }),
        /* @__PURE__ */ jsx40("input", { type: "submit", value: "Submit", disabled: true })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx40("div", { children: /* @__PURE__ */ jsx40("pre", { children: /* @__PURE__ */ jsx40("code", { children: `<form>
  <fieldset>
    <legend>
      Disabled form
    </legend>

    <label for="email">
      <span>
        Email
      </span>
      <input 
        type="email" 
        id="email" 
        placeholder="N/A" 
        disabled/>
    </label>
        
    <label for="address">
      <span>
        Address
      </span>
      <input 
        type="text" 
        id="address" 
        placeholder="Address" 
        disabled/>
    </label>
    
    <label form="delivery">
      <span>
        Delivery
      </span>
      <select 
        id="delivery" 
        disabled>
        <option 
          value="fast" 
          selected>
          Fast
        </option>
        <option 
          value="standard">
          Standard
        </option>
      </select>
    </label>
    
    <input 
      type="submit" 
      value="Submit" 
      disabled/>
  </fieldset>
</form>` }) }) })
  ] }) });
}

// pages/pages/docs/forms/react-srv-hydrate-FormsDisabled.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(FormsDisabled, globalThis.__INITIAL_PROPS__ || {})
  );
}
