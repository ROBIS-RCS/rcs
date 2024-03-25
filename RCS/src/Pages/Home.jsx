import Sidebar from "../Components/Sidebar/Sidebar"
import {Routes, Route} from "react-router-dom"
import Welcome from "./Sub-Pages/Welcome"


const Home = () => {
  return (
    <div className="w-full h-full flex">
           <Sidebar/> 
        <div className="w-[calc(100%-350px)] p-2">
            <div className="w-full bg-[#FFFFFFC0] p-20 rounded-[20px]">
                <Routes>
                    <Route path="/welcome" element={<Welcome/>}></Route>
                    <Route ></Route>
                </Routes>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home