import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "./ClusterDetail.css";

// Import images - You'll need to update these paths to your actual image locations
import neurologicalFeatured from "../assets/neurological_image.jpg";
import dementiaImage1 from "../assets/project1_dementia1.png";
import dementiaImage2 from "../assets/project1_dementia2.png";

const NeurologicalCluster = () => {
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
                <h1>Research Cluster 1: Neurological Disorders</h1>

                <div className="cluster-featured-image">
                    <img src={neurologicalFeatured} alt="Neurological Research" />
                </div>
            </motion.div>

            <div className="projects-container">
                {/* Project 1 */}
                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2>Project 1: Early Dementia Detection</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                Dementia affects millions globally and often goes undiagnosed until it’s too late for effective intervention. Traditional cognitive assessments rely on sporadic clinical visits
                                or self-administered tests, which many elderly individuals either avoid or
                                cannot complete due to stress, lack of motivation, or accessibility issues.

                            </p>
                            <p>
                                This project aims to bridge this gap by seamlessly integrating cognitive screening into
                                weekly AI-assisted phone or video calls between caregivers and their loved
                                ones. By analyzing natural conversations, our solution provides a non-invasive,
                                stress-free, and accessible method to monitor cognitive health (i.e. changes in
                                language, praxis, memory retention, following instructions, orientation in
                                space/time) and detect early signs of decline based on MMSE and MoCA
                                Tests.
                            </p>

                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Maksat Khobdabayev, Research Assistant</p>
                        </div>
                    </div>
                    <div className="project-images-grid">
                        <div className="project-image">
                            <img src={dementiaImage1} alt="Early dementia detection system - Image 1" />
                        </div>
                        <div className="project-image">
                            <img src={dementiaImage2} alt="Early dementia detection system - Image 2" />
                        </div>
                    </div>
                    <p className="image-caption">Graphic abstract for AI-assisted cognitive assessment platform</p>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2>Project 2: Implantable Shunt for Hydrocephalus</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                Hydrocephalus is a condition characterized by an abnormal build-up of cerebrospinal fluid within the brain. Hydrocephalus is managed with the insertion of a ventriculoperitoneal shunt, that allows excess cerebrospinal fluid to drain into the peritoneal cavity. Of the implanted shunts, 40% will fail within the first two years and 90% will fail within ten years. The most common cause of failure is obstruction. This project aims to reduce the failure rate of shunts by reducing the cellular response when implanted and thus, improving the biocompatibility.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Abdel Hameed Dabbour, Postdoctoral Research Associate</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NeurologicalCluster;