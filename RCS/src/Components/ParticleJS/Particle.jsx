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
                options= {particlesConfig}/>
        </div>
        </>
  )
}

export default Particle