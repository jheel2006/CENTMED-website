import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side: Logo */}
            <div className="logo">
                <Link to="/" className="logo-text">Your Logo</Link> {/* Placeholder Logo */}
            </div>

            {/* Right side: Navigation Items */}
            <div className="nav-links">
                {/* <Link to="/" className="nav-item">Home</Link> */}
                <Link to="/research" className="nav-item">Research</Link>
                <Link to="/people" className="nav-item">People</Link>
                <Link to="/publications" className="nav-item">Publications</Link>
                <Link to="/news" className="nav-item">News</Link>
                <Link to="/events" className="nav-item">Events</Link>
                <Link to="/careers" className="nav-item">Careers</Link>
            </div>
        </nav>
    );
};

export default Navbar;
