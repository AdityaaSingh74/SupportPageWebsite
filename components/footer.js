import React from 'react'

const Footer = () => {
  return (
    
    <footer className='bg-black text-white p-5 flex items-center justify-between h-15 '>
      <p className="text-center">
        Copyright &copy; This is the footer section.
      </p>
      <ul className="text-bold flex gap-10 px-5">
        <li>Instagram</li>
        <li>Lindin</li>
        <li>GitHub</li>
      </ul>
    </footer>
  )
}

export default Footer