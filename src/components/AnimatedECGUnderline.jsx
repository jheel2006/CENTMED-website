import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './AnimatedECGUnderline.css'; // Import the CSS file for styling

const AnimatedEcgUnderline = ({ width = '100%', height = '4px', className = '' }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        // Clear any existing paths
        svg.selectAll('*').remove();

        // Create a group for the ECG line
        const group = svg.append('g');

        // Set the viewBox dimensions
        const viewBoxWidth = 1000;
        const viewBoxHeight = 40;
        svg.attr('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);

        // Function to generate ECG pattern
        const generateEcgPattern = () => {
            // Calculate positions for ECG pattern
            const flatLineLength = viewBoxWidth * 0.7; // 70% of the width is flat line
            const baseY = viewBoxHeight / 2;

            // Create a path starting with a long flat line
            let path = `M0,${baseY} H${flatLineLength} `;

            // P wave - small rounded bump
            path += `C${flatLineLength + 15},${baseY - 5} ${flatLineLength + 30},${baseY - 5} ${flatLineLength + 45},${baseY} `;

            // PR segment (flat)
            path += `L${flatLineLength + 60},${baseY} `;

            // QRS complex
            path += `L${flatLineLength + 70},${baseY + 2} `;   // Q wave (small dip)
            path += `L${flatLineLength + 80},${baseY - 18} `;  // R wave (big spike up)
            path += `L${flatLineLength + 90},${baseY + 12} `;  // S wave (dip down)
            path += `L${flatLineLength + 100},${baseY} `;      // Back to baseline

            // ST segment (flat)
            path += `L${flatLineLength + 130},${baseY} `;

            // T wave
            path += `C${flatLineLength + 150},${baseY - 7} ${flatLineLength + 170},${baseY - 7} ${flatLineLength + 190},${baseY} `;

            // Continue flat line to the end
            path += `H${viewBoxWidth}`;

            return path;
        };

        // Create the base line (this will always be visible)
        group.append('path')
            .attr('d', `M0,${viewBoxHeight / 2} H${viewBoxWidth}`)
            .attr('stroke', 'var(--teal)')
            .attr('stroke-width', 6)  // Thicker line
            .attr('fill', 'none');

        // Create the ECG path that will be animated
        const ecgPath = group.append('path')
            .attr('d', generateEcgPattern())
            .attr('stroke', 'var(--teal)')
            .attr('stroke-width', 6)  // Thicker line
            .attr('fill', 'none')
            .attr('stroke-dasharray', function () {
                return this.getTotalLength();
            })
            .attr('stroke-dashoffset', function () {
                return this.getTotalLength();
            });

        // Function to animate the ECG
        const animateEcg = () => {
            // Reset the animation
            ecgPath
                .attr('stroke-dashoffset', function () {
                    return this.getTotalLength();
                })
                .transition()
                .duration(3000)  // Longer animation duration
                .ease(d3.easeLinear)
                .attr('stroke-dashoffset', 0)
                .transition()
                .duration(1500)  // Longer pause before repeating
                .on('end', animateEcg);  // Repeat the animation
        };

        // Start the animation
        animateEcg();

        // Cleanup function
        return () => {
            svg.selectAll('*').interrupt();
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            width={width}
            height={height}
            className={`ecg-underline ${className}`}
            style={{ overflow: 'visible', display: 'block' }}
        />
    );
};

export default AnimatedEcgUnderline;