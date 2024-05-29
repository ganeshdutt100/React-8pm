import React, { useState } from "react";

export const Ref = () => {
  const [first, setfirst] = useState(0);
  return (
    <>
      <button className="btn btn-danger " onClick={() => setfirst(first + 1)}>
        {first}
      </button>
    </>
  );
};
