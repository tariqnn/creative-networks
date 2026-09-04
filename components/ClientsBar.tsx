'use client'

import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'

const clients = [
  { name: 'SD13', logo: '/clients/client-1.png' },
  { name: 'Sahati Link', logo: '/clients/client-2.png' },
  { name: 'Infinity Sport', logo: '/clients/client 3.jpeg' },
]

const duplicatedClients = [...clients, ...clients, ...clients, ...clients]

export default function ClientsBar() {
  return (
    <section className="py-20 bg-surface-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-surface-600">
            Trusted by industry leaders
          </p>
        </Reveal>

        {/* Scrolling strip with fade edges */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface-900 to-transparent pointer-events-none" />

          <div
            className="flex gap-16 items-center animate-scroll"
            onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
            onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-28 h-14 md:w-36 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={144}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
