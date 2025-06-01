import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logo from "../assets/CENTMED_logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Left side: Logo */}
            <div className="centmed-logo">
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="CENTMED Logo" className="logo-image" />
                </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Right side: Navigation Items */}
            <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                <Link to="/research" className="nav-item" onClick={closeMenu}>Research</Link>
                <Link to="/people" className="nav-item" onClick={closeMenu}>People</Link>
                <Link to="/publications" className="nav-item" onClick={closeMenu}>Publications</Link>
                <Link to="/news" className="nav-item" onClick={closeMenu}>News</Link>
                <Link to="/events" className="nav-item" onClick={closeMenu}>Events</Link>
                <Link to="/careers" className="nav-item" onClick={closeMenu}>Careers</Link>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;