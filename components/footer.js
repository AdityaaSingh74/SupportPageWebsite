import React from 'react'
import SocialMedia from '@/components/Socials/SocialMedia' // Adjust the import path as needed

const Footer = () => {
  return (
    <footer className='bg-[#111111] text-white p-5 flex items-center justify-between h-15'>
      <p className="text-center">
        Copyright &copy; This is the footer section.
      </p>
      
      <SocialMedia />
    </footer>
  )
}

export default Footer