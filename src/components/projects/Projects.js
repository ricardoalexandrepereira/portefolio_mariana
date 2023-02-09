
import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import { ProjectOne } from '../../assets/index'

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        
        <Title title="Visit my Portefolio and keep your feedback"
        des="My Projects"/>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>

            <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
            <ProjectsCard title="E-Commerce Website" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
            <ProjectsCard title="Chatting app" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
            <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
            <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
            <ProjectsCard title="Social Media Clone" des="lorem fkkjf k kksd, ijsnffv,u un jnnjnnkmdssv" src={ProjectOne}/>
        </div>
        
    </section>
  )
}

export default Projects