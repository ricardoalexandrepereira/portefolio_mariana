import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion";
import {armazem, cocacola, humana, santander, school, tiktok} from "../../assets/index"




const Experience = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} 
    className="w-full flex flex-col lgl:flex-row gap-4">

      <div className="flex flex-col ">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
        <h2 className="text-2xl md:text-4xl font-bold">National</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative">
        <ResumeCard 
        title="Bytance - TIKTOK"
        subTitle="Content moderator"
        result="2022 - 2023"
        des="my job consists of moderating the good practices of the platform, managing inappropriate content from users."
        src={tiktok}
        />
        <ResumeCard 
         title="Humana ONG-Head of Logistic"
         subTitle="General distribution manager"
         result="2019 - 2022"
         des="responsible for the general administration of the logistics department 
         in Portugal, Cordination for a team with 20 employees, Supervise the reception of stocks,
         Carry out inventories, human resources."
          src={humana}
        />
        <ResumeCard 
         title="Santander Finance"
         subTitle="approve credit"
         result="2018 - 2019"
         des="was part of the Santander credit approval team."
         src={santander}
         />
      </div>
      </div>

      <div className="flex flex-col w-[120%]">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2010 - 2018</p>
        <h2 className="text-4xl font-bold">International</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 relative">
        <ResumeCard 
        title="Coca-Cola Sul América ARG"
        subTitle="General distribution manager"
        result="2013 - 2018"
        des="Responsible for distribution and stock administration in three cities in Argentina, managed with SAP ERP, AS400 "
        src={cocacola}
        />
        <ResumeCard 
         title="Mendocar ARG"
         subTitle="Distribution manager"
         result="2012 - 2013"
         des="Team leader, Cargo coordination, itinerary planning, fleet of 15 drivers "
         src={armazem}
         />
        <ResumeCard 
         title="Tutor"
         subTitle="School preparer ARG"
         result="2010 - 2012"
         des="I tutored children from 8 -10 years old, teaching principles and school tasks."
         src={school}
         />
      </div>
      </div>

      </motion.div>
  )
}

export default Experience