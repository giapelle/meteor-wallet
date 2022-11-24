import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import Wallets from "../wallets";

export const TRANSFER_TYPE = "TRANSFER";
export const ADD_TYPE = "ADD";

const Transactions = new Mongo.Collection("transactions");
export default Transactions;

Transactions.before.insert((_, transaction) => {
  if (transaction.type === TRANSFER_TYPE) {
    const sourceWallet = Wallets.findOne(transaction.sourceWalletId);
    if (sourceWallet.balance < transaction.amount) {
      throw new Meteor.Error("Insufficients funds.");
    }
    Wallets.update(transaction.sourceWalletId, {
      $inc: { balance: -transaction.amount },
    });
    Wallets.update(transaction.destinationWalletId, {
      $inc: { balance: transaction.amount },
    });
  }
  if (transaction.type === ADD_TYPE) {
    Wallets.update(transaction.sourceWalletId, {
      $inc: { balance: transaction.amount },
    });
  }
});

const TransactionsSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: [TRANSFER_TYPE, ADD_TYPE],
  },
  sourceWalletId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  destinationWalletId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
  },
  amount: {
    type: Number,
    min: 1,
  },
});
Transactions.attachSchema(TransactionsSchema);
