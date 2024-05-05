import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Class2 from './components/Class2';
import Class3 from './components/Class3';

function App() {
  let heading  = <img src="https://img.freepik.com/premium-vector/java-text-effect-editable-eps-file_489510-528.jpg?w=900" width="400px" height="100px" className='rounded-3'></img>
  let secondHeading = "i am Ganesh dutt"
  // let heading  = "This is a heading of class 2"
  let para = "this is a para and i will try to how can maintain and eficient the react js "
  let para1 = "this is a para one and this is a typed by props "

  let img1 =  <img src="https://mdbootstrap.com/img/illustrations/undraw_grand_slam_0q5r.svg" className="img-fluid" alt="smaple image"/>

  let image2  = <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1710003582~exp=1710007182~hmac=d29ddf051fb81b4fd7533f255f4ad439cb127dba1cbf382cc486630578fd188b&w=740" width="400px" height="350px" className='rounded-3'></img>

  let img1a  =   <img src="https://mdbootstrap.com/img/illustrations/undraw_basketball_agx4.png" className="img-fluid" alt="smaple image"/>

  let img2a  = <img src="https://img.freepik.com/premium-photo/program-code-create-laptop-programmer-workplace-generative-ai_887552-7715.jpg?w=900" width="400px" height="350px" className='rounded-3'></img>

  
 
  return (
    <div >
    <Navbar name="krishna"/>
    <Class2 heading={heading} para1={para1} img1={img1} img2A={img1a}/>
    <Class2 secondH={secondHeading} pera={para} img2={image2} img2A={img2a}/>
   < Class3/>
    </div>
  );
}

export default App;
