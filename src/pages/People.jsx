import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import "./People.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

import RafaelSongImage from "../assets/RafaelSong_image.jpg";
import PanceNaumovImage from "../assets/PanceNaumov_image.jpg";
import MohdQasaimehImage from "../assets/MohdQasaimeh_image.jpg";
import KhalilRamadiImage from "../assets/KhalilRamadi_image.jpeg";

const sections = [
    {
        title: "PRINCIPAL INVESTIGATORS (PIs)", people: [
            {
                name: "Yong-Ak (Rafael) Song",
                title: "Principal Investigator",
                description: "Yong-Ak (Rafael) Song received MEng degree in Mechanical Engineering from the RWTH Aachen University of Technology in 1993, and Ph.D. degree from the School of Mechanical Engineering, RWTH Aachen University in 1996. He was a senior research scientist at Korea Institute of Science and Technology (KIST) until 2001. He moved to Boston and worked at MIT until 2012. He is currently an associate professor in the Division of Engineering, New York University in Abu Dhabi (NYUAD) and holds a joint appointment in the Department of Chemical and Biomolecular Engineering, as well as in the Department Biomedical Engineering, Tandon School of Engineering at New York University in Brooklyn, NY. He is also the program head of the Bioengineering Program at NYUAD. His main research interests are on various aspects of micro- and nanoscale bioengineering including biosensors, point-of-care diagnostics, organ/organoid on a chip and biomimetics.",
                photo: RafaelSongImage
            },
            {
                name: "Panče Naumov",
                title: "Principal Investigator",
                description: "Panče Naumov is a full professor of chemistry with tenure at New York University Abu Dhabi (NYUAD), where he also serves as a Global Network Professor and Director of the NYUAD Center for Smart Engineering Materials (CSEM). He leads the Smart Materials Lab, recognized as the top research team in the UAE in chemistry and materials science. Naumov obtained his PhD from the Tokyo Institute of Technology in 2004 and has held research positions in Japan before joining NYUAD. With approximately 300 publications and over USD 15 million in funding, he has delivered around 400 presentations, mentoring more than 60 students since 2012. Naumov serves on editorial boards for several journals and holds leadership roles in various scientific organizations, including the founder of the UAE Chapter of the American Chemical Society, founder of the Emirates Crystallographic Society and a number of other roles. His accolades include multiple fellowships and prestigious awards, recognizing his exceptional contributions to the field and the UAE.",
                photo: PanceNaumovImage
            },
            {
                name: "Mohammad Qasaimeh",
                title: "Principal Investigator",
                description: "Dr. Mohammad A. Qasaimeh is an Associate Professor of Mechanical Engineering and Bioengineering at New York University Abu Dhabi (NYUAD), UAE. He is also a Global Network Associate Professor in the Mechanical and Aerospace Engineering Department and the Biomedical Engineering Department at NYU Tandon School of Engineering, NY, USA. He earned his PhD in Biomedical Engineering from McGill University in Montreal in 2013. During his PhD, he received several prestigious fellowships and awards, including the NSERC Postdoctoral Fellowship and the Alexander Graham Bell Graduate Scholarship. Before joining NYUAD, he was a Postdoctoral Research Associate at the Massachusetts Institute of Technology and a Research Fellow at Harvard Medical School (Dana-Farber Cancer Institute). Since joining NYUAD in 2014, Dr. Qasaimeh has established the Advanced Microfluidics and Microdevices Laboratory (AMMLab). His current research focuses on developing microfluidic biochips and microdevices for point-of-care diagnostics and biomedical applications. His research has been published in various peer-reviewed journals, including Small, Advanced Science, Advanced Materials Technologies, Microsystems & Nanoengineering, and Lab on a Chip.",
                photo: MohdQasaimehImage
            },
            {
                name: "Khalil Ramadi",
                title: "Principal Investigator",
                description: "Dr. Ramadi is an Assistant Professor of Bioengineering at NYUAD and Director of the Laboratory for Advanced Neuroengineering and Translational Medicine (LANTRN). He is an affiliated Professor of Radiology at NYU Langone Health and Grossman School of Medicine. Prior to his faculty appointments, he was an NIH Ruth L. Kirschstein F32 postdoctoral fellow at the Massachusetts Institute of Technology (MIT). Dr. Ramadi obtained his PhD in Biomedical Engineering from MIT and Harvard Medical School. Dr. Ramadi’s research centers on developing technologies that solve clinical problems and advance human health. His lab works on ingestible electronic pills and implantable devices for drug delivery and neuromodulation. Dr. Ramadi is a board member and former co-Director of MIT Hacking Medicine, a group dedicated to enabling multidisciplinary health entrepreneurship worldwide, spawning 50+ companies and raising $250M+ in funding. He has advised over 50 early-stage companies as a faculty mentor in the MIT Sandbox, MIT IDEA2 Global Incubator, and MIT-UM6P Explorer/Accelerator programs. He has been named a TED fellow, CIFAR global scholar, Forbes 30 Under 30, MIT Technology Review Innovator Under 35 (MENA), and has received honors including the BMES Career Development Award and a NASA Aeronautics Scholarship.",
                photo: KhalilRamadiImage
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
                                <img
                                    src={selectedPerson.photo}
                                    alt={selectedPerson.name}
                                    className="modal-image"
                                />
                                <div className="modal-text">
                                    <h2>{selectedPerson.name}</h2>
                                    <p>{selectedPerson.title}</p>
                                    <p>{selectedPerson.description}</p>
                                    <button onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default People;
