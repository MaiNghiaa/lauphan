import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <main className=" relative">
      <Header />
      <div id="body">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
