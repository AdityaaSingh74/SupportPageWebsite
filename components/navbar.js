import React from 'react'

const Navbar = () => {
  return (
    <div className="p-2 shadow-md shadow-teal-400">
        <nav className='bg-[#111111] rounded-2xl text-white p-5 flex justify-between items-center px-4 h-4 '>
            <span className='Logo flex gap-4 items-center font-extrabold'>
                <img
                  src="/TEST.jpg"
                  alt="Example Image"
                  className="rounded-full bg-amber-600 h-10 w-15 overflow-hidden mr-2"
                />
                Logo
            </span>

            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Info</li>
                <li>Projects</li>
                <li>Contact Me</li>
                <li>Support</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar