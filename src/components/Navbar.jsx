import React from "react";
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
                <span className="nav-item">Home</span>
                <span className="nav-item">Research Areas and Projects</span>
                <span className="nav-item">Researchers</span>
                <span className="nav-item">Publications</span>
                <span className="nav-item">Leadership</span>
                <span className="nav-item">News & Events</span>
            </div>
        </nav>
    );
};

export default Navbar;
