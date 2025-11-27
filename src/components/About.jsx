import React from 'react'
import { HiUserCircle } from "react-icons/hi";

function About() {

  return (
    <div>
        <section id='about' className='w-full bg-black '>
        <div className='md:w-1/2 w-full flex text-white gap-3 pl-9'>
        <span><HiUserCircle className='text-3xl text-[#dbf52f]'/></span>
       <h2 className='text-2xl font-semibold text-[#dbf52f]'>About me :</h2> 
        </div>

        <div className='md:flex bg-black'>
            <div className='md:w-1/2 w-full p-9 text-white flex flex-col'>
            <p>Hello! My name is Shakiba Qassemi and I enjoy creating things on the internet. I have been interested in front end development for a few years now and this interest continues and I am looking to learn more.</p>
            <div>
              <img className='w-[480px] h-[250px]' src='/images/html.png'/>
            </div>
            </div>
            <div className='md:w-1/2 w-full p-8 md:pl-30'>
            <h2 className='text-black text-[20px]  mb-6 bg-[#dbf52f] w-[100%]'>Here are a few technologies I’ve been working with:</h2>
            <ul className='text-white list-disc pl-9 *:mt-2'>
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Mui</li>
                <li>React</li>
                <li>Next JS</li>
               
            </ul>
            </div>
        </div>

        
        </section>

    </div>
  )
}

export default About