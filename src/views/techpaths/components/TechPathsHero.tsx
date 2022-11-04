import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
// import ArrowDown from "../../../utils/ArrowDown";

const TechPathsHero = () => {
  const { englishMode } = useTheme();
  return (
    <Jumbotron className="title" fluid>
      <Container fluid>
        {englishMode ? (
          <>
            <h1 className="hero-title"> Carreras Tecnológicas Principales</h1>
          </>
        ) : (
          <>
            <h1 className="hero-title"> Main Tech Routes</h1>
          </>
        )}
      </Container>
    </Jumbotron>
  );
};

export default TechPathsHero;
