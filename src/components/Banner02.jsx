import React from 'react'

function banner() {
  return (
    <div className='bg-black pb-12 text-white relative z-50 '>
        <div className='px-12 md:px-20 lg:px-24 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center '>
               
                <div className='space-y-3 border-r-2 border-b-2 p-4 xl:pr-34 border-b-sky-400'>
                    <p data-aos="fade-up" className='text-sky-700 text-2xl'>Our Mission</p>
                    <h1 data-aos="fade-up" className='text-2xl'>Papidcast</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, maiores tenetur. Velit in quia incidunt vero </p>
                </div>
                 <div className='rounded-5xl '>
                    <img className='rounded-4xl hover:scale-90 hover:border-2 transition  border-3 border-white h-90 w-full' data-aos="zoom-in" data-aos-delay="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYqtdzRVVC9i3xrnaSzVb-dGc5VrAXyqZy9rCSjM6nM_fZpB4XAqK_O89&s=10" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default banner