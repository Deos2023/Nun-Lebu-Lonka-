"use client"

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="relative h-16 w-48">
              <Image 
                src="/logo.png" 
                alt="Nun Lebu Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300">
              Serving authentic Bengali cuisine with traditional flavors since 2010. Our dishes are prepared with love and the freshest ingredients.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-orange-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors">Food Gallery</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-orange-500 transition-colors">Special Events</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-orange-500 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span className="text-gray-300">West, near city medical, opposite tarulata apartment, Jagtala, Batanagar, Maheshtala, Kolkata, West Bengal 700141</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" />
                <a href="tel:+917602091586" className="text-gray-300 hover:text-orange-500 transition-colors">+91 7602091586</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:info@nunlebu.com" className="text-gray-300 hover:text-orange-500 transition-colors">info@nunlebu.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MdDeliveryDining className="text-orange-500 text-xl" />
                <span className="text-gray-300">Home delivery available</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-orange-500 pb-2 inline-block">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-300">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-orange-500" />
                  <span>Monday - Friday</span>
                </span>
                <span>11:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-orange-500" />
                  <span>Saturday</span>
                </span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-orange-500" />
                  <span>Sunday</span>
                </span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Get updates on special offers and events</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nun Lebu. All Rights Reserved. Website Develope and Maintained By Digital Exposure Online Services</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}