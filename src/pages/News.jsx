import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
import xpanseLizardImage from "../assets/xpanse_lizards_image.jpg";
import DOHInnovationChallengeImage from "../assets/DOH_innovation_challenge.png"

// News data - expanded from your home page
const newsItems = [
    {
        id: 1,
        title: "Brain Organoids + Lizard Tails + Biomimicry",
        subtitle: "Dr. Rafael Song explores brain organoids, bioinspired materials, and the future of translational medicine.",
        date: "May 15, 2025",
        image: xpanseLizardImage,
        link: "https://www.xpanse.world/insight/brain-organoids-lizard-tails-biomimicry",
        excerpt: "Dr. Rafael Song shares his interdisciplinary approach to innovation — from growing brain organoids to testing lemon peels and lizard tails for smarter biomaterials. This feature explores his team's use of AI, synthetic tissues, and nature-inspired designs to shape the future of medical devices.",
        category: "Research"
    },

    {
        id: 2,
        title: "Research Collaboration with Cleveland Clinic Abu Dhabi",
        subtitle: "New partnership focuses on cardiovascular device development",
        date: "April 10, 2025",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        link: "/news/cleveland-clinic-partnership",
        excerpt: "CENTMED is proud to announce a new collaborative partnership with Cleveland Clinic Abu Dhabi. This strategic alliance will focus on developing next-generation cardiovascular devices tailored to address regional health challenges, combining CENTMED's engineering expertise with Cleveland Clinic's clinical excellence.",
        category: "Partnerships"
    },
    {
        id: 3,
        title: "CENTMED Student Team Wins Innovation Award",
        subtitle: "NYUAD duo awarded for groundbreaking dementia detection software at DOH innovation challenge.",
        date: "November 20, 2024",
        image: DOHInnovationChallengeImage,
        link: "https://nyuad.nyu.edu/en/academics/divisions/engineering/engineering-awards-successes.html",
        excerpt: "The NYUAD student team of Maksat Khobdabayev and Hyun Woo Lim, supervised by CENTMED, won the first prize at the Abu Dhabi Academic Healthcare Innovation Challenge by the Department of Health (DOH). The team developed an early dementia detection software. The official award ceremony was held on Nov. 20th 2024 at the St. Regis Saadiyat Island.",
        category: "Awards"
    },
    // {
    //     id: 4,
    //     title: "New Research Grant for Metabolic Health Devices",
    //     subtitle: "UAE Ministry of Health funds CENTMED's latest research initiative",
    //     date: "February 15, 2025",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    //     link: "/news/metabolic-research-grant",
    //     excerpt: "CENTMED has secured a substantial research grant from the UAE Ministry of Health to advance the development of innovative metabolic health devices. The funding will support a three-year research program focused on creating affordable and accessible tools for diabetes management and metabolic syndrome monitoring.",
    //     category: "Funding"
    // },
    // {
    //     id: 5,
    //     title: "CENTMED Launches New Graduate Fellowship Program",
    //     subtitle: "Supporting the next generation of medical device innovators",
    //     date: "January 30, 2025",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    //     link: "/news/fellowship-program-launch",
    //     excerpt: "CENTMED is excited to announce the launch of a new graduate fellowship program designed to nurture emerging talent in medical device engineering. The program will provide comprehensive funding and mentorship opportunities for graduate students pursuing innovative research in translational medical devices.",
    //     category: "Education"
    // },
    // {
    //     id: 6,
    //     title: "Breakthrough in Wearable Diabetes Monitoring Technology",
    //     subtitle: "CENTMED researchers develop non-invasive glucose monitoring prototype",
    //     date: "January 12, 2025",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    //     link: "/news/wearable-diabetes-monitoring",
    //     excerpt: "A research team at CENTMED has achieved a significant breakthrough in wearable diabetes monitoring technology. Their prototype device enables continuous glucose monitoring without the need for blood samples, representing a major advance in diabetes management technology with particular relevance to the UAE's public health priorities.",
    //     category: "Research"
    // },
    // {
    //     id: 7,
    //     title: "CENTMED Annual Report Highlights Impact on Regional Healthcare",
    //     subtitle: "2024 achievements demonstrate center's growing influence",
    //     date: "December 20, 2024",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    //     link: "/news/annual-report-2024",
    //     excerpt: "CENTMED has released its annual report for 2024, showcasing the center's expanding impact on healthcare innovation in Abu Dhabi and the broader UAE region. The report highlights key research achievements, clinical partnerships, and educational initiatives that have contributed to advancing medical device technology and improving patient outcomes.",
    //     category: "Reports"
    // }
];

const News = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories and add "All" option
    const categories = ["All", ...new Set(newsItems.map(item => item.category))];

    // Filter news items based on selected category
    const filteredNews = activeCategory === "All"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    return (
        <div className="news-container">
            <ScrollProgress />

            <div className="news-header">
                <h1 className="news-title">News & Announcements</h1>
                <p className="news-subtitle">
                    Stay updated with the latest developments at the Center for Translational Medical Devices.
                </p>
            </div>

            {/* Category Filter */}
            <div className="news-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* News Items Grid */}
            <div className="news-grid">
                {filteredNews.map(item => (
                    <div key={item.id} className="news-item">
                        <div className="news-item-image-container">
                            <img src={item.image} alt={item.title} className="news-item-image" />
                        </div>
                        <div className="news-item-content">
                            <div className="news-item-header">
                                <span className="news-item-date">{item.date}</span>
                                <span className="news-item-category">{item.category}</span>
                            </div>
                            <h2 className="news-item-title">{item.title}</h2>
                            <p className="news-item-subtitle">{item.subtitle}</p>
                            <p className="news-item-excerpt">{item.excerpt}</p>
                            {item.link.startsWith("http") ? (
                                <a
                                    href={item.link}
                                    className="news-item-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read full article
                                </a>
                            ) : (
                                <Link to={item.link} className="news-item-link">
                                    Read full article
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state message when no news items match the filter */}
            {filteredNews.length === 0 && (
                <div className="no-news-message">
                    <p>No news items found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default News;