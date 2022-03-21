import React from "react";
import { Link } from "react-router-dom";

const ArrowDown = () => {
  return (
    <Link to="/">
      <div className="hero-arrow">
        <img src="../../../images/arrowDown.png" alt="arrow down" />
      </div>
    </Link>
  );
};

export default ArrowDown;
