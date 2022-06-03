import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

const ToggleModeButton = () => {
  const { dark, light, darkMode, handleToggleTheme } = useTheme();

  return (
    <button
      style={
        darkMode
          ? { color: light, backgroundColor: dark }
          : { color: dark, backgroundColor: light }
      }
      className="theme-btn"
      type="button"
      onClick={handleToggleTheme}
    >
      {darkMode ? (
        <FontAwesomeIcon icon={faSun} className="" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="" />
      )}
    </button>
  );
};

export default ToggleModeButton;
