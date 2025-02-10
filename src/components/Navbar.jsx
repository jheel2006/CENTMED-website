import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side: Logo */}
            <div className="logo">
                <h1 className="logo-text">Your Logo</h1> {/* Placeholder Logo */}
            </div>

            {/* Right side: Navigation Items */}
            <div className="nav-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/research" className="nav-item">Research Areas and Projects</Link>
                <Link to="/researchers" className="nav-item">Researchers</Link>
                <Link to="/publications" className="nav-item">Publications</Link>
                <Link to="/leadership" className="nav-item">Leadership</Link>
                <Link to="/news-events" className="nav-item">News & Events</Link>
            </div>
        </nav>
    );
};

export default Navbar;
