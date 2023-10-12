import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StoreProvider, useStore } from "store/store";

ReactDOM.render(
  <StoreProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StoreProvider>,
  document.getElementById("app")
);
