import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import "./People.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

import RafaelSongImage from "../assets/RafaelSong_image.jpg";

const sections = [
    {
        title: "PRINCIPAL INVESTIGATORS (PIs)", people: [
            {
                name: "Yong-Ak (Rafael) Song",
                title: "Principal Investigator",
                description: "Expert in biomedical engineering and translational research.",
                photo: RafaelSongImage
            },
            {
                name: "Dr. John Doe",
                title: "Principal Investigator",
                description: "Expert in biomedical engineering and translational research.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Dr. John Doe",
                title: "Principal Investigator",
                description: "Expert in biomedical engineering and translational research.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Dr. John Doe",
                title: "Principal Investigator",
                description: "Expert in biomedical engineering and translational research.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
        ]
    },
    {
        title: "RESEARCH STAFF", people: [
            {
                name: "Dr. Jane Smith",
                title: "Senior Researcher",
                description: "Specializes in medical device development and innovation.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Dr. Emily White",
                title: "Postdoctoral Fellow",
                description: "Focused on AI-driven diagnostics and healthcare solutions.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
        ]
    },
    {
        title: "COLLABORATORS", people: [
            {
                name: "Dr. Robert Brown",
                title: "Lead Engineer",
                description: "Develops cutting-edge therapeutic medical technologies.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
        ]
    },
    {
        title: "ADMINISTRATION", people: [
            {
                name: "Dr. Alice Green",
                title: "Biomedical Scientist",
                description: "Exploring nanotechnology applications in medicine.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
        ]
    },
    {
        title: "ADVISORY BOARD", people: [
            {
                name: "Dr. Michael Blue",
                title: "Clinical Researcher",
                description: "Bridging medical research with patient applications.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
        ]
    }
];

const People = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const showModal = (person) => {
        setSelectedPerson(person);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPerson(null);
    };

    return (
        <div className="people-container">
            <ScrollProgress />
            <h1 className="people-title">People</h1>
            {sections.map((section, index) => (
                <div key={index} className="people-section">
                    <h2
                        className="section-title"
                        style={section.title === "PRINCIPAL INVESTIGATORS (PIs)" ? { marginTop: "2rem" } : {}}
                    >
                        {section.title}
                    </h2>

                    <div className="section-separator">
                        <div className="vertical-line"></div>
                        <div className="horizontal-line"></div>
                    </div>

                    {/* Animate the whole people-grid from bottom to top */}
                    <motion.div
                        className="people-grid"
                        initial={{ y: 50, opacity: 0 }} // Start from below and hidden
                        whileInView={{ y: 0, opacity: 1 }} // Move to its final position (top) and become visible
                        viewport={{ once: true, amount: 0.2 }} // Trigger animation once the section is 20% in view
                        transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                    >
                        {section.people.map((person, personIndex) => (
                            <div
                                key={personIndex}
                                className="researcher-card"
                                onClick={() => showModal(person)}
                            >
                                <img
                                    src={person.photo}
                                    alt={person.name}
                                    className="researcher-image"
                                />
                                <div className="researcher-info">
                                    <h3>{person.name}</h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Modal */}
                    {modalVisible && selectedPerson && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <h2>{selectedPerson.name}</h2>
                                <p>{selectedPerson.title}</p>
                                <p>{selectedPerson.description}</p>
                                <button onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default People;
