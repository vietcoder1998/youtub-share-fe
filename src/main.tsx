import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./style.css";

if (typeof window !== "undefined") {
  window.process = {
    env: new Proxy(
      {},
      {
        get: (_, prop) => import.meta.env[String(prop)],
      }
    ),
  } as NodeJS.Process
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
