import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

(() => {
  // inject html for reactjs
  const injection = document.createElement("div");
  const injectionId = "funder-injection-point";
  injection.id = injectionId;
  document.body.appendChild(injection);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(injectionId)
  );
})();
