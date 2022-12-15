import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RoutePaths } from "../helpers/routePaths";
import NotFound from "./NotFound";
import Layout from "./Layout";
import Home from "./Home";
import SignUp from "./SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePaths.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RoutePaths.SIGN_UP} element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
