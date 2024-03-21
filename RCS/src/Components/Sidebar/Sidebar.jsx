import React from 'react'
import MothersonS from "../../assets/Logo/Motherson-s.png"
import DropDown from './DropDown'
import "./hoverAnim.css"
// import dataRCS from './dataRCS'

import { IoCarOutline } from "react-icons/io5";  //Vehicle
import { AiFillWarning } from "react-icons/ai";  //AGV Breakdown
import { ImStatsDots } from "react-icons/im";  //Stat Utilization
import { FaTasks } from "react-icons/fa";   //Task Parameters
import { HiMiniCpuChip } from "react-icons/hi2";  //Order Processing
import { MdOutlineLocationCity } from "react-icons/md";  //District
import { GrStorage } from "react-icons/gr";  //Storage bin
import { FaNetworkWired } from "react-icons/fa6";  //Storage Bin Status
import { ImStatsBars } from "react-icons/im";  //Storage Bin Stats
import { TiSpanner } from "react-icons/ti";  //Current Order
import { GrUserWorker } from "react-icons/gr";  //Order
import { MdTask } from "react-icons/md"; //Task
import { MdDataObject } from "react-icons/md";  //Log

const dataRCS = [
  {
      name:"Vehicle",
      logo:<IoCarOutline size={25} color="white"/>,
      path:"/",
  },
  {
      name:"AGV Breakdown",
      logo:<AiFillWarning size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Stat Utilization",
      logo:<ImStatsDots size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Task Parameters",
      logo:<FaTasks size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Order Processing",
      logo:<HiMiniCpuChip size={25} color="white"/>,
      path:"/",
  },
  {
      name:"District",
      logo:<MdOutlineLocationCity size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Storage Bin",
      logo:<GrStorage size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Storage Bin Status",
      logo:<FaNetworkWired size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Storage Bin Statistics",
      logo:<ImStatsBars size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Current Order",
      logo:<TiSpanner size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Order",
      logo:<GrUserWorker size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Task",
      logo:<MdTask size={25} color="white"/>,
      path:"/",
  },
  {
      name:"Log",
      logo:<MdDataObject size={25} color="white"/>,
      path:"/",
  },
]



const Sidebar = () => {

  return (
    <div className='w-[22%] h-full bg-[#494949] duration-300ms flex items-center justify-center flex-col gap-5 pb-10 hoverShowSideBar'>
      <div className='w-full py-5 rounded-tl-[60px] rounded-br-[60px] drop-shadow-2xl bg-black flex items-center justify-center'>
          <img src={MothersonS} alt="" className='w-[35px]'/>
      </div>
      <div className='w-[calc(100%-30px)] h-full flex flex-col items-center justify-center p-1 bg-black rounded-[10px]'>
        <DropDown title={"System"} />
        <DropDown title={"RCS"} optionsArray={dataRCS}/>
        <DropDown title={"Monitoring System"}/>
      </div>
    </div>
  )
}

export default Sidebar