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
      <form className='signup'>
        <svg height="46" viewBox="0 0 89 20" width="162" xmlns="http://www.w3.org/2000/svg"><title>Samvardhana Motherson</title><path d="M85.535 1.38a2.464 2.464 0 0 0-1.478 2.231v16.107h3.45c.817 0 1.479-.662 1.479-1.479V0zm-6.408 4.93a2.466 2.466 0 0 0-1.479 2.23v11.178h3.45a1.48 1.48 0 0 0 1.48-1.479V4.93zm-6.409 4.93a2.465 2.465 0 0 0-1.478 2.23v6.248h3.45c.817 0 1.479-.662 1.479-1.479V9.86zM.784 12.97h2.27v1.014c.356-.634 1.054-1.192 2.082-1.192.875 0 1.484.38 1.801 1.103.571-.774 1.358-1.103 2.195-1.103 1.256 0 2.17.811 2.17 2.475v4.338H9.031v-3.959c0-.671-.33-1.001-.85-1.001-.61 0-1.015.393-1.015 1.116v3.844H4.92v-3.959c0-.671-.33-1.001-.85-1.001-.609 0-1.015.393-1.015 1.116v3.844H.784zm16.241 3.362v-.101c0-1.117-.443-1.739-1.306-1.739-.85 0-1.32.597-1.32 1.713v.101c0 1.143.444 1.765 1.32 1.765.85 0 1.306-.636 1.306-1.74m-4.948.039v-.101c0-2.132 1.587-3.477 3.642-3.477 2.043 0 3.616 1.306 3.616 3.413v.101c0 2.158-1.586 3.452-3.629 3.452-2.042 0-3.629-1.243-3.629-3.388m8.26 1.104v-2.956h-.799V12.97h.8v-.467l2.271-.916v1.383h1.307v1.548h-1.307v2.74c0 .483.24.699.672.699.254 0 .444-.038.647-.114v1.724a4.73 4.73 0 0 1-1.256.19c-1.497 0-2.335-.723-2.335-2.283m4.51-6.757l2.27-.926v4.244c.356-.685 1.08-1.243 2.184-1.243 1.28 0 2.17.799 2.17 2.5v4.313h-2.272v-3.857c0-.748-.292-1.116-.952-1.116-.672 0-1.13.406-1.13 1.256v3.717h-2.27zm12.143 4.816c-.039-.8-.432-1.244-1.168-1.244-.685 0-1.154.444-1.269 1.244zm-4.759.837v-.101c0-2.132 1.586-3.477 3.59-3.477 1.815 0 3.377 1.04 3.377 3.426v.596h-4.67c.064.875.571 1.384 1.383 1.384.749 0 1.066-.343 1.155-.788h2.132c-.204 1.498-1.359 2.348-3.363 2.348-2.081 0-3.604-1.218-3.604-3.388zm7.833-3.4h2.271v1.319c.419-.99 1.116-1.422 2.144-1.407V15c-1.383-.038-2.144.393-2.144 1.458v3.147h-2.271zm4.772 4.53h2.093c.077.482.292.748.94.748.558 0 .811-.216.811-.545 0-.318-.317-.47-1.23-.597-1.776-.228-2.526-.749-2.526-2.131 0-1.473 1.308-2.183 2.843-2.183 1.637 0 2.778.558 2.931 2.145h-2.056c-.089-.445-.33-.66-.85-.66-.495 0-.749.215-.749.52 0 .317.305.444 1.117.545 1.84.229 2.728.71 2.728 2.132 0 1.573-1.167 2.284-3.007 2.284-1.89 0-2.995-.788-3.045-2.259m11.413-1.167v-.101c0-1.117-.444-1.739-1.307-1.739-.85 0-1.319.597-1.319 1.713v.101c0 1.143.444 1.765 1.32 1.765.85 0 1.306-.636 1.306-1.74m-4.949.039v-.101c0-2.132 1.586-3.477 3.642-3.477 2.043 0 3.616 1.306 3.616 3.413v.101c0 2.158-1.586 3.452-3.629 3.452S51.3 18.515 51.3 16.37m8.066-3.4h2.272v1.065c.355-.685 1.078-1.243 2.182-1.243 1.282 0 2.17.799 2.17 2.5v4.313h-2.27v-3.857c0-.748-.292-1.116-.952-1.116-.672 0-1.13.406-1.13 1.256v3.717h-2.27z" fill="#DA2020" fill-rule="evenodd"></path></svg>
        <h1 className='signuphead'>Sign up</h1><br/>
        <select className='enroll-as' value={enrollAs} onChange={handleEnrollAsChange}>
          <option value="employee">Employee</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select><br/>
        <div className="input-wrapper">
          <label className={username ? 'float-label' : ''}>Username</label>
          <input className='signupusername' value={username} onChange={handleUsernameChange}></input>
        </div><br/>
        <div className="input-wrapper">
          <label className={email ? 'float-label' : ''}>Email ID</label>
          <input className='emailid' value={email} onChange={handleEmailChange}></input>
        </div><br/>
        <div className="input-wrapper">
          <label className={password ? 'float-label' : ''}>Password</label>
          <input type="password" className='signuppassword' value={password} onChange={handlePasswordChange}></input>
        </div><br/>
        <div className="input-wrapper">
          <label className={confirmPassword ? 'float-label' : ''}>Confirm Password</label>
          <input type="password" className='confirm-password' value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
        </div><br/>
        <p className='Existing-User'>Existing User? <a href="/">Login</a></p> <br/>
        <button className='signupSubmit'>Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
