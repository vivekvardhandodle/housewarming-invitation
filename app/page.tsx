'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import DiyaAnimation from '@/components/DiyaAnimation'
import RangoliPattern from '@/components/RangoliPattern'
import EventDetails from '@/components/EventDetails'
import RSVPForm from '@/components/RSVPForm'
import FloatingFlowers from '@/components/FloatingFlowers'
import HouseAnimations from '@/components/HouseAnimations'
import SuccessModal from '@/components/SuccessModal'

export default function Home() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleRSVPSubmit = (data: any) => {
    console.log('RSVP Data:', data)
    setShowSuccess(true)
    setShowRSVP(false)
    
    // Auto hide success modal after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <main className="min-h-screen relative overflow-hidden rangoli-pattern">
      {/* Animated Background Elements */}
      <FloatingFlowers />
      <HouseAnimations />
      
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Header with Diyas */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* Diya Decorations */}
        <div className="fixed top-20 left-10 z-20 hidden md:block">
          <DiyaAnimation delay={0} />
        </div>
        <div className="fixed top-20 right-10 z-20 hidden md:block">
          <DiyaAnimation delay={0.3} />
        </div>
        <div className="fixed bottom-20 left-10 z-20 hidden md:block">
          <DiyaAnimation delay={0.6} />
        </div>
        <div className="fixed bottom-20 right-10 z-20 hidden md:block">
          <DiyaAnimation delay={0.9} />
        </div>

        {/* Rangoli Pattern */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="my-12"
        >
          <RangoliPattern />
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <EventDetails />
        </motion.div>

        {/* Lunch Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center my-8"
        >
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-xl border border-green-200">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 flex items-center justify-center gap-2">
                <span className="text-3xl">🍽️</span>
                Followed by Lunch
                <span className="text-3xl">🍽️</span>
              </h3>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-semibold text-gray-800">
                  Hall 2, Club House, First Floor
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                  Kohinoor by Auro Realty, Hitech City, Hyderabad
                </p>
                <p className="text-base md:text-lg text-gray-500 italic mt-3">
                  Join us for a delicious meal after the ceremony
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RSVP Button - Commented out */}
        {/* 
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center my-8"
        >
          <motion.button
            onClick={() => setShowRSVP(true)}
            className="px-12 py-4 bg-gradient-to-r from-saffron via-indian-orange to-temple-red text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🪔
              </motion.span>
              RSVP Now
              <motion.span
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🪔
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
        */}

        {/* Family Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center my-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 153, 51, 0.3)',
                  '0 0 40px rgba(255, 153, 51, 0.6)',
                  '0 0 20px rgba(255, 153, 51, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-2xl overflow-hidden border-4 border-gradient-to-r from-saffron via-indian-orange to-temple-red"
            >
              <img
                src="/WhatsApp Image 2025-10-14 at 14.16.08.jpeg"
                alt="Dodla Family"
                className="w-full max-w-lg h-auto rounded-xl"
              />
            </motion.div>
            {/* Decorative corners */}
            {[
              'top-0 left-0',
              'top-0 right-0',
              'bottom-0 left-0',
              'bottom-0 right-0',
            ].map((position, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 180, 360] }}
                transition={{
                  scale: { delay: 1.5 + i * 0.1 },
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                }}
                className={`absolute ${position} -m-3 text-3xl`}
              >
                🌺
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Family Names - Invitees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mb-8 px-4"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-xl">
            <p className="text-xl md:text-2xl text-gray-600 mb-3">
              ఆహ్వానించువారు
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-4 italic">
              Hosts
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
              శ్రీమతి మరియు శ్రీ
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              వాసవి శశిధర్ మరియు శ్రీయాన్షి
            </p>
            <p className="text-lg md:text-xl text-gray-600 italic">
              Srimathi and Shri
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              Vasavi Shashidhar and Shriyanshi
            </p>
          </div>
        </motion.div>

        {/* Gayatri Mantra & Blessings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-center py-6 px-4 max-w-4xl mx-auto"
        >
          {/* Gayatri Mantra in Telugu */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8 bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              గాయత్రీ మంత్రం
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-gray-800 mb-3 leading-relaxed">
              ఓం భూర్ భువః స్వః<br />
              తత్ సవితుర్ వరేణ్యం<br />
              భర్గో దేవస్య ధీమహి<br />
              ధియో యో నః ప్రచోదయాత్
            </p>
            <p className="text-base md:text-lg text-gray-600 italic mt-4">
              Om Bhur Bhuvah Swah<br />
              Tat Savitur Varenyam<br />
              Bhargo Devasya Dhimahi<br />
              Dhiyo Yo Nah Prachodayat
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-4">
              We meditate on the glory of the Creator who has created the Universe,<br />
              who is worthy of worship, and who is the remover of all sins and ignorance.<br />
              May He enlighten our intellect.
            </p>
          </motion.div>

          {/* Telugu Blessings */}
          <motion.div className="space-y-6">
            <div className="bg-white/60 rounded-xl p-5">
              <p className="text-xl md:text-2xl font-serif text-gray-800 mb-2">
                &ldquo;ఈ ఇల్లు సుఖ సంపదలతో నిండి ఉండాలి&rdquo;
              </p>
              <p className="text-base md:text-lg text-gray-600">
                May this home be filled with happiness and prosperity
              </p>
            </div>

            <div className="bg-white/60 rounded-xl p-5">
              <p className="text-xl md:text-2xl font-serif text-gray-800 mb-2">
                &ldquo;మంగళం భగవాన్ విష్ణు, మంగళం మధుసూదనః&rdquo;
              </p>
              <p className="text-base md:text-lg text-gray-600">
                May Lord Vishnu bring auspiciousness and remove all obstacles
              </p>
            </div>

            <div className="bg-white/60 rounded-xl p-5">
              <p className="text-lg md:text-xl text-gray-700 italic">
                గృహం అనేది కేవలం నాలుగు గోడలు కాదు,
              </p>
              <p className="text-lg md:text-xl text-gray-700 italic mt-1">
                అది ప్రేమ మరియు ఆనందం యొక్క ఆలయం
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-3">
                A home is not just four walls, it&apos;s a temple of love and joy
              </p>
            </div>

            <div className="bg-white/60 rounded-xl p-5">
              <p className="text-lg md:text-xl text-gray-700 italic">
                ఇల్లు కొత్తది, జ్ఞాపకాలు శాశ్వతం
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-2">
                The house is new, but the memories will last forever
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* RSVP Modal - Commented out */}
      {/* 
      <AnimatePresence>
        {showRSVP && (
          <RSVPForm
            onClose={() => setShowRSVP(false)}
            onSubmit={handleRSVPSubmit}
          />
        )}
      </AnimatePresence>
      */}

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <SuccessModal onClose={() => setShowSuccess(false)} />
        )}
      </AnimatePresence>
    </main>
  )
}

