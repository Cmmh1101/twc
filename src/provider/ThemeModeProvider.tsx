import { ReactNode, useContext, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";

function useTheme() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a ThemeProvider");
  }
  return context;
}

const ThemeModeProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [englishMode, setEnglishMode] = useState(false);

  const handleToggleLanguage = () => {
    setEnglishMode(!englishMode);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const dark = "#1b1b1b";
  const light = "#f5f5f6";

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  return (
    <ThemeModeContext.Provider
      value={{
        dark,
        light,
        themes,
        darkMode,
        handleToggleTheme,
        englishMode,
        handleToggleLanguage,
      }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, useTheme };
