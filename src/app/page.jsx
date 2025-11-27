import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Main from '@/components/Main'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'


function page() {
  return (
    <div>
      <Header/>
      <Main/>
      <About />
      <Work/>
      <Contact/>
    </div>
  )
}

export default page
