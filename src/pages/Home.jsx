import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
    const [contentVisible, setContentVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!titleRef.current) return;

            const titleRect = titleRef.current.getBoundingClientRect();
            const halfwayPoint = window.innerHeight / 2;

            if (titleRect.bottom < halfwayPoint) {
                setContentVisible(true); // Fade in content when title moves halfway out
            } else {
                setContentVisible(false); // Fade out content when title moves back in
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="home-container">
            <div className="home-title-section" ref={titleRef}>
                <h1>Center for Translational Medical Devices</h1>
            </div>
            <div className={`home-content-section ${contentVisible ? "fade-in" : "fade-out"}`}>
                <p>
                    The objective of CENTMED is to catalyze translational research collaborations
                    between researchers at NYUAD and clinicians at medical centres in Abu Dhabi
                    and the UAE. CENTMED is specifically focused on the development of medical
                    device technologies for diagnostics and therapeutics, with a broad goal of
                    advancing Bioinnovation and Health within NYUAD and Abu Dhabi.
                </p>
            </div>
        </div>
    );
};

export default Home;
