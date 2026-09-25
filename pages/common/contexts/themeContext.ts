import { createContext, useContext } from "react";
import { EThemes } from "../utils/types";

export const ThemeContext = createContext<EThemes>(EThemes.Default);

export function useTheme() {
  return useContext(ThemeContext);
}
