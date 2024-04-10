import {motion} from "framer-motion"
import MothersonLogo from "../../assets/Logo/MOTHERSON_white.png"
import { MdOutlineLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'


const TopNav = (props) => {
    const auth = useAuthUser()
    const [logout, setLogout] = useState(false)
    const [viewProfile, setViewProfile] = useState(false);
    const Profile = () =>{
        setViewProfile(!viewProfile)
    }
    const signout =  useSignOut();

    useEffect(()=> {
        
        if(logout) {
            signout()
            window.location.reload()
        }
    },[logout])

  return (
    <div className="fixed top-0 left-0 right-0 gap-5 bg-[#911515] w-full h-20 flex items-center justify-between pl-5 pr-10">
        <img src={MothersonLogo} alt="" className="h-9" />
        <div className="flex items-center justify-center gap-7">
        <img src="" alt="" className="w-12 h-12 rounded-full bg-[#fff] mb-2" onClick={Profile}/>
        <div className={viewProfile ? "w-[15rem] h-fit p-5 bg-black shadow-xl drop-shadow-md absolute bottom-[-160px] right-1 rounded-[15px]" : "hidden"}>
            <span className="flex gap-4 items-center">
                <img src="" alt="" className="w-12 h-12 rounded-full bg-[#fff]"/>
                <span >
                    <p className="text-[20px]  font-bold text-white font-mono tracking-wide">{auth.user}</p>
                    <p className="text-[14px] font-semibold text-red-500">{auth.role}</p>
                </span>
                
            </span>
            <button className="w-full rounded-full flex items-center justify-center gap-3 bg-red-800 h-10 mt-5 text-white font-bold " onClick={() => setLogout(!logout)}>
                logout 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>

            </button>
        </div>
        </div>
        
        
    </div>
  )
}

export default TopNav