import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiWprocket } from "react-icons/si";
import { MdOutlineRocket } from "react-icons/md";

const dataServices =[{
      title : "HST",
      content:"300-150km",
     description:
     "Used for astronomical observation capturing stunning image of the universe",
     icon: <FaReact className='text-7xl'/>,
        aosDelay:"500", 
    },
    {
      title : "ISS",
      content:"800-450km",
     description:
     "Used for astronomical satellite orbiting Earthand serves as a space environment",
     icon: < MdOutlineRocket className='text-7xl'/>,
        aosDelay:"500", 
    },
      {
      title : "GPS",
      content:"300-120km",
     description:"  fusion in their cores—where hydrogen atoms smash together to form helium—they release immense heat and light.",
    
     icon: < SiWprocket className='text-7xl'/>,
        aosDelay:"500", 
    },

]

function Services() {
  return (
   <>
   <div className='text-center text-white bg-black p-[16px] sm:p-[32px] relative z-50'>
    <div className='min-h-[400px]'>
        <div className='grid grid-cols-3  gap-10 relative z-10'>
    {
       dataServices.map((data,index)=>(
        <div data-aos="fade-up" data-aos-duration={data.aosDelay} className='min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl text-center backdrop-blur-sm text-2xl px-3 py-8 w-full lg:w-[300px] mx-auto'>
            {data.icon}
            <h1>{data.title}</h1>
            <p className='max-w-80'>{data.content}</p>
            <p className='text-sm max-w-50'>{data.description}</p>
      <div>
        
      
      </div>
        </div>
       ))
           
        
    }
        </div>
    </div>
    
   </div>
   </>
  )
}

export default Services