import React from "react";
import { motion } from "framer-motion";
import "./Research.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

const Research = () => {
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
                        initial={{ x: "100vw", opacity: 0 }} // Start off-screen to the right
                        animate={{ x: 0, opacity: 1 }} // Move to original position
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    >
                        <div className="research-card-title">{cluster.title}</div>
                    </motion.div>



                ))}
            </div>
        </div>
    );
};

export default Research;
