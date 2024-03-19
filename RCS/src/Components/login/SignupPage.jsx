import React from 'react'
import './SignupPage.css'
const SignupPage = () => {
  return (
    <div>
      <div className='signup'>
    <h1>Sign up</h1>
    <p>Username</p>
    <input className='username'></input>
    <p>Email ID</p>
    <input className='emailid'></input>
    <p>Password</p>
    <input className='password'></input><br/>  
    <p>Confirm Password</p>
    <input className='confirm-password'></input><br/>  
    <button className='Submit'>Submit</button>
      </div>
    </div>
  )
}
export default SignupPage
