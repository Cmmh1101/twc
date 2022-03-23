import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";

const Resources = () => {
  return (
    <section className="resources-box py-5">
      <Container>
        <Row>
          <MainHeader headerText="Resources" customClass="text-light" />
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap mb-5"
          >
            <Col xs={12} md={6} className="mt-4 mt-md-0 mx-0 px-5">
              <p className="">
                As Teachers Who Code, we would love to see you succeed in your
                transition. We are compiling a series of resources that have
                been useful for teachers transitioning into tech.
              </p>
              <ul className="pl-3">
                <li>Tutorials</li>
                <li>Cources</li>
                <li>Podcasts</li>
                <li>Books</li>
              </ul>
              <Button className="resources-button mb-5 mb-md-0">
                Find resources
              </Button>
            </Col>
            <Col xs={12} md={6} className="px-0">
              <div className="intro-img">
                <img
                  src="https://images.pexels.com/photos/8500286/pexels-photo-8500286.jpeg?cs=srgb&dl=pexels-rodnae-productions-8500286.jpg&fm=jpg"
                  alt="Library"
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resources;
