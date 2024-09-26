import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false); // New state for doctor
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, isDoctor, setIsDoctor, user, setUser }}>
      {children}
    </Context.Provider>
  );
};
