import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import BeatingHeart from "../components/BeatingHeart";
import ResearchIcon from "../components/ResearchIcon";
import TeamIcon from "../components/TeamIcon";
import NewsIcon from "../components/NewsIcon";
import SectionNavigator from "../components/SectionNavigator";
import researchImage from "../assets/centmed_research_areas.png"; // update path and name accordingly


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
        {
            id: 1,
            title: "What We Do",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex at justo congue, non feugiat ligula fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex at justo congue, non feugiat ligula fringilla.",
            align: "left",
            icon: () => <img src={researchImage} alt="Research" className="section-icon" />,
            buttons: [
                { label: "Research Clusters", link: "/research" }
            ]
        },
        {
            id: 2,
            title: "Who We Are",
            text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            align: "right",
            icon: TeamIcon,
            buttons: [
                { label: "Meet Our Team", link: "/people" }
            ]
        },
        {
            id: 3,
            title: "What's New",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            align: "left",
            icon: NewsIcon,
            buttons: [
                { label: "News", link: "/news" },
                { label: "Events", link: "/events" }
            ]
        }
    ];

    return (
        <div className="home-container">
            {/* Section Navigator */}
            {/* <SectionNavigator /> */}

            {/* Landing Section with Title and Heart Animation */}

            <section className="landing-section">
                <div className="landing-wrapper">
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
                </div>
            </section>

            {/* Scroll-triggered Animated Sections with slide effects */}
            {textBlocks.map((block) => (
                <motion.section
                    key={block.id}
                    className="content-section"
                    id={block.id === 1 ? "what-we-do" : block.id === 2 ? "who-we-are" : "whats-new"}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="split-section-content">
                        {block.align === "left" ? (
                            <>
                                <motion.div
                                    className="split-text-container"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <h2 className="block-heading">{block.title}</h2>
                                    <p className="block-section-text">{block.text}</p>

                                    {/* Buttons */}
                                    <div className="block-buttons">
                                        {block.buttons && block.buttons.map((button, index) => (
                                            <Link key={index} to={button.link} className="section-button">
                                                {button.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="split-svg-container"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                >
                                    {block.icon ? <block.icon /> : block.svg}
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    className="split-svg-container"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {block.icon ? <block.icon /> : block.svg}
                                </motion.div>
                                <motion.div
                                    className="split-text-container"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                >
                                    <h2 className="block-heading">{block.title}</h2>
                                    <p className="block-section-text">{block.text}</p>

                                    {/* Buttons */}
                                    <div className="block-buttons">
                                        {block.buttons && block.buttons.map((button, index) => (
                                            <Link key={index} to={button.link} className="section-button">
                                                {button.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>
                </motion.section>
            ))}
        </div>
    );
};

export default Home;