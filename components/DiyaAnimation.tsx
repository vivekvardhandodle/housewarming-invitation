'use client'

import { motion } from 'framer-motion'

interface DiyaAnimationProps {
  delay?: number
}

export default function DiyaAnimation({ delay = 0 }: DiyaAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      {/* Diya Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Flame */}
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1.1, 1],
            opacity: [1, 0.9, 1, 0.9, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            {/* Glow Effect */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px 10px rgba(255, 215, 0, 0.6)',
                  '0 0 30px 15px rgba(255, 140, 0, 0.8)',
                  '0 0 20px 10px rgba(255, 215, 0, 0.6)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full blur-md"
            />
            <span className="text-4xl relative z-10">🔥</span>
          </div>
        </motion.div>

        {/* Diya Body */}
        <div className="text-5xl">🪔</div>
      </motion.div>

      {/* Light Rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + i * 0.2,
            ease: "easeOut",
          }}
          className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-t from-diya-gold to-transparent origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${i * 45}deg)`,
          }}
        />
      ))}
    </motion.div>
  )
}

