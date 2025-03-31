"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface GlowingButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function GlowingButton({ href, children, className = "" }: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative inline-flex items-center z-10">
      <div
        className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <div className="border-button-light relative h-full w-full rounded-full"></div>
      </div>

      <div
        className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 scale-x-[-1] transform rounded-full will-change-transform"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="border-button-light relative h-full w-full rounded-full"></div>
      </div>

      <Link
        className={`transition-colors duration-200 transition-all duration-200 uppercase font-bold flex items-center justify-center h-10 px-16 text-12 text-black -tracking-[0.015em] relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] space-x-1 ${className}`}
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute -z-10 flex w-[204px] items-center justify-center"
          style={{ transform: "translateX(105px) translateZ(0)" }}
        >
          <div className="absolute top-1/2 h-[121px] w-[121px] -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)]"></div>
          <div className="absolute top-1/2 h-[103px] w-[204px] -translate-y-1/2 bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]"></div>
        </div>

        {children}
      </Link>
    </div>
  )
}

