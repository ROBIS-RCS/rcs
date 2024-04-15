import {motion} from "framer-motion"
import {Link} from "react-router-dom"

const SidebarSlideOptions = ({children, name, link, setSelect}) => {

    const entryExit = {
        entry: {
            x: 0,
            opacity:1,
            origin: "left"
        },
        exit: {
            x: -20,
            opacity:0,
            origin: "left"
        }
    }

  return (
    <Link
    to ={link}>
        <motion.div
        variants={entryExit}
        className="flex p-3 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700 transition-colors duration-100"
        initial="exit"
        animate="entry"
        exit="exit"
        onClick={()=> setSelect(null)}
        >
        {children}
        <div className="flex overflow-clip place-items-center justify-between w-full">
            <p className="text-white font-bold truncate whitespace-nowrap tracking-wide">
            {name}
            </p>
      </div>

        </motion.div>
    </Link>
  )
}

export default SidebarSlideOptions