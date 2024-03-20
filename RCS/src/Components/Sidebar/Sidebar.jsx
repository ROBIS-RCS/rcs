import React from 'react'
import MothersonS from "../../assets/Logo/Motherson-s.png"
import DropDown from './DropDown'
import "./hoverAnim.css"
import dataRCS from './dataRCS'

const Sidebar = () => {

  return (
    <div className='w-[22%] h-full bg-[#494949] duration-300ms border-2 flex items-center justify-center flex-col gap-5 pb-10 hoverShowSideBar'>
      <div className='w-full py-5 rounded-tl-[60px] rounded-br-[60px] drop-shadow-2xl bg-black flex items-center justify-center'>
          <img src={MothersonS} alt="" className='w-[35px]'/>
      </div>
      <div className='w-[calc(100%-30px)] h-full flex flex-col items-center justify-center p-1 bg-black rounded-[10px]'>
        <DropDown title={"Title"} />
        <DropDown title={"Title"}optionsArray={dataRCS}/>
        <DropDown title={"Title"}/>
      </div>
    </div>
  )
}

export default Sidebar