import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BasketProvider from "./Context/BasketContext";
import MainProvider from "./Context/MainContext/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
