// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lấy dữ liệu từ localStorage khi khởi tạo
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") || false
  );
  const [userData, setUserData] = useState(
    () => localStorage.getItem("userData") || {}
  );

  // Lưu vào localStorage khi `isAuthenticated` hoặc `userData` thay đổi
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("userData", userData);
  }, [isAuthenticated, userData]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
