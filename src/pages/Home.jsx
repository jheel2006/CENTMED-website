import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import BeatingHeart from "../components/BeatingHeart";

const Home = () => {
    const ecgRef = useRef(null);

    useEffect(() => {
        // Add class to body only on homepage
        document.body.classList.add('home-page');

        if (ecgRef.current) {
            // Add class to trigger animation after component mounts
            setTimeout(() => {
                ecgRef.current.classList.add('animate-ecg');
            }, 500); // Short delay to let the page load first
        }
        return () => {
            // Clean up the class when leaving the homepage
            document.body.classList.remove('home-page');
        };
    }, []);

    const textBlocks = [
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex at justo congue, non feugiat ligula fringilla.", align: "left" },
        { id: 2, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", align: "right" },
        { id: 3, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", align: "left" }
    ];

    return (
        <div className="home-container">
            {/* Landing Section with Title and Heart Animation */}
            <section className="landing-section">
                <div className="landing-content">
                    {/* Title Container on the Left */}
                    <div className="title-container">
                        <h1>Center for<br />Translational<br />Medical Devices</h1>

                        {/* ECG Line */}
                        <div className="ecg-container">
                            <svg
                                ref={ecgRef}
                                className="ecg-line"
                                viewBox="0 0 600 50"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,25 L150,25 L157,10 L163,40 L170,25 L300,25 L307,10 L313,40 L320,25 L450,25 L457,10 L463,40 L470,25 L600,25"
                                    stroke="var(--teal)"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                            </svg>
                        </div>

                        <p className="subtitle">
                            The objective of CENTMED is to catalyze translational research collaborations between researchers at NYUAD and clinicians at medical centres in Abu Dhabi and the UAE. CENTMED is specifically focused on the development of medical device technologies for diagnostics and therapeutics, with a broad goal of advancing Bioinnovation and Health within NYUAD and Abu Dhabi.
                        </p>
                    </div>

                    {/* Heart Animation Container on the Right */}
                    <div className="heart-animation-container">
                        <BeatingHeart />
                    </div>
                </div>
            </section>

            {/* Scroll-triggered Animated Sections */}
            {textBlocks.map((block, index) => (
                <motion.section
                    key={block.id}
                    className={`content-section ${block.align}`}
                    initial={{ opacity: 0, x: block.align === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className="text-wrapper">
                        {/* Optional SVG next to first block */}
                        {index === 0 && (
                            <div className="svg-icon">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="teal">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="text-content">
                            <h2 className="block-heading">Section {block.id}</h2>
                            <p>{block.text}</p>
                        </div>
                    </div>
                </motion.section>
            ))}

        </div>
    );
};

export default Home;