import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {AiFillAppstore} from 'react-icons/ai';
import {FaMobile, FaGlobe, FaBars} from 'react-icons/fa';
import {SiProgress, SiAntdesign} from 'react-icons/si';


const Features = () => {
  return (
    <section id='features' className="w-full py-10 border-b-[1px] border-b-black">
   
   <Title title="Features" des="what I do"/>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap:-6 xl:gap-20'>

      <Card title="Business Strategy" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaBars/>}/>
      <Card title="App development" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<AiFillAppstore/>}/>
      <Card title="SEO Optimization" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<SiProgress/>}/>
      <Card title="Mobile Development" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaMobile/>}/>
      <Card title="UX Design" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<SiAntdesign/>}/>
      <Card title="Hosting Websites" des="loremfj sfgndf ge g edf grt hrthryyhr rthrth rytuujrdee" icon={<FaGlobe/>}/>
   
   </div>
   </section>
  )
}

export default Features