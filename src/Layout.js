import React from "react";
import logoFull from "./assets/logo-full.svg";
import logo from "./assets/logo.svg";

const EmptyWrapper = ({ children }) => children;

const Layout = ({ logoWrapper = EmptyWrapper, nav, children }) => {
  const LogoWrapper = logoWrapper;

  return (
    <div className="min-h-screen bg-gray-100 text-alpha">
      <div className="max-w-4xl mx-auto">
        <header className="px-2 py-4 h-32 flex items-start">
          <LogoWrapper>
            <img className="h-full sm:hidden" src={logo} alt="logo" />
            <img className="h-full hidden sm:block" src={logoFull} alt="logo" />
          </LogoWrapper>
          <div className="flex-1"></div>
          <nav>{nav}</nav>
        </header>
        <main className="mt-8 px-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
