import Sidebar from "../Components/Navbar/Sidebar"
import {Routes, Route, Outlet} from "react-router-dom"
import Welcome from "./Sub-Pages/Welcome"
import TopNav from "../Components/Navbar/TopNav"


const Home = ({log, setLog}) => {
  return (
    <div className="relative w-full h-full flex">
        <Sidebar />
        <TopNav log={log} setLog={setLog}/>
        <div className="w-full pl-[5rem] pt-[5rem] p-5 h-screen">
          <Outlet/>
        </div>
        
    </div>
  )
}

export default Home