import React, { useState, useEffect, useRef } from "react";

export const Ref = () => {
  const intervalRef = useRef(null); // Create a ref to hold the interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // This function runs every second
      console.log("Interval running");
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>My Component</div>;
};
