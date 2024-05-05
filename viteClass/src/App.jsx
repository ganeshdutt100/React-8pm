
import './App.css'

import { HealthyFood } from './components/HealthyFood'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Props } from './components/Props';
import { Sec1 } from './components/Sec1';

function App() {
 

  return (
    <>
      <Props  />

      <HealthyFood helthypara={"i am bhumika"}/>
      <Sec1></Sec1>
 
    </>
  )

  

}



export default App
