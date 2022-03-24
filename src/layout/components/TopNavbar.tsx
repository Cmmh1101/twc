import React, { Component } from "react";
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
} from "reactstrap";
class TopNavbar extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar tag="nav" className="navbar" dark expand="md">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="/twcLogo2.jpeg"
            className="navbar-image"
            height="100"
            width="100"
            alt="Teachers Who Code logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
      </Navbar>
    );
  }
}
export default TopNavbar;
