'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (end / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Experience() {
  const { t } = useLanguage()

  const stats = [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 15, suffix: '+', label: 'Tech Stacks' },
  ]

  return (
    <section className="py-28 sm:py-36 bg-surface-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero stat */}
        <Reveal className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-surface-50 leading-none mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-surface-400">
            {t('experience.subtitle')}
          </p>
        </Reveal>

        {/* Stat grid */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-white/15 p-px shadow-[0_28px_80px_rgba(11,11,11,.18)] lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0B0B0B] p-7 text-center transition-colors duration-300 hover:bg-[#1B1B18] sm:p-8 lg:p-12"
            >
              <p className="text-5xl sm:text-6xl font-heading font-black text-gradient mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-white/55">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
