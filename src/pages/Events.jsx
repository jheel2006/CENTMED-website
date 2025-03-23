import React from "react";
import "./Events.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

const eventData = [
    {
        category: "Seminar",
        title: "Light-matter-interaction within extreme dimensions for optical biosensing",
        speaker: "Qiaoqiang Gan",
        date: "Oct 4th, 2024",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
    {
        category: "Seminar",
        title: "Next-Gen Microfluidic Devices",
        speaker: "Dr. Alex Chen",
        date: "May 5th, 2025, 14:30",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
    {
        category: "Seminar",
        title: "Ethics of Genetic Engineering",
        speaker: "Prof. Emily Carter",
        date: "June 15th, 2025, 12:00",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    },
];

const Events = () => {
    return (
        <div className="events-container">
            <ScrollProgress />
            <h1 className="events-title">Events</h1>
            <div className="events-list">
                {eventData.map((event, index) => (
                    <div key={index} className="event-card">
                        <div className="event-info">
                            <p className="event-category">{event.category}</p>
                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-speaker">👥 {event.speaker}</p>
                            <p className="event-date">📅 {event.date}</p>
                        </div>
                        <img className="event-image" src={event.image} alt={event.speaker} />
                    </div>
                ))}
            </div>
            <p></p>
            <p></p>
        </div>
    );
};

export default Events;
