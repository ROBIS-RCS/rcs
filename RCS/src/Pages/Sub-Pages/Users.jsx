import React, { useState, useEffect, useRef } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import AddMore from "../../assets/Icons/Add More Icon.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Users = () => {
    const [profiles, setProfiles] = useState(JSON.parse(localStorage.getItem('profiles')) || []);
    const [username, setUsername] = useState('');
    const [userDes, setUserDes] = useState('Employee ');
    const popupRef = useRef(); // Create a ref for the Popup component

    // Update localStorage whenever profiles state changes
    useEffect(() => {
        localStorage.setItem('profiles', JSON.stringify(profiles));
    }, [profiles]);

    const addProf = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const profData = {
            name: username,
            des: userDes,
        };
        setProfiles(prevProfiles => [...prevProfiles, profData]);
        setUsername(''); // Clear input fields after submission
        setUserDes('');
        popupRef.current.close(); // Close the popup after form submission
    };

    const deleteProf = (index) => {
        setProfiles(prevProfiles => prevProfiles.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full p-4 grid grid-cols-2 align-top gap-4 rounded-[15px] duration-1000">
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
                        <button onClick={() => deleteProf(index)} className="flex gap-1 w-full py-2 text-white font-semibold rounded-[5px] bg-red-700 hover:bg-red-600 active:scale-[0.97] items-center justify-center"><MdDeleteForever size={21} color="white" />Delete</button>
                        <button className="flex w-full py-2 text-white font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]">Edit</button>
                        <button className="flex w-full py-2 font-semibold rounded-[5px] bg-black items-center justify-center active:scale-[0.97]"><FaCircleInfo size={20} color="white"/></button>
                    </div>
                </div>
            ))}
            
            <Popup ref={popupRef} trigger={
                <div className="w-full h-[180px] rounded-[10px] flex items-center justify-center hover:shadow-xl duration-200 border-2">
                    <img src={AddMore} alt="" className="w-[17%] opacity-30 hover:opacity-70 active:scale-95 duration-200"  />
                </div>
            } position="middle center" className='flex w-full '>
                <form onSubmit={addProf} className='flex flex-col w-full gap-1'>
                    <input type="text" placeholder='Username' className='w-full py-2 px-5 bg-white outline-none' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <select value={userDes} onChange={(e) => setUserDes(e.target.value)} className='w-full py-2 px-5 bg-white outline-none'>
                        <option value="Admin">Employee</option>
                        <option value="Employee">admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                    <input type="submit" className='py-2 px-3 bg-neutral-100 rounded-md'/>
                </form>
            </Popup>
        </div>
    );
}

export default Users;
