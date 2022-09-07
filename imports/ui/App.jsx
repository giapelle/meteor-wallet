import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Wallet from "./Wallet";

export default function App() {
  return (
    <div>
      <Header />
      <div className="min-h-full">
        <div className="max-w-4xl mx-auto p-2">
          <Wallet />
          <ContactForm />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
