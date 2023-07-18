import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";
import { Link } from "react-router-dom";

function RoleDescription({ ...pathTab }) {

  return (
    <section className="py-5">
      <Container className="mb-5" id="twc-intro">
        <Row>
          <h1 className="pathTab?s-title text-capitalize">{pathTab?.title}</h1>
        </Row>
        <Row>
          <MainHeader headerText={"Role Description"} />
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap mb-5"
          >
            {/* <Col xs={12} md={12} className="px-0">
              <div className="intro-img">
                <img
                  src={pathTab?.photo}
                  alt={pathTab?.title}
                />
              </div>
                      </Col> */}
            <Col xs={12} md={5} className="px-0">
              <div className="intro-img">
                <img src={pathTab?.photo} alt={pathTab?.title} />
              </div>
            </Col>
            <Col xs={12} md={7} className="mt-4 px-5">
              <p>{pathTab?.description}</p>
            </Col>
          </Col>
        </Row>
        <Row>
          <MainHeader headerText={"Skills"} />
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center flex-wrap mb-5"
          >
            <Col xs={12} md={7} className="text-capitalize mt-4 px-5">
              <p>{pathTab?.skills}</p>
            </Col>
          </Col>
        </Row>
        <Row>
          <MainHeader headerText={"Tools"} />
          <Col
            xs={12}
            className="text-capitalize d-flex align-items-center justify-content-center flex-wrap-reverse mb-5"
          >
            <Col xs={12} md={7} className="mt-4 px-5">
              {pathTab?.technologies}
                          
            </Col>
            
          </Col>
          {/* <Col
            xs={12}
            md={7}
            className="d-flex align-items-center justify-content-center"
          > */}
          <Link to="/resources" className="resources-button px-3 py-2 mx-auto">
            Find resources
          </Link>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default RoleDescription;
