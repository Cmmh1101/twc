import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
          <Nav className="ml-auto" navbar>
            <NavItem className="my-auto">
              <ToggleModeButton />
            </NavItem>
            <NavItem className="my-auto">
              <ToggleLangButton />
            </NavItem>
            <NavItem className="px-3">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="dropdown">
              <DropdownToggle nav className="px-3">
                Path
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Path 1</DropdownItem>
                <DropdownItem>Path 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="dropdown">
              <DropdownToggle nav className="px-3">
              <NavLink to="/resourcesPage">Resources </NavLink>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem ><NavLink to="/resource">Resource </NavLink>
                </DropdownItem>
                <DropdownItem>Resource 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="px-3">
              <a href="https://github.com/reactstrap/reactstrap">
                Blog
              </a>
            </NavItem>
            <NavItem className="px-3">
              <a href="https://github.com/reactstrap/reactstrap">
                FAQ
              </a>
            </NavItem>
            <NavItem className="px-3">
              <a href="https://github.com/reactstrap/reactstrap">
                Contact
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
