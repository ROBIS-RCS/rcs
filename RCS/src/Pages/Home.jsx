import Sidebar from "../Components/Sidebar/Sidebar"
import {Routes, Route, Outlet} from "react-router-dom"
import Welcome from "./Sub-Pages/Welcome"


const Home = ({log, setLog}) => {
  return (
    <div className="w-full h-full flex">
           <Sidebar log={log} setLog={setLog}/> 
        <div className="w-[calc(100%-350px)] p-2">
            <div className="w-full bg-[#FFFFFFC0] p-20 rounded-[20px]">
                <Outlet/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home