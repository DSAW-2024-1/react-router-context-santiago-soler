// HomePage.js
import React from 'react';
import { useAuth } from './AuthContext';

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
