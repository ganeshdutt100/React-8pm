import React, {useState} from 'react'

const Class3 = () => {
    const [counter,  setCounter] = useState(0);

  function fun(){
    setCounter(counter + 1);
  }
  function sub(){
    setCounter(counter - 1);
  }
  return (
    <div>
     <button onClick={fun} >add </button>
     <span>{counter}</span>

     <button onClick={sub} >sun </button>
    </div>
  )
}

export default Class3