import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-indigo-800">
        Meteor Wallet + TailWind!
      </h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
