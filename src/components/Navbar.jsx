import React from 'react'
import person from '../assets/image.png'
import { Menu } from 'lucide-react'
import {DropdownMenuComp} from './DropdownMenu'


const Navbar = ({ setActiveLink, activeLink }) => {
  return (

    <nav className="w-full shadow-md flex justify-between items-center h-[50px] p-[16px] bg-white">
      <div className='flex items-center justify-center text-sm font-bold'
      >
        <span className='rounded-full bg-blue-400 p-[1px] w-[20px] flex items-center justify-center text-white font-extrabold mr-[1px] '>r</span>esollect
      </div>
      <div className='flex items-center justify-center gap-[4px]' >
        <img src={person} alt=""  className='rounded-full w-[30px] h-auto'/>
        <div className='md:block hidden'>
          <h3 className='font-medium text-lg'>Tushar</h3>
          <p className='text-sm'>contact@example.com</p>
        </div>
        <div className='max-md:block hidden'>

        <DropdownMenuComp setActiveLink={setActiveLink} activeLink={activeLink} />
        </div>
      </div>
          

    </nav>


  )
}

export default Navbar