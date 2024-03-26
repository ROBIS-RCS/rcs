import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particlesConfig from "./Config/Particles-config"

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <>
        <div className=''>
            <Particles
               id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={{
                   background: {
                       color: {
                           value: "#0d47a1",
                       }
                   },

                   fullScreen: {
                       enable: true,
                       zIndex: -1,
                   },
                  
                   fpsLimit: 60,
                   interactivity: {
                       events: {
                           onClick: {
                               enable: true,
                               mode: "push",
                           },
                           onHover: {
                               enable: true,
                               mode: "repulse",
                           },
                           resize: true,
                       },

                       modes: {
                           push: {
                               quantity: 1,
                           },
                           repulse: {
                               distance: 100,
                               duration: 0.04,
                           },
                       },
                   },
                   particles: {
                       color: {
                           value: "#fff",
                       },

                       links: {
                           color: "#ffffff",
                           distance: 15,
                           enable: true,
                           opacity: 0.1,

                       },
                       collisions: {
                           enable: false,
                       },
                       move: {
                           direction: "none",
                           enable: true,
                           outModes: {
                               default: "bounce",
                           },
                           random: false,
                           speed: 0.5,
                           straight: false,
                       },
                       number: {
                           density: {
                               enable: true,
                               area: 800,
                           },
                           value: 30,
                       },
                       opacity: {
                           value: 2,
                       },

                       style: {
                           position: "absolute"
                       },
                       shape: {
                           type: "images",
                           "images":
                               [{
                                   "src": 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/56314216.png',

                               }, {
                                   "src": "https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/56597539.png"
                               },
                               {
                                   "src": "https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/4042942.png"
                               },
                               {
                                   "src": ""
                               }

                               ]
                       },
                       size: {
                           random: true,
                           value: 50,

                       },
                   },
                   detectRetina: true,
               }}/>
        </div>
        </>
  )
}

export default Particle