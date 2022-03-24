import React from "react";

const ArrowDown = () => {
  const scrollTo = () => {
    const anchor = document.querySelector("#twc-intro");
    anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="hero-arrow mt-5"
      onClick={() => {
        scrollTo();
      }}
    >
      <img src="../../../images/arrowDown.png" alt="arrow down" />
    </div>
  );
};

export default ArrowDown;
