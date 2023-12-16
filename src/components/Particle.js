import React from "react";
import Particles from "react-tsparticles";

function Particle({ scrollY }) {
  const particlesParams = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 3000,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "left",
        speed: scrollY * 1, // Adjust the speed based on scroll
      },
      size: {
        value: 2.5,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1, // Adjust the opacity based on scroll
        },
      },     
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };
  

  return <Particles id="tsparticles" params={particlesParams} />;
}

export default Particle;