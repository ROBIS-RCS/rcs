import React, { useState } from 'react';
import './Loginpage.css';

const Loginpage = () => {
  const [empType, setEmpType] = useState("employee");

  const handleEmpTypeChange = (event) => {
    const newEmpType = event.target.value;
    setEmpType(newEmpType);
    console.log(newEmpType); // Log the updated state
  };

  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (    
    <div className='body'>
      <div className='login'>
        <h1 className='head'>Login</h1>
        <p>Login As</p>
        <select value={empType} onChange={handleEmpTypeChange}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select><br/>
        <div className="input-wrapper">
          <label className={username ? 'float-label' : ''}>Username</label>
          <input className='username' value={username} onChange={handleUsernameChange}></input>
        </div><br/>
        <div className="input-wrapper">
          <label className={password ? 'float-label' : ''}>Password</label>
          <input type="password" className='password' value={password} onChange={handlePasswordChange}></input>
        </div>
        <p className='new-user'>New User? <a href="/signup">Sign up</a></p>       
        <button className='Submit'>Submit</button>
      </div>      
    </div>
  );
};

export default Loginpage;
