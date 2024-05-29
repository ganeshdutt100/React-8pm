import React, { useState, useEffect, useRef } from "react";

export const Ref = () => {
  const [first, setFirst] = useState(0);
  const intervalRef = useRef(null); // Create a ref to hold the interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFirst((prevFirst) => prevFirst + 1); // Correctly update the state
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      My Component
      <div>Count: {first}</div> {/* Display the current count */}
    </div>
  );
};
