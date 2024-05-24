import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home/Home';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not 
  const toggleMode = () => {
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#0b2743"
      document.body.style.color="white"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="#0b2743"
    }
  }
  
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode} />
     <Home/>
    </>
  )
}

export default App
