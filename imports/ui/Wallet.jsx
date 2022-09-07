import { useSubscribe, useFind } from "meteor/react-meteor-data";
import React, { useState } from "react";
import Modal from "./components/Modal";
import SelectContact from "./components/SelectContact";
import Contacts from "../api/contacts";

export default function Wallet() {
  const isLoadingContacts = useSubscribe("contacts");
  const contacts = useFind(() => Contacts.find({ archived: { $ne: true } }, { sort: { name: 1 } }));

  const [open, setOpen] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [amount, setAmount] = useState(0);
  const [destinationWallet, setDestinationWallet] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const wallet = {
    _id: "123456",
    balance: 5,
    currency: "USD",
  };

  const addTransaction = () => {
    console.log("New transaction", amount, destinationWallet);
  };

  return (
    <>
      <div className="flex font-sans shadow-md my-10">
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <div className="w-full flex-none text-sm font-medium text-gray-500">
              Main account
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Wallet ID:
            </div>
            <h1 className="flex-auto text-lg font-semibold text-gray-700">
              {wallet._id}
            </h1>
            <div className="text-2xl font-bold text-gray-700">
              {`${wallet.balance} ${wallet.currency}`}
            </div>
          </div>
          <div className="flex space-x-4 text-sm font-medium">
            <div className="flex-auto flex space-x-4 mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsTransferring(false);
                  setOpen(true);
                }}
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Add money
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsTransferring(true);
                  setOpen(true);
                }}
                disabled={isLoadingContacts()}
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Tranfer money
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={isTransferring ? "Transfer money to other wallet" : "Add money to your wallet"}
        body={(
          <>
            {isTransferring && (
              <SelectContact
                title="Destination contact"
                contact={destinationWallet}
                setContact={setDestinationWallet}
                contacts={contacts}
              />
            )}
            <div className="mt-2">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => { setAmount(e.target.value); }}
                  placeholder="0.00"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
            </div>
          </>
        )}
        footer={(
          <button
            type="button"
            onClick={addTransaction}
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            {isTransferring ? "Transfer" : "Add"}
          </button>
        )}
        errorMessage={errorMessage}
      />
    </>
  );
}
