import React from 'react'
import {motion} from 'framer-motion'


function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-[#2E2E2E] pt-2'>
      <div className='textstructure mt-40 px-20'>

        {["every gamer" , "has" ,"a story"].map((item,index)=>{

          return ( 
          
          <div className='masker'>

            <div className='w-fit flex'>

              {index === 1 && (<motion.div initial={{width:0}} animate={{width:"7.7vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='m'>
                <img src="./logo.png" alt="" className='w-[6.5vw] h-[5.3vw] m-2 bg-black rounded-xl '/>
              </motion.div>)}

          <h1 className='uppercase tracking-tighter text-[7.5vw] font-medium leading-[5.8vw]'>{item}</h1>

          </div>

          </div>
          
        )

        })}


       </div>
       <div className='border-t-[1px] border-[#FFFDF9] mt-25 flex justify-between items-center px-3 py-1'>
        {["FOR THE GAMER" , "TO THE GAMER" , "BY THE GAMER"].map((item, index)=>(
          <p className='text-md font-light tracking-tight leading-none  '>{item}</p>
        )

        )}

       </div>

    </div>
  )
}

export default Landing