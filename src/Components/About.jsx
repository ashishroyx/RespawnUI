import React from 'react'

function About() {
  return (
    <div  className='w-full p-20 bg-[#D4A373] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[3vw] leading-[3vw] tracking-tight'>
            Respawn is more than just a platform—it's where gamers bring their journeys to life. Whether you're a casual explorer, a competitive warrior, or a storyteller at heart, Respawn gives you the space to share your greatest moments, memories, and milestones. We believe every gamer has a story worth telling, and we're here to make sure it’s heard.
            Craft your legacy. Relive the highlights. Respawn.
        </h1>
        <div className='w-full border-t-[1px] border-[#FFFDF9] mt-25 flex justify-between items-center'>
            <img src="./public/img1.jpg" alt="" className='w-125 h-100 mt-10 rounded-3xl' />
            <img src="./public/img3.jpg" alt="" className='w-125 h-100 mt-10 rounded-3xl'/>


        </div>

    </div>
  )
}

export default About