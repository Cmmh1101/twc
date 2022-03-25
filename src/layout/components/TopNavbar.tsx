import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

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
              <FontAwesomeIcon icon={faMoon} className="" />
            </NavItem>

            <NavItem className="px-3">
              <NavLink href="/components/">Home</NavLink>
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
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Resource 1</DropdownItem>
                <DropdownItem>Resource 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="px-3">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Blog
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                FAQ
              </NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="https://github.com/reactstrap/reactstrap">
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
