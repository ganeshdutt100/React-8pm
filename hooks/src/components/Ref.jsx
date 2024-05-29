import React, { useState, useEffect, useRef } from "react";

export const Ref = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
