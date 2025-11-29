'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'

// Client logos
const clients = [
  { name: 'Client 1', logo: '/clients/client-1.png' },
  { name: 'Client 2', logo: '/clients/client-2.png' },
  { name: 'Client 3', logo: '/clients/client 3.jpeg' },
]

// Duplicate clients for seamless loop
const duplicatedClients = [...clients, ...clients]

export default function ClientsBar() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            Trusted by Industry Leaders
          </p>
        </Reveal>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-12 items-center animate-scroll"
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
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

