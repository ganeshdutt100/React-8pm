import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextUtils } from './components/TextUtils';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeFun = () =>{
      setDarkMode(!darkMode)
  }

  return (
    <div   style={{background:darkMode?'black':'white ', color:darkMode?'white' :  'black' , height:'100vh'}} >
    <div className="form-check form-switch float-end" >
  <input onClick={darkModeFun} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{darkMode? 'Disable Dark Mode' :  'Enable Dark Mode'}</label>
</div>
<TextUtils/>

     
    </div>
  )
}

export default App
