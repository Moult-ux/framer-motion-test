import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tenzies from "./Tenzies";
import ThemeContext from "./themeContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="light">
      <Router>
        <App />
      </Router>
    </ThemeContext.Provider>
  </React.StrictMode>
);
