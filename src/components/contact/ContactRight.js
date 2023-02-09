import React, { useState } from 'react'


const ContactRight = () => {

    const [username, setUserName] = useState ("")
    const [phoneNumber, setPhoneNumber] = useState ("")
    const [email, setEmail] = useState ("")
    const [subject, setSubject] = useState ("")
    const [message, setMessage] = useState ("")
    const [errMsg, setErrMsg] = useState ("")
    const [successMsg, setSuccessMsg] = useState ("")

    //email validation
    const emailValidation = ()=>{
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }
    //email validation

    const handleSend=(e)=>{
        e.preventDefault()
        if(username === ""){
            setErrMsg("User Name is Required!")
            /* console.log("User Name is Required!") */
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
            /* console.log(username,phoneNumber,email,subject,message) */
        }
    }


  return (
    <div className='w-full h-full gap-8 shadow-shadowOne rounded-lg flex flex-col justify-between bg-gradient-to-r from-[#1e2024] py-10 p-8 to-[#23272b]'>
        <form className='w-full flex flex-col gap-6 py-10'>

            {
                errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-red-500 text-base animate-bounce'>{errMsg}</p>
            }
            {
                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-green-500 text-base animate-pulse'>{successMsg}</p>
                                 
            }



            <div className='w-full flex gap-4'>

                <div className='w-1/2 flex flex-col gap-2'>
                <p className='text-sm text-gray-400 tracking-wide uppercase'>Your Name</p>
                <input 
                onChange={(e)=>setUserName(e.target.value)} 
                value={username}
                className={`${errMsg === 'User Name is Required!' && "outline-designColor"} contactInput`} 
                type="text" />
                </div>

                <div className='w-1/2 flex flex-col gap-2'>
                <p className='text-sm text-gray-400 tracking-wide uppercase'>Phone number</p>
                <input 
                onChange={(e)=>setPhoneNumber(e.target.value)} 
                value={phoneNumber}
                className={`${errMsg === 'phone Number is Required!' && "outline-designColor"} contactInput`} 
                type="text" />
                </div>

            </div>
            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>Email</p>
                <input 
                onChange={(e)=>setEmail(e.target.value)} 
                value={email} 
                className={`${errMsg === 'email is Required!' && "outline-designColor"} contactInput`}  
                type="text" />
            </div>

            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>Subject</p>
                <input 
                onChange={(e)=>setSubject(e.target.value)} 
                value={subject} 
                className={`${errMsg === 'subject is Required!' && "outline-designColor"} contactInput`} 
                type="text" />
            </div>

            <div className='w-full flex flex-col gap-2'>
            <p className='text-sm text-gray-400 tracking-wide uppercase'>message</p>
                <textarea 
                onChange={(e)=>setMessage(e.target.value)} 
                value={message} 
                className={`${errMsg === 'Message is Required!' && "outline-designColor"} contactTextArea`} 
                cols="30" 
                rows="8" 
                type="text" >

                </textarea>
            </div>
            <div className='w-full'>
                <button onClick={handleSend} className='w-full h-12 rounded-lg  bg-[#191b1e] text-base text-gray-400 tracking-wider uppercase hover:text-lightText duration-300 hover:border-[1px] hover:border-designColor
                border-transparent'>Send</button>
            </div>
        </form>

           {   
                errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-red-500 text-base animate-bounce'>{errMsg}</p>
            }
            {
                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                text-center shadow-shadowOne text-1xl text-green-500 text-base animate-pulse'>{successMsg}</p>
            }
    </div>
  )
}

export default ContactRight