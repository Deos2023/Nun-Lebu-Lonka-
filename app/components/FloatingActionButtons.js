"use client"

import { FaPhone, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function FloatingActionButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const phoneNumber = '+917602091586' // Replace with your phone number
  const whatsappNumber = '917602091586' // Replace with your WhatsApp number (no + or spaces)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    const message = 'Hello, I have a question about your restaurant'
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top button (appears after scrolling) */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* WhatsApp button (always visible) */}
      <button
        onClick={openWhatsApp}
        className="bg-orange-600 hover:bg-orange-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Call button (always visible) */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Call us"
      >
        <FaPhone size={20} />
      </a>
    </div>
  )
}