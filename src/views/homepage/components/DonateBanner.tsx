import React from "react";
import { Button, Container, Jumbotron } from "reactstrap";

const DonateBanner = () => {
  return (
    <div>
      <Jumbotron fluid className="mb-0">
        <Container
          fluid
          className="d-flex p-5 justify-content-center align-items-center"
        >
          <div className="">
            {/* <h4 className="display-3">Fluid jumbotron</h4> */}
            <p className="text-end pl-5">
              We would love for you to consider and pray about partnering with
              us to reach and empower the people in Venezuela
            </p>
          </div>

          <Button className="btn-cta ml-5">DONATE</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default DonateBanner;
