import { useState } from "react"

export const Randering = () => {
    const [count,setCount] = useState(0);
  return (
    <div>

                <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Add
         </button>
         <button onClick={() => setCount(count - 1)}>
           subtraction
         </button>

    </div>
  )
}
