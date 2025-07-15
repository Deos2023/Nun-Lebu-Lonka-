"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from 'react-icons/fa'

export default function FloatingNavbar() {
  const pathname = usePathname() || ''
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Category', path: '#category' },
    { name: 'Menu', path: '#menu' },
    { name: 'About Us', path: '#about' },
    { name: 'Contact', path: '#contact' },
    { name: 'gallery', path: '#gallery' }
  ]

  return (
    <div className="w-full  top-0 z-50">
      {/* Top section with social icons, logo, and call button */}
      <div className="flex justify-between items-center py-2 md:py-3 px-4 md:px-8  bg-gradient-to-b from-orange-50 to-white bg-opacity-80 backdrop-blur-sm border-1 border-amber-200">
        {/* Social media icons (left) */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            <FaTwitter size={18} />
          </a>
        </div>

        {/* Logo (center) */}
        <div className="relative w-40 h-16 md:w-56 md:h-20 mx-4">
          <Image
            src="/logo.png"
            alt="Nun Lebu Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Call button (right) */}
        <a 
          href="tel:+917602091586" 
          className="flex items-center space-x-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-colors"
        >
          <FaPhone size={14} />
          <span>Call Us</span>
        </a>
      </div>

      {/* Bottom floating nav section */}
      <nav className="flex justify-center bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center py-2 md:py-3">
          {/* Mobile menu button (hidden on desktop) */}
          <button 
            className="md:hidden p-2 self-start"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Desktop Navigation (hidden on mobile) */}
          <ul className="hidden md:flex justify-center flex-1 space-x-4 lg:space-x-8 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <a 
                  href={item.path} 
                  className={`px-2 py-1 transition-colors hover:text-orange-500 ${
                    pathname.startsWith(item.path) 
                      ? 'text-orange-500 border-b-2 border-orange-500 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Empty div for layout balance on desktop */}
          <div className="hidden md:block w-8 h-8"></div>
        </div>

        {/* Mobile Menu (shown when toggled) */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t">
            <ul className="flex flex-col px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      pathname.startsWith(item.path) 
                        ? 'bg-orange-50 text-orange-500 font-semibold' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}