const particlesConfig = 
{
    background: {
        color: {
            value: "",
        }
    },

    fullScreen: {
        enable: false,
        zIndex: 1,
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
         "type": "polygon",
         "stroke": {
           "width": 1,
           "color": "#911215"
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
            value: 100,

        },
    },
    detectRetina: true,
}
// {
//     "particles": {
//       "number": {
//         "value": 40,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#f5c4c4"
//       },
//       "shape": {
//         "type": "polygon",
//         "stroke": {
//           "width": 0,
//           "color": "#ff6666"
//         },
//         "polygon": {
//           "nb_sides": 4
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.2,
//         "random": true,
//         "anim": {
//           "enable": true,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 30,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ff6666",
//         "opacity": 0.4,
//         "width": 0
//       },
//       "move": {
//         "enable": true,
//         "speed": 4,
//         "direction": "right",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "window",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 2
//         },
//         "repulse": {
//           "distance": 150
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": true,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "10% 0%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }
  
  export default particlesConfig;