import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider, useStore } from "store/store";

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
