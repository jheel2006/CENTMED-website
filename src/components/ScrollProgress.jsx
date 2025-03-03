import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./ScrollProgress.css";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setProgress(latest * 100);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className="scroll-progress-container">
            <motion.div
                className="scroll-progress-bar"
                style={{ height: `${progress}%` }}
                layout // Prevents shifting/jumping
                initial={{ height: 0 }}
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }} // Keeps movement smooth
            />
        </div>
    );
};

export default ScrollProgress;
