'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Creative Networks transformed our digital presence. Their attention to detail and commitment to excellence is unmatched. The team delivered beyond our expectations.',
    name: 'Samer Nino',
    role: 'Infinity Sports',
    initials: 'SN',
  },
  {
    quote: 'Working with Creative Networks has been a game-changer. They understood our vision and brought it to life with innovative solutions and flawless execution.',
    name: 'Sam Daghlas',
    role: 'SD13',
    initials: 'SD',
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

  return (
    <section className="py-28 sm:py-36 bg-surface-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">What clients say</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-50">
            Trusted by builders
          </h2>
        </div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction === 'next' ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'next' ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-10 sm:p-14"
            >
              {/* Quote mark */}
              <svg className="w-10 h-10 text-accent/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-xl sm:text-2xl text-surface-200 font-body leading-relaxed mb-10 font-light">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-surface-50">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-surface-500 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setDirection(index > currentIndex ? 'next' : 'prev'); setCurrentIndex(index) }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-surface-700 hover:bg-surface-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-surface-400 hover:text-surface-50 transition-colors duration-200 cursor-pointer"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-surface-400 hover:text-surface-50 transition-colors duration-200 cursor-pointer"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
