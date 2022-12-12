import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="min-h-full">
          <div className="mx-auto max-w-4xl p-2">
            <Home />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
