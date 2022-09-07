import React from "react";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import ContactItem from "./ContactItem";
import Contacts from "../api/contacts";

export default function ContactList() {
  const isLoading = useSubscribe("contacts");
  const contacts = useFind(() => Contacts.find({ archived: { $ne: true } }, { sort: { createdAt: -1 } }));

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {!isLoading() ? "Contact List" : "Loading..."}
        </h3>
        <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {contacts.map((contact) => (
            <ContactItem
              key={contact._id}
              contact={contact}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
