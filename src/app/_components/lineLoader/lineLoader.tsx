'use client'

import { useEffect, useState } from 'react'
import './lineLoader.scss'

interface LineLoaderProps {
  isLoading?: boolean
}

export default function LineLoader({ isLoading = false }: LineLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const animationDuration = 1000

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true)
    }

    // ensure a full cycle is completed
    const timer = setInterval(() => {
      if (!isLoading) {
        setIsVisible(false)
      }
    }, animationDuration)

    return () => {
      clearInterval(timer)
    }
  }, [isLoading])

  if (!isVisible && !isLoading) return null

  return (
    <div className="lineLoaderWrap">
      <div className="lineLoader" />
    </div>
  )
}
