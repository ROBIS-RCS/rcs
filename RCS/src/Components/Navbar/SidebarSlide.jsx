import {motion, AnimatePresence} from "framer-motion"
import SidebarSlideOptions from "./SidebarSlideOptions"

const variants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
}

const SidebarSlide = ({hover, select, setSelect, options}) => {
  return (
    <motion.div
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`h-full z-40 flex flex-col pt-28 gap-8 w-64 absolute bg-neutral-900 ml-0 ${
        hover ? "left-[100%] duration-500" : "left-[100%] duration-300"
      } border-r border-neutral-800 p-5`}
    >
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold cursor-pointer text-white">{select}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="min-w-8 w-8 hover:drop-shadow-2xl hover:stroke-[#911515] duration-500 backdrop-filter hover:backdrop-blur-3xl back hover:bg-opacity-10 rounded-full cursor-pointer" onClick={()=> setSelect(null)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>

      <div className="flex flex-col gap-1 overflow-scroll">
        {
        options.map((option,key)=> {
          return (
            <SidebarSlideOptions name={option.name} link={option.path} setSelect={setSelect}>
              {option.logo}
          </SidebarSlideOptions>
          )
          
        })
      }
      </div>


    </motion.div>
  )
}

export default SidebarSlide