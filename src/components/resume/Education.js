import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion";

const Education = () => {
  return (
    
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    className="w-full flex flex-col lgl:flex-row gap-4">
        
      <div className="flex flex-col">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="BSc in Computer Science"
        subTitle="kingsta Secondary School (2006 - 2009)"
        result="5.00/5"
        des="Higher education is tertiary education leading to award of an academic degree. 
        Higher education, also called post-secondary"
        />
        <ResumeCard 
         title="Science & Information"
         subTitle="kingsta Secondary School (2001 - 2005)"
         result="5.00/5"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education, also called post-secondary"
         />
        <ResumeCard 
         title="Secondary School Education"
         subTitle="kingsta Secondary School (1998 - 2000)"
         result="5.00/5"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education, also called post-secondary"
         />
      </div>
      </div>

      <div className="flex flex-col">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p>
        <h2 className="text-2xl md:text-4xl font-bold">Job Experience</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="other"
        subTitle="kingsta Secondary School (2006 - 2009)"
        result="5.00/5"
        des="Higher education is tertiary education leading to award of an academic degree. 
        Higher education, also called post-secondary"
        />
        <ResumeCard 
         title="other 2"
         subTitle="kingsta Secondary School (2001 - 2005)"
         result="5.00/5"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education, also called post-secondary"
         />
        <ResumeCard 
         title="Secondary School Education"
         subTitle="kingsta Secondary School (1998 - 2000)"
         result="5.00/5"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education, also called post-secondary"
         />
      </div>
      </div>
      
      </motion.div>
      
  )
}

export default Education