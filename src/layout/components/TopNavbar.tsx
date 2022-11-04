import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import ToggleLangButton from "./ToggleLangButton";
import ToggleModeButton from "./ToggleModeButton";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar tag="nav" fixed="top" className="navbar shadow" dark expand="md">
      <Container fluid style={{ padding: "0 10%" }}>
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="/logo.png"
            className="navbar-image"
            height="100"
            width="100"
            alt="Teachers Who Code logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-xs-center" navbar>
            <div className="toggle-btns">
              <NavItem className="my-auto">
                <ToggleModeButton />
              </NavItem>
              <NavItem className="my-auto">
                <ToggleLangButton />
              </NavItem>
            </div>
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/"
              >
                Home
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar className="dropdown"> */}
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/techPaths"
              >
                Paths
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/resources"
              >
                Resources
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/fqa"
              >
                FAQ
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
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
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
