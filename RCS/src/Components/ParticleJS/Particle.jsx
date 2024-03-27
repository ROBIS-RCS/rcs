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
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                   },
                 background: {
                   color: {
                     value: "#",
                   },
                 },
                 fpsLimit: 120,
                 interactivity: {
                   events: {
                     onClick: {
                       enable: true,
                       detect_on: "window",
                       mode: "repulse",
                     },
                     onHover: {
                       enable: true,
                       mode: 'grab',
                     },
                   },
                   modes: {
                     push: {
                       distance: 200,
                       duration: 15,
                     },
                     grab: {
                       distance: 150,
                     },
                   },
                 },
                 particles: {
                   color: {
                     value: "#911515",
                   },
                   links: {
                     color: "#911515",
                     distance: 0,
                     enable: true,
                     opacity: 0.1,
                     width: 1,
                   },
                   move: {
                     direction: "none",
                     enable: true,
                     outModes: {
                       default: "bounce",
                     },
                     random: true,
                     speed: 1,
                     straight: false,
                   },
                   number: {
                     density: {
                       enable: true,
                       value_area: 1000
                     },
                     value: 150,
                   },
                   opacity: {
                     value: 1.0,
                   },
                   shape: {
                     type: "circle",
                   },
                   size: {
                     value: { min: 1, max: 3 },
                   },
                 },
                 detectRetina: true,
            }} />
        </div>
        </>
  )
}

export default Particle