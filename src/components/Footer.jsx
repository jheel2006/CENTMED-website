import React from 'react';
import './Footer.css';
import reactLogo from '../assets/CENTMED_logo_white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={reactLogo} alt="Logo" />
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/research">Research</Link>
                    <Link to="/people">People</Link>
                    <Link to="/publications">Publications</Link>
                    <Link to="/news">News</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/careers">Careers</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;