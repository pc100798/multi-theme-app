/**
 * ThemeContext
 * ------------
 * Provides global theme management using React Context API
 * and styled-components ThemeProvider.
 *
 * Features:
 * - Supports three themes: Light, Dark, Colorful
 * - Persists user theme preference in localStorage
 * - Applies selected theme to the entire app
 */

import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, colorfulTheme } from "../theme/themes"; // Theme objects
import { getThemeFromStorage, saveThemeToStorage } from "../utils/storage"; // localStorage utils

/**
 * Allowed theme types (must match available themes).
 */
export type ThemeType = "light" | "dark" | "colorful";

/**
 * Defines the shape of ThemeContext value.
 */
interface ThemeContextProps {
  theme: ThemeType; // Current active theme
  setTheme: (theme: ThemeType) => void; // Function to update theme
}

/**
 * Create ThemeContext with default values.
 */
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",       // Default theme
  setTheme: () => {},   // Placeholder function (overwritten in provider)
});

/**
 * ThemeProviderWrapper
 * --------------------
 * Wraps the app and provides theme state + styled-components ThemeProvider.
 *
 * @param children - The child components wrapped by the provider
 *
 * Example usage:
 * <ThemeProviderWrapper>
 *   <App />
 * </ThemeProviderWrapper>
 */
export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to track the current theme (default: "light")
  const [theme, setTheme] = useState<ThemeType>("light");

  /**
   * On first load, check if a saved theme exists in localStorage.
   * If yes, apply it instead of the default "light".
   */
  useEffect(() => {
    const savedTheme = getThemeFromStorage();
    if (savedTheme) setTheme(savedTheme);
  }, []);

  /**
   * Whenever theme changes, save it in localStorage
   * so the preference persists across reloads.
   */
  useEffect(() => {
    saveThemeToStorage(theme);
  }, [theme]);

  /**
   * Returns the styled-components theme object
   * based on the currently selected theme type.
   */
  const getThemeObject = () => {
    switch (theme) {
      case "dark":
        return darkTheme;
      case "colorful":
        return colorfulTheme;
      default:
        return lightTheme;
    }
  };

  return (
    // Provide theme state + setter to entire app
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* styled-components ThemeProvider applies selected theme styles */}
      <ThemeProvider theme={getThemeObject()}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
