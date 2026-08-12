import { useState } from 'react'
import Earth from "./assets/image.png.png"
import './App.css'
import Hero from './components/Hero'
import Navbar from'./components/Navbar'
import Banner from "./components/Banner"
import Services from './components/Services'
import { useEffect } from 'react'
import Banner02 from "./components/Banner02"
import Footer from './components/Footer'
import AOS from "aos"
import 'aos/dist/aos.css';


function App() {

     useEffect(() => {
    AOS.init({
      duration: 1200,
      easing:"ease-in-out", // animation duration in milliseconds
    });
  }, []);

  return (
    <>
    <div className='h-[700px] relative '>
      <img src={Earth} className='w-full fixed right-0 top-0  h-[600px] object-cover z-[-1] ' alt="earth image" />
      <Navbar/>
      <Hero/>
    </div>
    {/* services Card section */}
    <Services/>
    <Banner/>
    <Banner02/>
    <Footer/>
    </>
  )
}

export default App
