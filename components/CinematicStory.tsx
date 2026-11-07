'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function CinematicStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const [play, setPlay] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const copyY = useTransform(scrollYProgress, [0, 1], [28, -28])

  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          observer.disconnect()
        }
      },
      { rootMargin: '160px 0px' }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className="relative min-h-[165svh] px-4 py-12 sm:min-h-[175svh] sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-24 h-[70svh] min-h-[440px] max-h-[780px] overflow-hidden rounded-[1.5rem] bg-accent sm:top-28 sm:h-[76svh] sm:rounded-[2rem]">
          <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { scale: imageScale }}>
            <Image
              src="/projects/playup-discovery.jpg"
              alt="Friends meeting for a game on an outdoor football pitch"
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
              priority={false}
            />
            {play && (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/football-training-film.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                onCanPlay={() => setVideoReady(true)}
                onError={() => setPlay(false)}
              />
            )}
          </motion.div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/5" />

          <motion.div
            style={reduceMotion ? undefined : { y: copyY }}
            className="relative z-10 flex h-full max-w-3xl flex-col justify-end p-6 pb-12 text-white sm:p-10 sm:pb-14 lg:p-14"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: .55 }}
              className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-white/75 sm:text-xs"
            >
              <span className="h-px w-8 bg-lime" /> Built around real life
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: .65, delay: .08 }}
              className="max-w-2xl font-heading text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl lg:text-7xl"
            >
              Good technology<br className="hidden sm:block" /> gets people moving.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: .5, delay: .18 }}
              className="mt-6 flex flex-col items-start gap-5 min-[480px]:flex-row min-[480px]:items-center"
            >
              <p className="max-w-sm text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                We build digital experiences that help people find a place, join a team, and turn plans into action.
              </p>
              <a
                href="#portfolio"
                className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full bg-lime px-6 text-sm font-bold text-accent transition-transform hover:-translate-y-0.5"
              >
                See what we build <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
            <a
              href="https://www.pexels.com/video/football-players-training-on-the-field-6078275/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-fit text-[9px] text-white/55 underline decoration-white/30 underline-offset-2 hover:text-white/80"
            >
              Film footage: Tima Miroshnichenko / Pexels
            </a>
          </motion.div>
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
            <motion.div className="h-full origin-left bg-lime" style={{ scaleX: reduceMotion ? 0 : scrollYProgress }} />
          </div>
        </div>
      </div>
    </section>
  )
}
