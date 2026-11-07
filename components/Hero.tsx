'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-surface-950 px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-accent">
            <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_0_4px_rgba(198,255,0,.22)]" />
            Built in Amman · Made for the MENA region
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="max-w-3xl font-heading text-[3.5rem] font-black uppercase leading-[.91] tracking-[-.065em] text-accent sm:text-7xl lg:text-[5.7rem] xl:text-[6.25rem]">
            We make<br />
            digital moves<br />
            <span className="relative inline-block text-lime-ink">
              matter<span className="text-lime-ink">.</span>
              <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-[.28em] w-[calc(100%+0.14em)] -rotate-2 rounded-sm bg-lime sm:-bottom-2" />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }} className="mt-7 max-w-xl text-base leading-7 text-surface-300 sm:text-lg sm:leading-8">
            {t('hero.subtitle')}
          </motion.p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a href="#contact" onClick={(event) => scrollTo(event, '#contact')} whileHover={{ y: -2 }} whileTap={{ scale: .98 }} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-7 text-sm font-bold text-accent shadow-[0_8px_24px_rgba(198,255,0,.24)] transition-shadow hover:shadow-[0_12px_32px_rgba(198,255,0,.35)]">
              Start a project <span aria-hidden="true">↗</span>
            </motion.a>
            <motion.a href="#portfolio" onClick={(event) => scrollTo(event, '#portfolio')} whileHover={{ y: -2 }} whileTap={{ scale: .98 }} className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/15 bg-white/55 px-7 text-sm font-semibold text-accent transition-colors hover:bg-white">
              Explore our work
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-accent/10 pt-6 sm:mt-12">
            {[
              { value: '7+', label: 'Years building' },
              { value: '50+', label: 'Projects delivered' },
              { value: '30+', label: 'Teams supported' },
            ].map((stat) => (
              <div key={stat.label} className="min-w-[88px]">
                <p className="font-heading text-2xl font-black tracking-tight text-accent">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.15em] text-surface-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .975 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="relative min-w-0">
          <div className="liquid-rim relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0B0B0B] sm:min-h-[520px] lg:min-h-[590px]">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_58%_46%,rgba(198,255,0,.17),transparent_40%),linear-gradient(145deg,rgba(255,255,255,.08),transparent_38%)]" />
            <div className="absolute left-5 top-5 z-10 flex items-center gap-3 sm:left-7 sm:top-7">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/15 bg-black">
                <Image src="/logo/creative-networks-mark-white.jpg" alt="" fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/60">Creative Networks</p>
                <p className="mt-1 text-xs font-medium text-white">Digital, with purpose.</p>
              </div>
            </div>

            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="brand-scene relative z-[1] h-[430px] w-full sm:h-[520px] lg:h-[590px]"
            />

            <div className="glass-dark absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:bottom-7 sm:left-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime font-heading text-sm font-black text-accent">7+</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/55">Years of experience</p>
                <p className="mt-1 text-sm font-semibold text-white">Made in Amman</p>
              </div>
            </div>
            <span aria-hidden="true" className="absolute bottom-8 right-8 z-10 hidden h-3 w-3 rounded-full bg-lime shadow-[0_0_28px_8px_rgba(198,255,0,.28)] sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
