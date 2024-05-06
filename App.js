// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import OverviewPage from './OverviewPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/overview" component={OverviewPage} />
          <PrivateRoute path="/contact" component={ContactPage} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
