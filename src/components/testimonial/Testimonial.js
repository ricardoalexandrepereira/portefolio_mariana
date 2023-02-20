import React from 'react'
import {useState} from "react"
import Title from '../layouts/Title'
import Slider from "react-slick";
import { motion } from "framer-motion"
import {RiStarFill} from "react-icons/ri"
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'
import {mee, quote, julian, andrew} from "../../assets"


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400
      flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowRight />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400
      flex justify-center items-center absolute top-0 right-40 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {


  const [dotActive, setDotActive] = useState (0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SamplePrevArrow />,
        beforeChange:(prev, next) =>{
          setDotActive(next);
        },
        appendDots: dots => (
          <div
            style={{
              
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{display:"flex",
                        gap:"25px",
                        justifyContent:"center",
                        borderRadius:"center",
                        padding:"10px" }}> 
                        {dots} 
            </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i === dotActive ? {
                width: "12px",
                height:"12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor:"pointer",
              }:{
                width: "12px",
              height:"12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor:"pointer",
              }
            }
          >
            
          </div>
        )
      };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      
      
      <Title title="WHAT CLIENTS SAY" des="Testimonial" />

      <motion.div 
      initial={{ opacity: 0, y:100 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ 
        delay:.2,
        duration: 1, 
        x:{type:"spring", stiffness: 100},
        opacity:{duration:3},
        ease:"easeInOut"  
      }}
      className='max-w-6xl mx-auto'>

        
        
        <Slider {...settings}>

          <div className='w-full'>

<div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>

    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
    flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center shadow-shadowOne'>
        <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={mee} alt="testimonial1" />
        <div className='w-full flex flex-col justify-end'>
            <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Tik-Tok</p>
            <h3 className='text-2xl font-bold'>Ricardo Pereira</h3>
            <p className='text-base tracking-wide text-gray-500'>Web Developer</p>
        </div>
    </div>

    <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>

        <img className='w-[20%]' src={quote} alt="quoteimage" />
        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                        flex flex-col justify-center gap-8 p-8'>
                <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-black'>
                    <div>
                        <h3 className='text-xl lgl:text2xl font-medium tracking-wide text-center'> Professionalism </h3>
                        <p className='text-base text-gray-400 mt-3 text-center pb-2'> via Upwork , Mar 4, 2022</p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                </div>

                <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>It was a pleasure working with you, you contributed a lot to what I was thinking for my project, I recognize your professionalism, and I thank you for your promptness.</p>
        </div>
    </div>

</div>

          </div>
          <div className='w-full'>

<div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>

    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
    flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center shadow-shadowOne'>
        <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={julian} alt="testimonial2" />
        <div className='w-full flex flex-col justify-end'>
            <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Coca-cola</p>
            <h3 className='text-2xl font-bold'>Julian</h3>
            <p className='text-base tracking-wide text-gray-500'>Operation Officer</p>
        </div>
    </div>

    <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>

        <img className='w-[20%]' src={quote} alt="quoteimage" />
        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                        flex flex-col justify-center gap-8 p-8'>
                <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-black'>
                    <div>
                        <h3 className='text-xl lgl:text2xl font-medium tracking-wide'> from argentina with love!</h3>
                        <p className='text-base text-gray-400 mt-3 text-center pb-2'> via Upwork , Set 8, 2022</p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                </div>

                <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>You were my tutor, I thank you for the knowledge you passed on to me, and I hope you continue to be successful in what you do best, which is to lead.</p>
        </div>
    </div>

</div>

          </div>
          <div className='w-full'>

<div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>

    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
    flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center shadow-shadowOne'>
        <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={andrew} alt="testimonial1" />
        <div className='w-full flex flex-col justify-end'>
            <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Tik-Tok</p>
            <h3 className='text-2xl font-bold'>Andrew</h3>
            <p className='text-base tracking-wide text-gray-500'>HQ moderator</p>
        </div>
    </div>

    <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>

        <img className='w-[20%]' src={quote} alt="quoteimage" />
        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                        flex flex-col justify-center gap-8 p-8'>
                <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-black'>
                    <div>
                        <h3 className='text-xl lgl:text2xl font-medium tracking-wide'> Travel Mobile App Design</h3>
                        <p className='text-base text-gray-400 mt-3 text-center pb-2'> via Upwork , Aug 30, 2021</p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                </div>

                <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                thanks for your help, promoting the brand, I still trust you for the next project, outstanding professionalism on time.</p>
        </div>
    </div>

</div>

          </div>

         
          
        </Slider>
      </motion.div>
    </section>
  )
}

export default Testimonial