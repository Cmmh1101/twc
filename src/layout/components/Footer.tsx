import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Col, Container, Nav, NavItem, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid style={{ padding: "0 10%" }}>
        <Row>
          <Col xs={12} className="mt-4">
            <Nav className="d-flex justify-content-around">
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/techPaths"
                >
                  Paths
                </NavLink>
              </NavItem>
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/resources"
                >
                  Resources
                </NavLink>
              </NavItem>
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/fqa"
                >
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem className="p-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-links"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col
            xs={12}
            className="d-flex align-items-center 
         justify-content-around flex-wrap mt-5"
          >
            <Col
              md={4}
              xs={12}
              className="d-flex align-items-center 
         justify-content-center flex-wrap"
            >
              <div className="footer-img">
                <img
                  src="/logo.png"
                  className="footer-image"
                  height="200"
                  width="200"
                  alt="Teachers Who Code Logo"
                />
              </div>
            </Col>
            <Col md={4} xs={12} className="mt-4">
              <h4 className="footer-title"> Follow Us </h4>
              <ul className="list-unstyled d-flex justify-content-around">
                <a href="/">
                  <FaYoutube className="socialIcon" size="2em" />
                </a>
                <a href="/">
                  <FaLinkedin className="socialIcon" size="2em" />
                </a>
              </ul>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
