import React from "react";
import logoFull from "./logo-full.svg";

const App = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FBFBFF",
      color: "#757575",
    }}
  >
    <img src={logoFull} style={{ maxWidth: "75%" }} alt="logo" />
  </div>
);

export default App;
