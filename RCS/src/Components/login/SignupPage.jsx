import React from 'react';
import './SignupPage.css';
import { supabase} from '../../../server/createClient';


const SignupPage = () => {
  return (
    <div className='body'>
      <div className='signup'>
        <h1>Sign up</h1>
        <p>Enroll As</p>
        <select className='enroll-as' value={enrollAs} onChange={handleEnrollAsChange}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select><br/>
        <div className="input-wrapper">
          <label className={username ? 'float-label' : ''}>Username</label>
          <input className='signupusername' value={username} onChange={handleUsernameChange}></input>
        </div>
        <div className="input-wrapper">
          <label className={email ? 'float-label' : ''}>Email ID</label>
          <input className='emailid' value={email} onChange={handleEmailChange}></input>
        </div>
        <div className="input-wrapper">
          <label className={password ? 'float-label' : ''}>Password</label>
          <input type="password" className='signuppassword' value={password} onChange={handlePasswordChange}></input>
        </div>
        <div className="input-wrapper">
          <label className={confirmPassword ? 'float-label' : ''}>Confirm Password</label>
          <input type="password" className='confirm-password' value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
        </div>
        <p className='Existing-User'>Existing User? <a href="/">Login</a></p>
        <button className='signupSubmit'>Submit</button>
      </div>
    </div>
  );
};

export default SignupPage;
