import React, { useEffect, useRef, useState } from 'react';
import './LoadingScreen.css'; // Import the new CSS file

const LoadingScreen = () => {
    const pathRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);  // State to control visibility
    const [animationFinished, setAnimationFinished] = useState(false); // State to track animation completion

    useEffect(() => {
        if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();

            // Set up the starting position
            pathRef.current.style.strokeDasharray = pathLength;
            pathRef.current.style.strokeDashoffset = pathLength;

            // Make the SVG visible after a brief delay to avoid the flash
            setTimeout(() => {
                setIsVisible(true);  // Make SVG visible after the setup
                // Trigger animation after visibility change
                const animation = pathRef.current.animate(
                    [
                        { strokeDashoffset: pathLength },
                        { strokeDashoffset: 0 }
                    ],
                    {
                        duration: 3000,
                        iterations: 1, // Ensure it only animates once
                        easing: 'linear'
                    }
                );

                // Set a timeout to add a delay before restarting the animation
                animation.onfinish = () => {
                    setAnimationFinished(true); // Set flag when animation finishes
                    // Wait a bit before restarting
                    setTimeout(() => {
                        setAnimationFinished(false); // Reset flag
                        setIsVisible(false); // Hide SVG for restart
                        setTimeout(() => {
                            setIsVisible(true); // Show SVG again for new cycle
                        }, 100); // Small delay before making visible again
                    }, 500); // 500ms delay after the animation finishes
                };
            }, 100); // Short delay before making the SVG visible
        }
    }, [animationFinished]); // Depend on animationFinished state for re-triggering

    return (
        <div className="loading-screen">
            <div className="loading-container">
                <svg
                    viewBox="0 0 800 300"
                    className="loading-svg"
                    style={{ visibility: isVisible ? 'visible' : 'hidden' }} // Control visibility
                >
                    <path
                        ref={pathRef}
                        d="M -20,150 
                        L 80,150 
                        L 100,150 
                        L 120,130 
                        L 140,170 
                        L 160,30 
                        L 180,270 
                        L 200,150 
                        L 220,150
                        L 320,150
                        L 340,150
                        L 360,130
                        L 380,170
                        L 400,30
                        L 420,270
                        L 440,150
                        L 460,150
                        L 560,150
                        L 580,150
                        L 600,130
                        L 620,170
                        L 640,30
                        L 660,270
                        L 680,150
                        L 700,150
                        L 780,150"
                        fill="none"
                        stroke="var(--teal)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default LoadingScreen;
