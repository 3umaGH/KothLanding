import { useEffect, useState } from 'react'

export function useBreakPoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('')

  const handleResize = () => {
    const width = window.innerWidth

    switch (true) {
      case width >= 1536:
        setCurrentBreakpoint('xl')
        break
      case width >= 1280:
        setCurrentBreakpoint('xl')
        break
      case width >= 1024:
        setCurrentBreakpoint('lg')
        break
      case width >= 768:
        setCurrentBreakpoint('md')
        break
      default:
        setCurrentBreakpoint('sm')
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return currentBreakpoint
}
