'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingFlowers() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const flowers = ['🌺', '🌸', '🌼', '🏵️', '💐']
  const positions = Array.from({ length: 20 }, (_, index) => ({
    left: `${((index * 37) % 100)}%`, // Deterministic but varied
    animationDelay: `${(index * 0.3) % 5}s`,
    duration: 10 + ((index * 2) % 10),
    flower: flowers[index % flowers.length],
  }))

  // Don't render until mounted on client to avoid hydration mismatch
  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: '100vh',
            x: [0, 50, -50, 50, 0],
            opacity: [0, 1, 1, 1, 0],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{
            duration: pos.duration,
            delay: parseFloat(pos.animationDelay),
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-4xl"
          style={{
            left: pos.left,
          }}
        >
          {pos.flower}
        </motion.div>
      ))}

      {/* Additional decorative elements */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={`mango-${index}`}
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: '100vh',
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + ((index * 3) % 10),
            delay: (index * 0.8) % 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-3xl"
          style={{
            left: `${((index * 43 + 13) % 100)}%`,
          }}
        >
          🥭
        </motion.div>
      ))}

      {/* Sparkles */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: (index * 0.33) % 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-2xl"
          style={{
            top: `${((index * 29) % 100)}%`,
            left: `${((index * 47 + 23) % 100)}%`,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}

