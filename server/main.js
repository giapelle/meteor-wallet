import { Meteor } from "meteor/meteor";

import "../imports/api/contacts";
import "../imports/api/contacts/method";
import "../imports/api/contacts/publications";
import "../imports/api/transactions";
import "../imports/api/transactions/method";
import Wallets from "../imports/api/wallets";
import "../imports/api/wallets/publications";

Meteor.startup(() => {
  if (!Wallets.find().count()) {
    Wallets.insert({
      balance: 0,
      currency: "USD",
      createdAt: new Date(),
    });
  }
});
