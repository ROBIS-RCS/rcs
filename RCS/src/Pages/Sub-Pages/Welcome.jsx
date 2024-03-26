import './Welcome.css'
import RCSImage from "../../../src/assets/images/RCS.png";
import logo1 from "../../../src/assets/Logo/Motherson.png"
const Welcome = () => {
  return (
    <div >       
          <img src={RCSImage} alt="RCS AGV"  className='RCSimg'/>  
          <div className='wel'> 
          <img src={logo1} alt="logo1"  className='logo1'/>  <br/> 
          <p className='font'> Welcome to robis RCS</p>
          </div>              
    </div>
  )
}
export default Welcome