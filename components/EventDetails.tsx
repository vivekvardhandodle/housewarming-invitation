'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react'

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'October 24, 2025',
      subValue: 'Friday',
    },
    {
      icon: Clock,
      label: 'Muhurath Time',
      value: '4:42 AM',
      subValue: 'Auspicious Time',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Flat 2305, Sparkle Tower',
      subValue: 'Kohinoor Auro Realty',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + 0.2 * index }}
              className="mb-4"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-saffron to-indian-orange rounded-full">
                <detail.icon className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <h3 className="text-base font-semibold text-gray-500 uppercase mb-2">
              {detail.label}
            </h3>
            <p className="text-2xl font-bold text-gray-800 mb-1">
              {detail.value}
            </p>
            <p className="text-lg text-gray-600">{detail.subValue}</p>
          </motion.div>
        ))}
      </div>

      {/* Map Link Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-saffron via-indian-orange to-temple-red rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Navigation className="w-12 h-12 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Directions
          </h3>
          <p className="text-white/90 mb-6">
            Click below to navigate to the venue
          </p>
          <motion.a
            href="https://maps.app.goo.gl/VBebLHmHrfC4gs3n9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-indian-orange font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Open in Google Maps
          </motion.a>
        </div>
      </motion.div>

      {/* Additional Info - More Compact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-6 text-center"
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🙏</span>
              <span className="text-sm md:text-base">పూజ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥘</span>
              <span className="text-sm md:text-base">భోజనం</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span className="text-sm md:text-base">ఆశీర్వాదాలు</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

