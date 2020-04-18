import React from "react";
import logoFull from "./logo-full.svg";

const App = () => (
  <div
    className="h-screen flex items-center justify-center p-4"
    style={{
      backgroundColor: "#FBFBFF",
      color: "#757575",
    }}
  >
    <img src={logoFull} alt="logo" />
  </div>
);

export default App;
