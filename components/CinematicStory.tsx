'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ProductVisual from '@/components/ProductVisual'

const scenes = [
  { kind: 'web' as const, step: '01 / DESIGN', title: 'Start with the right question.', copy: 'We turn a business challenge into a clear, useful digital experience.' },
  { kind: 'mobile' as const, step: '02 / BUILD', title: 'Make every interaction count.', copy: 'Web and mobile products shaped around how people actually work and live.' },
  { kind: 'systems' as const, step: '03 / CONNECT', title: 'Give good ideas room to grow.', copy: 'Reliable platforms and connected systems, ready for what comes next.' },
]

export default function CinematicStory() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const opacities = [
    useTransform(scrollYProgress, [0, .08, .28, .39], [1, 1, 0, 0]),
    useTransform(scrollYProgress, [.28, .4, .59, .72], [0, 1, 1, 0]),
    useTransform(scrollYProgress, [.6, .73, 1], [0, 1, 1]),
  ]

  return (
    <section ref={ref} className="relative min-h-[220svh] bg-[#e8eef0] text-[#183b57]">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold tracking-[.22em] text-[#55738a] sm:text-xs"><span className="h-px w-8 bg-[#97c65b]"/> BUILT IN AMMAN · MADE FOR THE REGION</p>
            <h2 className="max-w-xl font-heading text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">Technology should feel <span className="text-[#749c43]">simple.</span></h2>
            <div className="relative mt-8 min-h-[106px] sm:mt-12">
              {scenes.map((scene, i) => <motion.div key={scene.step} style={reduced ? { opacity: i === 0 ? 1 : 0 } : { opacity: opacities[i] }} className="absolute inset-0">
                <p className="text-[10px] font-bold tracking-[.2em] text-[#7d919d]">{scene.step}</p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{scene.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#587082] sm:text-base">{scene.copy}</p>
              </motion.div>)}
            </div>
            <a href="#portfolio" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#183b57] px-5 text-sm font-semibold text-white transition hover:bg-[#285a78]">Explore our work <span aria-hidden="true">↗</span></a>
            <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-[#c8d4d9]"><motion.div className="h-full origin-left rounded-full bg-[#97c65b]" style={{ scaleX: reduced ? 1 : scrollYProgress }} /></div>
          </div>
          <div className="relative h-[36vh] min-h-[250px] sm:h-[48vh] sm:min-h-[360px] lg:h-[62vh]">
            {scenes.map((scene, i) => <motion.div key={scene.step} style={reduced ? { opacity: i === 0 ? 1 : 0 } : { opacity: opacities[i] }} className="absolute inset-0 overflow-hidden rounded-2xl border border-[#cbd7dc] shadow-[0_30px_80px_-44px_rgba(24,59,87,.5)] sm:rounded-3xl">
              <ProductVisual kind={scene.kind} />
            </motion.div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
