import { useState } from "react"
import DropArrow from "../../assets/Icons/DropDown-Arrow.png"
import System from "../../assets/Icons/System-Icon.png"
import {Link} from "react-router-dom"


const DropDown = ({title, optionsArray}) => {
    const [clicked, setClicked] = useState(false)
    const toggleArrow = () => {
        setClicked(!clicked)
    }
  return (
    <div className="w-full py-2 px-5 flex flex-col items-center justify-center">
        <div className='w-[calc(100%+40px)] px-1 py-1 flex justify-between items-center bg-[#8C8888] rounded-[10px]' onClick={toggleArrow}>
            <span className="flex items-center justify-left gap-5">
                <img src={System} alt="" className="w-[35px]" />
               <p className="font-sans text-white text-[18px]">{title}</p> 
            </span>
            <img src={DropArrow} alt="" className={!clicked ?"duration-300 rotate-0 w-7" : "rotate-180 duration-500 w-7"} />
        </div>
        <div className={clicked ? "w-[calc(100%+40px)] h-full scale-1 origin-top-left visible duration-300 rounded-[15px]" : "origin-top-left invisible h-0 w-0 scale-0 duration-300 rounded-[10px]"}>
          <div className="w-full h-full bg-[#8C8888] rounded-[15px] ">
          {
            optionsArray?.map((option, key) => {
              return (
                <Link key={key} to={option.path}>
                  <span className="w-full p-3 rounded hover:bg-[#2f2f2f] duration-500 flex items-center  justify-left gap-2">
                    <span>{option.logo}</span>
                    <p className="text-[18px] font-sans text-white">{option.name}</p>
                  </span>
                </Link>
              );
            })
          }            
        </div>
        </div>
        
    </div>
  ) 
    
    
}

export default DropDown