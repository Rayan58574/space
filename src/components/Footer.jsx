import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdEditLocation } from "react-icons/md";
function Footer() {
    return (
        <div className='bg-gray-800 p-12 text-white '>
            <section className='max-w-[1200px] mx-auto text-white '>
                <div className='grid md:grid-cols-3 items-center gap-30 grid-cols  py-5  '>
                    {/* first column */}
                    <div className='flex flex-col items-center gap-7'>
                        <h1 className='font-bold text-3xl'>Be Ready To Grow</h1>
                        <p className='max-w-70 space-x-4 font-light'>get exclusive <span className='font-bold'> best upgrade </span> straight your inbox</p>
                        <div className='flex gap-3'>
                            <input className='border-1 rounded-2xl border-white px-4 flex justify-start py-1' type="text" placeholder='E-mail' />
                            <button className='bg-orange-500 p-3 rounded-full'> <CiSearch /> </button>
                        </div>


                    </div>
                    <div className='flex flex-row gap-8  items-center '>
                        <div>
                            <h1 className='font-bold text-2xl'>Important link</h1>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Home</a>
                                <a href="#">Services</a>
                                <a href="#">About</a>
                                <a href="#">Login</a>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>Important link</h1>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Home</a>
                                <a href="#">Services</a>
                                <a href="#">About</a>
                                <a href="#">Login</a>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1>Contact us</h1>
                        <div className='flex flex-col gap-12'>
                            <div className='flex items-center gap-2'>
                                < MdEditLocation />
                                Location
                            </div>
                             <div className='flex items-center gap-2'>
                                < CiMail />
                                G-mail
                            </div>
                            <div className='flex items-center gap-2'>
                                <  IoCall />
                                Phone.No
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer