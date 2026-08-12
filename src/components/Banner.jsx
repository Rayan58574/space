import React from 'react'

function banner() {
  return (
    <div className='bg-black pb-12 text-white relative z-50 '>
        <div className='px-12 md:px-20 lg:px-24 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center '>
                <div className='rounded-5xl '>
                    <img data-aos="zoom-in" data-aos-delay="300" className='rounded-4xl hover:scale-90 transition-all border-3 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaFQXQstgayXvHGPfuHXTkbkIVOIqD8ncHoyymCr6suni8DD6JWtAckld&s=10" alt="" />
                </div>
                <div className='space-y-3 border-r-2 border-b-2 p-4 xl:pr-34 border-b-sky-400'>
                    <p data-aos="fade-up" data-aos-delay="300" className='text-sky-700 text-2xl'>Our Mission</p>
                    <h1 className='text-2xl'data-aos="fade-down" data-aos-delay="300">Papidcast</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, maiores tenetur. Velit in quia incidunt vero </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default banner