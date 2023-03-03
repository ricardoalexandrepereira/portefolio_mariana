import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {AiFillAppstore} from 'react-icons/ai';
import {FaMobile, FaGlobe, FaBars} from 'react-icons/fa';
import {SiProgress, SiAntdesign} from 'react-icons/si';
import {motion} from "framer-motion"
import { capaLivro } from '../../assets';
import {Logo } from '../../assets';
import {AiFillAmazonSquare} from "react-icons/ai"

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
        <Card title="Business Strategy" img={Logo} des="I recently launched my brand 'digital soul' where I promote my marketing services, for companies that need a boost in their marketing campaign." icon={<FaBars/>}/>
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
        <Card title="Logistics" img={Logo} des="professional in logistics since 2011 from the university of cuyo, i plan supply chains, and manage stocks like no one else." icon={<AiFillAppstore/>}/>
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
        <Card title="Google Ads" img={Logo} des="I help your company, sell products or services and increase awareness and traffic to your Website." icon={<SiProgress/>}/>
      </motion.div>

      <motion.div className='cursor-pointer relative'
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ 
        delay:.8,
        duration: .5, 
        x:{type:"spring", stiffness: 100},
        opacity:{duration:2},
        ease:"easeInOut"  
      }}>
        <div  className="bannerIcon absolute z-20">
            <a className='absolute flex justify-center text-center font-xxl' href="https://www.amazon.es/Abrazando-Monstruos-inspirador-meditaci%C3%B3n-herramienta/dp/B0BW2GWGZJ/ref=sr_1_17?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2REHSEY79SCE&keywords=abrazando+monstruos&qid=1677861625&sprefix=abrazando+monstruos%2Caps%2C162&sr=8-17" 
            rel="noreferrer" target="_blank"><span className='w-full h-full'><AiFillAmazonSquare size={32} /></span></a>
        </div>
        
        <Card title="Writter" img={capaLivro} des="I write children's stories and promote my work on AMAZON, at the moment I have just released my second book 'Abrazando Muenstros'." icon={<FaMobile/>} />
        
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
        <Card title="Support" img={Logo} des="I help you remotely to apply your ideas in Digital Marketing." icon={<SiAntdesign/>}/>
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
        <Card title="Websites" img={Logo} des="I develop your idea, and turn it into a market brand, through your website entirely developed by 'Digital soul'." icon={<FaGlobe/>}/>
      </motion.div>
   
   </div>
   </section>
  )
}

export default Features