"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function BestDeliveredCategories() {
  const categories = [
    {
      name: "Bengali Cuisine",
      image: "/cat1.png",
      bg: "bg-orange-100",
      ringColor: "ring-orange-500",
      description: "Authentic traditional Bengali meals and specialties"
    },
    {
      name: "Chinese Items",
      image: "/bowl.png",
      bg: "bg-red-100",
      ringColor: "ring-red-500",
      description: "Indian-Chinese fusion dishes with bold flavors"
    },
    {
      name: "Sweets & Desserts",
      image: "/cat2.png",
      bg: "bg-yellow-100",
      ringColor: "ring-yellow-500",
      description: "Traditional Bengali mishti and sweet delicacies"
    }
  ]

  return (
    <section id="category" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <h2 className="text-5xl font-bold text-center md:text-left max-w-xl text-green-800">
            Our <span className="text-red-600">Best  Delivered</span> Categories
          </h2>
          <p className="text-gray-600 text-center md:text-right max-w-xl text-xl">
            Experience the rich flavors of Bengal with our carefully curated food categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className={`relative w-80 h-80 rounded-full flex items-center justify-center ${cat.bg}`}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={300}
                  height={300}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
                {/* Decorative stroke */}
                <div className={`absolute inset-0 rounded-full ring-4 ${cat.ringColor} opacity-30`}></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
                <p className="text-gray-600 px-4">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}