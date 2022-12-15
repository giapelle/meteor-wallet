import { Meteor } from "meteor/meteor";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../helpers/routePaths";
import useLoggedUser from "../../hooks/useLoggedUser";

export default function Header() {
  const navigate = useNavigate();
  const [loggedUser, loadingLoggedUser] = useLoggedUser();

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex grow items-center justify-between">
            <Link to={RoutePaths.HOME}>
              <span className="sr-only">Meteor Wallet</span>
              <img className="h-10 w-auto" src="/images/logo.png" alt="" />
            </Link>
            {!loadingLoggedUser && !loggedUser && (
              <button
                type="button"
                className="font-bold text-white"
                onClick={() => navigate(RoutePaths.SIGN_UP)}
              >
                Sign Up
              </button>
            )}
            {!loadingLoggedUser && loggedUser && (
              <button
                type="button"
                className="font-bold text-white"
                onClick={() => Meteor.logout()}
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
