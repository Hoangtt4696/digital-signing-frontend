import React from 'react';
import withErrorHandler from 'utils/withErrorHandler';
import API from 'utils/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'helps/PrivateRoute';
import NoMatch from 'pages/NoMatch';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LoginPage from 'pages/Login';
import HomePage from 'pages/Home';
import SigningDocumentPage from 'pages/SigningDocument';
import DashboardPage from 'pages/Dashboard';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Router>
        <Switch>
          <PrivateRoute component={DashboardPage}>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/signing-document" component={SigningDocumentPage} />
          </PrivateRoute>
          <Route exact path="/login" component={LoginPage} />
          <Route path="*" title="404">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default withErrorHandler(App, API);
