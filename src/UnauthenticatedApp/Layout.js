import React from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../Layout";
import InternalLink from "../components/InternalLink";
import InternalLinkButton from "../components/InternalLinkButton";

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
        <InternalLink to="sign-in">Sign in</InternalLink>
        <InternalLinkButton to="sign-up">Sign up</InternalLinkButton>
      </>
    }
  >
    {children}
  </BaseLayout>
);

export default Layout;
