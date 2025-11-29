'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Creative Networks transformed our digital presence. Their attention to detail and commitment to excellence is unmatched. The team delivered beyond our expectations.',
    name: 'Murad Q.',
    role: 'COO – Casio Jordan',
    image: '/api/placeholder/80/80',
  },
  {
    quote:
      'Working with Creative Networks has been a game-changer. They understood our vision and brought it to life with innovative solutions and flawless execution.',
    name: 'Sarah Al-Mansouri',
    role: 'CEO – TechVentures',
    image: '/api/placeholder/80/80',
  },
  {
    quote:
      'The professionalism and technical expertise of Creative Networks is outstanding. They delivered a complex system on time and within budget.',
    name: 'Ahmed Hassan',
    role: 'CTO – Digital Solutions',
    image: '/api/placeholder/80/80',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const nextTestimonial = () => {
    setDirection('next')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection('prev')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 sm:py-32 bg-bg-main relative overflow-hidden">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-primary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent-secondary/15 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.16)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Testimonial Card */}
          <div className="flex-1 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 'next' ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'next' ? -40 : 40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12"
              >
                <p className="text-lg sm:text-xl text-text-dark font-body leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
                  <div>
                    <p className="font-heading font-bold text-text-dark">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-text-dark/70 font-body text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'next' : 'prev')
                    goToTestimonial(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  animate={{
                    scale: index === currentIndex ? 1.1 : 1,
                    opacity: index === currentIndex ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.16)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Arrows */}
        <div className="sm:hidden flex justify-center gap-4 mt-6">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.16)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.16)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

