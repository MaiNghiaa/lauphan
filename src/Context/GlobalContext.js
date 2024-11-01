// GlobalContext.js
import React, { createContext, useEffect, useState } from "react";

// Tạo context mới
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Biến toàn cục
  const [navClick, setNavClick] = useState("");

  useEffect(() => {
    const currentPath = sessionStorage.getItem("path");
    if (currentPath) {
      setNavClick(currentPath);
    }
  }, []);

  const updateNavClick = (path) => {
    setNavClick(path);
    sessionStorage.setItem("path", path);
  };

  return (
    <GlobalContext.Provider value={{ navClick, updateNavClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
