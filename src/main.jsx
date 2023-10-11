import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";


import HomePage from "./pages/HomePage";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <HomePage>

    </HomePage>
  </React.StrictMode>
);
