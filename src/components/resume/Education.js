import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion";
import {desktop} from "../../assets/index"

const Education = () => {
  return (
    
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    className="w-full flex flex-col lgl:flex-row gap-4">
        
      <div className="flex flex-col">
      <div className="py-12 font-titleFont">
       {/*  <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative">
        <ResumeCard 
        title="Marketing Digital: community manager, content
        manager, ads social Google"
        subTitle="University Nacional de Cuyo. Mendoza, Arg."
        result="2022"
        des="Higher education is tertiary education leading to award of an academic degree. 
        Higher education"
        src={desktop}
        />
        <ResumeCard 
         title="University degree in logistic and transport"
         subTitle="University Nacional de Cuyo. Mendoza, Arg."
         result="2009-2012"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education"
         src={desktop}
         />
        <ResumeCard 
         title="Bachelor‘s degree in political science and public administration"
         subTitle="University Nacional de Cuyo. Mendoza, Arg."
         result="2007-2009"
         des="Higher education is tertiary education leading to award of an academic degree. 
         Higher education, also called post-secondary"
         src={desktop}
         />
      </div>
      </div>

      <div className="flex flex-col">
      <div className="py-12 font-titleFont">
        {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p> */}
        <h2 className="text-2xl md:text-4xl font-bold">International</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard 
        title="Mindfullnes and emotional management"
        subTitle="European Institute of positive Psychology."
        result="2023"
        des="SPAIN"
        src={desktop}
        />
        <ResumeCard 
         title="advanced life support course."
         subTitle="alcochete firefighters"
         result="2022"
         des="PORTUGAL"
         src={desktop}
         />
        <ResumeCard 
         title="Development of the entrepreneurial profile and business model"
         subTitle="ITU"
         result="2023"
         des="PORTUGAL"
         src={desktop}
         />
      </div>
      </div>
      
      </motion.div>
      
  )
}

export default Education