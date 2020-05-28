import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  let location = useLocation();

  const options = [
    { slug: "", name: "Home" },
    { slug: "raw", name: "Raw" },
    { slug: "groupResource", name: "Group Resource" },
    { slug: "groupType", name: "Group Type" },
    { slug: "geolocation", name: "Geolocation" },
    { slug: "ip", name: "IP" },
    { slug: "session", name: "Session" },
  ];

  return (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="#">Resources Analytics</NavbarBrand>
      <Nav navbar>
        {options.map((opt) => (
          <NavItem>
            <NavLink active={location.pathname === `/${opt.slug}`} href={`#/${opt.slug}`}>
              {opt.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
