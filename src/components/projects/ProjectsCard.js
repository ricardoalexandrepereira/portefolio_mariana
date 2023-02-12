import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa";

const ProjectsCard = ({title, des, src}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor
    to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group relative">
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="src" />
        </div>
        <div className='w-full mt-5 flex flex-col'>
            <div>
            <div className='flex items-center justify-between'>
                <h3 className='text-base uppercase text-designColor font-normal'>{title}</h3>
                <div className='flex gap-2'>
                    <span className='text-sm xl:text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'>
                        <BsGithub />
                    </span>
                    <span className='text-sm xl:text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'>
                        <FaGlobe />
                    </span>
                </div>
           

               

            
            </div>
             <p>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard