/**
 * storage.ts
 * ----------
 * Utility functions for persisting the user's theme preference
 * in the browser's localStorage.
 *
 * Ensures that the selected theme persists across page reloads.
 */

import { ThemeType } from "../context/ThemeContext";

/**
 * getThemeFromStorage
 * -------------------
 * Retrieves the saved theme from localStorage.
 *
 * @returns ThemeType | null
 * - Returns the saved theme ("light", "dark", or "colorful")
 * - Returns null if no theme is stored
 *
 * Example:
 * const savedTheme = getThemeFromStorage();
 */
export const getThemeFromStorage = (): ThemeType | null => {
  return (localStorage.getItem("appTheme") as ThemeType) || null;
};

/**
 * saveThemeToStorage
 * ------------------
 * Saves the given theme into localStorage so it persists across reloads.
 *
 * @param theme - The selected theme ("light", "dark", or "colorful")
 *
 * Example:
 * saveThemeToStorage("dark");
 */
export const saveThemeToStorage = (theme: ThemeType) => {
  localStorage.setItem("appTheme", theme);
};
