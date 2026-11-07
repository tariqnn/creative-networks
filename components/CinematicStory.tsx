'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const scenes = [
  { step: 'story.step1', title: 'story.title1', copy: 'story.copy1', image: '/photography/story-design.jpg', alt: 'story.alt1' },
  { step: 'story.step2', title: 'story.title2', copy: 'story.copy2', image: '/photography/service-mobile.jpg', alt: 'story.alt2' },
  { step: 'story.step3', title: 'story.title3', copy: 'story.copy3', image: '/photography/service-systems.jpg', alt: 'story.alt3' },
]

export default function CinematicStory() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const opacities = [
    useTransform(scrollYProgress, [0, .08, .28, .39], [1, 1, 0, 0]),
    useTransform(scrollYProgress, [.28, .4, .59, .72], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [.6, .73, 1], [0, 1, 1]),
  ]

  return (
    <section ref={ref} className="relative min-h-[220svh] bg-[#f3f7f8] text-[#183b57]">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[.22em] text-[#55738a] sm:text-xs"><span className="h-px w-8 bg-[#97c65b]" />{t('story.eyebrow')}</p>
            <h2 className="max-w-xl font-heading text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">{t('story.heading')}</h2>
            <div className="relative mt-8 min-h-[114px] sm:mt-12">
              {scenes.map((scene, i) => <motion.div key={scene.step} style={reduced ? { opacity: i === 0 ? 1 : 0 } : { opacity: opacities[i] }} className="absolute inset-0">
                <p className="text-[10px] font-bold tracking-[.2em] text-[#7d919d]">{t(scene.step)}</p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{t(scene.title)}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#587082] sm:text-base">{t(scene.copy)}</p>
              </motion.div>)}
            </div>
            <a href="#portfolio" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#183b57] px-5 text-sm font-semibold text-white transition hover:bg-[#285a78]">{t('story.button')} <span aria-hidden="true">↗</span></a>
            <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-[#c8d4d9]"><motion.div className="h-full origin-left rounded-full bg-[#97c65b]" style={{ scaleX: reduced ? 1 : scrollYProgress }} /></div>
          </div>
          <div className="relative h-[36vh] min-h-[250px] sm:h-[48vh] sm:min-h-[360px] lg:h-[62vh]">
            {scenes.map((scene, i) => <motion.div key={scene.step} style={reduced ? { opacity: i === 0 ? 1 : 0 } : { opacity: opacities[i] }} className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_30px_80px_-44px_rgba(24,59,87,.38)] sm:rounded-3xl">
              <Image src={scene.image} alt={t(scene.alt)} fill priority={i === 0} sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#102f48]/35 via-transparent to-transparent" />
            </motion.div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
