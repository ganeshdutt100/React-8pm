import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseEffect } from './components/UseEffect'
import { UseRefTry } from './components/UseRefTry'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  // useEffect(()=>{
  //   alert(' i am change because navbar changed')
  //   setColor(color + 1);
  // },[count])

  return (
    <>
     {/* <UseEffect render={count + color}/>
     <button onClick={() => setCount(count + 1)}>it's values  {count}</button> */}

     {/* <UseRefTry/> */}
    </>
  )
}

export default App
