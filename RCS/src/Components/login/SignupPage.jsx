import Motherson from "../../../src/assets/Logo/Motherson.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../../server/config.mjs";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

//Icons
import { IoIosEye } from "react-icons/io"; // Password Eye Open
import { IoIosEyeOff } from "react-icons/io"; //Password Eyes Close

const Signin = () => {
  const [show, setShow] = useState(false);
  const [cShow, setCshow] = useState(false);
  const [iconClr, setIconClr] = useState(false);
  const [iconClr1, setIconClr1] = useState(false);
  const [username, setUsername] = useState(""); //For Storing Username
  const [password, setPassword] = useState(""); //For Storing Password
  const [Cpassword, setCpassword] = useState(""); //For Storing Password
  const [user, setUser] = useState("Employee"); //for storing the type of the Faculty / User
  const [employee, setEmployee] = useState(""); //for Storing Employee IC

  const navigate = useNavigate();

  //handle event
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(employee, user, username, password, Cpassword);
    if (password !== Cpassword) {
      alert("pass should be same");
      return;
    }
    if (username === "" || employee === "" || password === "") {
      alert("Fill vro!");
      return;
    }

    try {
      const { data, error } = await supabase.from("users").insert([
        {
          name: username,
          emp_id: employee,
          role: user,
          password: password,
        },
      ]);
      if (!error) navigate("/");
      //   console.log("User created successfully:", data);

      // Reset form fields
      setUsername("");
      setPassword("");
      setCpassword("");
      setEmployee("");
      // You might also want to redirect the user or show a success message
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  const getName = (e) => {
    setUsername(e.target.value);
    // console.log(username);
  };

  const getPass = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const getUser = (e) => {
    setUser(e.target.value);
  };

  const getEmpID = (e) => {
    setEmployee(e.target.value);
  };

  const getCpass = (e) => {
    setCpassword(e.target.value);
  };
  const showPass = () => {
    setShow(!show);
  };

  const showCpass = () => {
    setCshow(!cShow);
  };

  const changeColor = () => {
    setIconClr(!iconClr);
  };

  const changeColor1 = () => {
    setIconClr1(!iconClr1);
  };

  const data = () => {
    console.log({ employee, user, username, password, Cpassword });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-neutral-500">
      <div className=" bg-[#F1F1F1] px-14 py-12 flex flex-col rounded-[25px] shadow-2xl">
        {/* <button onClick={data}>Show data</button> */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end">
            <Link to="/">
              {" "}
              <img
                src={Motherson}
                alt=""
                className="h-8 selection:none"
                draggable="false"
              />
            </Link>
          </div>
          <div className="flex mt-10">
            <p className=" text-black text-[32px] font-bold not-italic">
              SIGN UP
            </p>
          </div>
          <div className="w-full h-full mt-10">
            <div className="grid grid-cols-[2.5fr,1fr] gap-4">
              {" "}
              {/* Emplotee ID */}
              <div className="w-full h-full relative items-center gap-3">
                <label
                  htmlFor="EmployeeID"
                  className={
                    employee
                      ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px] selection:none"
                      : "absolute left-4 top-3 duration-200 text-[16px] selection:none select-none"
                  }
                >
                  Employee ID
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="employeeID"
                  id="employeeID"
                  className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${
                    employee && "bg-white"
                  } focus:duration-200 border-black selection:none select-none`}
                  onChange={getEmpID}
                />
              </div>
              <select
                name="user"
                id="user"
                className="px-10 appearance-none rounded-[8px] outline-none text-[18px] font-bold tracking-wide text-[#D82226]"
                onClick={getUser}
              >
                {" "}
                {/* User */}
                <option value="Employee" className="text-black font-semibold">
                  Employee
                </option>
                <option value="Manager" className="text-black font-semibold">
                  Manager
                </option>
                <option value="Admin" className="text-black font-semibold">
                  Admin
                </option>
              </select>
              <div className="w-full h-full relative items-center gap-3 mt-7">
                {" "}
                {/* Username */}
                <label
                  htmlFor="username"
                  className={
                    username
                      ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px] selection:none"
                      : "absolute left-4 top-3 duration-200 text-[16px] selection:none select-none"
                  }
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="username"
                  id="username"
                  className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${
                    username && "bg-white"
                  } focus:duration-200 border-black selection:none select-none`}
                  onChange={getName}
                />
              </div>
            </div>

            <div className="mt-10 flex items-center relative ">
              {" "}
              {/* Password */}
              <div className="w-full h-full relative items-center gap-3">
                <label
                  htmlFor="password"
                  className={
                    password
                      ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px] selection:none"
                      : "absolute left-4 top-3 duration-200 text-[16px] selection:none select-none"
                  }
                >
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder=""
                  name="password"
                  id="password"
                  className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${
                    password && "bg-white"
                  } focus:duration-200 border-black select-none`}
                  onChange={getPass}
                />
              </div>
              <span
                onClick={showPass}
                className="px-5 py-[11px] cursor-pointer duration-300 absolute right-0"
                onMouseEnter={changeColor}
                onMouseLeave={changeColor}
              >
                {show ? (
                  <IoIosEyeOff size={27} color={iconClr && "#D82226"} />
                ) : (
                  <IoIosEye size={27} color={iconClr && "#D82226"} />
                )}
              </span>
            </div>

            <div className="mt-10 flex items-center relative ">
              {" "}
              {/* Confirm Password */}
              <div className="w-full h-full relative items-center gap-3">
                <label
                  htmlFor="Cpassword"
                  className={
                    Cpassword
                      ? "absolute left-[-5px] top-[-28px] px-2 font-bold rounded-[5px] duration-200 text-[16px] selection:none"
                      : "absolute left-4 top-3 duration-200 text-[16px] selection:none select-none"
                  }
                >
                  Confirm Password
                </label>
                <input
                  type={cShow ? "text" : "password"}
                  placeholder=""
                  name="Cpassword"
                  id="Cpassword"
                  className={`w-full outline-none py-3 text-[16px] px-4 border-b-2 rounded-md bg-transparent focus:bg-white ${
                    password && "bg-white"
                  } ${
                    password != Cpassword
                      ? "border-1 border-red-600"
                      : "border-black"
                  } focus:duration-200  select-none`}
                  onChange={getCpass}
                />
              </div>
              <span
                onClick={showCpass}
                className="px-5 py-[11px] cursor-pointer duration-300 absolute right-0"
                onMouseEnter={changeColor1}
                onMouseLeave={changeColor1}
              >
                {cShow ? (
                  <IoIosEyeOff size={27} color={iconClr1 && "#D82226"} />
                ) : (
                  <IoIosEye size={27} color={iconClr1 && "#D82226"} />
                )}
              </span>
            </div>

            <span
              className={
                password != Cpassword
                  ? "visible duration-200"
                  : "invisible duratiton-200"
              }
            >
              {" "}
              {/* Password */}
              <Link>
                <p className="text-[#D82226] hover:text-black hover:underline hover:duration-200 text-[14px] pt-1 text-right">
                  Invalid Password
                </p>
              </Link>
            </span>

            <div className="w-full flex flex-col items-center justify-center mt-[40px] gap-2">
              <input
                type="submit"
                value="Sign in"
                className="px-10 py-2 bg-[#D82226] text-white font-bold text-[18px] rounded-[6px] hover:bg-[#d82225ee]"
              />
              <Link to="/">
                <p className="text-[12px] font-semibold text-black hover:underline hover:duration-200">
                  {" "}
                  Already an user !{" "}
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
