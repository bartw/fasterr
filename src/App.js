import React, { useState } from "react";
import Auth, { AuthContext, useIsAuthenticated } from "./auth";
import Layout from "./Layout";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const AppWithAuth = () => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
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
