import React from "react";
import ScrollProgress from "../components/ScrollProgress";
import "./Careers.css";

const Careers = () => {
    return (
        <div className="careers-container">
            <ScrollProgress />
            <h1 className="careers-title">Careers</h1>

            <div className="careers-content">
                <div className="careers-card">
                    <div className="careers-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h2>Join the CENTMED Team</h2>
                    <p>Looking for career opportunities with the Center for Translational Medical Devices (CENTMED) at NYU Abu Dhabi? </p>
                    <p>Please visit the official NYU Abu Dhabi careers page to view all available positions within our research center.</p>
                    <a href="https://nyuad.nyu.edu/en/about/careers.html" className="careers-button" target="_blank" rel="noopener noreferrer">
                        View Opportunities
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Careers;