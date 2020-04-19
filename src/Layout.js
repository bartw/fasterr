import React from "react";
import { Link } from "react-router-dom";
import { Button, AlphaButton } from "./components/Button";
import logoFull from "./assets/logo-full.svg";
import logo from "./assets/logo.svg";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 text-alpha">
    <div className="max-w-4xl mx-auto">
      <header className="px-2 py-4 h-32 flex items-start">
        <Link to="/" className="h-full">
          <img className="h-full sm:hidden" src={logo} alt="logo" />
          <img className="h-full hidden sm:block" src={logoFull} alt="logo" />
        </Link>
        <div className="flex-1"></div>
        <nav>
          <Link to="/sign-in">
            <Button>Sign in</Button>
          </Link>
          <Link to="/sign-up">
            <AlphaButton className="ml-4">Sign up</AlphaButton>
          </Link>
        </nav>
      </header>
      <main className="mt-8 px-2">{children}</main>
    </div>
  </div>
);

export default Layout;
