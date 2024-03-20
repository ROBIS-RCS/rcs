import { useState } from "react"
import DropArrow from "../../assets/Icons/DropDown-Arrow.png"
import System from "../../assets/Icons/System-Icon.png"


const DropDown = (props) => {
    const [clicked, setClicked] = useState(false)
    const toggleArrow = () => {
        setClicked(!clicked)
    }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <div className='w-[calc(100%-30px)] px-2 py-3 flex justify-between items-center bg-black rounded-[5px]' onClick={toggleArrow}>
            <span className="flex items-center justify-center gap-5">
                <img src={System} alt="" className="w-[20%]" />
               <p className="text-white font-semibold text-[18px]">{props.title}</p> 
            </span>
            <img src={DropArrow} alt="" className={!clicked ?"duration-500 rotate-0 w-7" : "rotate-180 duration-500 w-7"} />
        </div>
        <div className="w-[calc(100%-30px)]  h-20 bg-red-100">

        </div>
    </div>
  ) 
    
    
}

export default DropDown