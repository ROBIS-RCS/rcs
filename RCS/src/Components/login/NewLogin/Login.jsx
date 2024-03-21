import MothersonS from "../../../assets/Logo/Motherson-s.png"


const Login = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[700px] p-10 bg-[#F1F1F1] rounded-[25px] shadow">
            <div className="flex items-center justify-end p-5">
                <img src={MothersonS} alt="" className="w-[50px]"/>
            </div>
            <div className="flex items-center justify-start ">
                <p className="text-[32px] font-bold font-sans">LOGIN</p>
            </div>
            <div className="w-full border-2 flex flex-col gap-10">
                <div className="grid grid-cols-[2fr,1fr] gap-5 mt-10">
                    <input type="text" placeholder="UserName" className="p-4 w-full focus:bg-white bg-transparent py-6 outline-none rounded-none border-b-2 border-red-600" />
                    <select className="w-full h-full p-2 outline-none font-sans text-[16px] not-italic gap-5 border-none">
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div className="w-full border-2 border-b-black rounded-full">
                    <input type="text" placeholder="Password" className="p-4 w-full py-6 outline-none bg-transparent focus:bg-white border-b-2 border-red-600" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login