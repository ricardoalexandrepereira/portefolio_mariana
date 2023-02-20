import React from 'react'
import {contact} from '../../assets'
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import { motion } from "framer-motion"

const ContactLeft = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x:-100 }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ 
      delay:.2,
      duration: 1, 
      x:{type:"spring", stiffness: 100},
      opacity:{duration:3},
      ease:"easeInOut"  
    }} 
    className='w-full h-full bg-gradient-to-r from-[#1e2024] rounded-lg p-8 to-[#23272b] shadow-shadowOne flex flex-col gap-8'>
                    <img className='w-full h-64 object-cover rounded-lg' src={contact} alt="contact" />
                        <div className='flex flex-col gap-2  pt-4'>
                            <h3 className='text-3xl font-bold text-white'>Mariana Piazza</h3>
                            <p className='text-lg font-normal text-gray-400'>Marketing, Logistics</p>
                            <p className='text-lg font-normal text-gray-400 tracking-wide'>I put my knowledge at your disposal, in many areas, in order to make you and 
                            your business grow. Don't hesitate to contact me to learn more.</p><br></br>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Phone: <span className='text-lightText'>+351 917 326 624</span></p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Email: <span className='text-lightText'> marianapiazza01@gmail.com</span></p>
                            
                        </div>
                        <div>
                            <h2 className='text-base uppercase font-titleFont mb-4 mt-20 '>Find me in:</h2>
                            <div className='flex flex-col gap-4 lg:flex lg:flex-row'>

                              <div className='flex gap-2'>
                              <a href="https://facebook.com/mariana.piazza.37" rel="noreferrer" target="_blank"><span className='bannerIcon'><FaFacebookF /></span></a> 
                               <a href="https://linkedin.com/in/mariana-ivon-piazza-4b852475" rel="noreferrer" target="_blank"><span className='bannerIcon'><FaLinkedinIn /></span></a> 
                               <a href="https://instagram.com/marian_piazza?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank"><span className='bannerIcon'><FaInstagram /></span></a> 
                              </div>

                               <div className='flex flex-col'>
                                <a href="Cv Mariana Piazza.pdf" download="Cv Mariana Piazza.pdf" target="_blank"><button className='bannerIcon text-center text-sm font-titleFont w-[200px] px-20'>DOWNLOAD CV</button></a> 
                               </div>
                            </div>
                        </div>
                </motion.div>

  )
}

export default ContactLeft