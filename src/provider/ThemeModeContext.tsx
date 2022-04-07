import { createContext } from "react";

export interface IThemeModeContext {
  dark: string;
  light: string;
  themes: {};
  darkMode: boolean;
  handleToggleTheme: () => void;
  englishMode: boolean;
  handleToggleLanguage: () => void;
}

export const ThemeModeContext =
  createContext<IThemeModeContext | undefined>(undefined);
