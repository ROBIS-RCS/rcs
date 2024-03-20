import { useState } from "react"
import DropArrow from "../../assets/Icons/DropDown-Arrow.png"
import System from "../../assets/Icons/System-Icon.png"


const DropDown = ({title, data}) => {
    const [clicked, setClicked] = useState(false)
    const toggleArrow = () => {
        setClicked(!clicked)
    }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <div className='w-[calc(100%-30px)] px-2 py-3 flex justify-between items-center bg-black rounded-[5px]' onClick={toggleArrow}>
            <span className="flex items-center justify-left gap-5">
                <img src={System} alt="" className="w-[20%]" />
               <p className="text-white font-semibold text-[18px]">{title}</p> 
            </span>
            <img src={DropArrow} alt="" className={!clicked ?"duration-500 rotate-0 w-7" : "rotate-180 duration-500 w-7"} />
        </div>
        <div className={clicked ? "w-full h-full scale-1 origin-top-left visible duration-300 rounded-b-[10px]" : "origin-top-left invisible h-0 w-0 scale-0 duration-300 rounded-b-[10px]"}>
          <div className="w-full h-20 bg-[#0A0A00] rounded-b-[10px]">
            
        </div>
        </div>
        
    </div>
  ) 
    
    
}

export default DropDown