import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {Mari} from '../../assets/index'


const Banner = () => {

  const [text] = useTypewriter({
    words: ["Professional Coder.","Full Stack Developer.", "UI Designer"],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  });

  return (
   <section id='home' className="w-full py-10 pb-20 items-center border-b-[1px] flex font-titleFont border-b-black">
    <div className='w-1/2 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae voluptatem culpa? Itaque cupiditate, 
            suscipit ullam iste dignissimos voluptatum libero.
          </p>
      </div>
      <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>Find me</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>

    <div className='w-1/2 flex justify-center items-center relative'>
      <img className='w-[450px] h-[600px] z-10' src={Mari} alt="mari" />
      <div className='absolute w-[500px] bottom-0 h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne
      flex justify-center align-center'></div>
    </div>
    
   </section>
  )
}

export default Banner