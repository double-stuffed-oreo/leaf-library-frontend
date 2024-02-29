import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/white-logo.png"

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Navbar className="navbar">
        <NavbarBrand to="/">
          <img className="logo"
            alt="logo"
            src={logo}
            style={{
              height: 50,
              width: 50
            }}
          />
          The Leaf Library
        </NavbarBrand>
        <NavItem>
          <NavLink to="/" active>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/herbindex">
            Library
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contactus">
            Contact Us
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Login
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem to="/signup">Sign Up</DropdownItem>
            <DropdownItem divider />
            <DropdownItem to="/signin">Sign In</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default Header;
