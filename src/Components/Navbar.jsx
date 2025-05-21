import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-10 py-4 flex justify-between items-center">
      <div className='logo '>
        <img 
          src="./public/logo.png" 
          alt="Respawn logo" 
          className='w-20 h-20 rounded-full'
        />
      </div>
      <div className='links flex gap-7'>
      {["home", "signup", "login"].map((item,index) => (
        <a
          key={index}
          className="mx-4 text-md capitalize"
        >
          {item}
        </a>
      ))}

      </div>
    </div>
  )
}

export default Navbar