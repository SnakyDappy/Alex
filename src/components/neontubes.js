import React from 'react';

const NeonTubes = () => {
  const getRandomColor = () => {
    const startColor = { r: 255, g: 0, b: 153 }; // #f09
    const endColor = { r: 55, g: 2, b: 96 }; // #370260
    
    const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    return `rgb(${randomBetween(endColor.r, startColor.r)}, 
              ${randomBetween(endColor.g, startColor.g)}, 
              ${randomBetween(endColor.b, startColor.b)})`;
  };

  const generatePath = (startX, laneWidth, maxLength) => {
    const points = [];
    let y = 0;
    
    // Initial point
    points.push(`M ${startX},0`);
    
    // Calculate the total number of control points we want
    const tubeLength = Math.random() * (maxLength - 300) + 300;
    const numberOfPoints = Math.floor(tubeLength / 100);
    
    // Generate smooth curve using multiple control points
    for (let i = 1; i <= numberOfPoints; i++) {
      const progress = i / numberOfPoints;
      const laneCenter = startX;
      const maxDeviation = laneWidth / 3;
      
      // Create smooth wave-like movement
      const deviation = Math.sin(progress * Math.PI * 2) * maxDeviation;
      const x = laneCenter + deviation + (Math.random() - 0.5) * maxDeviation * 0.5;
      y = progress * tubeLength;
      
      if (i === 1) {
        // First curve should start from the top
        points.push(`Q ${x},${y/2} ${x},${y}`);
      } else {
        // Subsequent curves should flow smoothly
        points.push(`S ${x},${y} ${x},${y}`);
      }
    }
    
    return points.join(' ');
  };

  const startPositions = [50, 200, 400, 600, 700, 800, 900];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <svg 
        viewBox="0 0 1000 1000" 
        className="w-full h-full opacity-90"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <filter id="neon-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blur1" />
            <feGaussianBlur stdDeviation="15" result="blur2" />
            <feGaussianBlur stdDeviation="20" result="blur3" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur3" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feDropShadow dx="0" dy="0" stdDeviation="20" floodOpacity="0.8" />
          </filter>
          
          <filter id="center-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite operator="over" in="blur" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="white" floodOpacity="0.95" />
          </filter>
        </defs>

        {startPositions.map((startX, index) => {
          const laneWidth = 160;
          const color = getRandomColor();
          const maxLength = 600 + Math.random() * 400;
          const path = generatePath(startX, laneWidth, maxLength);
          
          return (
            <g key={index}>
              <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="8"
                filter="url(#neon-glow)"
                className="opacity-95"
              />
              
              <path
                d={path}
                fill="none"
                stroke="white"
                strokeWidth="3"
                filter="url(#center-glow)"
                className="opacity-95"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NeonTubes;