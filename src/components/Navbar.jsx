import React from 'react'
import { BiLogoSquarespace } from "react-icons/bi";
function Navbar() {
  return (
   <div data-aos="fade-down" className='fixed   py-2 top-0 w-full bacdrop-blur-5xl bg-black/10  sm:py-3'>
    <div className='px-7 py-3 sm:px-23 lg:px-20'>
        <div className='flex items-center gap-90'>
            <div className='flex items-center flex-col'>
            <BiLogoSquarespace className='text-white  text-3xl'/>
            <span className='text-white  font-bold'>TCJ </span>
            </div>
            <div className='text-white md:block hidden '>
                <ul className='flex items-center  gap-10 text-xl py-4 '>
                    <li>
                        <a href="#">About</a>
                    </li>
                     <li>
                        <a href="#">Tecnology</a>
                    </li>
                     <li>
                        <a href="#">Satellites</a>
                    </li>
                     <li>
                        <a href="#">Galaxies</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <button className='px-6 py-1 hover:bg-white/20 transition duration-400 hover:cursor-pointer text-white  border-1 border-white '>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar