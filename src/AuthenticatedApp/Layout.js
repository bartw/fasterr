import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BaseLayout from "../Layout";
import { useAuth } from "../auth";

const LogoWrapper = ({ children }) => (
  <Link to="/" className="h-full">
    {children}
  </Link>
);

const Layout = ({ children }) => {
  const auth = useAuth();

  return (
    <BaseLayout
      logoWrapper={LogoWrapper}
      nav={<Button onClick={() => auth.signOut()}>Sign out</Button>}
    >
      {children}
    </BaseLayout>
  );
};

export default Layout;
