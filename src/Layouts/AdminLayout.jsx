// Layouts/AdminLayout.js
import React from "react";
import Sidebar from "../Admin/Components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const userRole = localStorage.getItem("userRole");
  return (
    <main className=" relative">
      {userRole && userRole === "admin" ? <Sidebar /> : " "}

      <div className="body ml-[256px]">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
