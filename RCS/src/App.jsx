import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Loginpage from './Components/login/Loginpage';
import SignupPage from './Components/login/SignupPage';
import { AnimatePresence } from 'framer-motion';
import { supabase } from '../server/createClient';
import Login from './Components/login/NewLogin/Login';
import Signin from "./Components/login/NewSiginup/Signin"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='w-full h-full p-0 m-0'>
      <Router>   
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Loginpage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Sidebar/>}></Route>
          <Route path="/newlog" element={<Login/>}></Route>
          <Route path="/newsign" element={<Login/>}></Route>
        </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
