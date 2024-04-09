import React from 'react'
import {Link} from "react-router-dom"

const SidebarLinks = (props) => {
  return (
    <Link to={props.link} className='flex p-3 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100'>
        {props.children}
        <p className='text-white font-bold font-poppins whitespace-nowrap overflow-clip tracking-wide'>{props.name}</p>
    </Link>
  )
}

export default SidebarLinks