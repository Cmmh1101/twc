import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

const ToggleLangButton = () => {
  const { handleToggleLanguage, englishMode } = useTheme();

  return (
    <button
      style={
        englishMode
          ? {
              backgroundImage: 'url("../../../images/usaflag.png")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
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
    />
  );
};

export default ToggleLangButton;
