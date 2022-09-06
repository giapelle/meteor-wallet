import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import ContactInput from "./ContactInput";
import ErrorAlert from "./components/ErrorAlert";
import SuccessAlert from "./components/SuccessAlert";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => { setError(""); }, 5000);
  };

  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => { setSuccess(""); }, 5000);
  };

  const saveContact = () => {
    Meteor.call("contacts.insert", { name, email, imageUrl }, (err) => {
      if (err) {
        showError({ message: err.error });
      } else {
        setName("");
        setEmail("");
        setImageUrl("");
        showSuccess({ message: "Contact saved." });
      }
    });
  };

  return (
    <form className="mt-6">
      {error && <ErrorAlert message={error} />}
      {success && <SuccessAlert message={success} />}
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
  );
}
