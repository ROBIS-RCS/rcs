import React,{useState} from 'react';
import './SignupPage.css';
import { supabase} from '../../../server/createClient';


const SignupPage = () => {

  
  return (
    <div className='body'>
      <div className='signup'>
        <h1>Sign up</h1>
        <p>Enroll As</p>
        <select className='enroll-as'>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <p>Username</p>
        <input className='signupusername'></input>
        <p>Email ID</p>
        <input className='emailid'></input>
        <p>Password</p>
        <input className='signuppassword'></input>
        <p>Confirm Password</p>
        <input className='confirm-password'></input><br/>  
        <p className='Existing-User'>Existing-User <a href="/">Login</a></p>
         
        <button className='signupSubmit'>Submit</button>
      </div>
    </div>
  );
};

export default SignupPage;
