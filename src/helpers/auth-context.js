"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogIn: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = Cookies.get("token");
    if (userLoggedIn) {
      onLogIn();
    }
  }, []);

  const onLogIn = () => {
    setLoggedIn(true);
  };

  const onLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLogedIn, onLogIn, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
