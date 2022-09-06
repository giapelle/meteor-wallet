import { Meteor } from "meteor/meteor";
import Contacts from ".";

Meteor.publish("allContacts", () => Contacts.find());
