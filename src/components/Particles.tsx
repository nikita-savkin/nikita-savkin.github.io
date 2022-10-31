import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";

const ParticlesComp = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#232741",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 400,
          },
        },
        color: {
          value: "#ffffff",
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
      },
      retina_detect: true,
    };
  }, []);

  const particlesInit = useCallback((engine: Engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id="particles" init={particlesInit as any} options={options as any} />;
};

export default ParticlesComp;
