import { Meteor } from "meteor/meteor";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "../ui/App";

import "../api/contacts/method";
import "../api/transactions/method";

Meteor.startup(() => {
  const root = createRoot(document.getElementById("react-target"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
