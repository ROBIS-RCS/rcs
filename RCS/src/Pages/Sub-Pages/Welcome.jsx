import Typewriter from 'typewriter-effect';
import Mlogo from '../../assets/Logo/redlogo.png'
import welcomeMotherson from "../../assets/images/RCS.png"
import Particle from '../../Components/ParticleJS/Particle';
import Slideshow from '../../Components/Slideshow/Slideshow.jsx';
import GIF from "../../assets/GIF/Designer.png"
import Marquee from "react-fast-marquee";

//images for Marquee
import image1 from "../../assets/images/Marquee/ASRS.png"
import image2 from "../../assets/images/Marquee/BTP.png"
import image3 from "../../assets/images/Marquee/CB.png"
import image4 from "../../assets/images/Marquee/Compactagv.png"
import image5 from "../../assets/images/Marquee/counteramr.png"
import image6 from "../../assets/images/Marquee/forkover.png"
import image7 from "../../assets/images/Marquee/Pallet.png"
import image8 from "../../assets/images/Marquee/RTP.png"

const MarqueeImages = [
  {
    text: "ASRS Bin Shuttle",
    img: image1
  },
  {
    text: "Pallet Truck AMR",
    img: image2
  },
  {
    text: "Counterbalance Stacker AMR",
    img: image3
  },
  {
    text: "Compact 360 AGV",
    img: image4
  },
  
  {
    text: "Fork over AMR",
    img: image6
  },
  {
    text: "Compact 360 AMR ",
    img: image5
  },
  {
    text: "Bin To Person AGV / AMR",
    img: image7
  },
  {
    text: "Rack To Person AGV",
    img: image8
  },
]




const Welcome = () => {
  return (
    <div className='w-full h-full realtive'>
      <div className='absolute top-0 left-[350px]'>
          <Particle/>
        </div>
      <div className='w-full h-full'>
         <div className="w-full h-full flex flex-col justify-between p-10 relative"> 
        
          <p className='text-[340%] h-auto flex w-[450px]  origin-top font-bold hover:text-[#911515] drop-shadow-lg'>
          
          
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('  Welcome to robis-RCS...  ')
          .pauseFor(2500)
          .start();
            }}
          />
          </p>          
          <img src={Mlogo} alt="" className='absolute w-[50px] top-[10px] right-[10px] drop-shadow-lg' /> 
          <div className='w-full h-[300px] flex justify-between items-center'>
            <div className='w-[50%] h-full flex justify-end items-end relative'>
              <img src={GIF} alt="Storage" className='object-contain absolute left-[-60px] top-10 hover:drop-shadow-xl' />
            </div>
            <div className='w-[60%] h-[340px] flex flex-col items-center justify-center p-2'>
              <Marquee pauseOnHover={false} speed={50}  >
                {
                    MarqueeImages.map((marquee, key)=> {
                      return(
                        <div className='w-[320px] h-[320px] mx-2 flex items-center justify-center p-2 rounded-20px hover:shadow-xl hover:text-[#911515] duration-200 relative object-contain rounded-2xl overflow-hidden'>
                          <img src={marquee.img} alt="" className='w-[290px] h-[290px] object-contain overflow-hidden rounded-2xl hover:drop-shadow-xl'/>
                          <p className='absolute bottom-4 left-5 font-semibold px-4 py-1 hover:bg-white bg-opacity-55 rounded-full'>{marquee.text}</p>
                        </div>
                      )
                    })
                }
              </Marquee>
            </div>
          </div>

      </div>
      </div>     
    </div>
    
  )
}
export default Welcome