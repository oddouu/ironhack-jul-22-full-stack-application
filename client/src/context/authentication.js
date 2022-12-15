import React, { useState, createContext, useContext, useEffect } from 'react';
import { verify } from '../services/authentication';

export const AuthContext = createContext();

export const AuthProviderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // We need to add the logic to retrieve the user info from the server
  const [authToken, setAuthToken] = useState(
    window.localStorage.getItem('AUTH_TOKEN')
  );

  useEffect(() => {
    if (authToken) {
      window.localStorage.setItem('AUTH_TOKEN', authToken);
    }
  }, [authToken]);

  useEffect(() => {
    if (authToken) {
      verify(authToken).then((data) => {
        const { user, authToken } = data;
        setUser(user);
        window.localStorage.setItem('AUTH_TOKEN', authToken);
      });
    }
  }, [authToken]);

  const eraseToken = () => {
    window.localStorage.removeItem('AUTH_TOKEN');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        setIsLoading,
        setUser,
        authToken,
        setAuthToken,
        eraseToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom react hook
export const useAuthContext = () => useContext(AuthContext);
