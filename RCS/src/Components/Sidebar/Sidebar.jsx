import React from 'react'
import MothersonS from "../../assets/Logo/MOTHERSON_white.png"
import DropDown from './DropDown'
import "./hoverAnim.css"
import {Link} from "react-router-dom"
import NotificationBar from "./NotificationBar"

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
import { GrVmMaintenance } from "react-icons/gr";  //Maintenance
import { IoNotifications } from "react-icons/io5";  //Notification
import { LuLanguages } from "react-icons/lu";  //Language
import { MdError } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md"; //Log out


const dataRCS = [
  {
      name:"Vehicle",
      logo:<IoCarOutline size={25} color="white"/>,
      path:"/Vehicle",
  },
  {
    name:"Maintenance",
    logo:<GrVmMaintenance size={25} color="white"/>,
    path:"/Maintenance",
},
//   {
//       name:"AGV Breakdown",
//       logo:<AiFillWarning size={25} color="white"/>,
//       path:"/",
//   },
  {
      name:"Stat Utilization",
      logo:<ImStatsDots size={25} color="white"/>,
      path:"/Stat_Utilization",
  },
  {
      name:"Task Parameters",
      logo:<FaTasks size={25} color="white"/>,
      path:"/Task_Parameters",
  },
  {
      name:"Order Processing",
      logo:<HiMiniCpuChip size={25} color="white"/>,
      path:"/Order_Processing",
  },
  {
      name:"Region",
      logo:<MdOutlineLocationCity size={25} color="white"/>,
      path:"/Region",
  },
  {
      name:"Storage Bin",
      logo:<GrStorage size={25} color="white"/>,
      path:"/Storage_Bin",
  },
  {
      name:"Storage Bin Status",
      logo:<FaNetworkWired size={25} color="white"/>,
      path:"/Storage_Bin_Status",
  },
  {
      name:"Storage Bin Statistics",
      logo:<ImStatsBars size={25} color="white"/>,
      path:"/Storage_Bin_Statistics",
  },
//   {
//       name:"Current Order",
//       logo:<TiSpanner size={25} color="white"/>,
//       path:"/",
//   },
  {
      name:"Order",
      logo:<GrUserWorker size={25} color="white"/>,
      path:"/Order",
  },
  {
      name:"Task",
      logo:<MdTask size={25} color="white"/>,
      path:"/Task",
  },
  {
      name:"Log",
      logo:<MdDataObject size={25} color="white"/>,
      path:"/Log",
  },
]

// const dataSystem =[
//     {
//         name:"Users",
//         logo:<FaUserCircle size={25} color="white"/>,
//         path:"/users",
//     },
//     {
//         name:"Roles",
//         logo:<FaUserCog size={25} color="white"/>,
//         path:"/",
//     },
//     {
//         name:"Language",
//         logo:<FaLanguage size={25} color="white"/>,
//         path:"/",
//     }
// ]

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
    // {
    //     name:"AGV Task",
    //     logo:<IoGitNetworkSharp size={25} color="white"/>,
    //     path:"/",
    // },
    // {
    //     name:"AGV Work",
    //     logo:<ImStatsDots size={25} color="white"/>,
    //     path:"/",
    // },
]
const Sidebar = (props) => {
    const LogOut = () => {
        props.setLog(!props.log);
        console.log("logout")
    }


    return (
      <div className='w-[350px] h-screen bg-[#911515] duration-500ms flex items-center justify-start flex-col gap-2.5 pb-10 hoverShowSideBar overflow-y-scroll '>
        <div className='w-[calc(100%-30px)] drop-shadow-2xl flex items-center justify-start px-2 py-5'>
            <Link to="/welcome"><img src={MothersonS} alt="" className='w-[200px]'/></Link>
        </div>
        <div className='w-[calc(100%-30px)] h-auto bg-black px-5 py-4 flex items-center justify-between rounded-[12px]'> {/* User Profile */}
            <div className='w-full flex items-center gap-3' >
                <img src="" alt="" className='p-7 rounded-full bg-[#888888]' />
                <span>
                    <p className='flex text-[18px] font-bold text-white hover:text-red-600 duration-200'>Username</p>
                    <p className='flex text-[14px] font-semibold text-[#888] hover:text-white duration-200'>User Designation</p>
                </span>
            </div>
              
            <div className='p-3 rounded-full bg-red-600 hover:bg-red-500' title='Logout' onClick={LogOut}>
                <MdLogout size={22} color="white"/>
            </div>
        </div>

        <NotificationBar/>

        <div className='w-[calc(100%-30px)]  flex flex-col items-center justify-center p-3 bg-black rounded-[10px]'>
          {/* <DropDown title={"System"} optionsArray={dataSystem} icon={<FaDesktop size={25}  color="white" />} /> */}
          <DropDown title={"RCS"} optionsArray={dataRCS} icon={<FaLocationCrosshairs size={25} color="white" />} />
          <DropDown title={"Monitoring System"} optionsArray={dataMS} icon={<ImStatsDots size={25} color="white" />} />
        </div>
      </div>
    );
  };
export default Sidebar