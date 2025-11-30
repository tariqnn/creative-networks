'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'

const portfolioItems = [
  {
    label: 'Sports Academy Platform',
    name: 'SD13',
    description:
      'A modern sports academy platform with high-performance landing page and full administrative system for content and athlete management.',
    impact:
      'Increased online registrations by 45% and reduced manual coordination time for coaches by 30%.',
    features: [
      'High-speed landing page',
      'Full admin panel',
      'Multi-role permissions',
      'Analytics tracking',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/clients/client-1.png',
  },
  {
    label: 'Full Facility System',
    name: 'Infinity Sport',
    description:
      'Complete system for the whole facility including landing page, finance management for tracking payments and invoices, and internal portal for staff operations.',
    impact:
      'Cut payment tracking time in half and gave management real-time visibility on all revenue streams.',
    features: [
      'Landing page',
      'Finance dashboard',
      'Internal portal',
      'Real-time metrics',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: '/clients/client 3.jpeg',
  },
  {
    label: 'Healthcare Mobile App',
    name: 'Sahati Link',
    subtitle: 'Mustashfa Amal Hospital',
    description:
      'Healthcare communication system connecting patients with doctors through chat, calls, and secure HD video consultations with online booking.',
    impact:
      'Reduced missed appointments by 35% and improved patient response times with instant communication tools.',
    features: [
      'Real-time communication',
      'HD video calls',
      'Online appointments',
      'HIPAA-grade security',
    ],
    tech: ['React Native', 'Node.js', 'WebRTC', 'MongoDB', 'AWS'],
    image: '/clients/client-2.png',
  },
  {
    label: 'E-Commerce Platform',
    name: 'Nexora Market',
    tagline: 'A high-performance ecommerce engine built for scale and real-time reliability.',
    description:
      'We developed an advanced ecommerce platform featuring secure user authentication, dynamic product listings, and a seamless cart and checkout experience. Firebase was integrated for real-time stock and order updates, and AWS ensured enterprise-level performance.',
    impact:
      '40% faster load times, reduced cart abandonment, and zero overselling thanks to real-time data syncing.',
    features: [
      'Secure authentication & role-based management',
      'Live inventory and order syncing',
      'Dynamic product catalog',
      'Optimized checkout flow',
    ],
    tech: ['Laravel', 'React', 'JavaScript', 'AWS', 'Firebase'],
    image: undefined, // Add /clients/nexora.png when available
  },
  {
    label: 'Social Media Analytics Dashboard',
    name: 'PulseMetrics',
    tagline: 'A real-time analytics dashboard built for content creators and marketing teams.',
    description:
      'We built a clean and intuitive dashboard that visualizes engagement, impressions, reach trends, and content KPIs in real-time. TypeScript ensured reliability while Google Cloud delivered global performance.',
    impact:
      'Teams reduced reporting time by 70% and gained actionable insights instantly.',
    features: [
      'Real-time analytics and charts',
      'Engagement and content performance tracking',
      'Multi-channel integration',
      'Clean UI with smooth transitions',
    ],
    tech: ['React', 'TypeScript', 'Google Cloud'],
    image: undefined,
  },
  {
    label: 'Gym Website & Mobile App',
    name: 'FlexMotion Fitness',
    tagline: 'A unified mobile and web platform for modern gyms.',
    description:
      'We designed a responsive website and Flutter mobile app with class scheduling, membership management, and personal workout plans. Firebase powered secure authentication and instant updates across all devices.',
    impact:
      'Class bookings increased by 52% and user engagement dramatically improved.',
    features: [
      'Class booking and scheduling',
      'Membership and subscription management',
      'Personalized workout programs',
      'Real-time push notifications',
    ],
    tech: ['Flutter', 'Firebase'],
    image: undefined,
  },
  {
    label: 'AI-Powered CRM Dashboard',
    name: 'Skyline Enterprises',
    tagline: 'An intelligent CRM system powered by automation and AI insights.',
    description:
      'We built a full enterprise CRM system with AI-driven lead scoring, automated email drafting, document summarization, and sentiment analysis. Designed dashboards for Sales, Support, and Management teams.',
    impact:
      'Response times dropped to under 30 seconds and closures improved by 38%.',
    features: [
      'AI-powered lead scoring',
      'Smart email drafting and auto-replies',
      'Advanced reporting dashboards',
      'Secure role-based access',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    image: undefined,
  },
  {
    label: 'Online Learning & Examination Platform',
    name: 'EduNova Academy',
    tagline: 'A complete LMS with real-time proctored online exams.',
    description:
      'We developed a robust LMS with video lectures, assignments, quizzes, student analytics, and administrator dashboards. Integrated a real-time WebRTC proctoring system to eliminate cheating.',
    impact:
      'Hosted over 4,000 students in the first month and reduced admin workload by 70%.',
    features: [
      'Video courses and progress tracking',
      'Online exams with webcam monitoring',
      'Certificates and achievements system',
      'AI-powered study recommendations',
    ],
    tech: ['MERN Stack', 'WebRTC'],
    image: undefined,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4">
            A Closer Look at What We&apos;ve Built
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary font-body">
            Strategy → Design → Build → Launch
          </p>
        </Reveal>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: 2,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="bg-gradient-to-br from-bg-dark to-bg-main rounded-xl overflow-hidden shadow-xl hover:shadow-accent-primary/20 transition-all duration-300"
            >
              {/* Client Image */}
              {item.image && (
                <div className="relative h-48 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 flex items-center justify-center p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={120}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 lg:p-6">
                <p className="text-xs uppercase tracking-wider text-accent-success font-semibold mb-1.5">
                  {item.label}
                </p>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  {item.name}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-text-secondary/70 font-body mb-3">
                    {item.subtitle}
                  </p>
                )}
                {item.tagline && (
                  <p className="text-xs font-medium text-accent-primary/90 font-body mb-4 leading-relaxed italic">
                    {item.tagline}
                  </p>
                )}
                <p className="text-sm text-text-secondary font-body mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Impact */}
                <div className="mb-4">
                  <h4 className="text-xs font-heading font-semibold text-accent-secondary mb-1">
                    Impact
                  </h4>
                  <p className="text-xs text-text-secondary/90 font-body leading-relaxed">
                    {item.impact}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-xs font-heading font-semibold text-accent-primary mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-text-secondary font-body flex items-start gap-2"
                      >
                        <span className="text-accent-success mt-0.5 text-[10px]">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium bg-white/10 text-text-secondary rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
