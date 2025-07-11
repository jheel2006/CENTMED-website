import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import CENTMEDLogo from '../assets/CENTMED_logo_white.png';
import NYUADLogo from '../assets/NYUAD_logo_white.png';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimeout = useRef(null);
    const location = useLocation();

    const checkScrollPosition = () => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const isNearBottom = scrollTop + windowHeight >= docHeight - 50;
            setIsVisible(isNearBottom);
        }, 100);
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [location.pathname]);

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="footer-content">
                {/* Top Row */}
                <div className="footer-top">
                    <div className="footer-left">
                        <img src={CENTMEDLogo} alt="CENTMED Logo" />
                    </div>

                    <div className="footer-center">
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

                    <div className="footer-right">
                        <img src={NYUADLogo} alt="NYUAD Logo" />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© Center for Translational Medical Devices, 2025</p>
                    </div>

                    <div className="social-icons">
                        <a href="mailto:nyuad.centmed@nyu.edu" className="social-icon">
                            <Mail color="white" size={29} />
                        </a>
                        <a href="https://www.instagram.com/centmed_nyuad/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram color="white" size={26} />
                        </a>
                        <a href="https://x.com/CENTMED_NYUAD" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.771 10.476 23.394 0h-2.137l-7.53 8.84L7.413 0H0l9.053 13.003L0 24h2.137l8.045-9.438L16.588 24H24l-9.229-13.524zM11.354 13.84l-1.02-1.468L2.91 1.56h3.47l6.078 8.75 1.02 1.468 7.676 11.061h-3.47l-6.33-9z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/centmed/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin color="white" size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;