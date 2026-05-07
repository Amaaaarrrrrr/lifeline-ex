import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Safeguard against some libraries trying to overwrite window.fetch
if (typeof window !== "undefined") {
  window.global = window;
  if (!window.process) {
    window.process = { env: {} };
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
