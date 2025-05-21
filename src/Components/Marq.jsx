import React from 'react'
import {motion} from 'framer-motion'


function Marq() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-10 bg-[#443C2E] rounded-tl-3xl  rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap  '>

            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:11}}  className='text-[12vw] font-semibold uppercase mb-4 mt-4 pr-10'>Your Story Doesn’t End at Game Over</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:11}}  className='text-[12vw] font-semibold uppercase mb-4 mt-4 pr-10'>Your Story Doesn’t End at Game Over</motion.h1>

        </div>
    </div>
  )
}

export default Marq