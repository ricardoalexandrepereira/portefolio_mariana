/* import React, { useState } from 'react' */
import { motion } from "framer-motion"

const ContactRight = () => {

    /* const [username, setUserName] = useState ("")
    const [phoneNumber, setPhoneNumber] = useState ("")
    const [email, setEmail] = useState ("")
    const [subject, setSubject] = useState ("")
    const [message, setMessage] = useState ("")
    const [errMsg, setErrMsg] = useState ("") */
    /* const [successMsg, setSuccessMsg] = useState ("") */

    //email validation
    /* const emailValidation = ()=>{
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    } */
    //email validation

/*     const handleSend=(e)=>{
        e.preventDefault()
        if(username === ""){
            setErrMsg("User Name is Required!")
             console.log("User Name is Required!") 
        }else if ( phoneNumber === ""){
            setErrMsg("phone Number is Required!")
        }else if (!emailValidation(email)){
            setErrMsg("email is Required!")
        }else if ( subject === ""){
            setErrMsg("subject is Required!")
        }else if ( message === ""){
            setErrMsg("Message is Required!")
        }else{
            setSuccessMsg(` Thank you dear ${username}, Your message has been sent Successfully!`);
            setErrMsg("");
            setUserName("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
             console.log(username,phoneNumber,email,subject,message) 
        }
    } */


  return (
    <motion.div
    initial={{ opacity: 0, x:100 }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ 
      delay:.2,
      duration: 1, 
      x:{type:"spring", stiffness: 100},
      opacity:{duration:3},
      ease:"easeInOut"  
    }}  
    className='w-full gap-8 shadow-shadowOne rounded-lg flex flex-col justify-between bg-gradient-to-r from-[#1e2024] py-10 p-8 to-[#23272b]'>
        
        <form 
        action="https://getform.io/f/50ce0c3a-8091-4a32-9862-62f4b4193e70" method="POST"
        encType='multipart/form-data' 
        className='w-full flex flex-col gap-6 py-10'>

        {/*     {
                errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-red-500 text-base animate-bounce'>{errMsg}</p>
            }
            {
                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-green-500 text-base animate-pulse'>{successMsg}</p>
                                 
            } */}



        
            <div className='w-full flex gap-4'>

                <div className='w-1/2 flex flex-col gap-2'>
                <p className='text-sm text-gray-400 tracking-wide uppercase'>Your Name</p>
                <input 
                /* onChange={(e)=>setUserName(e.target.value)} 
                value={username} */
                /* className={`${errMsg === 'User Name is Required!' && "outline-designColor"} contactInput`} */ 
                className="contactInput"
                type="text" 
                name='name'/>
                </div>

                <div className='w-1/2 flex flex-col gap-2'>
                <p className='text-sm text-gray-400 tracking-wide uppercase'>Phone number</p>
                <input 
               /*  onChange={(e)=>setPhoneNumber(e.target.value)} 
                value={phoneNumber} */
                /* className={`${errMsg === 'phone Number is Required!' && "outline-designColor"} contactInput`} */ 
                className="contactInput"
                type="text"
                name='phone' />
                </div>

            </div>
            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>Email</p>
                <input 
                /* onChange={(e)=>setEmail(e.target.value)} 
                value={email}  */
                /* className={`${errMsg === 'email is Required!' && "outline-designColor"} contactInput`} */  
                className="contactInput"
                type="email"
                name='email' />
            </div>

            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>Subject</p>
                <input 
                /* onChange={(e)=>setSubject(e.target.value)} 
                value={subject} */ 
                /* className={`${errMsg === 'subject is Required!' && "outline-designColor"} contactInput`} */ 
                className="contactInput"
                type="text"
                name='subject' />
            </div>

            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>message</p>
                <textarea 
                /* onChange={(e)=>setMessage(e.target.value)} 
                value={message} */ 
                /* className={`${errMsg === 'Message is Required!' && "outline-designColor"} w-auto h-auto contactTextArea`  } */ 
                cols="30" 
                rows="10" 
                type="text"
                name='message'
                className="contactInput w-auto h-auto" >
                        
                </textarea>
            </div>
            

            <div className='w-full'>
                <button /* onClick={handleSend} */type="submit" className='w-full h-12 rounded-lg  bg-[#191b1e] text-base text-gray-400 tracking-wider uppercase hover:text-lightText duration-300 hover:border-[1px] hover:border-designColor
                border-transparent'>Send</button>
            </div>
        </form>

          {/*  {   
                errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-red-500 text-base animate-bounce'>{errMsg}</p>
            }
            {
                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-green-500 text-base animate-pulse'>{successMsg}</p>
            } */}
    </motion.div>
  )
}

export default ContactRight