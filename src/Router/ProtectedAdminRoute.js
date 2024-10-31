// ProtectedAdminRoute.js
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
    // Update the role if it changes in localStorage (even in another tab)
    const handleStorageChange = () => {
      setUserRole(localStorage.getItem("userRole"));
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Redirect if the user is not an admin
  if (!userRole || userRole !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedAdminRoute;
