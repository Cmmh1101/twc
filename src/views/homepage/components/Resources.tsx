import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import MainHeader from "../../../utils/MainHeader";

const Resources = () => {
  const { englishMode } = useTheme();
  return (
    <section className="resources-box py-5">
      <Container>
        <Row>
          <MainHeader headerText={englishMode ? "Recursos" : "Resources"} />
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
              <ul className="pl-3 mb-5">
                <li>Tutorials</li>
                <li>Cources</li>
                <li>Podcasts</li>
                <li>Books</li>
              </ul>
              <Link
                to="/resources"
                className="resources-button mb-5 mb-md-0 px-3 py-2 text-light"
              >
                Find resources
              </Link>
            </Col>

            <Col xs={12} md={6} className="px-0">
              <div className="intro-img mt-5 mt-md-0">
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
