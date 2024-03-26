import './Welcome.css'
import RCSImage from "../../../src/assets/images/RCS.png";
import logo1 from "../../../src/assets/Logo/redlogo.png"
const Welcome = () => {
  return (
    <div className='container'>
        <div className='hr'> 
          <img src={RCSImage} alt="RCS AGV"  className='RCSimg'/>
          <img src={logo1} alt="logo1"  className='logo1'/>          
          <p className="heading">Welcome to robis RCS </p>
       
        </div>     
    </div>
  )
}
export default Welcome