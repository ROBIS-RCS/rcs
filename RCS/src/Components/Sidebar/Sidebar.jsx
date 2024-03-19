import React from 'react'
import MothersonS from "../../assets/Logo/Motherson-s.png"
import DropDown from './DropDown'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full '>
        <div className='w-[calc(100%-20px)] h-full bg-[#494949]'>
            <div className='p-6 bg-black rounded-tl-[46px] rounded-br-[46px] flex items-center justify-center drop-shadow-xl'>
                <img src={MothersonS} alt="" className='w-[55px]' />
            </div>
            <div className='w-full py-5 flex flex-col justify-center items-center'>
                <DropDown title={"Menu"} />
                <DropDown title={"Menu"} />
                <DropDown title={"Menu"} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar