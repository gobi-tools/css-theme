// showcase/app/react-srv-hydrate-App.jsx
import React from "https://esm.sh/react@19.2.0";
import { hydrateRoot } from "https://esm.sh/react-dom@19.2.0/client";

// showcase/app/App.tsx
import { Fragment, jsx, jsxs } from "https://esm.sh/react@19.2.0/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Register" }),
      /* @__PURE__ */ jsx("form", { method: "post", children: /* @__PURE__ */ jsxs("fieldset", { children: [
        /* @__PURE__ */ jsx("legend", { children: "Enter new account details" }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Email" }) }),
          /* @__PURE__ */ jsx("input", { type: "email", required: true, id: "user-email", placeholder: "Email address" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Password" }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "user-password",
              name: "password",
              type: "password",
              required: true,
              minLength: 8,
              placeholder: "Password",
              pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$",
              autoComplete: "new-password"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("blockquote", { className: "primary", children: "The password must be at least 8 characters long and must contain letters, numbers and special characters." }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("b", { children: "Confim password" }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "confirm-password",
              name: "confirm-password",
              type: "password",
              required: true,
              minLength: 8,
              placeholder: "Confim password",
              pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsxs("div", { className: "row disable-mobile", children: [
          /* @__PURE__ */ jsx("button", { type: "reset", children: "Login" }),
          /* @__PURE__ */ jsx("div", {}),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "success", children: "Register" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { children: [
      "Learn more about this service ",
      /* @__PURE__ */ jsx("a", { href: "", children: "here" }),
      "."
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
