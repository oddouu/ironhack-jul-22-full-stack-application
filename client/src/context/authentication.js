import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // We need to add the logic to retrieve the user info from the server
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
