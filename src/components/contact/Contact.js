import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';



const Contact = () => {
  return (
    <section id="contacts" className=" w-full py-20 border-b-[1px] border-b-black">
      
    <Title title="CONTACT" des="Contact Me" />

    <div className='w-full'>

            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>

                <ContactLeft />

                <ContactRight />

            </div>

          </div>
</section>
  )
}

export default Contact