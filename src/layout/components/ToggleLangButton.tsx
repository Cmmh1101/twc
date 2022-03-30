import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

const ToggleLangButton = () => {
  const { handleToggleLanguage, englishMode } = useTheme();

  return (
    <button
      style={
        englishMode
          ? { backgroundColor: "red", color: "white" }
          : {
              backgroundImage: 'url("../../../images/espFlag.png")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
      className="theme-btn lang-btn mx-3"
      type="button"
      onClick={handleToggleLanguage}
    >
      {englishMode ? "En" : ""}
    </button>
  );
};

export default ToggleLangButton;
