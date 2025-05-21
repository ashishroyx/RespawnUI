import React, { useEffect, useState } from 'react'

function Play() {

    const [Rotate,setRotate]=useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{

            let mousex=e.clientX
            let mousey=e.clientY

            let deltaX=mousex - window.innerWidth/2
            let deltaY=mousey - window.innerHeight/2

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
            setRotate(angle-180) 
        }
    )})

  return (
    <div  className=' eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7"  className=' relative w-full h-full'>
            <img src="./public/eye3.png" alt="" 
            className='w-180 h-125 m-auto mt-30'
            />
            <div className='absolute gap-5 top-50 left-1/2 -translate-y-[50%] -translate-x-[50%]  flex '>
            <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative '>
                <div style={{transform:` rotate(${Rotate}deg)`}} className='line w-full h-7 mt-12 '>
                <div className='w-7 h-7 rounded-full bg-zinc-100'>

                </div>
                </div>
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full  bg-zinc-100 flex justify-center items-center'>
                 <div className='w-2/3 h-2/3 rounded-full bg-zinc-900'>
                 <div  style={{transform:` rotate(${Rotate}deg)`}} className='line w-full h-7 mt-12 '>
                <div className='w-7 h-7 rounded-full bg-zinc-100'>

                </div>
                </div>
                  

                </div>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Play