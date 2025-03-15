import React, { useState } from "react";
import "./Publications.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

const Publications = () => {
    const [filter, setFilter] = useState("journal"); // Default: show journal

    const toggleFilter = (type) => {
        setFilter(type);
    };

    const publications = {
        journal: [
            {
                title: "MechanoBioCAD: A Generalized Semi-Automated Computational Tool for Mechanobiological Studies",
                authors: "N. Baban, C. Stubbs, Y.-A. Song",
                journal: "Lab on a Chip",
                year: 2025,
                doi: "https://doi.org/10.1039/D4LC00843J",
            },
        ],
        conference: [
            {
                title: "A Modular and Reconfigurable Microfluidic Device for Culturing Spheroids Under Continuous Perfusion",
                authors: "H. Aljayyousi, S. Sahloul, A. Orozaliev, N. Baban, A. Al Nuairi, P. John, A. Zam, P. Percipalle, Y.-A. Song",
                conference: "Northeast Bioengineering Conference 2025",
                date: "April 3-4, 2025",
                location: "Brooklyn, NY",
            },
        ],
    };

    return (
        <div className="publications-container">
            <ScrollProgress />
            <h1 className="publications-title">Publications</h1>

            <div className="filter-container">
                <button
                    className={`filter-btn ${filter === "journal" ? "active" : ""}`}
                    onClick={() => toggleFilter("journal")}
                >
                    Journal
                </button>
                <button
                    className={`filter-btn ${filter === "conference" ? "active" : ""}`}
                    onClick={() => toggleFilter("conference")}
                >
                    Conference
                </button>
            </div>

            <section className="publications-list">
                {filter === "journal" && (
                    <div className="card-container">
                        {publications.journal.map((pub, index) => (
                            <div key={index} className="publication-card">
                                <span className="pub-year">{pub.year}</span>
                                <h3>{pub.title}</h3>
                                <p className="pub-journal">{pub.journal}</p>
                                <hr className="pub-divider" />
                                <p className="pub-authors">{pub.authors}</p>
                                <div
                                    className="card-arrow"
                                    onClick={() => window.open(pub.doi, "_blank", "noopener,noreferrer")}
                                >
                                    &#8599;
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {filter === "conference" && (
                    <div className="card-container">
                        {publications.conference.map((pub, index) => (
                            <div key={index} className="publication-card">
                                <span className="pub-year">{pub.date.split(" ")[2]}</span>
                                <h3>{pub.title}</h3>
                                <p className="pub-journal">{pub.conference}</p>
                                <hr className="pub-divider" />
                                <p className="pub-authors">{pub.authors}</p>
                                <div
                                    className="card-arrow"
                                    onClick={() => window.open(pub.doi, "_blank", "noopener,noreferrer")}
                                >
                                    &#8599;
                                </div>
                            </div>

                        ))}
                    </div>
                )}
                <p></p>
                <p></p>
                <p></p>
            </section>
        </div>
    );
};

export default Publications;
