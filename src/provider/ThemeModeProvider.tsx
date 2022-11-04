import { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";

function useTheme() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a ThemeProvider");
  }
  return context;
}

const ThemeModeProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const initialValue = JSON.parse(saved!);
    // change to true if you want to have initial load on darkmode
    return initialValue === null ? false : initialValue;
  });
  const [englishMode, setEnglishMode] = useState(() => {
    const saved = localStorage.getItem("englishMode");
    const initialValue = JSON.parse(saved!);
    return initialValue;
  });

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

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("englishMode", JSON.stringify(englishMode));
  }, [darkMode, englishMode]);

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
