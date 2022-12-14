import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <div className="h-full">
            <Header />
            <div className="min-h-full">
              <div className="mx-auto max-w-4xl p-2">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="signup" element={<SignUp />} />
                </Routes>
              </div>
            </div>
          </div>
         )}
      />
    </Routes>
  );
}
