// @flow

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const UnauthorizedApp = () => (
  <Router>
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);

export default UnauthorizedApp;
