// import React from 'react'
import React, { useRef,useState , } from 'react';

export const UseRefTry = () => {
    const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}