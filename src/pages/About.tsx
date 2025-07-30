/**
 * About Page
 * ----------
 * A simple static page that describes the purpose of the application.
 * Demonstrates how themes are applied globally using styled-components.
 *
 * Features:
 * - Uses Container styled-component for layout and theme styling
 * - Adapts background, text color, and font dynamically based on the active theme
 */

import React from "react";
import styled from "styled-components";

/**
 * Container
 * ---------
 * Main wrapper for the About page content.
 * Adds margin below the fixed header, applies theme colors,
 * and ensures full viewport height.
 */
const Container = styled.div`
  margin-top: 80px; /* Space for fixed header */
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  min-height: 100vh; /* Ensures page fills screen */
`;

/**
 * About Component
 * Renders the "About Us" page with a heading and description.
 */
export const About: React.FC = () => {
  return (
    <Container>
      {/* Page Title */}
      <h1>About Us</h1>

      {/* Page Description */}
      <p>This is a demo multi-theme app built using React + TypeScript.</p>
    </Container>
  );
};
