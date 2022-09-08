import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import Wallets from "../wallets";

export const TRANSFER_TYPE = "TRANSFER";
export const ADD_TYPE = "ADD";

class TransactionsCollection extends Mongo.Collection {
  insert(transaction, callback) {
    if (transaction.type === TRANSFER_TYPE) {
      const sourceWallet = Wallets.findOne(transaction.sourceWalletId);
      if (!sourceWallet) {
        throw new Meteor.Error("Source wallet non found.");
      }
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
      const sourceWallet = Wallets.findOne(transaction.sourceWalletId);
      if (!sourceWallet) {
        throw new Meteor.Error("Source wallet non found.");
      }
      Wallets.update(transaction.sourceWalletId, {
        $inc: { balance: transaction.amount },
      });
    }
    return super.insert(transaction, callback);
  }
}

const Transactions = new TransactionsCollection("transactions");
export default Transactions;

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
