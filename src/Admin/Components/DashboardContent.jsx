// components/DashboardContent.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginManagement from "../Pages/LoginManagement";
import RegisterManagement from "../Pages/RegisterManagement";
import OrderManagement from "../Pages/OrderManagement";
import NewsManagement from "../Pages/NewsManagement";

function DashboardContent() {
  return (
    <div className="ml-64 p-8">
      <Routes>
        <Route path="/login-management" element={<LoginManagement />} />
        <Route path="/register-management" element={<RegisterManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/news-management" element={<NewsManagement />} />
      </Routes>
    </div>
  );
}

export default DashboardContent;
