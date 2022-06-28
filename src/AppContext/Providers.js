import React from "react";
import App from "../App";
import ContextProvider from "./ContextProvider";

function Providers() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default Providers;
