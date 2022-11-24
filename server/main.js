import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import "../api/contacts";
import "../api/contacts/method";
import "../api/contacts/publications";
import "../api/transactions";
import "../api/transactions/method";
import Wallets from "../api/wallets";
import "../api/wallets/publications";

Meteor.startup(() => {
  SimpleSchema.defineValidationErrorTransform((error) => new Meteor.Error("validation-error", error.message, JSON.stringify(error.details)));

  if (!Wallets.find().count()) {
    Array(10).fill().forEach(() => {
      Wallets.insert({
        balance: Math.floor(Math.random() * 100) + 1,
        currency: "USD",
        createdAt: new Date(),
      });
    });
  }
});
