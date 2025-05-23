import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './BeatingHeart.css';

const BeatingHeart = () => {
    const svgRef = useRef(null);
    const [isFast, setIsFast] = useState(false);

    const beatAnimation = (speed) => {
        const svg = d3.select(svgRef.current);
        const group = svg.selectAll("g");

        const fast = { scaleUp: 200, scaleDown: 200, pause: 50 };
        const slow = { scaleUp: 400, scaleDown: 400, pause: 400 };
        const config = speed ? fast : slow;

        const animate = () => {
            group.transition()
                .duration(config.scaleUp)
                .attr("transform", "scale(1.04)") // Reduced scale from 1.08 to 1.06
                .transition()
                .duration(config.scaleDown)
                .attr("transform", "scale(1)")
                .ease(d3.easeQuadInOut)
                .transition()
                .duration(config.pause)
                .on("end", animate);
        };

        animate();
    };

    useEffect(() => {
        if (!svgRef.current) return;
        const svg = d3.select(svgRef.current);
        svg.selectAll("path, g")
            .style("fill", "var(--purple)")
        beatAnimation(isFast);

        return () => {
            d3.select(svgRef.current).selectAll("*").interrupt();
        };
    }, []);

    const handleClick = (e) => {
        const newSpeed = !isFast;
        setIsFast(newSpeed);

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").interrupt();
        beatAnimation(newSpeed);

        // Ripple effect
        const point = d3.pointer(e);
        const ripple = svg.append("circle")
            .attr("cx", point[0])
            .attr("cy", point[1])
            .attr("r", 0)
            .attr("fill", "lightseagreen")
            .attr("fill-opacity", 0.5);

        ripple.transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr("r", 60)
            .attr("fill-opacity", 0)
            .remove();
    };

    return (
        <div className="heart-svg-wrapper">
            <svg
                ref={svgRef}
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 237 260"
                className="heart-svg"
            >
                <g className="heart-group">
                    <path d="M50.161,116.963c6.709,1.533,14.614,5.093,21.63,12.894c0.564-4.803,0.965-9.538,1.173-14.088
                    c0.896-19.502,7.845-38.01,20.096-53.524c6.085-7.705,13.463-14.568,21.903-20.481c-1.284-1.247-6.772-5.953-6.772-5.953
                    C100.31,29.034,103.94,4.6,103.94,4.6l-9.715-0.85c-3.077,15.018-0.617,26.78-0.589,26.903c0.385,1.776-0.742,3.53-2.518,3.917
                    c-0.236,0.051-0.473,0.076-0.705,0.076c-1.512,0-2.875-1.048-3.212-2.587c-0.12-0.547-2.728-12.814,0.418-28.888L74.225,2
                    c0,0-0.502,25.17-6.64,28.074c-0.15,0.07-0.565,0.217-0.888,0.295C59.443,32.12,51.77,13.324,44.326,8.558l-12.465,9.366
                    c12.729,13.041,11.902,31.483,10.37,37.518C35.559,81.742,50.135,116.891,50.161,116.963z M46.336,199.152
                    c4.238-0.944,10.799-9.611,17.016-29.175c2.712-8.534,4.98-18.113,6.65-27.807c-13.088-21.436-33.166-17.238-33.372-17.19
                    c-2.362,0.531-4.716-0.958-5.246-3.325c-0.53-2.366,0.958-4.715,3.325-5.246c0.075-0.017,2.242-0.472,5.675-0.507
                    c-3.733-10.401-12.234-37.93-7.135-60.631l-3.444-11.117c-0.788-2.519-7.871-2.802-15.532-0.406
                    C6.611,46.144,1.219,50.48,2.007,52.999c0,0,17.183,57.384,19.244,88.427c0.404,6.081,0.973,31.907,17.317,52.829
                    C40.205,196.435,42.683,199.966,46.336,199.152z M173.997,80.777c-0.001-0.001-0.003-0.001-0.004-0.002
                    c-5.489-5.779-11.738-10.754-18.524-14.849c-6.373,3.02-11.962,6.736-16.406,10.995c-7.866,7.536-11.26,15.957-9.56,23.709
                    c3.034,13.833,22.046,22.8,45.203,21.318c2.439-0.149,4.508,1.683,4.663,4.102c0.155,2.42-1.682,4.508-4.102,4.663
                    c-1.898,0.121-3.773,0.181-5.616,0.181c-25.299,0-44.969-11.238-48.728-28.383c-2.382-10.857,1.863-22.238,12.062-31.934
                    c13.504-12.837,36.227-20.568,36.227-20.568c1.957-0.883,1.855-7.428-0.164-12.285c-2.02-4.855-5.927-7.622-8.273-7.033
                    l-0.028-0.065c-44.535,9.813-76.847,43.142-79.008,85.544c-0.395,7.744-5.98,80.995-32.695,91.329
                    c47.915,52.5,159.427,69.632,182.831,24.518C246.885,203.083,205.873,112.299,173.997,80.777z"/>
                </g>
            </svg>
        </div>
    );
};

export default BeatingHeart;