import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import reactLogo from '../assets/CENTMED_logo_white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimeout = useRef(null);
    const location = useLocation(); // Get current route location

    const checkScrollPosition = () => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // Calculate if we're near the bottom
            const isNearBottom = scrollTop + windowHeight >= docHeight - 50;

            setIsVisible(isNearBottom);
        }, 100);
    };

    useEffect(() => {
        // Check position on route change
        checkScrollPosition();

        // Add scroll event listener
        window.addEventListener('scroll', checkScrollPosition);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [location.pathname]); // Re-run when route changes

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
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