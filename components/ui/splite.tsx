'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [nearViewport, setNearViewport] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setNearViewport(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true)
          observer.disconnect()
        }
      },
      { rootMargin: '320px 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`}>
      {nearViewport ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center" aria-label="Loading 3D robot" role="status">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
            </div>
          }
        >
          <Spline scene={scene} className="h-full w-full" />
        </Suspense>
      ) : null}
    </div>
  )
}
