import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import "./ClusterDetail.css";

// Import images - You'll need to update these paths to your actual image locations
import cardiovascularFeatured from "../assets/cardiovascular_image.jpg";
import wearableImage from "../assets/project1_wearables.png";
import diagnosticImage1 from "../assets/project2_diagnostic1.png";
import diagnosticImage2 from "../assets/project2_diagnostic2.png";
import laparoscopicImage1 from "../assets/project2_laparoscopic1.jpg";
import laparoscopicImage2 from "../assets/project2_laparoscopic2.jpg";

const CardiovascularCluster = () => {
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
                <h1>Research Cluster 2: Cardiovascular Disease</h1>

                <div className="cluster-featured-image">
                    <img src={cardiovascularFeatured} alt="Cardiovascular Research" />
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
                    <h2>Project 1: Wearables for physiological monitoring and feedback</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                Sleep apnea (SA), encompassing Obstructive, Central, and Mixed subtypes, represents a pervasive global health challenge with significant morbidity and mortality implications. Current state-of-the-art treatments, including complex surgical interventions and implantable nerve stimulation devices, while effective in specific cases, are often costly, invasive, and suffer from limited accessibility, hindering widespread adoption.
                            </p>
                            <p>
                                This project introduces the Therapeutic Night-Patch (TNP), an all-in-one wearable system engineered to revolutionize sleep apnea management. TNP uniquely integrates:
                            </p>
                            <ul className="project-features">
                                <li>Seamless, stretchable, and multimodal sensors for comprehensive physiological monitoring</li>
                                <li>Integrated stimulation electrodes for targeted therapeutic intervention</li>
                                <li>A smartphone-based programmable mobile sleep management system for user-friendly control and data visualization</li>
                                <li>A core closed-loop therapy engine driven by an advanced, adaptive algorithm for real-time sleep disorder detection, nuanced classification, and personalized therapeutic feedback</li>
                            </ul>

                            <p>
                                The core innovation of TNP resides in its fully wearable, closed-loop architecture, achieving continuous, automated, and skin-electrode-based noninvasive therapeutic stimulation. This paradigm enables real-time analysis of the user's sleep state and physiological responses to drive automated adjustments of therapeutic stimulation. TNP's strategic design prioritizes personalized and accessible sleep apnea treatment, expanding advanced care access, especially for underserved populations, through this seamless wearable modality.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Dr. Vega Pradana Rachim, Research Scientist</p>
                        </div>
                    </div>
                    <div className="project-image">
                        <img src={wearableImage} alt="Therapeutic Night-Patch (TNP) wearable system" />
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2>Project 2: Point-of-care diagnostic device for cardiovascular disease biomarkers</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                Cardiovascular disease (CVD) is a major public health problem globally and the leading cause of mortality in the world. Despite the severity of the disease, the diagnosis of cardiovascular disease predominantly hinges on either identifying high-risk individuals through indirect evaluations or employing electrocardiographic or imaging techniques post-symptom onset.
                            </p>
                            <p>
                                In this project, we aim to develop a point-of-care diagnostic platform for the rapid detection of RNA biomarkers associated with CVDs.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Dr. Sanjit Majhi, Research Associate</p>
                        </div>
                    </div>
                    <div className="project-images-grid">
                        <div className="project-image">
                            <img src={diagnosticImage1} alt="Point-of-care diagnostic device - Image 1" />
                        </div>
                        <div className="project-image">
                            <img src={diagnosticImage2} alt="Point-of-care diagnostic device - Image 2" />
                        </div>
                    </div>
                    <p className="image-caption">Graphic abstract for point-of-care diagnostic platform</p>

                </motion.div>

                {/* Project 3 */}
                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2>Project 3: Laparoscopic device</h2>
                    <div className="project-content">
                        <div className="project-description">
                            <p>
                                Minimally invasive surgery (MIS) offers significant benefits, such as smaller incisions, reduced pain, and faster recovery times. However, a major drawback is the loss of tactile feedback, making it difficult for surgeons to assess tissue properties or apply the right amount of force. In traditional open surgery, they rely on their fingertips to feel and manipulate tissues, but MIS tools eliminate this critical sense of touch. This can lead to errors, such as excessive force that may damage delicate tissues or insufficient grasping that affects precision.
                            </p>
                            <p>
                                This project addresses these challenges by integrating sensors into surgical tools to restore tactile feedback while also redesigning them to be more flexible and user-friendly. By providing real-time feedback on grasping forces and tissue characteristics, these innovations enhance surgical precision and reduce complications. Beyond improving existing tools, this effort focuses on rethinking their design to make them more intuitive and adaptable.
                            </p>
                            <p>
                                These advancements extend to laparoscopy, endoscopy, and robotic-assisted surgeries, where force control and tissue assessment are equally critical. By combining smart sensing technology with improved ergonomics, this project paves the way for safer and more effective surgical solutions.
                            </p>
                        </div>
                        <div className="project-personnel">
                            <h3>Research Personnel</h3>
                            <p>Mohammad Qasaimeh, Co- Principal Investigator</p>
                        </div>
                    </div>
                    <div className="project-images-grid">
                        <div className="project-image">
                            <img src={laparoscopicImage1} alt="Laparoscopic device - Image 1" />
                        </div>
                        <div className="project-image">
                            <img src={laparoscopicImage2} alt="Laparoscopic device - Image 2" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CardiovascularCluster;