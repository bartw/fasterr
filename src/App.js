import React from "react";
import logoFull from "./logo-full.svg";

const App = () => (
  <div className="h-screen flex flex-col items-center justify-center p-4">
    <img src={logoFull} alt="logo" />
    <h1 className="mt-8 text-4xl text-alpha">ALPHA</h1>
    <h2 className="mt-4 text-2xl text-beta">BETA</h2>
  </div>
);

export default App;
