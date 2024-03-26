import './Welcome.css'
import RCSImage from "../../../src/assets/images/RCS.png";
import logo1 from "../../../src/assets/Logo/Motherson.png";
import Typewriter from 'typewriter-effect/dist/core';
const Welcome = () => {
  return (
    <div >       
            
          <div className='wel'> 
          <img src={logo1} alt="logo1"  className='logo1'/>  <br/> 
          <p className='font'> Welcome to robis RCS</p>
          </div>              
          <img src={RCSImage} alt="RCS AGV"  className='RCSimg'/>
    </div>
  )
}
export default Welcome