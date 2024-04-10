import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import AddMore from "../../assets/Icons/Add More Icon.svg";

const Users = () => {
    const [profiles, setProfiles] = useState([]);

    // useEffect to handle side effects related to state changes
    useEffect(() => {

        localStorage.setItem('profiles', JSON.stringify(profiles));
    }, [profiles]); // dependencies array: run effect whenever 'profiles' state changes

    const addProf = () => {
        const profData = {
            name: "Username",
            des: "User Designation",
            prof: "../../assets/Profile/Sudhagaran.jpg"
        };
        setProfiles(prevProfiles => [...prevProfiles, profData]);
    };

    return (
        <div className="w-full p-4 grid grid-cols-2 align-top gap-4 rounded-[15px]">
            { profiles.map((cont, index) => (
                <div key={index} className="w-full h-[180px] rounded-[10px] flex flex-col p-5 bg-gradient-to-tl from-gray-300  to-red-100 justify-between duration-300 hover:shadow-xl">
                    <div className="w-full items-center flex gap-4">
                        <img src={cont.prof} alt="" />
                        <span>
                            <p className="text-[22px] hover:text-[#f00] duration-200 text-[#0a0000] cursor-default font-bold">{cont.name}</p>
                            <p className="text-[16px] font-semibold hover:drop-shadow-xl text-[#999999] cursor-default">{cont.des}</p>
                        </span>
                    </div>
                    <div className="w-[60%]  gap-3 grid grid-cols-[2fr,2fr,1fr]">
                        <button className="flex gap-1 w-full py-2 text-white font-semibold rounded-[5px] bg-red-700 hover:bg-red-600 active:scale-[0.97] items-center justify-center"><MdDeleteForever size={21} color="white" />Delete</button>
                        <button className="flex w-full py-2 text-white font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]">Edit</button>
                        <button className="flex w-full py-2 font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]"><FaCircleInfo size={20} color="white"/></button>
                    </div>
                </div>
            ))}
            <div className="w-full h-[200px] rounded-[10px] flex items-center justify-center hover:shadow-xl duration-200 border-2">
                <img src={AddMore} alt="" className="w-[25%] opacity-30 hover:opacity-70 active:scale-95 duration-200" onClick={addProf} />
            </div>
        </div>
    );
}

export default Users;
