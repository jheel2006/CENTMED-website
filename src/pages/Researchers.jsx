import React from "react";
import "./Researchers.css";

const researchers = [
    { name: "Dr. John Doe", title: "Principal Investigator", description: "Expert in biomedical engineering and translational research." },
    { name: "Dr. Jane Smith", title: "Senior Researcher", description: "Specializes in medical device development and innovation." },
    { name: "Dr. Emily White", title: "Postdoctoral Fellow", description: "Focused on AI-driven diagnostics and healthcare solutions." },
    { name: "Dr. Robert Brown", title: "Lead Engineer", description: "Develops cutting-edge therapeutic medical technologies." },
    { name: "Dr. Alice Green", title: "Biomedical Scientist", description: "Exploring nanotechnology applications in medicine." },
    { name: "Dr. Michael Blue", title: "Clinical Researcher", description: "Bridging medical research with patient applications." }
];

const Researchers = () => {
    return (
        <div className="researchers-container">
            <h1 className="researchers-title">Researchers / PIs</h1>
            <div className="researchers-grid">
                {researchers.map((researcher, index) => (
                    <div key={index} className="researcher-card">
                        <img src="https://via.placeholder.com/150" alt="Researcher" className="researcher-image" />
                        <div className="researcher-info">
                            <h3>{researcher.name}</h3>
                            <p className="researcher-title">{researcher.title}</p>
                            <p>{researcher.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Researchers;
