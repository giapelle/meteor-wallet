import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import "../imports/api/contacts";
import "../imports/api/contacts/method";
import "../imports/api/contacts/publications";
import "../imports/api/transactions";
import "../imports/api/transactions/method";
import Wallets from "../imports/api/wallets";
import "../imports/api/wallets/publications";

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
