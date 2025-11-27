import React from 'react'
import { BiSolidConversation } from "react-icons/bi";
import { SiTelegram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div className='md:flex'>
        <section id='contact' className='bg-black mt-32 md:w-1/2 w-full'>
        <div className='md:w-1/2 w-full flex text-white gap-3 pl-9 '>
         <span><BiSolidConversation  className='text-3xl text-[#dbf52f]'/></span>
        <h2 className='text-2xl font-semibold text-[#dbf52f]'>connect with me :</h2> 
        </div>


        <div className='flex pl-9 gap-3 mt-7'>
            <span><FaGithub className='text-2xl text-white'/></span>
            <h2 className='text-xl font-semibold text-white'><a href='https://github.com/Shakiba-Qassemi-dev'>github</a></h2>
        </div>

        <div className='flex pl-9 gap-3 mt-4'>
            <span><FaLinkedin className='text-2xl text-white'/></span>
            <h2 className='text-xl font-semibold text-white'><a href='https://www.linkedin.com/in/shakiba-qassemi-a87487350/'>linkdin</a></h2>
        </div>

        <div className='flex pl-9 gap-3 mt-4'>
            <span><MdEmail className='text-2xl text-white'/></span>
            <h2 className='text-xl font-semibold text-white'><a href='mailto:shakibaqassemi@gmail.com'>Email</a></h2>
        </div>
        <div className='flex pl-9 gap-3 mt-3'>
            <span><AiFillInstagram className='text-2xl text-white'/></span>
            <h2 className='text-xl font-semibold text-white'><a href='https://www.instagram.com/shakiba.qassemi.dev'>Instagram</a></h2>
        </div>
        </section>


     <div className='md:w-1/2 w-full md:mt-32 mt-10 '>
    <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border border-[#dbf52f] rounded w-full md:w-[50%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
        Email
      </label>
      <input className="shadow appearance-none border border-[#dbf52f] rounded w-full md:w-[50%] py-2 px-3 text-white mb-3 leading-tight " id="password" type="text" />
      <p className="text-red-500 text-xs italic">Please choose an email.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
      </div>
    </form>
        </div>
    </div>
  )
}

export default Contact