import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import Contacts from "../api/contacts";

function ContactList() {
  const contacts = useTracker(() => Contacts.find({}).fetch());
  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.name}
            {" "}
            -
            {" "}
            {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
