import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    let location = useLocation();
    console.log(location);
    return (
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#">Resources Analytics</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink active={location.pathname === "/"} href="#/">
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={location.pathname === "/raw"} href="#/raw">
              Raw
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={location.pathname === "/groupResource"} href="#/groupResource">
              Group Resource
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={location.pathname === "/groupType"} href="#/groupType">
              Group Type
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
}

export default Navigation;
