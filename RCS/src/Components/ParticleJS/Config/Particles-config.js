const particlesConfig = 
{
    background: {
        color: {
            value: "",
        }
    },

    fullScreen: {
        enable: false,
        zIndex: -1,
    },
   
    fpsLimit: 45,
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
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: false,
                area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 1,
        },

        style: {
            position: "absolute"
        },
        shape: {
         "type": "polygon",
         "stroke": {
           "width": 1,
           "color": "#eee"
         },
         "polygon": {
           "nb_sides": 8
         },
         "image": {
           "src": "img/github.svg",
           "width": 200,
           "height": 200
         }
       },
        size: {
            random: true,
            value: 50,

        },
    },
    detectRetina: true,
}
  
  export default particlesConfig;