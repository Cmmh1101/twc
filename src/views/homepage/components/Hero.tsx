import { Jumbotron, Container } from "reactstrap";
import ArrowDown from "../../../utils/ArrowDown";

const Hero = () => {
  return (
    <Jumbotron className="title" fluid>
      <Container fluid>
            <h1 className="display-3"> teachers.who.code. </h1>
            <p className="lead">
              Helping teachers succeed in and out of the classroom using tech.
            </p>
        <ArrowDown />
      </Container>
    </Jumbotron>
  );
};

export default Hero;
