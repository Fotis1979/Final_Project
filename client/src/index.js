import React from "react";
import ReactDOM from "react-dom";

import MyProvider from "./context/MyProvider";
import Routings from "./routers/Routings";
import "./App.css";

ReactDOM.render(
  <MyProvider>
    <Routings />
  </MyProvider>,
  document.querySelector("#root")
);
