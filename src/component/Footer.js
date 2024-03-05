import React from 'react';
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
           <footer>
            &copy; 2024 LEARN Double Stuffed Oreos | Chantel, Michael & Sakaa
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
           </footer>
           
        </>
    )

}

export default Footer