import Sidebar from "../Components/Sidebar/Sidebar"
import {Routes, Route, Outlet} from "react-router-dom"
import Welcome from "./Sub-Pages/Welcome"


const Home = ({log, setLog}) => {
  return (
    <div className="w-full h-full flex">
           <Sidebar log={log} setLog={setLog}>
              <Outlet/>
           </Sidebar>
        
        
        
    </div>
  )
}

export default Home