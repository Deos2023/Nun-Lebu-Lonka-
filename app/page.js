"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "./components/Navbar"
import { useState } from "react"
import MenuSlider from "./components/Menu"
import BestDeliveredCategories from "./components/Menu"
import { FaClock, FaStar, FaTruck } from "react-icons/fa"
import FoodGallery from "./components/Gallery"

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappUrl = `https://wa.me/917602091586?text=Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    window.open(whatsappUrl, '_blank')
  }

   const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu);
  };

  const specialMenus = [
  {
    title: " Puja Special",
    description: "Traditional Bhog & Festive Delicacies",
    image: "/menu1.png"
  },
  {
    title: "Wedding Feast",
    description: "Grand Bengali Wedding Spread",
    image: "/menu2.png"
  },
  {
    title: "Poila Boishakh",
    description: "New Year Celebration Platter",
    image: "/menu3.png"
  },
  {
    title: "Winter Festival",
    description: "Seasonal Winter Specialties",
    image: "/menu1.png"
  }
];

  const menuItems = [
    {
      day: "MONDAY",
      items: ["BHAT, DAL", "ALOO VAJA/CHOKHA", "MACH (1P)"]
    },
    {
      day: "TUESDAY",
      items: ["BHAT, DAL, VAJA", "VAGE TARKARI", "(Seasonal Availability)"]
    },
    {
      day: "THURSDAY",
      items: ["BHAT, DAL, VAJA", "VAGE TARKARI", "(Seasonal Availability)"]
    },
    {
      day: "FRIDAY",
      items: ["BHAT, TARKARI", "EGG (1P)"]
    }
  ]

  const testimonials = [
    {
      name: "Priya M.",
      comment: "Authentic Bengali flavors that remind me of my grandmother's cooking. The Mach Bhaja is exceptional!",
      rating: 5
    },
    {
      name: "Arjun S.",
      comment: "Consistent quality and timely delivery. My go-to place for traditional Bengali meals.",
      rating: 4
    },
    {
      name: "Ananya D.",
      comment: "The Dal and Aloo Vaja combo is my comfort food. Highly recommend!",
      rating: 5
    }
  ]

  return (
    <>
      

      {/* Hero Section with Bengali Theme */}
      <section id="#" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 items-center bg-gradient-to-b from-orange-50 to-white">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-800">
            <span className="text-red-600">Nun Lebu Lonka</span> - Authentic Bengali Home Delights
          </h1>
          <p className="text-gray-600 mb-4 font-light">
            Experience the taste of traditional Bengali home cooking delivered to your doorstep in Maheshtala
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#menu" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
            >
              Today&apos;s Menu
            </a>
            <a 
              href="tel:7602091586" 
              className="flex items-center gap-2 text-orange-600 font-medium"
            >
              <span className="text-xl">📞</span> Call Now
            </a>
          </div>
        </div>

        {/* Middle Image with Spin Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: 1,
            rotate: 360
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative mx-auto"
        >
          <Image
            src="/bowl.png" // Replace with your thali image
            alt="Traditional Bengali Thali"
            width={400}
            height={400}
            className="rounded-full border-4 border-orange-200"
          />
        </motion.div>

        {/* Right Section */}
        <div className="space-y-6 ">
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className=" flex items-center gap-2">🏠 Home Delivery</h4>
            <p className="text-gray-500 text-sm">Serving Maheshtala and nearby areas</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="  flex items-center gap-2">⏰ Timings</h4>
            <p className="text-gray-500 text-sm">Lunch: 12PM - 3PM | Dinner: 7PM - 10PM</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className=" flex items-center gap-2">📍 Location</h4>
            <p className="text-gray-500 text-sm">Near City Medical, Jagtala, Batanagar</p>
          </div>
        </div>
      </section>


      {/* order Section  */}

          <section id="order" className="relative py-16 px-6 bg-white">
  {/* Background shape */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-[3rem] w-[90%] h-[80%] mx-auto top-8 z-0"></div>

  <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-12">
    
    {/* Left - Mobile Image showing food ordering */}
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <Image
        src="/mobile.png" // Image showing food ordering interface
        alt="Food Ordering"
        width={280}
        height={600}
        className="drop-shadow-xl"
      />
    </motion.div>

    {/* Right - Ordering Information */}
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4">Order Our Delicious Food</h2>
      <p className="mb-6 text-white/90">Get your favorite Bengali cuisine delivered fast</p>

      {/* Order Features with Icons */}
      <div className="space-y-4 mb-8">
  <div className="flex items-center gap-3">
    <div className="bg-white/20 p-2 rounded-full text-white">
      <FaClock className="w-5 h-5" />
    </div>
    <span>30-45 minute delivery</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white/20 p-2 rounded-full text-white">
      <FaStar className="w-5 h-5" />
    </div>
    <span>100% quality guarantee</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white/20 p-2 rounded-full text-white">
      <FaTruck className="w-5 h-5" />
    </div>
    <span>Free delivery on first order</span>
  </div>
</div>

      {/* Order Now Button */}
      <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
        Order Now
      </button>
    </div>
  </div>

  {/* Food Image on corner */}
  <Image
    src="/bowl.png"
    alt="Food Bowl"
    width={100}
    height={100}
    className="absolute top-0 right-10 -rotate-12"
  />
</section>

<BestDeliveredCategories />


      {/* Banner */}
<div className="relative w-full h-[400px]">
  <Image
    src="/banner.png"
    alt="nun lebu Logo"
    fill
    className="object-cover"
  />
</div>
      {/* Menu Section */}
        <section id="menu" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Special Menus</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-4">Celebrate with our exclusive seasonal offerings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {specialMenus.map((menu, index) => (
    <motion.div
      key={index}
      initial={{ y: index % 2 === 0 ? 60 : -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <button
        onClick={() => openModal(menu)}
        className="block w-full text-left focus:outline-none"
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-72 md:h-[100vh]">
          <Image
            src={menu.image}
            alt={menu.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
            <div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                {menu.title}
              </h3>
              <p className="text-orange-200 text-sm">{menu.description}</p>
              <div className="mt-2 flex items-center text-orange-100 text-sm">
                <span>Click to view</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  ))}
</div>


        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md shadow-lg font-medium transition-colors"
          >
            Book Your Special Occasion
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          onClick={() => setSelectedMenu(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl z-10 hover:text-orange-300 transition-colors"
            onClick={() => setSelectedMenu(null)}
            aria-label="Close modal"
          >
            &times;
          </button>
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3 relative h-[90vh]">
                <Image
                  src={selectedMenu.image}
                  alt={selectedMenu.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className="md:w-1/3 text-white overflow-y-auto max-h-[80vh]">
                <h3 className="text-3xl font-bold mb-3">{selectedMenu.title}</h3>
                <p className="text-orange-300 mb-4">{selectedMenu.description}</p>
                <div className="space-y-4">
                  {selectedMenu.items?.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-orange-500 pl-3"
                    >
                      <h4 className="font-medium">{item.category}</h4>
                      <p className="text-sm text-gray-300">
                        {item.dishes.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors">
                  Inquire About This Menu
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>



      {/* About Us Section */}
    <section id="about" className="py-16 px-6 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="bg-white/80 backdrop-blur-sm rounded-xl max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-6">
    
    {/* Left - Logo Image */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-32 w-full md:h-40 flex justify-center"
    >
      <div className="relative w-60 h-full">
        <Image
          src="/logo.png"
          alt="Our Kitchen"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>

    {/* Right - Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
      <div className="w-20 h-1 bg-orange-500 mb-6 mx-auto md:mx-0"></div>
      <p className="text-gray-600 mb-4">
        At Nun Lebu Lonka, we bring authentic Bengali flavors to your home...
      </p>
      <p className="text-gray-600 mb-6">
        Every dish is prepared with the same care and love...
      </p>

      <div className="space-y-4">
        {[
          {
            title: 'Homemade Taste',
            desc: 'Authentic flavors...',
          },
          {
            title: 'Fresh Ingredients',
            desc: 'Locally sourced...',
          },
          {
            title: 'Timely Delivery',
            desc: 'Hot and fresh meals...',
          },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 justify-center md:justify-start">
            <div className="text-orange-500 text-xl">✓</div>
            <div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">&apos;{testimonial.comment}&apos;</p>
                <p className="font-bold text-gray-800">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <span className="text-orange-600 text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    West, near city medical, opposite tarulata apartment,<br />
                    Jagtala, Batanagar, Maheshtala,<br />
                    Kolkata, West Bengal 700141
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <span className="text-orange-600 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">076020 91586</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <span className="text-orange-600 text-xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Opening Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 12PM - 3PM, 7PM - 10PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md shadow font-medium"
              >
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Food Gallery</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">A glimpse of our traditional Bengali dishes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5,6].map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: item * 0.05 }}
                className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/item${item}.webp`} // Replace with your food images
                  alt={`Bengali Dish ${item}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <FoodGallery />
    </>
  )
}