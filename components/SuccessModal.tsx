'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface SuccessModalProps {
  onClose: () => void
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Celebration Emojis */}
        <div className="relative mb-6">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: 0 }}
              animate={{
                scale: [0, 1, 1],
                y: [-20, -60, -80],
                x: [0, (i - 3.5) * 30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5 + i * 0.1,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-0 text-3xl"
            >
              {['🎉', '🎊', '✨', '🌟'][i % 4]}
            </motion.div>
          ))}
        </div>

        {/* Success Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          RSVP Confirmed!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-6"
        >
          <p className="mb-2">
            మీ హాజరును నిర్ధారించినందుకు ధన్యవాదాలు!
          </p>
          <p>
            Thank you for confirming your attendance. We look forward to celebrating
            this auspicious occasion with you!
          </p>
        </motion.div>

        {/* Decorative Diyas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 mb-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="text-4xl"
            >
              🪔
            </motion.span>
          ))}
        </motion.div>

        {/* Telugu Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gradient font-serif italic mb-6"
        >
          శుభమస్తు
        </motion.p>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-saffron via-indian-orange to-temple-red text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

