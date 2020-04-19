import React from "react";
import { Link } from "react-router-dom";
import { Button, PrimaryButton } from "../components/Button";
import BaseLayout from "../Layout";

const LogoWrapper = ({ children }) => (
  <Link to="/" className="h-full">
    {children}
  </Link>
);

const Layout = ({ children }) => (
  <BaseLayout
    logoWrapper={LogoWrapper}
    nav={
      <>
        <Link to="/sign-in">
          <Button>Sign in</Button>
        </Link>
        <Link to="/sign-up">
          <PrimaryButton className="ml-4">Sign up</PrimaryButton>
        </Link>
      </>
    }
  >
    {children}
  </BaseLayout>
);

export default Layout;
