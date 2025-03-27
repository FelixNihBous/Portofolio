import React, { useState, useEffect } from "react";

function ChangingProgressProvider({ value, children, duration = 1000 }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentPercentage = Math.min((progress / duration) * value, value);

      setPercentage(currentPercentage);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return children(percentage);
}

export default ChangingProgressProvider;