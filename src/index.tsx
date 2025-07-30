/**
 * index.tsx
 * ---------
 * Entry point of the Multi-Theme React App.
 *
 * Responsibilities:
 * - Bootstraps the React application
 * - Wraps the App component with BrowserRouter for routing
 * - Wraps the App component with ThemeProviderWrapper for theme management
 * - Uses React.StrictMode for highlighting potential issues during development
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProviderWrapper } from "./context/ThemeContext";

// Create the root for React 18's concurrent mode
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Enables client-side routing across the app */}
    <BrowserRouter>
      {/* Provides theme context and styled-components ThemeProvider */}
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
