// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = (email, password) => {
    // Simulamos la autenticación, comprobando los credenciales contra valores estáticos
    if (email === 'admin@admin.com' && password === 'admin') {
      const user = { email };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      alert('Credenciales inválidas');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
