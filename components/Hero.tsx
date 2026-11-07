'use client'

import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { useLanguage } from '@/contexts/LanguageContext'

const stats = [
  { value: '7+', label: 'Years building' },
  { value: '50+', label: 'Projects delivered' },
  { value: '30+', label: 'Teams supported' },
]

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-surface-950 px-5 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-5 lg:grid-cols-[.92fr_1.08fr] lg:gap-y-0">
        <div className="relative z-10 lg:col-start-1 lg:row-start-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .45 }}
            className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-surface-500 sm:mb-7 sm:text-xs"
          >
            <span className="h-px w-8 bg-lime-ink sm:w-10" />
            Amman, Jordan <span className="text-surface-400">/</span> Across MENA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .06 }}
            className="max-w-3xl font-heading text-[clamp(3.1rem,13.2vw,5.7rem)] font-black uppercase leading-[.88] tracking-[-.075em] text-accent lg:text-[5.6rem] xl:text-[6.15rem]"
          >
            <span className="sm:hidden">We make<br />digital<br />moves<br /></span>
            <span className="hidden sm:inline">We make<br />digital moves<br /></span>
            <span className="relative isolate inline-block text-lime-ink">
              matter<span className="text-lime-ink">.</span>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                animate={{ scaleX: 1 }}
                transition={{ duration: .55, delay: .48, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 -z-10 h-[.2em] w-[calc(100%+0.12em)] -rotate-2 rounded-sm bg-lime sm:-bottom-2"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .15 }}
            className="mt-5 max-w-lg text-sm leading-6 text-surface-300 sm:mt-7 sm:text-lg sm:leading-8"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7, delay: .12 }}
          className="relative min-w-0 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center"
        >
          <div className="relative min-h-[270px] overflow-hidden rounded-[1.5rem] border border-accent/5 bg-surface-900 sm:min-h-[420px] sm:rounded-[2rem] lg:min-h-[570px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="brand-scene relative z-[1] h-[270px] w-full sm:h-[420px] lg:h-[570px]"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2 lg:pt-8">
          <div className="flex flex-col gap-3 min-[420px]:flex-row">
            <motion.a
              href="#contact"
              onClick={(event) => scrollTo(event, '#contact')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-7 text-sm font-bold text-accent shadow-[0_8px_24px_rgba(198,255,0,.16)] transition-shadow hover:shadow-[0_12px_32px_rgba(198,255,0,.26)]"
            >
              Start a project <span aria-hidden="true">↗</span>
            </motion.a>
            <motion.a
              href="#portfolio"
              onClick={(event) => scrollTo(event, '#portfolio')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/15 px-7 text-sm font-semibold text-accent transition-colors hover:bg-white/70"
            >
              Explore our work
            </motion.a>
          </div>

          <div className="grid grid-cols-3 border-t border-accent/10 pt-5 sm:pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .45, delay: .3 + index * .1 }}
                className="min-w-0 border-r border-accent/10 pl-3 first:pl-0 last:border-0 sm:pl-5"
              >
                <p className="font-heading text-xl font-black tracking-tight text-accent sm:text-3xl">{stat.value}</p>
                <p className="mt-1 max-w-[100px] text-[8px] font-bold uppercase leading-3 tracking-[.12em] text-surface-500 sm:max-w-none sm:text-[10px] sm:tracking-[.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
