/**
 * themes.ts
 * ---------
 * Defines the theme objects for the Multi-Theme React App.
 * 
 * Each theme conforms to the DefaultTheme interface defined in styled.d.ts
 * and provides values for background, text color, font, and card background.
 */

import { DefaultTheme } from "styled-components";

/**
 * Light Theme (Theme 1)
 * - Minimalist design
 * - Light background
 * - Sans-serif Roboto font
 */
export const lightTheme: DefaultTheme = {
  name: "Theme1",
  background: "#ffffff", // Page background
  text: "#222",          // Text color
  font: "'Roboto', sans-serif", // Font style
  cardBg: "#f7f7f7",     // Card background color
};

/**
 * Dark Theme (Theme 2)
 * - Dark mode design
 * - Serif font for a bold, classic look
 */
export const darkTheme: DefaultTheme = {
  name: "Theme2",
  background: "#121212",        // Dark page background
  text: "#f1f1f1",              // Light text color
  font: "'Merriweather', serif", // Serif font
  cardBg: "#1e1e1e",            // Dark card background
};

/**
 * Colorful Theme (Theme 3)
 * - Playful, bright theme
 * - Uses a cursive Google font (Pacifico)
 */
export const colorfulTheme: DefaultTheme = {
  name: "Theme3",
  background: "#f0f8ff",         // Light blue background
  text: "#333",                  // Dark gray text
  font: "'Pacifico', cursive",   // Playful cursive font
  cardBg: "#ffe4e1",             // Light pink card background
};
