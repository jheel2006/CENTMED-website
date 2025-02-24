// import React from "react";
// import "./Research.css";

// const Research = () => {
//     const clusters = [
//         {
//             title: "Metabolic",
//             description: "Addressing metabolic non-communicable diseases such as obesity and diabetes through novel medical devices.",
//         },
//         {
//             title: "Cardiovascular",
//             description: "Developing solutions for cardiovascular diseases, a major health concern in Abu Dhabi.",
//         },
//         {
//             title: "Neurological",
//             description: "Focusing on the rising prevalence of neurologic disorders through innovative medical devices.",
//         },
//     ];

//     return (
//         <div className="research-container">
//             <h1>Research Areas and Projects</h1>
//             <div className="research-grid">
//                 {clusters.map((cluster, index) => (
//                     <div key={index} className="research-card">
//                         <h2>{cluster.title}</h2>
//                         <p>{cluster.description}</p>
//                     </div>
//                 ))}
//             </div>
//             <p className="research-footer">
//                 We collaborate with experts from multiple disciplines to identify unmet clinical needs. Each focus area is led by a primary technical lead from NYUAD and a clinical co-lead from Cleveland Clinic Abu Dhabi (CCAD), with six CENTMED PIs contributing their expertise.
//             </p>
//         </div>
//     );
// };

import React from "react";
import "./Research.css";

const Research = () => {
    const clusters = [
        {
            title: "Metabolic Cluster",
            image: "https://www.vai.org/wp-content/uploads/2022/06/Metabolism-banner-01.png",
        },
        {
            title: "Cardiovascular  Cluster",
            image: "https://www.monash.edu/__data/assets/image/0003/3303804/Banner-final.jpg",
        },
        {
            title: "Neurological Cluster",
            image: "https://lilavatihospital.com/uploads/home_banner/InnerBanner-1026-0995-2208.jpg",
        },
    ];

    return (
        <div className="research-container">
            <h1 className="research-title">Research Clusters</h1>
            <p className="research-description">
                The center has three disease focus areas: <strong>1) metabolic</strong>, <strong>2) cardiovascular</strong>, and <strong>3) neurological disorders</strong>.
                These are relevant to Abu Dhabi given the high prevalence of metabolic non-communicable diseases (NCD) such as obesity and diabetes, cardiovascular disease,
                and the rising prevalence of neurologic disorders. We have established collaborations with endocrinologists, surgeons, cardiologists, neurologists, and
                gastroenterologists to identify unmet clinical needs addressable through novel medical devices. Each focus area is led by a primary technical lead from NYUAD
                and a clinical co-lead from Cleveland Clinic Abu Dhabi (CCAD). Six CENTMED PIs contribute a unique technical skillset and work collaboratively on all projects.
            </p>
            <div className="research-grid">
                {clusters.map((cluster, index) => (
                    <div
                        key={index}
                        className="research-card"
                        style={{ backgroundImage: `url(${cluster.image})` }}
                    >
                        <div className="research-card-title">{cluster.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
