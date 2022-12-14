import { Meteor } from "meteor/meteor";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../ui/App";
import ErrorPage from "../ui/ErrorPage";

import "../api/contacts/method";
import "../api/transactions/method";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

Meteor.startup(() => {
  const root = createRoot(document.getElementById("react-target"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
