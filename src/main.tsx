import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// Check if user should see splash on first load (per tab/session)
if (
  window.location.pathname === "/" &&
  !sessionStorage.getItem("hasVisitedSplash")
) {
  window.location.href = "/splash";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
