import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import "./Research.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
import metabolicImage from "../assets/metabolic_image.jpg";
import cardiovascularImage from "../assets/cardiovascular_image.jpg";
import neurologicalImage from "../assets/neurological_image.jpg";

const Research = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Added navigate hook
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 50);
    }, [location.pathname]);

    // Function to handle cluster card click
    const handleClusterClick = (clusterPath) => {
        navigate(clusterPath);
    };

    const clusters = [
        {
            title: "Research Cluster 1: Metabolic Diseases",
            image: metabolicImage,
            path: "/research/metabolic",
        },
        {
            title: "Research Cluster 2: Cardiovascular Diseases",
            image: cardiovascularImage,
            path: "/research/cardiovascular",
        },
        {
            title: "Research Cluster 3: Neurological Diseases",
            image: neurologicalImage,
            path: "/research/neurological",
        },
    ];

    return (
        <div className="research-container">
            <ScrollProgress />
            <h1 className="research-title">Research Clusters</h1>
            <div className="research-description">
                <p>
                    The center has three disease focus areas:
                </p>
                <ul>
                    <li><strong>Metabolic disorders</strong></li>
                    <li><strong>Cardiovascular disorders</strong></li>
                    <li><strong>Neurological disorders</strong></li>
                </ul>
                <p>
                    These are relevant to Abu Dhabi given the high prevalence of metabolic non-communicable diseases (NCD) such as obesity and diabetes, cardiovascular disease,
                    and the rising prevalence of neurologic disorders. We have established collaborations with endocrinologists, surgeons, cardiologists, neurologists, and
                    gastroenterologists to identify unmet clinical needs addressable through novel medical devices. Each focus area is led by a primary technical lead from NYUAD
                    and a clinical co-lead from Cleveland Clinic Abu Dhabi (CCAD). Six CENTMED PIs contribute a unique technical skillset and work collaboratively on all projects.
                </p>
            </div>

            <div className="research-grid">
                {clusters.map((cluster, index) => (
                    <motion.div
                        key={index}
                        className="research-card"
                        style={{ backgroundImage: `url(${cluster.image})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                        onClick={() => handleClusterClick(cluster.path)}
                    >
                        <div className="research-card-title">{cluster.title}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Research;