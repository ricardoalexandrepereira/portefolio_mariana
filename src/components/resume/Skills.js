import React from 'react'
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    className="w-full h-auto flex flex-col lgl:flex-row lgl:gap-20">

  <div className="w-full h-auto lgl:w-1/2">

    <div className="py-12 font-titleFont">
      <p className="text-sm text-designColor tracking-[4px]">Features</p>
      <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
    </div>
    <div className="mt-14 w-full flex flex-col gap-10">

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Microsoft office</p>
        <span class="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
          <motion.span 
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Canvas</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>CapCut</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>50%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>SAP erp</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>70%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>MidJourney</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>50%</span>
          </motion.span>
        </span>
      </div>
    </div>
  </div>

    <div className="w-full h-auto lgl:w-1/2">
    <div className="py-12 font-titleFont">
      <p className="text-sm text-designColor tracking-[4px]">Features</p>
      <h2 className="text-3xl md:text-4xl font-bold">Soft Skills</h2>
    </div>
    <div className="mt-14 w-full flex flex-col gap-10">
      
    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Creativity</p>
        <span class="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
          <motion.span 
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Leadership</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[98%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>98%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>English</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>60%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>commitment</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>100%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Resilience</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>80%</span>
          </motion.span>
        </span>
      </div>
    </div>
    </div>

    </motion.div>
  )
}

export default Skills