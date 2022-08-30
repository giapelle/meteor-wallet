import React, { useState } from "react";
import Contacts from "../api/contacts";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = () => {
    Contacts.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  };

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="imageUrl">
          Image URL
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="button" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
