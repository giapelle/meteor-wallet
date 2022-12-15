import { Accounts } from "meteor/accounts-base";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "../helpers/routePaths";
import ErrorAlert from "./components/ErrorAlert";
import ContactInput from "./Home/ContactInput";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const signUp = () => {
    Accounts.createUser({
      email,
      password,
    }, (err) => {
      if (err) {
        setError(err.reason || err.error);
        return;
      }
      navigate(RoutePaths.HOME);
    });
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg font-medium">Sign Up</h3>
      <form className="mt-6 w-96">
        {error && <ErrorAlert message={error} />}
        <div className="grid grid-cols-6 gap-6">
          <ContactInput
            type="email"
            label="Email"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <ContactInput
            type="password"
            label="Password"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4 flex flex-auto justify-end space-x-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => navigate(RoutePaths.HOME)}
          >
            Go back home
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            onClick={() => signUp()}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
