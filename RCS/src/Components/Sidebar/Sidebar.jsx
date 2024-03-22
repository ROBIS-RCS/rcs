import React from 'react'
import MothersonS from "../../assets/Logo/MOTHERSON_white.png"
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
import { MdError } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";


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

const dataSystem =[
    {
        name:"Users",
        logo:<FaUserCircle size={25} color="white"/>,
        path:"/",
    },
    {
        name:"Roles",
        logo:<FaUserCog size={25} color="white"/>,
        path:"/",
    },
    {
        name:"Language",
        logo:<FaLanguage size={25} color="white"/>,
        path:"/",
    }
]

const dataMS =[
    {
        name:"AGV Management",
        logo:<IoCarOutline size={25} color="white"/>,
        path:"/",
    },
    {
        name:"Realtime Map",
        logo:<FaMapMarkedAlt size={25} color="white"/>,
        path:"/",
    },
    {
        name:"Error Records",
        logo:<ImStatsDots size={25} color="white"/>,
        path:"/",
    },
    {
        name:"Error codes",
        logo:<MdError size={25} color="white"/>,
        path:"/",
    },
    {
        name:"AGV Errors",
        logo:<AiFillWarning size={25} color="white"/>,
        path:"/",
    },
    {
        name:"AGV Task",
        logo:<IoGitNetworkSharp size={25} color="white"/>,
        path:"/",
    },
    {
        name:"AGV Work",
        logo:<ImStatsDots size={25} color="white"/>,
        path:"/",
    },
]
const Sidebar = () => {
    return (
      <div className='w-[20%] h-100% bg-[#911515] duration-500ms flex items-center justify-start flex-col gap-5 pb-10 hoverShowSideBar'>
        <div className='w-[200px] py-1 px-1 rounded-tl-[60px] rounded-br-[60px] drop-shadow-2xl  flex items-center justify-left '>
            <img src={MothersonS} alt="" className='w-[200px]'/>
        </div>
        <div className='w-[calc(100%-30px)]  flex flex-col items-center justify-center p-3 bg-[#EEEEEE] rounded-[10px]'>
          <DropDown title={"System"} optionsArray={dataSystem} icon={<FaDesktop size={25}  color="white" />} />
          <DropDown title={"RCS"} optionsArray={dataRCS} icon={<FaLocationCrosshairs size={25} color="white" />} />
          <DropDown title={"Monitoring System"} optionsArray={dataMS} icon={<ImStatsDots size={25} color="white" />} />
        </div>
        <a href="/" class="subpixel-antialiased text-20px text-white "> Login</a>
      </div>
    );
  };
export default Sidebar