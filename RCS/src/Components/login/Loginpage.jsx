import Motherson from "../../assets/Logo/Motherson.png"
import {useState} from "react"
import {Link} from "react-router-dom"
import "./Loginpage.css"

//Icons
import { IoIosEye } from "react-icons/io";  // Password Eye Open
import { IoIosEyeOff } from "react-icons/io";  //Password Eyes Close


const Login = (props) => {
    const [show, setShow] = useState(false)
    const [iconClr, setIconClr] = useState(false)
    const [username, setUsername] = useState("")  //For Storing Username
    const [password, setPassword] = useState("")  //For Storing Password
    const [user, setUser] = useState("Employee")  //for storing the type of the Faculty / User
    

    const getName = (e) => {
        setUsername(e.target.value)
    }

    const getPass = (e) => {
        setPassword(e.target.value)
    }

    const getUser = (e) => {
        setUser(e.target.value)
    }

    const showPass = () => {
        setShow(!show)
    }

    const changeColor = () =>{
        setIconClr(!iconClr)
    }

    const comparator = () => {
        if(username === "admin" & password === "admin"){
            return props.setLog(!props.log);
        }
    }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-neutral-500">
        <div className="w-[680px] h-[580px] bg-[#F1F1F1] px-14 py-12 flex flex-col rounded-[25px]">
            {/* <form action=""> */}
                <div className="flex justify-end">
                    <img src={Motherson} alt="" className="h-8" />
                </div>
                <div className="flex mt-10">
                    <p className=" text-black text-[32px] font-bold not-italic">LOGIN</p>
                </div>
                <div className="w-full h-full mt-10">
                    <div className="grid grid-cols-[2.5fr,1fr] gap-4">  {/* UserName */}
                        <div className="w-full h-full relative items-center gap-3">
                            <label htmlFor="username" className={username ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px]" : "absolute left-4 top-3 duration-200 text-[16px]"}>Username</label>
                            <input type="text" placeholder="" name="username" id="username" className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${username && "bg-white"} focus:duration-200 border-black`} onChange={getName}/>
                        </div>
                        <select className="px-10 appearance-none rounded-[8px] outline-none text-[18px] font-bold tracking-wide text-[#D82226]" onChange={getUser}>
                            <option value="Employee" className="text-black font-semibold">Employee</option>
                            <option value="Manager" className="text-black font-semibold">Manager</option>
                            <option value="Admin" className="text-black font-semibold">Admin</option>
                        </select>
                    </div>
                    <div className="mt-14 flex items-center relative ">  {/* Password */}
                        <div className="w-full h-full relative items-center gap-3">
                            <label htmlFor="password" className={password ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px]" : "absolute left-4 top-3 duration-200 text-[16px]"}>Password</label>
                            <input type={show ? "text" : "password"} placeholder="" name="password" id="password" className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${password && "bg-white"} focus:duration-200 border-black`} onChange={getPass}/>
                        </div>
                        <span onClick={showPass} className="px-5 py-[11px] cursor-pointer duration-300 absolute right-0" onMouseEnter={changeColor} onMouseLeave={changeColor}>
                            {show ? <IoIosEyeOff size={27} color={iconClr && "#D82226"}/> : <IoIosEye size={27} color={iconClr && "#D82226"}/>}
                        </span>
                    </div>
                    <span className="w-full">   {/* Forgott Password */}
                        <Link>
                            <p className="text-[#D82226] hover:text-black hover:underline hover:duration-200 text-[14px] pt-3 text-right">Forgot Password</p>
                        </Link>
                    </span>
                        
                    <div className="w-full flex flex-col items-center justify-center mt-[70px] gap-2">
                        <button className="px-10 py-2 bg-[#D82226] text-white font-bold text-[18px] rounded-[6px] hover:bg-[#d82225ee]" onClick={comparator}>Login</button>
                        <Link to="/signup">
                            <p className="text-[12px] font-semibold text-black hover:underline hover:duration-200">Create new user?</p>
                        </Link>
                    </div>

                </div>
            {/* </form> */}
        </div>
    </div>
    
  )
}

export default Login