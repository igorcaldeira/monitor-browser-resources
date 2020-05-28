import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
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
        <NavItem>
          <NavLink active={location.pathname === "/geolocation"} href="#/geolocation">
            Geolocation
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={location.pathname === "/ip"} href="#/ip">
            IP
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={location.pathname === "/session"} href="#/session">
            Session
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
