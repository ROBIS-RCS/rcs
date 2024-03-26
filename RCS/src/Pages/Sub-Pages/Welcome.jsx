import Typewriter from 'typewriter-effect';

import welcomeMotherson from "../../assets/images/RCS.png"
import Particle from '../../Components/ParticleJS/Particle';

const Welcome = () => {
  return (
    <div className='w-full h-full'>
      
      <div className="w-full h-full flex p-10 relative">
        <div className='absolute top-20 '>
          <Particle/>
        </div>
        
          <p className='text-[62px] h-auto flex w-[380px]  origin-top font-bold hover:text-[#911515]'>
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
    </div>
    
  )
}
export default Welcome