import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "./ClusterDetail.css";

const ClusterTemplate = ({
    title,
    projects,
    featuredImage // Optional for clusters with images
}) => {
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
                <h1>{title}</h1>

                {/* If featured image is provided */}
                {featuredImage && (
                    <div className="cluster-featured-image">
                        <img src={featuredImage} alt={title} />
                    </div>
                )}
            </motion.div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
                    >
                        <h2>{project.title}</h2>
                        <div className="project-content">
                            <div className="project-description">
                                {project.description.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="project-personnel">
                                <h3>Research Personnel</h3>
                                <p>{project.personnel}</p>
                            </div>

                            {/* If project image is provided */}
                            {project.image && (
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ClusterTemplate;