'use client'

import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

// Degrees of phone tilt that map to a full edge-to-edge pointer sweep.
const GYRO_RANGE = 25

type OrientationPermissionApi = {
  requestPermission: () => Promise<'granted' | 'denied'>
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const baseline = useRef<{ beta: number; gamma: number } | null>(null)
  const [needsGyroPermission, setNeedsGyroPermission] = useState(false)
  const [gyroActive, setGyroActive] = useState(false)

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (event.beta === null || event.gamma === null) return
    const canvas = containerRef.current?.querySelector('canvas')
    if (!canvas) return

    if (!baseline.current) {
      baseline.current = { beta: event.beta, gamma: event.gamma }
    }

    const nx = Math.max(-1, Math.min(1, (event.gamma - baseline.current.gamma) / GYRO_RANGE))
    const ny = Math.max(-1, Math.min(1, (event.beta - baseline.current.beta) / GYRO_RANGE))

    const rect = canvas.getBoundingClientRect()
    canvas.dispatchEvent(
      new PointerEvent('pointermove', {
        clientX: rect.left + rect.width / 2 + nx * (rect.width / 2),
        clientY: rect.top + rect.height / 2 + ny * (rect.height / 2),
        bubbles: true,
        cancelable: true,
      })
    )
  }, [])

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    const isMobileWidth = window.matchMedia('(max-width: 767px)').matches
    if (!isTouchDevice || !isMobileWidth) return

    const requestPermissionApi = (
      window.DeviceOrientationEvent as unknown as Partial<OrientationPermissionApi>
    )?.requestPermission

    if (typeof requestPermissionApi === 'function') {
      setNeedsGyroPermission(true)
    } else {
      setGyroActive(true)
    }
  }, [])

  useEffect(() => {
    if (!gyroActive) return
    window.addEventListener('deviceorientation', handleOrientation)
    return () => window.removeEventListener('deviceorientation', handleOrientation)
  }, [gyroActive, handleOrientation])

  const enableGyro = async () => {
    const requestPermissionApi = (
      window.DeviceOrientationEvent as unknown as OrientationPermissionApi
    ).requestPermission
    try {
      const result = await requestPermissionApi()
      if (result === 'granted') {
        setNeedsGyroPermission(false)
        setGyroActive(true)
      }
    } catch {
      // Permission dismissed or unsupported — the scene still works without tilt.
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Spline scene={scene} className="w-full h-full" />
      </Suspense>

      {needsGyroPermission && (
        <button
          type="button"
          onClick={enableGyro}
          className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-full glass border border-accent/30 text-accent-light text-[11px] font-semibold uppercase tracking-wider"
        >
          Tap to enable tilt
        </button>
      )}
    </div>
  )
}
