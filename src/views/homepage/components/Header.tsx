import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Header = (props: any) => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Header;
