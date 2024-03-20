import React, { useState } from 'react';
import './Loginpage.css';

const Loginpage = () => {
  const [empType, setEmpType] = useState("employee");

  const handleEmpTypeChange = (event) => {
    const newEmpType = event.target.value;
    setEmpType(newEmpType);
    console.log(newEmpType); // Log the updated state
  };

  return (
    <body>
    <div>
      <div className='login'>
        <h1 className='text-red-700 font-bold'>Login</h1>
        <p>Login As</p>
        <select value={empType} onChange={handleEmpTypeChange}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <p>Username</p>
        <input className='username'></input>
        <p>Password</p>
        <input className='password'></input><br/> 
        <p className='new-user'>New User? <a href="/signup">Sign up</a></p>       
        <button className='Submit'>Submit</button>
      </div>      
    </div>
    </body>
  );
};

export default Loginpage;
