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
      /* @__PURE__ */ jsx("li", { className: "align-center", children: /* @__PURE__ */ jsx("h3", { children: "My Newsletter" }) }),
      /* @__PURE__ */ jsx("li", { className: "gap" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { children: "Subscribe" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs("hgroup", { children: [
        /* @__PURE__ */ jsx("h1", { children: "Lorem ipsum dolor sit amet" }),
        /* @__PURE__ */ jsx("h5", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("img", { className: "circle", width: "40", height: "40", src: "https://picsum.photos/id/50/30/30" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: "Author Name" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("small", { children: "Published today \u2022 Paid" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("hr", {}),
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
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }),
      /* @__PURE__ */ jsx("p", { children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." }),
      /* @__PURE__ */ jsx("p", { children: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" }),
      /* @__PURE__ */ jsxs("figure", { children: [
        /* @__PURE__ */ jsx("img", { width: "100%", height: "480", src: "https://picsum.photos/id/16/640/480", alt: "ssample image " }),
        /* @__PURE__ */ jsx("figcaption", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" }),
      /* @__PURE__ */ jsxs("blockquote", { children: [
        /* @__PURE__ */ jsx("p", { children: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat" }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("i", { children: "Author, quote" }) })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae." }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("div", { className: "align-center row", children: [
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { children: [
          /* @__PURE__ */ jsx("p", { children: "This is a reader supported newsletter. Subscribe to get the latest." }),
          /* @__PURE__ */ jsx("input", { id: "email", required: true, type: "email", placeholder: "Type your email..." }),
          /* @__PURE__ */ jsx("input", { id: "subscribe", type: "submit", value: "Subscribe" })
        ] }) }),
        /* @__PURE__ */ jsx("div", {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Terms of service" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Privacy" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "About" }) })
    ] }) }) })
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
