import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SectionNavigator.css";

const SectionNavigator = () => {
    // Sections to track (landing + 3 content sections)
    const sections = ["landing", "what-we-do", "who-we-are", "whats-new"];
    const [activeSection, setActiveSection] = useState(sections[0]);

    // Track scroll position and update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Check which section is currently in view
            const landingSection = document.querySelector(".landing-section");
            const contentSections = document.querySelectorAll(".content-section");

            if (landingSection && scrollPosition < windowHeight * 0.5) {
                setActiveSection("landing");
                return;
            }

            contentSections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    scrollPosition >= sectionTop - windowHeight * 0.5 &&
                    scrollPosition < sectionTop + sectionHeight - windowHeight * 0.3
                ) {
                    setActiveSection(sections[index + 1]);
                }
            });
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Initial check for active section
        handleScroll();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to the corresponding section when a circle is clicked
    const scrollToSection = (sectionId) => {
        let targetElement;

        if (sectionId === "landing") {
            targetElement = document.querySelector(".landing-section");
        } else {
            const contentSections = document.querySelectorAll(".content-section");
            const index = sections.indexOf(sectionId) - 1;
            if (index >= 0 && index < contentSections.length) {
                targetElement = contentSections[index];
            }
        }

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <motion.div
            className="section-navigator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {sections.map((section, index) => (
                <button
                    key={section}
                    className={`nav-circle ${activeSection === section ? "active" : ""}`}
                    onClick={() => scrollToSection(section)}
                    aria-label={`Navigate to ${section.replace(/-/g, " ")} section`}
                >
                    <span className="nav-tooltip">{section.replace(/-/g, " ")}</span>
                </button>
            ))}
        </motion.div>
    );
};

export default SectionNavigator;