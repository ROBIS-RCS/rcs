import React from 'react'
import MothersonS from "../../assets/Logo/Motherson-s.png"

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full '>
        <div className='w-[calc(100%-20px)] h-full bg-red-700'>
            <div className='w-10 h-10'>
                <img src={MothersonS} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar