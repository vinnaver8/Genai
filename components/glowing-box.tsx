"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface GlowingBoxProps {
  children: React.ReactNode
}

export function GlowingBox({ children }: GlowingBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let angle = 0
    let animationFrameId: number

    const animate = () => {
      angle = (angle + 0.2) % 360
      if (container) {
        container.style.background = `conic-gradient(
          from ${angle}deg,
          transparent 0%,
          #ff4800 10%,
          #ff4800 35%,
          transparent 40%,
          transparent 60%,
          #0070f3 65%,
          #0070f3 90%,
          transparent 95%
        )`
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative rounded-xl p-1">
      <div
        ref={containerRef}
        className="absolute inset-0 rounded-xl"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0%,
            #ff4800 10%,
            #ff4800 35%,
            transparent 40%,
            transparent 60%,
            #0070f3 65%,
            #0070f3 90%,
            transparent 95%
          )`,
        }}
      ></div>
      <div className="relative z-10 overflow-hidden rounded-lg">{children}</div>
    </div>
  )
}

