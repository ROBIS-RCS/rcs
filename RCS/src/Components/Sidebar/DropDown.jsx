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
        <div className='w-[calc(100%-30px)] px-2 py-3 flex justify-between items-center bg-black rounded-[5px]' onClick={toggleArrow}>
            <span className="flex items-center justify-left gap-5">
                <img src={System} alt="" className="w-[35px]" />
               <p className="text-white font-semibold text-[18px]">{title}</p> 
            </span>
            <img src={DropArrow} alt="" className={!clicked ?"duration-300 rotate-0 w-7" : "rotate-180 duration-500 w-7"} />
        </div>
        <div className={clicked ? " w-full h-full  visible duration-300 rounded-b-[10px]" : "invisible h-0 w-full duration-300 rounded-b-[10px]"}>
          <div className="w-full h-full bg-[#0A0A00] rounded-b-[10px] pl-5 gap-2">
          {
            optionsArray?.map((option, key) => {
              return (
                <Link key={key} to={option.path}>
                  <span className="w-full p-3 rounded hover:bg-[#2f2f2f] duration-200 flex items-center justify-left gap-3">
                    <span>{option.logo}</span>
                    <p className="text-[18px] font-semibold text-white">{option.name}</p>
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