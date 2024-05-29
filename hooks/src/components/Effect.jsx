import React, { useEffect, useState } from "react";

export const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((u) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty array means the effect runs once

  return (
    <div>
      <p>Seconds: {count}</p>
    </div>
  );
};
