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
        <div className="mx-auto max-w-4xl p-2">
          <Wallet />
          <ContactForm />
          <ContactList />
        </div>
      </div>
    </div>
  );
}
