// ContactPage.js
import React from 'react';
import { useAuth } from './AuthContext';

const ContactPage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Contact</h2>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ContactPage;
