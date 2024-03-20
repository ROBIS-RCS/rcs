import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [enrollAs, setEnrollAs] = useState("employee");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEnrollAsChange = (event) => {
    setEnrollAs(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

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
