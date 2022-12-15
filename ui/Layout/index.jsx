import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-full">
      <Header />
      <div className="min-h-full">
        <div className="mx-auto max-w-4xl p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
