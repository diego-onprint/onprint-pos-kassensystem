'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <h2 className="text-xl font-semibold">{error.message}</h2>
      <button onClick={ () => reset()} className="secondary-button py-2 px-2">
        Try again
      </button>
    </div>
  )
}