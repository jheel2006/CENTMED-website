import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import "./People.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

import RafaelSongImage from "../assets/RafaelSong_image.jpg";
import PanceNaumovImage from "../assets/PanceNaumov_image.jpg";
import MohdQasaimehImage from "../assets/MohdQasaimeh_image.jpg";
import KhalilRamadiImage from "../assets/KhalilRamadi_image.jpeg";
import DipeshChaudhuryImage from "../assets/DipeshChaudhury_image.jpg";
import SohmyungHaImage from "../assets/SohmyungHa_image.png";
import SanjitMajhiImage from "../assets/SanjitMajhi_image.jpg";
import PukarMaharjanImage from "../assets/PukarMaharjan_image.jpg";
import VegaImage from "../assets/Vega_image.jpg";
import PrimImage from "../assets/Prim_image.jpg";
import SajinaLalImage from "../assets/SajinaLal_image.png";

const sections = [
    {
        title: "PRINCIPAL INVESTIGATORS (PIs)", people: [
            {
                name: "Yong-Ak (Rafael) Song",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Yong-Ak (Rafael) Song received MEng degree in Mechanical Engineering from the RWTH Aachen University of Technology in 1993, and Ph.D. degree from the School of Mechanical Engineering, RWTH Aachen University in 1996. He was a senior research scientist at Korea Institute of Science and Technology (KIST) until 2001. He moved to Boston and worked at MIT until 2012. He is currently an associate professor in the Division of Engineering, New York University in Abu Dhabi (NYUAD) and holds a joint appointment in the Department of Chemical and Biomolecular Engineering, as well as in the Department Biomedical Engineering, Tandon School of Engineering at New York University in Brooklyn, NY. He is also the program head of the Bioengineering Program at NYUAD. His main research interests are on various aspects of micro- and nanoscale bioengineering including biosensors, point-of-care diagnostics, organ/organoid on a chip and biomimetics.",
                photo: RafaelSongImage
            },
            {
                name: "Khalil Ramadi",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Dr. Ramadi is an Assistant Professor of Bioengineering at NYUAD and Director of the Laboratory for Advanced Neuroengineering and Translational Medicine (LANTRN). He is also an affiliated Professor of Radiology at NYU Langone Health and Grossman School of Medicine. Before his faculty appointments, he was an NIH Ruth L. Kirschstein F32 postdoctoral fellow at MIT. Dr. Ramadi earned his PhD in Biomedical Engineering from MIT and Harvard Medical School. His research develops technologies to address clinical challenges and improve health. His lab focuses on ingestible electronic pills and implantable devices for drug delivery and neuromodulation. A board member and former co-Director of MIT Hacking Medicine, he helped launch 50+ companies, raising $250M+. He has mentored 50+ early-stage companies through MIT Sandbox, MIT IDEA2 Global Incubator, and MIT-UM6P Explorer/Accelerator programs. Named a TED Fellow, CIFAR Global Scholar, Forbes 30 Under 30, and MIT Technology Review Innovator Under 35 (MENA), he has received honors including the BMES Career Development Award and a NASA Aeronautics Scholarship.",
                photo: KhalilRamadiImage
            },
            {
                name: "Sohmyung Ha",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Sohmyung Ha received the BS and MS degrees in Electrical Engineering from KAIST, Korea and the M.S. and Ph.D. degrees in Bioengineering from University of California, San Diego, CA, USA. From 2006 to 2010, he worked at Samsung Electronics as an integrated circuit designer for commercial multimedia devices. Since 2016, he has been with New York University Abu Dhabi, where he is Associate Professor, and also with New York University, where he is Global Network Associate Professor. He currently serves as an associate editor of IEEE Transactions on Biomedical Circuits and Systems, IEEE Open Journal of Solid-State Circuits Society, and Frontiers in Electronics. He is a member of the Analog Signal Processing Technical Committee and the Biomedical and Life Science Circuits and Systems Technical Committee of the IEEE Circuits and Systems Society. He is also a member of the international technical program committee of the International Solid-State Circuits Conference (ISSCC).",
                photo: SohmyungHaImage
            },
            {
                name: "Mohammad Qasaimeh",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Dr. Mohammad A. Qasaimeh is an Associate Professor of Mechanical Engineering and Bioengineering at New York University Abu Dhabi (NYUAD), UAE, and a Global Network Associate Professor in the Mechanical and Aerospace Engineering and Biomedical Engineering Departments at NYU Tandon School of Engineering, NY, USA. He earned a PhD in Biomedical Engineering from McGill University in Montreal in 2013. During his PhD, he received several prestigious fellowships and awards, including the NSERC Postdoctoral Fellowship and the Alexander Graham Bell Graduate Scholarship. Before joining NYUAD, he was a Postdoctoral Research Associate at MIT and a Research Fellow at Harvard Medical School (Dana-Farber Cancer Institute). Since 2014, Dr. Qasaimeh has led the Advanced Microfluidics and Microdevices Laboratory (AMMLab) at NYUAD. His research focuses on developing microfluidic biochips and microdevices for point-of-care diagnostics and biomedical applications. His work has been published in peer-reviewed journals, including Small, Advanced Science, Advanced Materials Technologies, Microsystems & Nanoengineering, and Lab on a Chip.",
                photo: MohdQasaimehImage
            },
            {
                name: "Panče Naumov",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Panče Naumov is a full professor of chemistry with tenure at New York University Abu Dhabi (NYUAD), where he also serves as a Global Network Professor and Director of the NYUAD Center for Smart Engineering Materials (CSEM). He leads the Smart Materials Lab, recognized as the top research team in the UAE in chemistry and materials science. Naumov obtained his PhD from the Tokyo Institute of Technology in 2004 and has held research positions in Japan before joining NYUAD. With approximately 300 publications and over USD 15 million in funding, he has delivered around 400 presentations, mentoring more than 60 students since 2012. Naumov serves on editorial boards for several journals and holds leadership roles in various scientific organizations, including the founder of the UAE Chapter of the American Chemical Society, founder of the Emirates Crystallographic Society and a number of other roles. His accolades include multiple fellowships and prestigious awards, recognizing his exceptional contributions to the field and the UAE.",
                photo: PanceNaumovImage
            },
            {
                name: "Dipesh Chaudhury",
                title: "PRINCIPAL INVESTIGATOR",
                description: "",
                photo: DipeshChaudhuryImage
            },

        ]
    },
    {
        title: "CCAD - CO-INVESTIGATORS",
        displayAsList: false,
        people: [
            {
                name: "Hussein Saadi, MD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Cardiology Department",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Firas Al Badarin, MD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Respiratory Institute",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Florian Roser, MD, PhD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Heart, Vascular & Thoracic Institute",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },

        ]
    },
    {
        title: "RESEARCH STAFF", people: [
            {
                name: "Sanjit Majhi",
                title: "RESEARCH STAFF",
                description: "Sanjit Manohar Majhi received his M.Sc. degree in Chemistry, in 2008, at Utkal University, India. He has worked as a researcher from 2009 to 2012, at IMMT, CSIR, Bhubaneswar, India. He received his Ph.D. degree in August 2017 from Jeonbuk National University (JBNU), South Korea. Then he worked as a Postdoctoral fellow at KAUST, Saudi Arabia (2018-2019) and Hanyang University, Seoul, South Korea (2019-2020). Then he was a Research Associate at United Arab Emirates University, UAE (2021-2023). He joined as a Research Associate at New York University, Abu Dhabi (NYUAD) in April 2023. He has published 40 papers with citations nearly 3285 and h-index of 29. He is interested in the synthesis of various nanostructures including core@shell NPs, MOFs, metal-oxide NPs, 2D MXene materials, and organic crystals. His current research focusses on 2D materials based flexible and wearable sensor for biosensing and cardiovascular diseases diagnosis.",
                photo: SanjitMajhiImage
            },
            {
                name: "Hanan Mohammed",
                title: "RESEARCH STAFF",
                description: "Hanan is postdoctoral research associate in the LANTRN Lab and possesses a multidisciplinary background that overlaps material science, biomedical & electrical engineering. She has extensive experience in clean room-based nanofabrication techniques, 3D printing, material characterization & imaging. Hanan pursued her PhD in Electrical Engineering from the Sensing, Magnetism & Microsystems (SMM) Group at King Abdullah University of Science & Technology (KSA) and prior to that obtained her Masters in Nanoscale Science & Technology from University of Leeds (UK). Hanan is certified in innovation & technology transfer from ASTP & Cornell University and has served as a mentor at several international hackathons such as MIT, Impact Hub UK, Teens in AI etc. She is passionate about science engagement & communication and has won several awards for it such as Falling Walls Lab, IET PATW etc.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Pukar Maharjan",
                title: "RESEARCH STAFF",
                description: "Pukar Maharjan is a researcher specializing in wearable electronics, electronic tattoos, biosensing, and energy-harvesting systems. His interdisciplinary expertise spans materials science, flexible electronics, and advanced fabrication techniques, enabling the development of innovative solutions for health monitoring and seamless human–device interaction. He is currently a Postdoctoral Associate under Prof. Sohmyung Ha at the Center for Translational Medical Devices (CENTMED) at NYU Abu Dhabi. Dr. Maharjan received his Ph.D. in Electronics Engineering from Kwangwoon University in Seoul, South Korea, where he also continued his work as a Postdoctoral Researcher. He further expanded his research at The University of Texas at Austin in the Department of Aerospace Engineering and Engineering Mechanics, working under the mentorship of Prof. Nanshu Lu. With a strong foundation in microfabrication, soft electronics, and system-level integration, Dr. Maharjan’s work focuses on the design and development of next-generation, non-invasive, and energy-efficient wearable medical devices tailored for personalized and preventative healthcare.",
                photo: PukarMaharjanImage
            },
            {
                name: "Heba Naser",
                title: "RESEARCH STAFF",
                description: "",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Vega",
                title: "RESEARCH STAFF",
                description: "Dr. Vega Pradana Rachim is a Research Scientist at the Integrated BioElectronics Laboratory, led by Prof. Sohmyung Ha, and the Research Center for Translational Medical Devices (CENTMED) at NYU Abu Dhabi. He earned his Ph.D. in Electronics Engineering in 2019 from Pukyong National University, South Korea, where he developed multimodal wrist-wearable biosensors for non-invasive smart healthcare, including cuffless blood pressure and glucose monitoring. He received the Researcher of the Year award (BK21 PLUS, 2017) and Best Paper Awards (IEEE ICASI, 2017; Korean Sensor Society, 2018). He continued at POSTECH, South Korea, in the Innovative Medical Solution Lab as Postdoctoral Researcher (2019–2021) and Research Assistant Professor (2021–2025), co-leading projects on biosensors, artificial pancreas systems, and diabetes algorithms with Prof. Sung-Min Park and CureStream. He received the PIURI Fellowship (2022–2024) and a Korean NRF grant (2020–2022). His current research focuses on wearable closed-loop therapeutic systems for sleep disorders, integrating neuromodulation, embedded AI, and digital twin modeling for personalized care.",
                photo: VegaImage
            },
            {
                name: "Abdel",
                title: "RESEARCH STAFF",
                description: "",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Prim",
                title: "RESEARCH STAFF",
                description: "Prim is a Research Assistant with a degree in Mechanical Engineering from New York University Abu Dhabi. Her interest lies in the field of medical device technology and additive manufacturing. Prim is designing a medical device with improved fluid drainage efficacy to promote faster healing for post-surgical patients.",
                photo: PrimImage
            },
        ]
    },
    {
        title: "CCAD COLLABORATORS",
        displayAsList: false,
        people: [
            {
                name: "Carlos Abril",
                title: "COLLABORATOR - CLEVELAND CLINIC ABU DHABI",
                description: "Develops cutting-edge therapeutic medical technologies.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Juan S. Barajas-Gamboa",
                title: "COLLABORATOR - CLEVELAND CLINIC ABU DHABI",
                description: "Develops cutting-edge therapeutic medical technologies.",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
        ]
    },
    {
        title: "ADMINISTRATION", people: [
            {
                name: "Sajina Lal",
                title: "ADMINISTRATION",
                description: "  ",
                photo: SajinaLalImage
            }
        ]
    },
    {
        title: "ADVISORY BOARD",
        displayAsList: true, // New flag to display as list 
        people: [
            {
                name: "Andreas Hielscher",
                title: "Advisory Board Member",
                description: "NYU Tandon School of Engineering, USA",
            },
            {
                name: "Christopher Lee",
                title: "Advisory Board Member",
                description: "Despierta Ventures (Venture capital firm), USA",
            },
            {
                name: "Giovanni Traverso",
                title: "Advisory Board Member",
                description: "MIT, Brigham and Women’s Hospital, USA",
            },
            {
                name: "Meena Subramanyam",
                title: "Advisory Board Member",
                description: "Takeda Pharmaceutical, USA",
            },
            {
                name: "Nicole Pamme",
                title: "Advisory Board Member",
                description: "Department of Chemistry, Stockholm University, Sweden",
            },
            {
                name: "Ali Bhagat",
                title: "Advisory Board Member",
                description: "National University of Singapore",
            },
            {
                name: "Sultan Haider",
                title: "Advisory Board Member",
                description: "Siemens Healthineers, Germany",
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

                    {/* Check if section should be displayed as list or grid */}
                    {section.displayAsList ? (
                        <motion.div
                            className="investigators-list"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="list-container">
                                {section.people.map((person, personIndex) => (
                                    <div key={personIndex} className="list-item">
                                        <div className="bullet-point">•</div>
                                        <div className="investigator-info">
                                            <h3>{person.name}</h3>
                                            <p>{person.title}</p>
                                            {person.description && <p className="description">{person.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* Animate the people-grid from bottom to top */
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
                    )}

                    {/* Modal */}
                    {modalVisible && selectedPerson && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                {selectedPerson.photo && (
                                    <img
                                        src={selectedPerson.photo}
                                        alt={selectedPerson.name}
                                        className="modal-image"
                                    />
                                )}
                                <div className="modal-text">
                                    <h2>{selectedPerson.name}</h2>
                                    <h3>{selectedPerson.title}</h3>
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