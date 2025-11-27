import React from 'react'

function Header() {
  return (
    <div>
         <header className='bg-black flex md:h-[60px]  w-full border-b-2 border-[#dbf52f]'>
        <div className='hidden w-1/4 h-full items-center md:flex text-white hover:text-[#dbf52f] pl-12 text-[20px] transition duration-200 font-semibold'>Shakiba Qassemi</div>
        <div className='md:w-3/4 w-full pr-12 text-[20px]'>
        <ol className='flex gap-12 justify-end items-center h-full *:text-white *:hover:text-[#dbf52f] list-decimal font-semibold'>
            <li className='transition duration-200'><a href='#about'>About</a></li>
            <li><a href='#work'>Work</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ol>
        </div>
        </header>
    </div>
  )
}

export default Header