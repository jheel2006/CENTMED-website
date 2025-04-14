import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import BeatingHeart from "../components/BeatingHeart";

const Home = () => {
    const ecgRef = useRef(null);

    useEffect(() => {
        if (ecgRef.current) {
            // Add class to trigger animation after component mounts
            setTimeout(() => {
                ecgRef.current.classList.add('animate-ecg');
            }, 500); // Short delay to let the page load first
        }
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
                                    d="M0,25 L120,25 L130,25 L135,10 L140,40 L145,25 L160,25 L260,25 L270,20 L280,30 L290,25 L400,25 L600,25"
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
            {textBlocks.map((block) => (
                <motion.section
                    key={block.id}
                    className={`content-section ${block.align}`}
                    initial={{ opacity: 0, x: block.align === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className="text-container">{block.text}</div>
                </motion.section>
            ))}
        </div>
    );
};

export default Home;