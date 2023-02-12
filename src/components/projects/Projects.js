
import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import { ProjectOne } from '../../assets/index'
import {motion} from "framer-motion"


const Projects = () => {

  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>


        
        <Title title="Visit my Portefolio and keep your feedback"
        des="My Projects"/>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 relative'>
       
              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:.2,
                 duration: .5, 
                 x:{type:"spring", stiffness: 100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:.4,
                 duration: .5, 
                 x:{type:"spring", stiffness: 100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:.6,
                 duration: .5, 
                 x:{type:"spring", stiffness: 100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:.8,
                 duration: .5, 
                 x:{type:"spring", stiffness: 100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:1,
                 duration: .5, 
                 x:{type:"spring", stiffness: 100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

              <motion.div
               initial={{ opacity: 0, y:50 }}
               whileInView={{ opacity: 1, y:0 }}
               transition={{ 
                 delay:1.2,
                 duration: .5, 
                 x:{type:"spring", stiffness:100},
                 opacity:{duration:2},
                 ease:"easeInOut"  
               }}>
                <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
              </motion.div>

            
        </div>
        
    </section>
  )
}

export default Projects