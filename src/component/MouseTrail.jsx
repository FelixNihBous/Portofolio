import React, { useEffect, useState } from 'react';

const trailLength = 10; // Number of trail dots
const trailDelay = 20; // Delay in ms between trail updates

function MouseTrail() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setPositions((prev) => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > trailLength) {
          newPositions.shift();
        }
        return newPositions;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {positions.map((pos, index) => {
        const opacity = (index + 1) / trailLength * 0.6; // fading effect
        const size = 10 - index; // smaller size for older dots
        return (
          <div
            key={index}
            style={{
              position: 'fixed',
              left: pos.x - size / 2,
              top: pos.y - size / 2,
              width: size,
              height: size,
              borderRadius: '50%',
              pointerEvents: 'none',
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
              boxShadow: `0 0 8px rgba(255, 255, 255, ${opacity})`,
              mixBlendMode: 'difference',
              zIndex: 9999,
              transition: 'left 0.1s ease, top 0.1s ease',
            }}
          />
        );
      })}
    </>
  );
}

export default MouseTrail;
