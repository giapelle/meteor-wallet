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
  SimpleSchema.defineValidationErrorTransform((error) => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = "validation-error";
    ddpError.details = error.details;
    return ddpError;
  });

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
