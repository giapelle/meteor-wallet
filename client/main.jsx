import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import App from "../imports/ui/App";

import "../imports/api/contacts/method";
import "../imports/api/transactions/method";

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
