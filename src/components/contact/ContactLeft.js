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
                            <p className='text-lg font-normal text-gray-400'>Digital Marketing</p>
                            <p className='text-lg font-normal text-gray-400 tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Eum veniam aut quos nemo adipisci sit atque vel magni, nihil ea?</p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Phone: <span className='text-lightText'>+351 556 3445</span></p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Email: <span className='text-lightText'> marianapiazza@hotmail.com </span></p>
                            <p className='text-base text-gray-400 flex items-center gap-2'>
                                Phone: <span className='text-lightText'>+351 556 3445</span></p>
                        </div>
                        <div>
                            <h2 className='text-base uppercase font-titleFont mb-4 mt-20 '>Find me in:</h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'><FaFacebookF /></span>
                                <span className='bannerIcon'><FaLinkedinIn /></span>
                                <span className='bannerIcon'><FaInstagram /></span>
                            </div>
                        </div>
                </motion.div>

  )
}

export default ContactLeft