import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Contacts from ".";

Meteor.methods({
  "contacts.insert": ({
    name, email, imageUrl, walletId,
  }) => {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(walletId, String);
    if (!name) throw new Meteor.Error("Name is required.");
    if (!walletId) throw new Meteor.Error("Wallet ID is required.");
    return Contacts.insert({
      name,
      email,
      imageUrl,
      walletId,
      createdAt: new Date(),
    });
  },
  "contacts.remove": ({ contactId }) => {
    check(contactId, String);
    Contacts.remove(contactId);
  },
  "contacts.archive": ({ contactId }) => {
    check(contactId, String);
    Contacts.update({ _id: contactId }, { $set: { archived: true } });
  },
});
