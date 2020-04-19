// @flow

import React, { useState } from "react";
import Auth, { AuthContext, useIsAuthenticated } from "./auth";
import Layout from "./Layout";
import AuthorizedApp from "./AuthorizedApp";
import UnauthorizedApp from "./UnauthorizedApp";

const AppWithAuth = () => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <AuthorizedApp /> : <UnauthorizedApp />;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const auth = new Auth();

  auth.initialize().finally(() => setLoading(false));

  return loading ? (
    <Layout />
  ) : (
    <AuthContext.Provider value={auth}>
      <AppWithAuth />
    </AuthContext.Provider>
  );
};

export default App;
