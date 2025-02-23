import React from "react";
import "./Research.css";

const Research = () => {
    const clusters = [
        {
            title: "Metabolic",
            description: "Addressing metabolic non-communicable diseases such as obesity and diabetes through novel medical devices.",
        },
        {
            title: "Cardiovascular",
            description: "Developing solutions for cardiovascular diseases, a major health concern in Abu Dhabi.",
        },
        {
            title: "Neurological",
            description: "Focusing on the rising prevalence of neurologic disorders through innovative medical devices.",
        },
    ];

    return (
        <div className="research-container">
            <h1>Research Areas and Projects</h1>
            <div className="research-grid">
                {clusters.map((cluster, index) => (
                    <div key={index} className="research-card">
                        <h2>{cluster.title}</h2>
                        <p>{cluster.description}</p>
                    </div>
                ))}
            </div>
            <p className="research-footer">
                We collaborate with experts from multiple disciplines to identify unmet clinical needs. Each focus area is led by a primary technical lead from NYUAD and a clinical co-lead from Cleveland Clinic Abu Dhabi (CCAD), with six CENTMED PIs contributing their expertise.
            </p>
        </div>
    );
};

export default Research;
