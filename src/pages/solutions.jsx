import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import hardwareImage from '../images/hardware.webp';
import softwareImage from '../images/software.webp';
import fieldImage from '../images/field.webp';
import '../styles/solutions.css';

const Solutions = () => {
    const [solutionsData, setSolutionsData] = useState([
        {
            id: 1,
            title: 'Hardware Solution',
            description:
                'We are creating AI-powered hardware and software tools for land managers. You can see our accessible, interchangeable lens system, that allows one device to function as a zoom or as a macro image capture. A smart camera with Infrared LEDs, a light meter, and LiDAR on a chip array offer low-power target detection.',
            image: hardwareImage,
            flipped: false,
        },
        {
            id: 2,
            title: 'Software Solution',
            description:
                'Providing real-time dashboards with actionable field data. Maps, timeline data, and photos are interactive and download from the device automatically, linking through an "IoT" network to bring data back to you without expensive infrastructure. Excel-compatible spreadsheets are created automatically by the smart camera.',
            image: softwareImage,
            flipped: false,
        },
        {
            id: 3,
            title: 'Field Solution',
            description:
                'End-to-end support services from field installations to data dashboards. This means smart camera data can travel from the device, through other nearby devices, back to your base of operations, without needing an outdoor WiFi network or expensive cellular data plans.',
            image: fieldImage,
            flipped: false,
        },
    ]);

    const handleCardClick = (id) => {
        setSolutionsData((prevState) =>
            prevState.map((solution) =>
                solution.id === id ? { ...solution, flipped: !solution.flipped } : { ...solution, flipped: false }
            )
        );
    };

    return (
        <div className="solutions-container">
            <h2 className="solutions-heading">Solutions</h2>
            <div className="solutions-grid">
                {solutionsData.map((solution) => (
                    <div
                        className={`solution-container ${solution.flipped ? 'flipped' : ''}`}
                        key={solution.id}
                        onClick={() => handleCardClick(solution.id)}
                    >
                        <div className="solution-card">
                            <div className="solution-front">
                                <img src={solution.image} alt={solution.title} className="solution-image" />
                                <h3 className="solution-title">{solution.title}</h3>
                            </div>
                            <div className="solution-back">
                                <p className="solution-description">{solution.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solutions;
