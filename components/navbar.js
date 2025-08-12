import React from 'react'

const Navbar = () => {
  return (
    <div className="shadow-md shadow-teal-400 rounded-3xl">
        <nav className='bg-black text-white p-5 flex justify-between items-center px-4 h-4 '>
            <div className='Logo font-extrabold'>
                Logo
            </div>

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