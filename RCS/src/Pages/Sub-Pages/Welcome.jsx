import Typewriter from 'typewriter-effect';

import welcomeMotherson from "../../assets/images/RCS.png"

const Welcome = () => {
  return (
    <div className="w-full h-full flex p-10 relative">
        <p className='text-[60px] h-auto flex w-[380px]  origin-top font-bold hover:text-[#911515]'>
        <Typewriter
            options={{
              strings: ["   Welcome to robis-RCS...    "],
              autoStart: true,
              loop: true,
            }}
        />
        </p>
        <img src={welcomeMotherson} alt="" className='absolute w-[550px] bottom-[-10px] right-[-10px]' />


    </div>
  )
}
export default Welcome