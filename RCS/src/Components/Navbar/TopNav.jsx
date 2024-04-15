import { motion, AnimatePresence } from "framer-motion";
import MothersonLogo from "../../assets/Logo/MOTHERSON_white.png";
import { MdOutlineLogout } from "react-icons/md";
import { MdLogout } from "react-icons/md"; //Log out
import { useEffect, useState } from "react";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const TopNav = (props) => {
  const auth = useAuthUser();
  const [logout, setLogout] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const Profile = () => {
    setViewProfile(!viewProfile);
  };
  const signout = useSignOut();

  useEffect(() => {
    if (logout) {
      signout();
      window.location.reload();
    }
  }, [logout]);

  const profileAnimation = {
    inView: {
      opacity: 1,
      duration: 3,
    },

    offView: {
      opacity: 0,
      duration: 3,
    },
  };

  return (
    <div className="fixed z-50 top-0 left-0 right-0 gap-5 bg-[#911515] w-full h-20 flex items-center justify-between pl-5 pr-10">
      <img src={MothersonLogo} alt="" className="h-9" />
      <div className="flex items-center justify-center gap-7">
        <img
          src={auth.URL}
          alt=""
          className="w-12 h-12 rounded-full bg-[#fff] mb-2"
          onClick={Profile}
        />
        <AnimatePresence>
          <motion.div
            variants={profileAnimation}
            initial="offView"
            animate="inView"
            exit="offView"
            className={
              viewProfile
                ? "w-[15rem] h-fit p-5 bg-black shadow-xl drop-shadow-md absolute bottom-[-160px] right-1 rounded-[10px]"
                : "hidden"
            }
          >
            <span className="flex gap-4 items-center">
              <img
                src={auth.URL}
                alt=""
                className="w-12 h-12 rounded-full bg-[#fff]"
              />
              <span>
                <p className="text-[20px] font-bold text-white tracking-wide">
                  {auth.user}
                </p>
                <p className="text-[14px] font-semibold text-red-500">
                  {auth.role}
                </p>
              </span>
            </span>
            <button
              className="w-full rounded-full flex items-center justify-center gap-3 bg-red-800 h-10 mt-5 text-white font-bold "
              onClick={() => setLogout(!logout)}
            >
              logout
              <MdLogout size={19} color="white" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TopNav;
