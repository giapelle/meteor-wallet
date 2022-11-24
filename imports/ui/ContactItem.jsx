import { Meteor } from "meteor/meteor";
import React, { memo } from "react";
import PropTypes from "prop-types";

const ContactItem = memo(({ contact }) => {
  const archiveContact = (event, contactId) => {
    event.preventDefault();
    Meteor.call("contacts.archive", { contactId });
  };

  return (
    <li className="flex items-center justify-between space-x-3 py-4">
      <div className="flex min-w-0 flex-1 items-center space-x-3">
        <div className="shrink-0">
          {contact.imageUrl && (<img className="h-10 w-10 rounded-full" src={contact.imageUrl} alt="" />)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">{contact.name}</p>
          <p className="truncate text-sm font-medium text-gray-500">{contact.email}</p>
          <p className="truncate text-sm font-medium text-gray-500">{contact.walletId}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={(e) => archiveContact(e, contact._id)}
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Archive
        </button>
      </div>
    </li>
  );
});

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    imageUrl: PropTypes.string,
    walletId: PropTypes.string,
  }).isRequired,
};
