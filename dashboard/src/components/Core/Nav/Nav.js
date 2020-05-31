import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "shards-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  let location = useLocation();

  const options = [
    { slug: "", name: "Home" },
    { slug: "comparative", name: "Compare" },
    { slug: "geolocation", name: "Geolocation" },
    { slug: "groupResource", name: "Group Resource" },
    { slug: "groupType", name: "Group Type" },
    { slug: "session", name: "Session" },
    { slug: "ip", name: "IP" },
    { slug: "raw", name: "Basic" },
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
