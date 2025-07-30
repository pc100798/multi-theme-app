/**
 * Contact Page
 * ------------
 * A static page that provides contact details for the demo app.
 * Uses styled-components to adapt its look dynamically based on the active theme.
 *
 * Features:
 * - Styled container with theme-based background, font, and text color
 * - Simple responsive layout
 */

import React from "react";
import styled from "styled-components";

/**
 * Container
 * ---------
 * Main wrapper for the Contact page content.
 * Applies spacing for the fixed header, themed background and text colors,
 * and ensures the content spans the full viewport height.
 */
const Container = styled.div`
  margin-top: 80px; /* Accounts for fixed header height */
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  min-height: 100vh; /* Fill available vertical space */
`;

/**
 * Contact Component
 * -----------------
 * Renders the Contact page with a title and contact details.
 */
export const Contact: React.FC = () => {
  return (
    <Container>
      {/* Page Title */}
      <h1>Contact</h1>

      {/* Contact Information */}
      <p>For inquiries, email us at demo@multitheme.com</p>
    </Container>
  );
};
