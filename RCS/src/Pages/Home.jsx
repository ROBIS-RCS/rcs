import Sidebar from "../Components/Navbar/Sidebar"
import {Routes, Route, Outlet} from "react-router-dom"
import Welcome from "./Sub-Pages/Welcome"
import TopNav from "../Components/Navbar/TopNav"


const Home = ({log, setLog}) => {
  return (
    <div className="relative w-full h-full flex">
           <Sidebar />
           <TopNav log={log} setLog={setLog}/>
        <Outlet/>
        
        
    </div>
  )
}

export default Home