import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const Wallets = new Mongo.Collection("wallets");

const WalletsSchema = new SimpleSchema({
  balance: {
    type: Number,
    min: 0,
    defaultValue: 0,
  },
  currency: {
    type: String,
    allowedValues: ["USD", "EUR"],
    defaultValue: "USD",
  },
  createdAt: Date,
});
Wallets.attachSchema(WalletsSchema);

export default Wallets;
