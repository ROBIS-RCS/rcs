import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Loginpage from "./Components/login/Loginpage";
import SignupPage from "./Components/login/SignupPage";
import Signin from "./Components/login/NewSiginup/Signin";
// import Login from "./Components/login/NewLogin/Login";
import Home from "./Pages/Home";
import Welcome from "./Pages/Sub-Pages/Welcome";
import Users from "./Pages/Sub-Pages/Users";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div className="w-full h-full p-0 m-0 flex items-center justify-between gap-5">
      <Router>
        <Routes location={location} key={location.pathname}>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/"
            element={
              logged ? (
                <Home log={logged} setLog={setLogged} />
              ) : (
                <Loginpage log={logged} setLog={setLogged} />
              )
            }
          >
            <Route index path="/welcome" element={<Welcome />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;