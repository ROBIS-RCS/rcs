import Motherson from "../../assets/Logo/Motherson.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io"; // Password Eye Icons
import "./Loginpage.css";
import supabase from "../../../server/createClient";

const Login = (props) => {
    const [show, setShow] = useState(false);
    const [iconClr, setIconClr] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("Employee"); // Renamed from user to avoid conflict with authenticate function's user object
    const [error, setError] = useState('');

    const authenticateUser = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*') // Select all columns
                .eq('name', username) // Add filter condition for username
                .eq('pass', password) // Add filter condition for password
                .eq('role', userType) // Add filter condition for user role
                .single();
    
            if (error) {
                throw new Error('An error occurred while authenticating.');
            }
    
            if (data) {
                console.log('User logged in:', data);
                  // Extracting only required information
                const userDataSubset = {
                    name: data.name,
                    role: data.role
                };

            // Convert user subset data to JSON format
            const userDataJSON = JSON.stringify(userDataSubset);
            console.log('User data subset in JSON format:', userDataJSON);
                props.setLog(true);

            } else {
                console.error('Authentication failed: Invalid credentials.');
                alert('Invalid credentials. Please check your username, password, and user type.');
            }
        } catch (error) {
            console.error('Authentication error:', error.message);
            alert('An unexpected error occurred. Please try again later.');
        }
    };
    
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const toggleIconColor = () => {
        setIconClr(!iconClr);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            authenticateUser();
        } else {
            setError('Please enter username and password.');
        }
    };

    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-neutral-500">
            <div className="w-[680px] h-[580px] bg-[#F1F1F1] px-14 py-12 flex flex-col rounded-[25px]">
                <div className="flex justify-end">
                <Link to="/"> <img src={Motherson} alt="" className="h-8 selection:none" draggable="false"/></Link>
                </div>
                <div className="flex mt-10">
                    <p className="text-black text-[32px] font-bold not-italic">LOGIN</p>
                </div>
                <div className="w-full h-full mt-10">
                    <div className="grid grid-cols-[2.5fr,1fr] gap-4">  {/* UserName */}
                        <div className="w-full h-full relative items-center gap-3">
                            <label htmlFor="username" className={username ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px]" : "absolute left-4 top-3 duration-200 text-[16px]"}>Username</label>
                            <input type="text" placeholder="" name="username" id="username" className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${username && "bg-white"} focus:duration-200 border-black`} onChange={handleUsernameChange}/>
                        </div>
                        <select className="px-10 appearance-none rounded-[8px] outline-none text-[18px] font-bold tracking-wide text-[#D82226]" onChange={handleUserTypeChange}>
                            <option value="Employee" className="text-black font-semibold">Employee</option>
                            <option value="Manager" className="text-black font-semibold">Manager</option>
                            <option value="Admin" className="text-black font-semibold">Admin</option>
                        </select>
                    </div>
                    <div className="mt-14 flex items-center relative ">  {/* Password */}
                        <div className="w-full h-full relative items-center gap-3">
                            <label htmlFor="password" className={password ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px]" : "absolute left-4 top-3 duration-200 text-[16px]"}>Password</label>
                            <input type={show ? "text" : "password"} placeholder="" name="password" id="password" className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${password && "bg-white"} focus:duration-200 border-black`} onChange={handlePasswordChange}/>
                        </div>
                        <span onClick={togglePasswordVisibility} className="px-5 py-[11px] cursor-pointer duration-300 absolute right-0" onMouseEnter={toggleIconColor} onMouseLeave={toggleIconColor}>
                            {show ? <IoIosEyeOff size={27} color={iconClr && "#D82226"}/> : <IoIosEye size={27} color={iconClr && "#D82226"}/>}
                        </span>
                    </div>
                    <span className="w-full">   {/* Forgott Password */}
                        <Link to="/forgot">
                            <p className="text-[#D82226] hover:text-black hover:underline hover:duration-200 text-[14px] pt-3 text-right">Forgot Password</p>
                        </Link>
                    </span>
                        
                    <div className="w-full flex flex-col items-center justify-center mt-[70px] gap-2">
                        <button className="px-10 py-2 bg-[#D82226] text-white font-bold text-[18px] rounded-[6px] hover:bg-[#d82225ee]" onClick={handleLogin}>Login</button>
                        <Link to="/signup">
                            <p className="text-[12px] font-semibold text-black hover:underline hover:duration-200">Create new user?</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
