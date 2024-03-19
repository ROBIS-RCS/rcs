import React,{useState} from 'react'
import './Loginpage.css'
const Loginpage = () => {
  const [empType,setEmpType]=useState("employee")
  return (
    <div>
      <div className='login'>
    <h1>Login</h1>
    <p>Login As</p>
    <input type='radio'></input>
    <p>Username</p>
    <input className='username'></input>
    <p>Password</p>
    <input className='password'></input><br/>  
    <button className='Submit'>Submit</button>
      </div>
    </div>
  )
}
export default Loginpage
