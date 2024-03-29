import Typewriter from 'typewriter-effect';
import Mlogo from '../../assets/Logo/redlogo.png'
import welcomeMotherson from "../../assets/images/RCS.png"
import Particle from '../../Components/ParticleJS/Particle';
import Slideshow from '../../Components/Slideshow/Slideshow.jsx';
import GIF from "../../assets/GIF/Designer.png"

const Welcome = () => {
  return (
    <div className='w-full h-full realtive'>
      <div className='absolute top-0 left-[350px]'>
          <Particle/>
        </div>
      <div className='w-full h-full'>
         <div className="w-full h-full flex p-10 relative"> 
        
          <p className='text-[70px] h-auto flex w-[450px]  origin-top font-bold hover:text-[#911515] drop-shadow-lg'>
          
          <Typewriter
              options={{
                strings: ["   Welcome to robis-RCS...    "],
                autoStart: true,
                loop: true,
              }}
          />
          
          </p>          
          <img src={Mlogo} alt="" className='absolute w-[50px] top-[10px] right-[10px] drop-shadow-lg' /> 
          <img src={GIF} alt="" className='absolute w-[850px] bottom-[20px] left-[-50px] drop-shadow-2xl' />          
          <Slideshow />
      </div>
      </div>     
    </div>
    
  )
}
export default Welcome