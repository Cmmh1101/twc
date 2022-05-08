import React from "react";
import { Container, Jumbotron,} from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";



const Hero = () => {
  const {englishMode}= useTheme()
  return (
 
      <Jumbotron className="title" fluid>
        <Container fluid>
          {englishMode ? (
            <>
              <h1 className="display-3"> Recursos </h1>
              <p className="lead">
                Lo que necesitas para triunfar en el mundo de la technologia
              </p>
            </>
          ) : (
            <>
              <h1 className="display-3"> Resources </h1>
              <p className="lead">
               What you need to succeed in the tech world
              </p>
            </>
          )}
        </Container>
      </Jumbotron>
    
  );
};
export default Hero;