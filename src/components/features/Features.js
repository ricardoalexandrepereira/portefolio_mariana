import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {AiFillAppstore} from 'react-icons/ai';
import {FaMobile, FaGlobe, FaBars} from 'react-icons/fa';
import {SiProgress, SiAntdesign} from 'react-icons/si';
import {motion} from "framer-motion"

const Features = () => {
  return (
    <section id='features' className="w-full py-10 border-b-[1px] border-b-black relative">
   
   <Title title="Features" des="what I do"/>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:-6 xl:gap-20'>

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
        <Card title="Business Strategy" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaBars/>}/>
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
        <Card title="App development" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<AiFillAppstore/>}/>
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
        <Card title="SEO Optimization" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<SiProgress/>}/>
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
        <Card title="Mobile Development" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaMobile/>}/>
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
        <Card title="UX Design" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<SiAntdesign/>}/>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ 
        delay:1.2,
        duration: .5, 
        x:{type:"spring", stiffness: 100},
        opacity:{duration:2},
        ease:"easeInOut"  
      }}>
        <Card title="Hosting Websites" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaGlobe/>}/>
      </motion.div>
   
   </div>
   </section>
  )
}

export default Features