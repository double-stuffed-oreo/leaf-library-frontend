import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/white-logo.png"

const Header = ({ currentUser, logout }) => {
  const handleClick = () => {
    logout()
  }

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
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/myherbs" className="nav-link">My Herbs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>Log Out</NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
          </NavItem>
          </>
        )}
      </Navbar>
    </>
  );
};

export default Header;
