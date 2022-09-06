import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import ContactInput from "./ContactInput";
import WarningNotification from "./WarningNotification";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState();

  const saveContact = () => {
    if (error) setError();
    Meteor.call("contacts.insert", { name, email, imageUrl }, (err) => {
      if (err) {
        setError(err.error);
      } else {
        setName("");
        setEmail("");
        setImageUrl("");
      }
    });
  };

  return (
    <>
      <form className="mt-6">
        <div className="grid grid-cols-6 gap-6">
          <ContactInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ContactInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ContactInput
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="px-2 py-3 text-right">
          <button
            type="button"
            onClick={saveContact}
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Save Contact
          </button>
        </div>
      </form>
      {error && (
        <WarningNotification
          title="Unable to save contact!"
          message={error}
          onClose={() => setError()}
        />
      )}
    </>
  );
}
