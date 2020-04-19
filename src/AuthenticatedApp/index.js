import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";

const AuthenticatedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);

export default AuthenticatedApp;
