/**
 * styled.d.ts
 * -----------
 * TypeScript declaration file for styled-components.
 * 
 * Purpose:
 * - Extends the DefaultTheme interface provided by styled-components
 * - Ensures TypeScript knows about our custom theme properties
 * - Provides strong typing for theme usage across the app
 */

import "styled-components";

/**
 * Module augmentation for styled-components.
 * Adds our custom theme properties to DefaultTheme.
 */
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;       // Theme name (e.g., "light", "dark", "colorful")
    background: string; // Background color for pages
    text: string;       // Default text color
    font: string;       // Font family for theme
    cardBg: string;     // Background color for cards
  }
}
