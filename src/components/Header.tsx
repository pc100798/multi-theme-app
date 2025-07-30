/**
 * Header Component
 * ----------------
 * This component renders the application header, which includes:
 * - App logo/title
 * - Navigation links (Home, About, Contact)
 * - Theme dropdown selector (Light, Dark, Colorful)
 *
 * Features:
 * - Uses styled-components for dynamic theming
 * - Retrieves and updates theme from ThemeContext
 * - Fixed at the top with responsive styling
 */

import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext"; // Context API for theme state
import { Link } from "react-router-dom"; // For navigation between pages

/**
 * Styled component for the header wrapper.
 * Positioned at the top with a shadow for separation.
 */
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 95%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

/**
 * Styled component for navigation links.
 * Displays links horizontally with spacing.
 */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.text};
    }
  }
`;

/**
 * Styled component for the theme selector dropdown.
 * Matches the current theme colors dynamically.
 */
const ThemeSelector = styled.select`
  padding: 0.45rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text};
  }

  option {
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
  }
`;

/**
 * Header Component
 * Renders the application header with navigation links and theme selector.
 */
export const Header: React.FC = () => {
  // Access current theme and setter function from ThemeContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      {/* Application Title */}
      <h2>Multi-Theme App</h2>

      {/* Navigation Links and Theme Dropdown */}
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Dropdown for selecting themes */}
        <ThemeSelector
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="light">Theme 1</option>
          <option value="dark">Theme 2</option>
          <option value="colorful">Theme 3</option>
        </ThemeSelector>
      </Nav>
    </HeaderWrapper>
  );
};
