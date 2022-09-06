import { Meteor } from "meteor/meteor";
import Contacts from ".";

Meteor.methods({
  "contacts.insert": ({ name, email, imageUrl }) => {
    if (!name) {
      throw new Meteor.Error("Name is required.");
    }
    return Contacts.insert({ name, email, imageUrl });
  },
});
