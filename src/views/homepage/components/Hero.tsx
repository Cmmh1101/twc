import { Jumbotron, Container } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import ArrowDown from "../../../utils/ArrowDown";

const Hero = () => {
  const { englishMode } = useTheme();
  return (
    <Jumbotron className="title" fluid>
      <Container fluid>
        {englishMode ? (
          <>
            <h1 className="display-3"> teachers.who.code. </h1>
            <p className="lead">
              Apoyando a mas profesores a tener exito con la tecnologia.
            </p>
          </>
        ) : (
          <>
            <h1 className="display-3"> teachers.who.code. </h1>
            <p className="lead">
              Helping teachers succeed in and out of the classroom using tech.
            </p>
          </>
        )}
        <ArrowDown />
      </Container>
    </Jumbotron>
  );
};

export default Hero;
