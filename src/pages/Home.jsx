
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { SideNavbar } from '../components/SideNavbar'

import React, { useState } from 'react'

export const Home = () => {
  const [activeLink, setActiveLink] = useState('Portfolio')

  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar  setActiveLink={setActiveLink} activeLink={activeLink}/>
      <div className='flex w-full h-[92vh]'>

        <SideNavbar setActiveLink={setActiveLink} activeLink={activeLink} />
        <Hero activeLink={activeLink} />
      </div>
    </div>
  )
}
