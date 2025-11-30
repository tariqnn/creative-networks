'use client'

import { useEffect } from 'react'

/**
 * ChunkLoadError Handler
 * Handles chunk loading errors gracefully by reloading the page
 * This is a last-resort UX fix after fixing root cause with correct asset paths
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let hasReloaded = false

    const handleError = (event: ErrorEvent) => {
      const message = event.message || ''
      const isChunkError = 
        message.includes('ChunkLoadError') ||
        message.includes('Loading chunk') ||
        message.includes('Failed to fetch dynamically imported module') ||
        (event.target && 
         (event.target as HTMLElement).tagName === 'SCRIPT' && 
         (event.target as HTMLScriptElement).src?.includes('_next/static'))

      if (isChunkError && !hasReloaded) {
        hasReloaded = true
        console.warn('ChunkLoadError detected, reloading page...')
        // Small delay to prevent infinite reload loops
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    }

    window.addEventListener('error', handleError, true)

    return () => {
      window.removeEventListener('error', handleError, true)
    }
  }, [])

  return null
}

