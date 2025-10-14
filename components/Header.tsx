'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="text-center py-6 px-4">
      {/* Decorative Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-1 w-48 mx-auto mb-6 bg-gradient-to-r from-transparent via-saffron to-transparent"
      />

      {/* Animated Om Symbol - Bigger */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-8xl md:text-9xl mb-6"
      >
        <motion.span
          animate={{ 
            textShadow: [
              '0 0 20px rgba(255, 153, 51, 0.5)',
              '0 0 40px rgba(255, 153, 51, 0.8)',
              '0 0 20px rgba(255, 153, 51, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ॐ
        </motion.span>
      </motion.div>

      {/* Family Invitation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-4"
      >
        <p className="text-2xl md:text-3xl text-gray-600 font-light mb-2">
          దొడ్ల కుటుంబం ఆహ్వానిస్తోంది
        </p>
        <p className="text-xl md:text-2xl text-gray-500 italic">
          Dodla&apos;s Family invites you to
        </p>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-gradient mb-3 leading-tight py-2"
        style={{ lineHeight: '1.2' }}
      >
        నూతన గృహ ప్రవేశం
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-3xl md:text-4xl font-serif text-gray-700 mb-1"
      >
        Housewarming Ceremony
      </motion.h2>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex justify-center items-center gap-4 mt-6"
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-5xl"
        >
          🌺
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl"
        >
          🪔
        </motion.span>
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-5xl"
        >
          🌺
        </motion.span>
      </motion.div>

      {/* Decorative Bottom Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-temple-red to-transparent"
      />
    </header>
  )
}

