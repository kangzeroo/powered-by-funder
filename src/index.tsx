import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

(() => {
  const message: string = "Hello World";
  type TSample = {
    count: number;
  };
  const sample: TSample = {
    count: 0,
  };
  console.log(message);
  setInterval(() => {
    sample.count++;
    console.log(sample.count);
  }, 2000);

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
