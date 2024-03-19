import React from 'react'
import './Loginpage.css'
const Loginpage = () => {
  return (
    <div>
      <div className='login'>
    <h1>Login</h1>
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
