import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Loginpage from './Components/login/Loginpage';
import SignupPage from './Components/login/SignupPage';
import Signin from './Components/login/NewSiginup/Signin'
import { supabase } from '../server/createClient';
import Login from './Components/login/NewLogin/Login';
import Home from './Pages/Home';

function App() {
  return (
    <div className='w-full h-full p-0 m-0'>
      <Router>   
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Home/>}></Route>    
        </Routes>
      </Router>


    </div>
  );
}

export default App;
