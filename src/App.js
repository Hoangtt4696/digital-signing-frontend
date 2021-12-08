import React from 'react';
import withErrorHandler from 'utils/withErrorHandler';
import API from 'utils/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'helps/PrivateRoute';
import NoMatch from 'pages/NoMatch';
import LoginPage from 'pages/Login';
import HomePage from 'pages/Home';
import SigningDocumentPage from 'pages/SigningDocument';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signing-document" component={SigningDocumentPage} />
        </PrivateRoute>
        <Route path="*" title="404">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default withErrorHandler(App, API);
