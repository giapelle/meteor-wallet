import { Meteor } from "meteor/meteor";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import Contacts from "../api/contacts";

export default function ContactList() {
  const contacts = useTracker(() => Contacts.find({}, { sort: { createdAt: -1 } }).fetch());

  const removeContact = (event, contactId) => {
    event.preventDefault();
    Meteor.call("contacts.remove", { contactId });
  };

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {contacts.map((contact) => (
            <li key={contact._id} className="py-4 flex items-center justify-between space-x-3">
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={contact.imageUrl} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                  <p className="text-sm font-medium text-gray-500 truncate">{contact.email}</p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={(e) => removeContact(e, contact._id)}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
