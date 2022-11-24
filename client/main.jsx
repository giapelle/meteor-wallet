import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import App from "../ui/App";

import "../api/contacts/method";
import "../api/transactions/method";

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
