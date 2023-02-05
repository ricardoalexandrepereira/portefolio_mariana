import React from 'react'
import {useState} from "react"
import Title from '../layouts/Title'
import Slider from "react-slick";
import {RiStarFill} from "react-icons/ri"
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'
import {marimari, mee, quote} from "../../assets"

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

      <div className='max-w-6xl mx-auto'>
        
        <Slider {...settings}>
          <div className='w-full'>

            <div className='w-full h-[500px] flex justify-between'>

                <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
                flex flex-col gap-8 justify-center shadow-shadowOne'>
                    <img className='h-72 rounded-lg object-cover' src={mee} alt="testimonial1" />
                    <div>
                        <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Apple</p>
                        <h3 className='text-2xl font-bold'>Juliet MacNamara</h3>
                        <p className='text-base tracking-wide text-gray-500'>Operation Officer</p>
                    </div>
                </div>

                <div className='w-[60%] h-full flex flex-col justify-between'>

                    <img className='w-[20%]' src={quote} alt="quoteimage" />
                    <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                                    flex flex-col justify-center gap-8 p-8'>
                            <div className='flex justify-between items-center py-6 border-b-2 border-b-black'>
                                <div>
                                    <h3 className='text-2xl font-medium tracking-wide'> Travel Mobile App Design</h3>
                                    <p className='text-base text-gray-400 mt-3'> via Upwork , Mar 4, 2015 - Aug 30, 2021</p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                </div>
                            </div>

                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos 
                                culpa voluptates, doloremque corporis officia obcaecati 
                                accusantium vero suscipit alias voluptatem eveniet qui commodi cumque amet rerum eum 
                                consectetur non.</p>
                    </div>
                </div>

            </div>

          </div>
          <div className='w-full'>

            <div className='w-full h-[500px] flex justify-between'>

                <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
                flex flex-col gap-8 justify-center shadow-shadowOne'>
                    <img className='h-72 rounded-lg object-cover' src={marimari} alt="testimonial1" />
                    <div>
                        <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Apple</p>
                        <h3 className='text-2xl font-bold'>Juliet MacNamara</h3>
                        <p className='text-base tracking-wide text-gray-500'>Operation Officer</p>
                    </div>
                </div>

                <div className='w-[60%] h-full flex flex-col justify-between'>

                    <img className='w-[20%]' src={quote} alt="quoteimage" />
                    <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                                    flex flex-col justify-center gap-8 p-8'>
                            <div className='flex justify-between items-center py-6 border-b-2 border-b-black'>
                                <div>
                                    <h3 className='text-2xl font-medium tracking-wide'> Travel Mobile App Design</h3>
                                    <p className='text-base text-gray-400 mt-3'> via Upwork , Mar 4, 2015 - Aug 30, 2021</p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                </div>
                            </div>

                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos 
                                culpa voluptates, doloremque corporis officia obcaecati 
                                accusantium vero suscipit alias voluptatem eveniet qui commodi cumque amet rerum eum 
                                consectetur non.</p>
                    </div>
                </div>

            </div>

          </div>
          <div className='w-full'>

            <div className='w-full h-[500px] flex justify-between'>

                <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] 
                flex flex-col gap-8 justify-center shadow-shadowOne'>
                    <img className='h-72 rounded-lg object-cover' src={marimari} alt="testimonial1" />
                    <div>
                        <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Apple</p>
                        <h3 className='text-2xl font-bold'>Juliet MacNamara</h3>
                        <p className='text-base tracking-wide text-gray-500'>Operation Officer</p>
                    </div>
                </div>

                <div className='w-[60%] h-full flex flex-col justify-between'>

                    <img className='w-[20%]' src={quote} alt="quoteimage" />
                    <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                                    flex flex-col justify-center gap-8 p-8'>
                            <div className='flex justify-between items-center py-6 border-b-2 border-b-black'>
                                <div>
                                    <h3 className='text-2xl font-medium tracking-wide'> Travel Mobile App Design</h3>
                                    <p className='text-base text-gray-400 mt-3'> via Upwork , Mar 4, 2015 - Aug 30, 2021</p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                </div>
                            </div>

                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos 
                                culpa voluptates, doloremque corporis officia obcaecati 
                                accusantium vero suscipit alias voluptatem eveniet qui commodi cumque amet rerum eum 
                                consectetur non.</p>
                    </div>
                </div>

            </div>

          </div>

         
          
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial