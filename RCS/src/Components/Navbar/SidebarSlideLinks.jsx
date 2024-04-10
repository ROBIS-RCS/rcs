import React from 'react'
import {Link} from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const SidebarSlideLinks = ({name, children, select, setSelect}) => {
    const handleClick = () => {
        setSelect(null)
        setTimeout(() => {
            setSelect(name)
        }, 250)
    }
  return (
    <Link
    onClick={handleClick}
      className="flex p-3 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-white font-bold truncate whitespace-nowrap tracking-wide">
        {name}
        </p>
        <ChevronRightIcon className="stroke-white stroke-[0.75] min-w-8 w-8" />
      </div>
    </Link>
  )
}

export default SidebarSlideLinks