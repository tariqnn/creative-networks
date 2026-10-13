'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'

const portfolioItems = [
  {
    label: 'Sports Website & Mobile App',
    name: 'PlayUp',
    description: 'A sports platform built for Amman, bringing players together to find games, book sports venues, join tournaments, and connect with the local community through its website and companion mobile app.',
    impact: 'A connected digital experience for discovering and taking part in local sports.',
    features: ['Discover football, basketball, dodgeball, and tennis', 'Find games and book a place', 'Explore venues and sports academies', 'Tournaments, leaderboards, and community'],
    tech: ['Next.js', 'PostgreSQL', 'Flutter', 'Firebase'],
    image: '/projects/playup.svg',
    accentColor: 'from-accent/10 to-transparent',
    metricColor: 'text-accent',
    metric: 'Website + App',
    metricLabel: 'Digital Platforms',
    link: 'https://palyo.vercel.app/',
  },
  {
    label: 'Sports Academy Platform',
    name: 'SD13',
    description: 'A modern sports academy platform with high-performance landing page and full administrative system for content and athlete management.',
    impact: 'Increased online registrations by 45% and reduced manual coordination time for coaches by 30%.',
    features: ['High-speed landing page', 'Full admin panel', 'Multi-role permissions', 'Analytics tracking'],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/clients/client-1.png',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+45%',
    metricLabel: 'Registrations',
  },
  {
    label: 'Full Facility System',
    name: 'Infinity Sports',
    description: 'Complete system for the whole facility including landing page, finance management for tracking payments and invoices, and internal portal for staff operations.',
    impact: 'Cut payment tracking time in half and gave management real-time visibility on all revenue streams.',
    features: ['Landing page', 'Finance dashboard', 'Internal portal', 'Real-time metrics'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: '/clients/client 3.jpeg',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '50%',
    metricLabel: 'Time Saved',
  },
  {
    label: 'Healthcare Mobile App',
    name: 'Sahati Link',
    description: 'Healthcare communication system connecting patients with doctors through chat, calls, and secure HD video consultations with online booking.',
    impact: 'Reduced missed appointments by 35% and improved patient response times with instant communication tools.',
    features: ['Real-time communication', 'HD video calls', 'Online appointments', 'HIPAA-grade security'],
    tech: ['React Native', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    image: '/clients/client-2.png',
    accentColor: 'from-emerald/20 to-transparent',
    metricColor: 'text-emerald',
    metric: '-35%',
    metricLabel: 'Missed Appts',
  },
  {
    label: 'E-Commerce Platform',
    name: 'Nexora Market',
    description: 'Advanced ecommerce platform featuring secure user authentication, dynamic product listings, and a seamless cart and checkout experience with real-time stock syncing.',
    impact: '40% faster load times, reduced cart abandonment, and zero overselling thanks to real-time data syncing.',
    features: ['Secure auth & role management', 'Live inventory syncing', 'Dynamic product catalog', 'Optimized checkout'],
    tech: ['Laravel', 'React', 'JavaScript', 'AWS', 'Firebase'],
    image: '/projects/nexora-market.svg',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+40%',
    metricLabel: 'Faster Loads',
  },
  {
    label: 'Social Media Analytics',
    name: 'PulseMetrics',
    description: 'A real-time analytics dashboard that visualizes engagement, impressions, reach trends, and content KPIs for content creators and marketing teams.',
    impact: 'Teams reduced reporting time by 70% and gained actionable insights instantly.',
    features: ['Real-time analytics', 'Content performance tracking', 'Multi-channel integration', 'Smooth transitions'],
    tech: ['React', 'TypeScript', 'Google Cloud'],
    image: '/projects/pulsemetrics.svg',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '-70%',
    metricLabel: 'Report Time',
  },
  {
    label: 'Gym Website & Mobile App',
    name: 'FlexMotion Fitness',
    description: 'A responsive website and Flutter mobile app with class scheduling, membership management, and personal workout plans powered by Firebase.',
    impact: 'Class bookings increased by 52% and user engagement dramatically improved.',
    features: ['Class booking & scheduling', 'Membership management', 'Personalized programs', 'Push notifications'],
    tech: ['Flutter', 'Firebase'],
    image: '/projects/flexmotion.svg',
    accentColor: 'from-emerald/20 to-transparent',
    metricColor: 'text-emerald',
    metric: '+52%',
    metricLabel: 'Bookings',
  },
  {
    label: 'AI-Powered CRM',
    name: 'Skyline Enterprises',
    description: 'Full enterprise CRM with AI-driven lead scoring, automated email drafting, document summarization, and sentiment analysis across Sales, Support, and Management.',
    impact: 'Response times dropped to under 30 seconds and closures improved by 38%.',
    features: ['AI lead scoring', 'Smart email drafting', 'Advanced reporting', 'Role-based access'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    image: '/projects/skyline-crm.svg',
    accentColor: 'from-accent/20 to-transparent',
    metricColor: 'text-accent-light',
    metric: '+38%',
    metricLabel: 'Close Rate',
  },
  {
    label: 'Online Learning Platform',
    name: 'EduNova Academy',
    description: 'A robust LMS with video lectures, assignments, quizzes, student analytics, and a real-time WebRTC proctoring system for online examinations.',
    impact: 'Hosted over 4,000 students in the first month and reduced admin workload by 70%.',
    features: ['Video courses', 'Webcam-proctored exams', 'Certificates & achievements', 'AI study recommendations'],
    tech: ['MERN Stack', 'WebRTC'],
    image: '/projects/edunova.svg',
    accentColor: 'from-cyan/20 to-transparent',
    metricColor: 'text-cyan',
    metric: '4,000+',
    metricLabel: 'Students',
  },
]

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-surface-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{ backgroundImage: 'linear-gradient(rgba(18,58,91,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,58,91,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Our work</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-surface-50 leading-tight max-w-2xl">
            A closer look at what we&apos;ve built
          </h2>
          <p className="mt-4 text-surface-400 text-lg">Strategy → Design → Build → Launch</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.slice(0, showAll ? portfolioItems.length : 3).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group cursor-default flex flex-col"
            >
              {/* Client logo or gradient header */}
              <div className={`relative h-40 bg-gradient-to-b ${item.accentColor} flex items-center justify-center p-8`}>
                {item.image ? (
                  item.image.startsWith('/projects/') ? (
                    <Image src={item.image} alt={`${item.name} project artwork`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={90}
                      className="object-contain max-h-24 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    />
                  )
                ) : (
                  <div className="text-center">
                    <p className={`text-4xl font-heading font-black ${item.metricColor} leading-none`}>{item.metric}</p>
                    <p className="text-xs text-surface-500 mt-1 uppercase tracking-wider">{item.metricLabel}</p>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-500 mb-1">
                  {item.label}
                </p>
                <h3 className="text-lg font-heading font-bold text-surface-50 mb-3">
                  {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{item.name} ↗</a> : item.name}
                </h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-5 flex-1">
                  {item.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 rounded-xl bg-surface-800/60 border border-surface-700/50">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-surface-500 mb-1">Impact</p>
                  <p className="text-xs text-surface-300 leading-relaxed">{item.impact}</p>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-surface-400">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-surface-800 text-surface-500 border border-surface-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {portfolioItems.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((shown) => !shown)}
              aria-expanded={showAll}
              className="rounded-full border border-accent/20 bg-white px-7 py-3 text-sm font-semibold text-accent shadow-sm transition-colors hover:bg-accent hover:text-white"
            >
              {showAll ? 'Show fewer projects' : `See more projects (${portfolioItems.length - 3})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
