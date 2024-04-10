import React, {useState} from 'react'
import {motion, AnimatePresence } from "framer-motion"
import SidebarLinks from './SidebarLinks'

//Icons
import { TiHomeOutline } from "react-icons/ti"; //Home
import SidebarSlide from './SidebarSlide';
import SidebarSlideLinks from './SidebarSlideLinks';

const Sidebar = () => {

  const [hoverState, setHoverState] = useState(false)
  const [selectedState, setSelectedState] = useState("")

  return (
    <div className='fixed top-0 left-0 h-full'>
      
      
      <AnimatePresence >
        {
          selectedState && <SidebarSlide hover={hoverState} setHover={setHoverState} select={selectedState} setSelect = {setSelectedState}/>
        }
      </AnimatePresence >
      <motion.div
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}
      className="relative top-0 z-50 h-screen bg-[#911515] px-3 pt-28 flex flex-col gap-10 "
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

            <SidebarLinks name={"Home"} className="min-w-8 w-8" link={"/welcome"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </SidebarLinks>

            <SidebarLinks name={"Notification"} className="min-w-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </SidebarLinks>

            <SidebarLinks name={"User"} className="min-w-8 w-8" link="/users">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[1.5] stroke-white min-w-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
            </SidebarLinks>

            <SidebarSlideLinks name={"RCS"} className="min-w-8 w-8" select={selectedState} setSelect = {setSelectedState}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-[1.5] stroke-white min-w-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </SidebarSlideLinks>

            <SidebarSlideLinks name={"Monitoring"} className="min-w-8 w-8" select={selectedState} setSelect = {setSelectedState} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-[1.5] stroke-white min-w-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            </SidebarSlideLinks>


          </div>

      </motion.div>
      
    </div>
  )
}

export default Sidebar