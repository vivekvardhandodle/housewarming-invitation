'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HouseAnimations() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Children playing emojis
  const children = ['👦', '👧', '🧒', '👶']
  
  // House and family related emojis
  const houseElements = ['🏠', '🏡', '🏘️', '👨‍👩‍👧‍👦', '👨‍👩‍👦', '👨‍👩‍👧', '🎈', '🎉', '🎊']

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Children running/playing across screen */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`child-${index}`}
          initial={{
            x: '-10%',
            y: `${60 + index * 10}%`,
            opacity: 0,
          }}
          animate={{
            x: '110%',
            y: `${60 + index * 10}%`,
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            delay: index * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-4xl md:text-5xl"
        >
          {children[index % children.length]}
        </motion.div>
      ))}

      {/* House emoji bouncing */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: [20, 30, 20],
          opacity: 1,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.5,
          },
        }}
        className="absolute top-5 left-1/2 transform -translate-x-1/2 text-5xl md:text-6xl"
      >
        🏡
      </motion.div>

      {/* Family emojis appearing in corners */}
      {[
        { emoji: '👨‍👩‍👧‍👦', position: 'top-10 left-10', delay: 2 },
        { emoji: '🎈', position: 'top-20 right-10', delay: 2.5 },
        { emoji: '🎉', position: 'bottom-32 left-16', delay: 3 },
        { emoji: '👨‍👩‍👦', position: 'bottom-32 right-16', delay: 3.5 },
      ].map((item, index) => (
        <motion.div
          key={`family-${index}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.8],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            scale: {
              duration: 0.8,
              delay: item.delay,
            },
            opacity: {
              duration: 0.8,
              delay: item.delay,
            },
            rotate: {
              duration: 2,
              repeat: Infinity,
              delay: item.delay + 1,
            },
          }}
          className={`absolute ${item.position} text-3xl md:text-4xl hidden md:block`}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Balloons floating up */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`balloon-${index}`}
          initial={{
            y: '110vh',
            x: `${10 + index * 15}%`,
            opacity: 0,
          }}
          animate={{
            y: '-10vh',
            x: [
              `${10 + index * 15}%`,
              `${15 + index * 15}%`,
              `${10 + index * 15}%`,
            ],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12 + index * 2,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-3xl"
        >
          🎈
        </motion.div>
      ))}

      {/* Confetti bursts */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`confetti-${index}`}
          initial={{
            scale: 0,
            opacity: 0,
            x: '50vw',
            y: '50vh',
          }}
          animate={{
            scale: [0, 1, 0.5],
            opacity: [0, 1, 0],
            x: `${50 + (index % 2 === 0 ? 1 : -1) * (20 + index * 5)}vw`,
            y: `${50 + (index % 3) * 15}vh`,
            rotate: [0, 360 * (index % 2 === 0 ? 1 : -1)],
          }}
          transition={{
            duration: 2,
            delay: 1 + index * 0.2,
            repeat: Infinity,
            repeatDelay: 8,
          }}
          className="absolute text-2xl"
        >
          {['🎊', '🎉', '✨', '⭐'][index % 4]}
        </motion.div>
      ))}

      {/* Keys jingling (new home keys) */}
      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
          y: [0, -5, 0, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 right-20 text-4xl hidden lg:block"
      >
        🔑
      </motion.div>

      {/* Door opening animation */}
      <motion.div
        animate={{
          rotateY: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="absolute top-40 left-20 text-5xl hidden lg:block"
        style={{ transformStyle: 'preserve-3d' }}
      >
        🚪
      </motion.div>

      {/* Happy faces celebrating */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`smile-${index}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 1],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            delay: 2 + index * 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="absolute text-2xl"
          style={{
            top: `${20 + index * 15}%`,
            left: `${30 + (index % 2) * 40}%`,
          }}
        >
          {['😊', '🥳', '😄', '🤗', '❤️'][index]}
        </motion.div>
      ))}

      {/* Lamp/Light emoji (representing illumination) */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-1/4 text-3xl hidden md:block"
      >
        💡
      </motion.div>

      {/* Plants/Garden (new home garden) */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`plant-${index}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: [20, 0, 20],
            opacity: [0, 1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            delay: 1 + index * 0.5,
            repeat: Infinity,
          }}
          className="absolute bottom-20 text-3xl hidden lg:block"
          style={{
            left: `${20 + index * 30}%`,
          }}
        >
          {['🌱', '🪴', '🌻'][index]}
        </motion.div>
      ))}
    </div>
  )
}

