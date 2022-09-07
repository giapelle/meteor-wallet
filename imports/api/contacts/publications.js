import { Meteor } from "meteor/meteor";
import Contacts from ".";

Meteor.publish("allContacts", () => Contacts.find());

Meteor.publish("contacts", () => Contacts.find({ archived: { $ne: true } }));
