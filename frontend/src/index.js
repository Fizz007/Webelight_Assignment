import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Contexts/Context";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>,
);
