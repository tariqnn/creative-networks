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
    <section className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white sm:py-36">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime">What clients say</p>
          <h2 className="text-4xl font-heading font-bold text-white sm:text-5xl">
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
              className="glass-dark rounded-[2rem] p-8 sm:p-14"
            >
              {/* Quote mark */}
              <svg className="mb-8 h-10 w-10 text-lime" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="mb-10 font-body text-xl font-light leading-relaxed text-white/80 sm:text-2xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-lime text-sm font-heading font-bold text-accent">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-white/55">
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
                    index === currentIndex ? 'w-8 bg-lime' : 'w-2 bg-white/30 hover:bg-white/60'
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
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full glass-dark text-white/65 transition-colors duration-200 hover:text-lime"
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
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full glass-dark text-white/65 transition-colors duration-200 hover:text-lime"
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
