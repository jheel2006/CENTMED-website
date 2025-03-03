import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Research.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

const Research = () => {
    const location = useLocation(); // Get current page location
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        setTriggerAnimation(false); // Reset animation before triggering
        setTimeout(() => setTriggerAnimation(true), 50); // Small delay ensures animation resets properly
    }, [location.pathname]); // Re-run animation whenever location changes

    const clusters = [
        {
            title: "Metabolic Cluster",
            image: "https://www.vai.org/wp-content/uploads/2022/06/Metabolism-banner-01.png",
        },
        {
            title: "Cardiovascular Cluster",
            image: "https://www.monash.edu/__data/assets/image/0003/3303804/Banner-final.jpg",
        },
        {
            title: "Neurological Cluster",
            image: "https://lilavatihospital.com/uploads/home_banner/InnerBanner-1026-0995-2208.jpg",
        },
    ];

    return (
        <div className="research-container">
            <ScrollProgress />
            <h1 className="research-title">Research Clusters</h1>
            <p className="research-description">
                The center has three disease focus areas: <strong>1) metabolic</strong>, <strong>2) cardiovascular</strong>, and <strong>3) neurological disorders</strong>.
                These are relevant to Abu Dhabi given the high prevalence of metabolic non-communicable diseases (NCD) such as obesity and diabetes, cardiovascular disease,
                and the rising prevalence of neurologic disorders. We have established collaborations with endocrinologists, surgeons, cardiologists, neurologists, and
                gastroenterologists to identify unmet clinical needs addressable through novel medical devices. Each focus area is led by a primary technical lead from NYUAD
                and a clinical co-lead from Cleveland Clinic Abu Dhabi (CCAD). Six CENTMED PIs contribute a unique technical skillset and work collaboratively on all projects.
            </p>
            <div className="research-grid">
                {clusters.map((cluster, index) => (
                    <motion.div
                        key={index}
                        className="research-card"
                        style={{ backgroundImage: `url(${cluster.image})` }}
                        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                        viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers once when 20% visible
                        transition={{ duration: 0.2, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <div className="research-card-title">{cluster.title}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Research;
