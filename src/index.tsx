import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { ThemeProvider } from "./hooks/themeContext/themeContext";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
