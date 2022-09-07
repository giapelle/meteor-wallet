import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Transactions from ".";

Meteor.methods({
  "transactions.insert": ({
    isTransferring, sourceWalletId, destinationWalletId, amount,
  }) => {
    check(isTransferring, Boolean);
    check(sourceWalletId, String);
    check(destinationWalletId, String);
    check(amount, Number);

    if (!sourceWalletId) throw new Meteor.Error("Source wallet is required.");
    if (isTransferring && !destinationWalletId) throw new Meteor.Error("Destination wallet is required.");
    if (!amount || amount <= 0) throw new Meteor.Error("Amount is required.");

    return Transactions.insert({
      type: isTransferring ? "TRANSFER" : "ADD",
      sourceWalletId,
      destinationWalletId,
      amount,
      createdAt: new Date(),
    });
  },
});
