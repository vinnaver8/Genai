"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function GithubSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative z-20 overflow-hidden bg-[#111111] pb-24 pt-24 px-safe md:py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="max-w-2xl font-title text-5xl font-medium leading-[0.9] tracking-tight text-white md:text-6xl lg:text-7xl">
          Sync with GitHub. Both ways.
        </h2>
        <p className="mt-4 max-w-[580px] leading-snug tracking-tight text-gray-400">
          Manage your projects efficiently with our bidirectional GitHub synchronization. Use our platform as an
          advanced front-end for GitHub Issues and GitHub Projects.
        </p>

        <div
          className="relative -z-10 mt-16 aspect-video w-full rounded-xl border-2 border-transparent transition-all duration-300 md:mt-12"
          style={{
            borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
            boxShadow: isHovered ? "0 0 30px rgba(0, 112, 243, 0.3)" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="GitHub integration"
            width={1280}
            height={720}
            className="h-full w-full rounded-xl object-cover"
          />

          {isHovered && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff4800]/10 to-[#0070f3]/10"></div>
          )}
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <li className="relative">
            <div className="relative after:pointer-events-none after:absolute after:-left-2 after:-top-2 after:h-8 after:w-8 after:rounded-[50%] after:bg-[linear-gradient(180deg,#478BEB_60%,rgba(71,139,235,0)_100%)] after:opacity-60 after:mix-blend-plus-lighter after:blur-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-blue-400"
              >
                <path d="M12 2v8"></path>
                <path d="m16 6-4 4-4-4"></path>
                <path d="M8 16H6a2 2 0 0 1-2-2v-4"></path>
                <path d="M16 16h2a2 2 0 0 0 2-2v-4"></path>
                <path d="M10 20H6a2 2 0 0 1-2-2"></path>
                <path d="M14 20h4a2 2 0 0 0 2-2"></path>
              </svg>
            </div>
            <h3 className="mt-5 font-title text-2xl leading-none tracking-tight text-white">Two-way synchronization</h3>
            <p className="mt-3 text-sm font-light leading-snug tracking-tight text-gray-400">
              Integrate your project with GitHub to sync changes instantly in both directions.
            </p>
          </li>

          <li className="relative">
            <div className="relative after:pointer-events-none after:absolute after:-left-2 after:-top-2 after:h-8 after:w-8 after:rounded-[50%] after:bg-[linear-gradient(180deg,#478BEB_60%,rgba(71,139,235,0)_100%)] after:opacity-60 after:mix-blend-plus-lighter after:blur-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-blue-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="mt-5 font-title text-2xl leading-none tracking-tight text-white">Private projects</h3>
            <p className="mt-3 text-sm font-light leading-snug tracking-tight text-gray-400">
              Secure integration and management of multiple data repositories effectively.
            </p>
          </li>

          <li className="relative">
            <div className="relative after:pointer-events-none after:absolute after:-left-2 after:-top-2 after:h-8 after:w-8 after:rounded-[50%] after:bg-[linear-gradient(180deg,#478BEB_60%,rgba(71,139,235,0)_100%)] after:opacity-60 after:mix-blend-plus-lighter after:blur-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-blue-400"
              >
                <path d="M3 3v18h18"></path>
                <path d="m7 17 4-4 4 4 6-6"></path>
              </svg>
            </div>
            <h3 className="mt-5 font-title text-2xl leading-none tracking-tight text-white">Track progress</h3>
            <p className="mt-3 text-sm font-light leading-snug tracking-tight text-gray-400">
              Keep track of GitHub contributions and changes within your workspace.
            </p>
          </li>
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://github.com/your-repo"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white transition-colors hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

