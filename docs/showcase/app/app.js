// showcase/app/react-srv-hydrate-App.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/app/App.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function Header() {
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("nav", { className: "disable-mobile", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
        /* @__PURE__ */ jsx("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Home" })
    ] }) }),
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { type: "reset", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
    ] }) }) })
  ] }) }) });
}
function Menu() {
  return /* @__PURE__ */ jsxs("menu", { children: [
    /* @__PURE__ */ jsx("li", { "aria-selected": true, children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }),
        /* @__PURE__ */ jsx("rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Dashboard" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "19", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "16", cy: "12", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "20", cy: "19", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "4", cy: "19", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "12", r: "2" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Inventory" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }),
        /* @__PURE__ */ jsx("path", { d: "M15 18H9" }),
        /* @__PURE__ */ jsx("path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }),
        /* @__PURE__ */ jsx("circle", { cx: "17", cy: "18", r: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "7", cy: "18", r: "2" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Shipping" })
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M10 12h4" }),
        /* @__PURE__ */ jsx("path", { d: "M10 8h4" }),
        /* @__PURE__ */ jsx("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }),
        /* @__PURE__ */ jsx("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }),
        /* @__PURE__ */ jsx("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Supplier" })
    ] }) })
  ] });
}
function Search() {
  return /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("fieldset", { children: [
    /* @__PURE__ */ jsx("legend", { children: "Search params" }),
    /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Params" }) }),
        /* @__PURE__ */ jsx("input", { type: "search", id: "search", name: "search", placeholder: "Search" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Category" }) }),
        /* @__PURE__ */ jsxs("select", { id: "category", name: "category", children: [
          /* @__PURE__ */ jsx("option", { selected: true, children: "Gold" }),
          /* @__PURE__ */ jsx("option", { children: "Others" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Status" }) }),
        /* @__PURE__ */ jsxs("select", { id: "status", name: "status", children: [
          /* @__PURE__ */ jsx("option", { selected: true, children: "Active" }),
          /* @__PURE__ */ jsx("option", { children: "Inactive" })
        ] })
      ] }) })
    ] })
  ] }) });
}
function Table() {
  const data = [
    {
      "name": "Acme Logistics Ltd",
      "is_gold": true,
      "is_active": true,
      "email": "office@acmelogistics.example"
    },
    {
      "name": "Northbridge Solutions",
      "is_gold": false,
      "is_active": true,
      "email": "contact@northbridge.example"
    },
    {
      "name": "Summit Retail Group",
      "is_gold": true,
      "is_active": false,
      "email": "admin@summitretail.example"
    },
    {
      "name": "Blue Horizon Consulting",
      "is_gold": false,
      "is_active": true,
      "email": "office@bluehorizon.example"
    },
    {
      "name": "Greenfield Industries",
      "is_gold": true,
      "is_active": true,
      "email": "support@greenfield.example"
    },
    {
      "name": "Evercrest Partners",
      "is_gold": false,
      "is_active": false,
      "email": "hello@evercrest.example"
    },
    {
      "name": "Redwood Technologies",
      "is_gold": true,
      "is_active": true,
      "email": "info@redwoodtech.example"
    },
    {
      "name": "Sterling Procurement",
      "is_gold": false,
      "is_active": true,
      "email": "office@sterlingprocurement.example"
    },
    {
      "name": "Vertex Manufacturing",
      "is_gold": true,
      "is_active": false,
      "email": "contact@vertexmfg.example"
    },
    {
      "name": "Oakstone Services",
      "is_gold": false,
      "is_active": true,
      "email": "admin@oakstone.example"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs("table", { children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { children: "Partner" }),
      /* @__PURE__ */ jsx("th", { children: "Status" }),
      /* @__PURE__ */ jsx("th", { children: "Email" }),
      /* @__PURE__ */ jsx("th", { children: "Action" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: data.map((r) => {
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: r.name }),
        /* @__PURE__ */ jsxs("td", { children: [
          r.is_active && /* @__PURE__ */ jsx("mark", { className: "success", children: "active" }),
          !r.is_active && /* @__PURE__ */ jsx("mark", { className: "error", children: "active" })
        ] }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("a", { href: "", children: r.email }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
            /* @__PURE__ */ jsx("path", { d: "m15 5 4 4" })
          ] }) }),
          /* @__PURE__ */ jsx("button", { disabled: !r.is_gold, type: "reset", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }) }) })
        ] }) })
      ] }, r.name);
    }) })
  ] }) });
}
function Pagination() {
  return /* @__PURE__ */ jsxs("p", { role: "group", className: "align-center", children: [
    /* @__PURE__ */ jsx("button", { type: "reset", children: "Prev" }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "1" }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "2" }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "..." }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "17" }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "18" }),
    /* @__PURE__ */ jsx("button", { type: "reset", children: "Next" })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsx(Menu, {}) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Search, {}),
        /* @__PURE__ */ jsx(Table, {}),
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsx(Pagination, {})
      ] })
    ] }) })
  ] });
}

// showcase/app/react-srv-hydrate-App.jsx
var root = document.getElementById("root");
if (!root) {
  throw new Error("react-srv: Could not find hydration root.");
}
if (!globalThis.__REACT_SRV_HYDRATED__) {
  globalThis.__REACT_SRV_HYDRATED__ = true;
  hydrateRoot(
    root,
    React.createElement(App, globalThis.__INITIAL_PROPS__ || {})
  );
}
