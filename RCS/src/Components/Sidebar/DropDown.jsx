import { useState } from "react";
import DropArrow from "../../assets/Icons/DropDown-Arrow.png";
import { Link } from "react-router-dom";

const DropDown = ({ title, optionsArray, icon }) => {
  const [clicked, setClicked] = useState(false);

  const toggleArrow = () => {
    setClicked(!clicked);
  };

  return (
    <div className="w-full py-2 px-5 flex flex-col items-center justify-center">
      <div
        className="w-[calc(100%+40px)] px-3 py-4 flex justify-between items-center bg-[#000] duration-200 hover:bg-[#1d1d1d] hover:rounded-[5px] cursor-pointer" 
        onClick={toggleArrow}
      >
        <span className="flex items-center justify-left gap-5">
          {icon}
          <p className="font-sans text-white text-[18px] whitespace-nowrap overflow-clip">{title}</p>
        </span>
        <img
          src={DropArrow}
          alt=""
          className={
            !clicked
              ? "duration-300 rotate-0 w-7"
              : "rotate-180 duration-500 w-7"
          }
        />
      </div>
      <div
        className={
          clicked
            ? "w-[calc(100%+40px)] animaton-show h-full duration-300 rounded-b-[10px]"
            : "h-0 w-0 animation-hidden hidden duration-300 "
        }
      >
        <div className="w-full h-full bg-[#282828] p-2 grid gap-2 rounded-[6px]">
          {optionsArray?.map((option, key) => (
            <Link key={key} to={option.path}>
              <span className="w-full p-3 rounded hover:bg-[#911515] hover:rounded-[5px] hover:scale-[1.02] duration-500 flex items-center justify-left gap-2">
                {option.logo}
                <p className="text-[18px] font-sans text-white whitespace-nowrap overflow-clip">
                  {option.name}
                </p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
