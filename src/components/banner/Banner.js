import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {marianaportefolio} from '../../assets/index';
import { motion } from "framer-motion"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Banner = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  const [text] = useTypewriter({
    words: ["Logistics expert.","Digital Marketing Specialist.", "Writter."],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  });

  return (
   <section id='home' className="w-full py-1 pb-20 items-center border-b-[1px] flex flex-col lgl:flex-row xl:gap-0 font-titleFont border-b-black">

    <div className='w-full lgl:w-1/2 flex flex-col gap-10'>

    <Particles
            className='w-[100%] h-[120%] absolute -z-9 top-0 left-0'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen:false,
              
                /* background: {
                   color: {
                        value: "#0d47a1",
                    }, 
                }, */
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
                            distance:400,
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ff014f",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
      <motion.div
      initial={{ opacity: 0, x:-100 }}
      whileInView={{ opacity: 1, x:0 }}
      transition={{ 
        duration: 1, 
        x:{type:"spring", stiffness: 60},
        opacity:{duration:1},
        ease:"easeIn"  
      }}
       className='flex flex-col gap-5 z-10'>
        <h4 className="text-lg font-normal"> Hi There!</h4>
        <h1 className='text-6xl font-bold text-white'>I´m 
          <span className='text-designColor capitalize'> Mariana</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor 
          cursorBlinking= "false"
          cursorStyle="|"
          cursorColor='#ff014f'/>
          </h2>
          <p className='text-base font-bodyFont leading-6 tracking-wide'>
          I am a curious, creative person, I
          am optimistic, I love learning
          new things and I am aware that
          when I leave my comfort zone I
          grow.
          </p>
      </motion.div>

      <div>
        <h2 className='text-base uppercase font-titleFont mb-4 z-10'>Find me</h2>
        <div className="flex gap-4 z-10 absolute">

          <motion.span 
          initial={{ opacity: 0, y:90 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ 
            delay:.2,
            duration: .2, 
            y:{type:"spring", stiffness: 100},
            opacity:{duration:.5},
            ease:"easeIn"  
          }}
          className="bannerIcon z-10">
            <a href="https://facebook.com/mariana.piazza.37" rel="noreferrer" target="_blank"><span><FaFacebookF /></span></a>
          </motion.span>

          <motion.span
          initial={{ opacity: 0, y:90 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ 
            delay:.4,
            duration: .2, 
            y:{type:"spring", stiffness: 100},
            opacity:{duration:.5},
            ease:"easeIn"  
          }} 
          className="bannerIcon z-10">
            <a href="https://linkedin.com/in/mariana-ivon-piazza-4b852475" rel="noreferrer" target="_blank"><span><FaLinkedinIn /></span></a> 
          </motion.span>

          <motion.span
          initial={{ opacity: 0, y:90 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ 
            delay:.6,
            duration: .2, 
            y:{type:"spring", stiffness: 100},
            opacity:{duration:.5},
            ease:"easeIn"  
          }} 
          className="bannerIcon z-10">
             <a href="https://instagram.com/marian_piazza?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank"><span><FaInstagram /></span></a> 
          </motion.span>
        </div>
      </div>
    </div>

    <motion.div 
    initial={{ opacity: 0, x:100 }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ 
      duration: 1, 
      x:{type:"spring", stiffness: 60},
      opacity:{duration:1},
      ease:"easeIn"  
    }}
    className='w-full lgl:w-1/2 flex justify-center items-center relative'>

      <img className='w-[260px] h-[400px] mt-20 lgl:w-[410px] lgl:h-[600px] z-10' src={marianaportefolio} alt="mari" />
      <div className='absolute w-[350px] bottom-0 h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne
      flex justify-center align-center'></div>
    </motion.div>
    
   </section>
  )
}

export default Banner