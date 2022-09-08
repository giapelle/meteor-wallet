import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import Transactions, { TRANSFER_TYPE, ADD_TYPE } from ".";

Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  "transactions.insert": (args) => {
    const schema = new SimpleSchema({
      isTransferring: {
        type: Boolean,
      },
      sourceWalletId: {
        type: String,
      },
      destinationWalletId: {
        type: String,
        optional: !args.isTransferring,
      },
      amount: {
        type: Number,
        min: 1,
      },
    });
    const cleanArgs = schema.clean(args);
    schema.validate(cleanArgs);

    return Transactions.insert({
      type: cleanArgs.isTransferring ? TRANSFER_TYPE : ADD_TYPE,
      sourceWalletId: cleanArgs.sourceWalletId,
      destinationWalletId: cleanArgs.destinationWalletId,
      amount: cleanArgs.amount,
      createdAt: new Date(),
    });
  },
});
