import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Loginpage from "./Components/login/Loginpage";
import SignupPage from "./Components/login/SignupPage";
import Home from "./Pages/Home";
import Welcome from "./Pages/Sub-Pages/Welcome";
import Users from "./Pages/Sub-Pages/Users";
import Vehicle from "./Pages/RCS-Subs/Vehicle";
import Maintainence from "./Pages/RCS-Subs/Maintainence";
import Stat_Utilization from "./Pages/RCS-Subs/Stat_Utilization";
import Order_Processing from "./Pages/RCS-Subs/Order_Processing";
import Region from "./Pages/RCS-Subs/Region";
import Storage_Bin_Status from "./Pages/RCS-Subs/Storage_Bin_Status";
import Storage_Bin_Statistics from "./Pages/RCS-Subs/Storage_Bin_Statistics";
import Order from "./Pages/RCS-Subs/Order";
import Task from "./Pages/RCS-Subs/Task";
import Log from "./Pages/RCS-Subs/Log";
import Task_Parameters from "./Pages/RCS-Subs/Task_Parameters";
import Storage_Bin from "./Pages/RCS-Subs/Storage_Bin";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

import AGV_Errors from "./Pages/Monitoring-System-Subs/AGV_Errors";
import AGV_Management from "./Pages/Monitoring-System-Subs/AGV_Management";
import Realtime_Map from "./Pages/Monitoring-System-Subs/Realtime_Map";
import Error_Records from "./Pages/Monitoring-System-Subs/Error_Records";
import Error_Codes from "./Pages/Monitoring-System-Subs/Error_Codes";
import ForgotPass from "./Components/login/ForgotPass";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const [logged, setLogged] = useState(isAuthenticated);
  return (
    <div className="w-full h-full p-0 m-0 flex items-center justify-between gap-5">
      <Router>
        <Routes location={location} key={location.pathname}>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot" element={<ForgotPass />}></Route>
          <Route
            path="/"
            element={
             
                <Home log={logged} setLog={setLogged} />
             
              
            }
          >
            <Route index path="/welcome" element={<Welcome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Vehicle" element={<Vehicle />} />
            <Route path="/Maintenance" element={<Maintainence />} />
            <Route path="/Stat_Utilization" element={<Stat_Utilization />} />
            <Route path="/Task_Parameters" element={<Task_Parameters />} />
            <Route path="/Order_Processing" element={<Order_Processing />} />
            <Route path="/Region" element={<Region />} />
            <Route path="/Storage_Bin" element={<Storage_Bin />} />
            <Route
              path="/Storage_Bin_Status"
              element={<Storage_Bin_Status />}
            />
            <Route
              path="/Storage_Bin_Statistics"
              element={<Storage_Bin_Statistics />}
            />
            <Route path="/Order" element={<Order />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/Log" element={<Log />} />

            <Route path="/AGV_Errors" element={<AGV_Errors />} />
            <Route path="/AGV_Management" element={<AGV_Management />} />
            <Route path="/Realtime_Map" element={<Realtime_Map />} />
            <Route path="/Error_Records" element={<Error_Records />} />
            <Route path="/Error_Codes" element={<Error_Codes />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
