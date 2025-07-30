/**
 * App.tsx
 * -------
 * The root component of the Multi-Theme React App.
 *
 * Responsibilities:
 * - Renders the fixed Header with theme switcher
 * - Configures React Router routes for navigation
 * - Displays appropriate page components (Home, About, Contact, NotFound)
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

/**
 * App Component
 * -------------
 * Main component that wraps the app structure.
 */
const App: React.FC = () => {
  return (
    <>
      {/* Fixed Header with navigation links and theme switcher */}
      <Header />

      {/* Route configuration using React Router */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
