"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const craftsmanshipItems = [
  {
    title: "Artisanal Embroidery",
    description: "Each piece features hand-stitched embroidery by our master artisans, requiring 8-12 hours per garment.",
    image: "/embroidery.jpg",
    icon: "✂️"
  },
  {
    title: "Sustainable Silks",
    description: "Our silks are ethically sourced from family-owned farms in Italy, using organic dyeing processes.",
    image: "/silk.jpg",
    icon: "🧵"
  },
  {
    title: "Precision Tailoring",
    description: "Every garment undergoes three fittings to ensure perfect drape and movement on the body.",
    image: "/tailoring.jpg",
    icon: "📐"
  }
];

export default function CraftsmanshipSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/texture.png')] bg-repeat"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-medium mb-4">Behind the Seams</h3>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Discover the meticulous craftsmanship that defines every Ann Simon creation
          </p>
        </motion.div>

        {/* Interactive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={craftsmanshipItems[activeIndex].image}
              alt={craftsmanshipItems[activeIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          </motion.div>

          {/* Content Tabs */}
          <div className="space-y-8">
            {craftsmanshipItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 cursor-pointer transition-all duration-300 ${activeIndex === index ? "bg-white shadow-md border-l-4 border-gray-900" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className={`text-xl font-medium mb-2 ${activeIndex === index ? "text-gray-900" : "text-gray-700"}`}>
                      {item.title}
                    </h4>
                    <p className={activeIndex === index ? "text-gray-600" : "text-gray-500"}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/craftsmanship"
            className="inline-block border-b border-gray-900 pb-1 text-sm tracking-wider hover:opacity-75 transition-opacity"
          >
            EXPLORE OUR PROCESS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}