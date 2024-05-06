// OverviewPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const OverviewPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Overview</h2>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default OverviewPage;

