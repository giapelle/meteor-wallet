import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import "../imports/api/contacts";
import "../imports/api/contacts/method";
import "../imports/api/contacts/publications";
import "../imports/api/transactions";
import "../imports/api/transactions/method";
import Wallets from "../imports/api/wallets";
import "../imports/api/wallets/publications";

const walletSchema = new SimpleSchema({
  balance: { type: Number, min: 0, defaultValue: 0 },
  currency: { type: String, allowedValues: ["USD", "EUR"], defaultValue: "USD" },
  createdAt: Date,
});

Meteor.startup(() => {
  SimpleSchema.defineValidationErrorTransform((error) => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = "validation-error";
    ddpError.details = error.details;
    return ddpError;
  });

  if (!Wallets.find().count()) {
    const walletData = {
      balance: 5,
      currency: "USD",
      createdAt: new Date(),
    };
    const cleanWallet = walletSchema.clean(walletData);
    walletSchema.validate(cleanWallet);
    Wallets.insert(cleanWallet);
  }
});
