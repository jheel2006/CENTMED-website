import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const textBlocks = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ex at justo congue, non feugiat ligula fringilla.", align: "left" },
    { id: 2, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.", align: "right" },
    { id: 3, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", align: "left" }
];

const Home = () => {
    return (
        <div className="home-container">
            {/* Fullscreen Title Section */}
            <section className="home-title-section">
                <h1>Center for Translational Medical Devices</h1>
            </section>

            {/* Scroll-triggered Animated Sections */}
            {textBlocks.map((block) => (
                <motion.section
                    key={block.id}
                    className={`content-section ${block.align}`}
                    initial={{ opacity: 0, x: block.align === "left" ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }} // Triggers when half of the section is visible
                >
                    <div className="text-container">{block.text}</div>
                </motion.section>
            ))}
        </div>
    );
};

export default Home;
