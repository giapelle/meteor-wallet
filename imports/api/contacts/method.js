import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import Contacts from ".";

Meteor.methods({
  "contacts.insert": (args) => {
    const schema = new SimpleSchema({
      name: {
        type: String,
      },
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
      },
      imageUrl: {
        type: String,
        optional: true,
      },
      walletId: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
      },
    });
    const cleanArgs = schema.clean(args);
    schema.validate(cleanArgs);

    return Contacts.insert({
      ...cleanArgs,
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
