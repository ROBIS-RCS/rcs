import Motherson from "../../../assets/Logo/Motherson.png"
import {useState} from "react"
import {Link} from "react-router-dom"
import "./signup.css"

//Icons
import { IoIosEye } from "react-icons/io";  // Password Eye Open
import { IoIosEyeOff } from "react-icons/io";  //Password Eyes Close


const Signin = () => {
    const [show, setShow] = useState(false)
    const [focus, setFocus] = useState(false)

    const showP = () =>{
        setShow(!show)
        console.log(show);
    }

    const Inputfocus = () => {
        setFocus(!focus)
    }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center scale-90">
        <div className="w-[700px] p-12 bg-[#F1F1F1] rounded-[25px] loginDiv">
            <div className="flex items-center justify-end p-5">
                <img src={Motherson} alt="" className="h-[40px]"/>
            </div>
            <div className="flex items-center justify-start">
                <p className="text-[36px] font-bold font-sans not-italic">SIGN UP</p>
            </div>
            <form action="">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex flex-col justify-center mt-10 gap-5">
                        <span className="grid grid-cols-[2.5fr,1fr] gap-5">
                        <span className="w-fulll border-b-2 border-black rounded-[5px]"><input type="text" placeholder="Employee ID" className="placeholder:font-bold hover:placeholder:text-[18px] hover:placeholder:duration-500 duration-500 ocus:text-[18px] font-semibold p-4 w-full bg-transparent py-6 outline-none rounded-[5px]" required /></span>
                            <select className="w-full appearance-none h-full px-10 flex items-center justify-center outline-none font-sans text-[16px] font-bold text-[#D82226] not-italic gap-5 border-none selection:w-10">
                                <option value="Employee" className="text-black">Employee</option>
                                <option value="Manager" className="text-black">Manager</option>
                                <option value="Admin" className="text-black">Admin</option>
                            </select> 
                            <span className="w-fulll border-b-2 border-black rounded-[5px]"><input type="text" placeholder="UserName" className="placeholder:font-bold hover:placeholder:text-[18px] hover:placeholder:duration-500 duration-500 ocus:text-[18px] font-semibold p-4 w-full bg-transparent py-6 outline-none rounded-[5px]" required /></span>
                        </span>
                        <span className="w-fulll border-b-2 flex border-black rounded-[5px]">
                            <input type={show ? "text":"password"} placeholder="Password" className="placeholder:font-bold hover:placeholder:text-[18px] hover:placeholder:duration-500 focus:text-[18px] font-semibold duration-500 p-4 w-full bg-transparent py-6 outline-none rounded-[5px]" required/>
                            <span className=" h-full p-3 flex items-center justify-center bg-transparent inputFocusCont rounded-full hover:bg-white hover:bg-opacity-50 cursor-pointer"  onClick={showP}>
                                {
                                    show ? <IoIosEyeOff size={27} title="Hide Password"/> : <IoIosEye size={27} title="Show Password"/>
                                }
                            </span>
                        </span>
                        <span className="w-fulll border-b-2 flex border-black rounded-[5px]">
                            <input type={show ? "text":"password"} placeholder="Confirm password" className="placeholder:font-bold hover:placeholder:text-[18px] hover:placeholder:duration-500 focus:text-[18px] font-semibold duration-500 p-4 w-full bg-transparent py-6 outline-none rounded-[5px]" required/>
                            <span className=" h-full p-3 flex items-center justify-center bg-transparent inputFocusCont rounded-full hover:bg-white hover:bg-opacity-50 cursor-pointer"  onClick={showP}>
                                {
                                    show ? <IoIosEyeOff size={27} title="Hide Password"/> : <IoIosEye size={27} title="Show Password"/>
                                }
                            </span>
                        </span>
                    </div>
                    <div className="w-full flex justify-end items-center" >
                        <p className="font-semibold text-[14px] rounded-[2px] hover:drop-shadow-sm cursor-pointer font-sans text-[#D82226]">Forgot Password !</p>
                    </div>
                    <div className="flex gap-3 flex-col items-center justify-center p-4 mt-6">
                        <input type="submit" value="Login" className="w-[150px] h-[45px] text-white text-[18px] font-bold not-italic bg-[#D82226]"/>
                        <Link to="/newsign"><p className="font-[500] tracking-wide underline ">   Create new user ?  </p></Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin