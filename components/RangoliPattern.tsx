'use client'

import { motion } from 'framer-motion'

export default function RangoliPattern() {
  const colors = [
    'from-saffron to-marigold',
    'from-rangoli-pink to-rangoli-purple',
    'from-indian-orange to-temple-red',
    'from-marigold to-diya-gold',
  ]

  return (
    <div className="flex justify-center items-center py-4">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* Outer Rotating Circles */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`outer-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.1 },
              scale: { duration: 0.5, delay: i * 0.1 },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              },
            }}
            className="absolute inset-0"
            style={{
              transform: `rotate(${i * 60}deg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${
                  colors[i % colors.length]
                } shadow-lg`}
              />
            </div>
          </motion.div>
        ))}

        {/* Middle Layer Petals */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={`middle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.08,
            }}
            className="absolute inset-0"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute top-12 left-1/2 -translate-x-1/2"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                  colors[(i + 2) % colors.length]
                } opacity-80`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Inner Decorative Elements */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`inner-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -360 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 + i * 0.1 },
              scale: { duration: 0.5, delay: 0.6 + i * 0.1 },
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute inset-0"
            style={{
              transform: `rotate(${i * 90}deg)`,
            }}
          >
            <div className="absolute top-20 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className={`w-4 h-4 rounded-full bg-gradient-to-br ${
                  colors[(i + 1) % colors.length]
                }`}
              />
            </div>
          </motion.div>
        ))}

        {/* Center Flower */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="text-6xl">🌺</div>
            {/* Glow effect around center flower */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-rangoli-pink blur-xl opacity-50"
            />
          </motion.div>
        </motion.div>

        {/* Sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              top: `${((i * 31 + 17) % 100)}%`,
              left: `${((i * 41 + 13) % 100)}%`,
            }}
          >
            <span className="text-2xl">✨</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

