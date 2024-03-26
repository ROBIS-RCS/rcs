import panda from "../../assets/Profile/Sudhagaran.jpg"
import { MdDeleteForever } from "react-icons/md"; //Delete Icon
import { FaCircleInfo } from "react-icons/fa6";  //Info Icon
import Custom_img from "../../Components/Custom_Image/Custom_img";

const dataProf = [
    {
        name: "Username",
        des: "User Designation",
        prof: "../../assets/Profile/Sudhagaran.jpg"
    },
    {
        name: "Username",
        des: "User Designation",
        prof: "../../assets/Profile/Sudhagaran.jpg"
    },
    {
        name: "Username",
        des: "User Designation",
        prof: "../../assets/Profile/Sudhagaran.jpg"
    },
    {
        name: "Username",
        des: "User Designation",
        prof: "../../assets/Profile/Sudhagaran.jpg"
    },
]



const Users = () => {
  return (
    <div className="w-full p-4 flex flex-wrap align-top gap-4 rounded-[15px]">
        {
            dataProf.map((cont, key)=> {
                return(
                    <div key={key} className="w-[400px] h-[200px] rounded-[10px] flex flex-col p-5 items-center bg-gradient-to-tl from-gray-300  to-red-100 justify-between duration-300 hover:shadow-xl">
                        <div className="w-full items-center flex gap-4">
                            <Custom_img size={64} imageURL={cont.prof}/>
                            <span>
                                <p className="text-[22px] hover:text-[#f00] duration-200 text-[#0a0000] cursor-default font-bold">{cont.name}</p>
                                <p className="text-[16px] font-semibold hover:drop-shadow-xl text-[#999999] cursor-default">{cont.des}</p>
                            </span>
                        </div>
                        <div className="w-full  gap-3 grid grid-cols-[2fr,2fr,1fr]">
                            <button className="flex gap-1 w-full py-2 text-white font-semibold rounded-[5px] bg-red-700 hover:bg-red-600 active:scale-[0.97] items-center justify-center"><MdDeleteForever size={21} color="white" />Delete</button>
                            <button className="flex w-full py-2 text-white font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]">ABCD</button>
                            <button className="flex w-full py-2 font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]"><FaCircleInfo size={20} color="white"/></button>
                        </div>
                    </div>
                )
            })
        }
        
        <div className="w-[400px] h-[200px] rounded-[10px] hover:shadow-xl duration-200 border-2">
            
        </div>
    </div>
  )
}

export default Users