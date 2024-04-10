import React from 'react'
import {motion} from "framer-motion"
import SidebarLinks from './SidebarLinks'

//Icons
import { TiHomeOutline } from "react-icons/ti"; //Home

const Sidebar = () => {
  return (
    <div className='absolute top-0 left-0 h-screen'>
      <motion.div
      className="h-screen bg-[#911515] px-3 pt-32 flex flex-col gap-10 "
      initial={{
          width: "5rem",
      }}
      whileHover={{width: "16rem"}}
      end={{width: "5rem"}}
      transition={{
          duration: 0.5,
          type:"spring",
          damping: 10,
          stiffness: 130
      }}
      >
          <div className="flex flex-col gap-3">

            <SidebarLinks name={"Home"} className="min-w-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </SidebarLinks>

            <SidebarLinks name={"Notification"} className="min-w-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </SidebarLinks>

            <SidebarLinks name={"User"} className="min-w-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
            </SidebarLinks>
          </div>
      </motion.div>
    </div>
  )
}

export default Sidebar