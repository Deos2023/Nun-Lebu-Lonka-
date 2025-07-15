"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { FiX } from "react-icons/fi"

const galleryItems = [
  { id: 1, title: "Shorshe Ilish", description: "Hilsa fish in mustard sauce" },
  { id: 2, title: "Pasta ", description: "Home made pasta" },
  { id: 3, title: "Kosha Mangsho", description: "Slow-cooked mutton curry" },
  { id: 4, title: "Aloo Posto", description: "Potatoes in poppy seed paste" },
  { id: 5, title: "Chinese Platter", description: "Fried rice , chicken, paneer" },
  { id: 6, title: "Polau Kosha Mangsho", description: "With spicy chicken kosha " },
 
]

export default function FoodGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">Our Food Gallery</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">A visual feast of traditional Bengali cuisine</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={`/item${item.id}.webp`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-orange-200 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <FiX />
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <Image
                    src={`/item${selectedImage.id}.webp`}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <p className="text-orange-500 mt-1">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}