import React from "react";
import "./People.css";

const people = [
    { name: "Dr. John Doe", title: "Principal Investigator", description: "Expert in biomedical engineering and translational research." },
    { name: "Dr. Jane Smith", title: "Senior Researcher", description: "Specializes in medical device development and innovation." },
    { name: "Dr. Emily White", title: "Postdoctoral Fellow", description: "Focused on AI-driven diagnostics and healthcare solutions." },
    { name: "Dr. Robert Brown", title: "Lead Engineer", description: "Develops cutting-edge therapeutic medical technologies." },
    { name: "Dr. Alice Green", title: "Biomedical Scientist", description: "Exploring nanotechnology applications in medicine." },
    { name: "Dr. Michael Blue", title: "Clinical Researcher", description: "Bridging medical research with patient applications." }
];

const People = () => {
    return (
        <div className="people-container">
            <h1 className="people-title">people / PIs</h1>
            <div className="people-grid">
                {people.map((researcher, index) => (
                    <div key={index} className="researcher-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Researcher" className="researcher-image" />
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

export default People;
