import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

interface Props {}

const IntroTWC = (props: Props) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <MainHeader headerText="What is Teachers Who Code" />
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap"
          >
            <Col xs={12} md={6} className="px-0">
              <div className="intro-img">
                <img
                  src="https://images.pexels.com/photos/7437489/pexels-photo-7437489.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="team meeting"
                />
              </div>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0 mx-0">
              <p className="mb-0">
                We’re here to pay it forward. To help pave a road for those who
                come after us. To let those who are on the fence about making a
                career change know it is possible. To let that teacher, who has
                no tech experience, know that you are valuable, your experience
                matters, you have transferable skills and you can learn a new
                trade. We’re here to let you know “Si se puede”.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroTWC;
