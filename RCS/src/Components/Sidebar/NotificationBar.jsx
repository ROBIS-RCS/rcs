import { IoNotifications } from "react-icons/io5";  //Notification
import { LuLanguages } from "react-icons/lu";  //Language
import { FaUserCircle } from "react-icons/fa"; // User

import {Link} from "react-router-dom"

const dataNB = [
    {
        title: "Notification",
        icon: <IoNotifications size={25} color='white'/>,
        isNotification: true,
        path: "/notification"
    },
    {
        title: "Users",
        icon: <FaUserCircle size={25} color='white'/>,
        isNotification: false,
        path:"/users"
    },
    {
        title: "Language",
        icon: <IoNotifications size={25} color='white'/>,
        isNotification: false,
        path:"/language"
    },
]



const NotificationBar = () => {
  return (
    <div className='w-[calc(100%-30px)] h-auto bg-black px-5 py-5 grid grid-cols-3 gap-2 items-center justify-between rounded-[12px] '> {/* Notification and Others */}
    {
        dataNB.map((nb,key)=> {
            return (
                <Link to={nb.path}>
                    <div className='w-full h-full flex items-center justify-center gap-1 hover:border-l-2 hover:border-r-2 realtive titleShow'>
                        {nb.icon}
                        <p className={nb.isNotification ? 'px-1.5 py-0.5 text-white font-semibold bg-red-600 rounded-full duration-300' : "hidden"}>10</p>
                        <p className='absolute px-3 py-1 bg-[#00000045] text-white font-semibold text-[14px] translate-x-[0px] translate-y-8 titleText invisible'>{nb.title}</p>
                    </div>
                </Link>
                
            )
        })
        
    }
        
    </div>
  )
}

export default NotificationBar