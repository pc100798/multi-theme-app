/**
 * NotFound Page
 * -------------
 * Fallback page displayed when the user navigates to a non-existing route.
 * Styled with theme-aware colors and centered text.
 *
 * Features:
 * - Full-page layout with theme-based background, text, and font
 * - Simple and clear error message for invalid routes
 */

import React from "react";
import styled from "styled-components";

/**
 * Container
 * ---------
 * Main wrapper for the NotFound page.
 * Ensures consistent spacing with the fixed header and centers the content.
 */
const Container = styled.div`
  margin-top: 80px; /* Offset for fixed header */
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  min-height: 100vh; /* Full viewport height */
  text-align: center; /* Center align content */
`;

/**
 * NotFound Component
 * ------------------
 * Displays a "404 Page Not Found" message.
 */
export const NotFound: React.FC = () => {
  return (
    <Container>
      {/* Error Title */}
      <h1>404 - Page Not Found</h1>

      {/* Error Description */}
      <p>Sorry, the page you're looking for does not exist.</p>
    </Container>
  );
};
