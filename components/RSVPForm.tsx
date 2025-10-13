'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X, User, Mail, Phone, Users } from 'lucide-react'

interface RSVPFormProps {
  onClose: () => void
  onSubmit: (data: RSVPData) => void
}

export interface RSVPData {
  name: string
  email: string
  phone: string
  guests: number
  attending: 'yes' | 'no'
  message?: string
}

export default function RSVPForm({ onClose, onSubmit }: RSVPFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RSVPData>()

  const attending = watch('attending')

  const onFormSubmit = (data: RSVPData) => {
    onSubmit(data)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-saffron via-indian-orange to-temple-red p-8 rounded-t-3xl">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="text-center text-white">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🪔
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">RSVP</h2>
            <p className="text-white/90">
              Please confirm your attendance
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-indian-orange" />
                Full Name *
              </div>
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indian-orange focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-indian-orange" />
                Email Address *
              </div>
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indian-orange focus:outline-none transition-colors"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indian-orange" />
                Phone Number *
              </div>
            </label>
            <input
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\-\s()]{10,}$/,
                  message: 'Invalid phone number',
                },
              })}
              type="tel"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indian-orange focus:outline-none transition-colors"
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Attendance Radio */}
          <div>
            <label className="block text-gray-700 font-semibold mb-3">
              Will you be attending? *
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  {...register('attending', { required: 'Please select an option' })}
                  type="radio"
                  value="yes"
                  className="sr-only peer"
                />
                <div className="cursor-pointer px-6 py-3 border-2 border-gray-300 rounded-lg text-center font-semibold transition-all peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 hover:border-green-300">
                  ✓ Yes, I&apos;ll be there!
                </div>
              </label>
              <label className="flex-1">
                <input
                  {...register('attending', { required: 'Please select an option' })}
                  type="radio"
                  value="no"
                  className="sr-only peer"
                />
                <div className="cursor-pointer px-6 py-3 border-2 border-gray-300 rounded-lg text-center font-semibold transition-all peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-700 hover:border-red-300">
                  ✗ Sorry, can&apos;t make it
                </div>
              </label>
            </div>
            {errors.attending && (
              <p className="text-red-500 text-sm mt-1">{errors.attending.message}</p>
            )}
          </div>

          {/* Number of Guests (conditional) */}
          {attending === 'yes' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <label className="block text-gray-700 font-semibold mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indian-orange" />
                  Number of Guests *
                </div>
              </label>
              <select
                {...register('guests', {
                  required: attending === 'yes' ? 'Please select number of guests' : false,
                })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indian-orange focus:outline-none transition-colors"
              >
                <option value="">Select...</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
              {errors.guests && (
                <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
              )}
            </motion.div>
          )}

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message (Optional)
            </label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indian-orange focus:outline-none transition-colors resize-none"
              placeholder="Share your blessings and wishes..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-saffron via-indian-orange to-temple-red text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Submit RSVP
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}

