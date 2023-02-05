import React from 'react'
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    className="flex gap-12">

  <div className="flex flex-col w-full">

    <div className="py-12 font-titleFont">
      <p className="text-sm text-designColor tracking-[4px]">Features</p>
      <h2 className="text-4xl font-bold">Design Skills</h2>
    </div>
    <div className="mt-14 w-full h-[1000px] flex flex-col gap-10">

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Figma</p>
        <span class="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
          <motion.span 
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>65%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[35%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>35%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[35%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>35%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
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

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
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
    </div>
  </div>

    <div className="flex flex-col w-full">
    <div className="py-12 font-titleFont">
      <p className="text-sm text-designColor tracking-[4px]">Features</p>
      <h2 className="text-4xl font-bold">Development Skills</h2>
    </div>
    <div className="mt-14 w-full h-[1000px] flex flex-col gap-10">
      
    <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Figma</p>
        <span class="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
          <motion.span 
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>65%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[35%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>35%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
        <span class="w-full h-2 bgOpacity flex rounded-md mt-2">
          <motion.span
           initial={{ x: "-100%", opacity: 0 }}
           animate={{ x:"0%", opacity: 1}}
           transition={{ duration: 0.8, delay:0.5 }} 
           class="w-[35%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 flex rounded-md relative">
            <span className='absolute -top-7 right-0'>35%</span>
          </motion.span>
        </span>
      </div>

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
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

      <div className='overflow-x-hidden'>
        <p className='text-sm uppercase font-medium'>Photoshop</p>
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
    </div>
    </div>

    </motion.div>
  )
}

export default Skills