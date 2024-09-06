import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./Nav";
import "./index.css"; // Import your Tailwind CSS here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);
