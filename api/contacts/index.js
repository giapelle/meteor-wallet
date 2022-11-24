import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const Contacts = new Mongo.Collection("contacts");

const ContactsSchema = new SimpleSchema({
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
  createdAt: {
    type: Date,
  },
  archived: {
    type: Boolean,
    optional: true,
  },
});
Contacts.attachSchema(ContactsSchema);

export default Contacts;
