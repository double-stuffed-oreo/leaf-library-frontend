import React from 'react';
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
           <footer>
            &copy; 2024 LEARN Double Stuffed Oreos | Chantel, Michael & Sakaa |
            <NavLink to="/aboutus" className="footer-link">
                About Us
            </NavLink>|
            <NavLink to="/contactus" className="footer-link">
                Contact Us
            </NavLink>
           </footer>
           
        </>
    )

}

export default Footer