import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import metabolicFeatured from "../assets/metabolic_image.webp";
import "./ClusterDetail.css";

const MetabolicCluster = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/research");
    };

    return (
        <div className="cluster-detail-container">
            <motion.div
                className="back-button"
                onClick={goBack}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
            >
                <ArrowLeft size={24} />
                <span>Back to Research Clusters</span>
            </motion.div>

            <motion.div
                className="cluster-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Research Cluster 1: Metabolic Disease</h1>

                <div className="cluster-featured-image">
                    <img src={metabolicFeatured} alt="Metabolic Research" />
                </div>
            </motion.div>

            <div className="projects-container">
                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2>Project 1: Ingestible pill for microbiome collection</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                The human body consists of trillions of microbes residing within its various parts, most importantly in the mucosal linings of the gastrointestinal tract and oral cavity. These microbial communities have been shown to play a significant role in various metabolic & inflammatory diseases. In order to fully understand the role of these microbial communities, it is crucial to access and sample them. Existing technologies for investigating and retrieving these microbes, especially from certain areas of the gut such as the small intestine are limited and do not give an accurate representation of the microbiota.
                            </p>
                            <p>
                                This project aims to develop an ingestible device for microbial sampling of the upper gastrointestinal tract. The device aims to sample bacteria from both the luminal as well as mucosal linings thereby providing a more realistic representation of the microbiota as opposed to the current standard technique of stool sampling.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Dr. Hanan Mohammed, Research Associate</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2>Project 2: Bariatric stent</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                In 2022, 43% of adults were overweight and 16% were living with obesity. While bariatric surgery effectively treats morbid-obesity and has a favorable safety profile, gastric leakage remains a life-threatening complication. This project aims to enhance the management of gastric leakage by designing an innovative stent that improves fluid evacuation, promoting faster and more effective healing.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Parima Phowarasoontorn</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MetabolicCluster;