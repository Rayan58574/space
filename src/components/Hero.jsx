import React from 'react'
import Mountain from "../assets/image02.png"


function Hero() {
    return (
        <div  className='bg-black/20 h-full text-white  '>
            <div className='h-full flex justify-center items-center p-4 relative z-50'>
                <div className='text-center md:mr-120 p-[16px] sm:p-[32px]'>
                    <div className='text-center grid grid-cols-1 sm:grid-cols-2 gap-4  '>
                        <div className='flex flex-col gap-9'>
                            <h1 data-aos="fade-up" data-aos-delay="300" className='text-7xl flex flex-col   font-bold '>Orbit The <span className='mr-20 text-9xl'>Earth</span></h1>
                           
                              <p className='max-w-60'>  Architecto, quae nulla! Maiores illo odio tempore quibusdam deleniti veritatis. Esse, corrupti!</p>
                              <button data-aos="fade-up" data-aos-delay="500" className='bg-blue-900 font-bold border-2 hover:bg-black/10 transition duration-300 cursor-pointer border-white px-5 py-2 '>Sign-up</button>
                        </div>
                        
                    </div>

                </div>
            </div>
            {/* mountain section */}
           <img className='absolute w-full h-80 object-cover brightness-50 z-10 bottom-0 left-0' src={Mountain} alt="sourgane image" />
        </div>
    )
}

export default Hero