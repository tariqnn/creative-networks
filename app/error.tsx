'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main text-text-primary">
      <div className="text-center">
        <h2 className="text-2xl font-heading mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-full border border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition-all"
        >
          Try again
        </button>
        {error.message && (
          <p className="mt-4 text-text-secondary text-sm">{error.message}</p>
        )}
      </div>
    </div>
  )
}

