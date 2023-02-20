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
        <Card title="Business Strategy" des="I recently launched my brand 'digital soul' where I promote my marketing services, for companies that need a boost in their marketing campaign." icon={<FaBars/>}/>
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
        <Card title="Logistics" des="professional in logistics since 2011 from the university of cuyo, i plan supply chains, and manage stocks like no one else." icon={<AiFillAppstore/>}/>
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
        <Card title="Google Ads" des="I help your company, sell products or services and increase awareness and traffic to your Website." icon={<SiProgress/>}/>
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
        <Card title="Writter" des="I write children's stories and promote my work on AMAZON, at the moment I have just released my second book 'Abrazando Muenstros'." icon={<FaMobile/>}/>
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
        <Card title="Support" des="I help you remotely to apply your ideas in Digital Marketing." icon={<SiAntdesign/>}/>
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
        <Card title="Websites" des="I develop your idea, and turn it into a market brand, through your website entirely developed by 'Digital soul'." icon={<FaGlobe/>}/>
      </motion.div>
   
   </div>
   </section>
  )
}

export default Features