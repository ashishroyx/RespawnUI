import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marq from './Components/Marq'
import About from './Components/About'
import Play from './Components/Play'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    
       <div className='w-full bg-[#2E2E2E] text-white'>

        <Navbar/>  
        <Landing/>  
        <Marq/>  
        <About/>  
        <Play/>  

      </div>
    
  )
}

export default App
