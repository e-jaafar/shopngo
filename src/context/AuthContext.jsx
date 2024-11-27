import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    // Simulation d'une vérification d'identifiants
    if (username === 'user123' && password === 'password123') {
      const userData = {
        username: username,
        name: 'John Doe',
        email: 'john@example.com'
      };
      setUser(userData);
      setIsAuthenticated(true);
      return Promise.resolve(userData);
    }
    return Promise.reject(new Error('Invalid credentials'));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 