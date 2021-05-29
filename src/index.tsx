
import "@/styles/index.scss";
import 'amfe-flexible/index.js'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/index";
import StoreContext from "./context/StroeContext";

ReactDOM.render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
