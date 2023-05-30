import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import './index.css'
import App from "./App";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement)
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}