import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
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
      <Container>
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
                to="/techpaths"
              >
                Paths
              </NavLink>
            </NavItem>
            {/* <DropdownMenu>
                <DropdownItem>Path 1</DropdownItem>
                <DropdownItem>Path 2</DropdownItem>
                <DropdownItem>Path 3</DropdownItem>
                <DropdownItem>Path 4</DropdownItem>
                <DropdownItem>Path 5</DropdownItem>
                <DropdownItem>Path 6</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <UncontrolledDropdown nav inNavbar className="dropdown"> */}
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
            {/* 
              <DropdownMenu>
                <DropdownItem>Resource 1</DropdownItem>
                <DropdownItem>Resource 2</DropdownItem>
              </DropdownMenu> */}
            {/* </UncontrolledDropdown> */}
            <NavItem className="px-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "nav-links"
                }
                to="/blogspage"
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
