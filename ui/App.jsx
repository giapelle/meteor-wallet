import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <div className="h-full">
              <Header />
              <div className="min-h-full">
                <div className="mx-auto max-w-4xl p-2">
                  <Routes>
                    <Route index element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
         )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
