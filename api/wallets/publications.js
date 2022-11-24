import { Meteor } from "meteor/meteor";
import Wallets from ".";

Meteor.publish("wallets", () => Wallets.find());
