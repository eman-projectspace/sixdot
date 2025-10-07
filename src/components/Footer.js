import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center bg-gradient-to-b from-[#3b2f2f] to-[#1f1a17] shadow-lg z-50 border-b border-[#5c4438]/70">
      <p>© {new Date().getFullYear()} 6 Dot. All rights reserved.</p>
    </footer>
  )
}

export default Footer
