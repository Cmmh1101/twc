import React from "react";
import { Col, Container, Row } from "reactstrap";

interface Props {}

const IntroTWC = (props: Props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Col xs={12} md={6}>
              video
            </Col>
            <Col xs={12} md={6}>
              text
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroTWC;
