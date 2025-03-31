"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute left-0 right-0 top-0 z-40 h-16 bg-transparent transition-colors duration-200 px-safe pt-safe">
      <div className="container relative z-10 mx-auto flex h-full items-center px-4 md:px-6" aria-label="Global">
        <Link className="transition-colors duration-200 transition-all duration-200" href="/">
          <span className="sr-only">AI Room Remodeling</span>
          <Image alt="Logo" src="/placeholder.svg?height=24&width=71" width={71} height={24} priority />
        </Link>

        <nav className="ml-[77px] hidden md:block">
          <ul className="flex">
            <li>
              <Link
                className="transition-colors duration-200 inline-flex whitespace-pre p-3 text-sm text-white transition-colors duration-200 hover:text-blue-400"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-200 inline-flex whitespace-pre p-3 text-sm text-white transition-colors duration-200 hover:text-blue-400"
                href="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-200 inline-flex whitespace-pre p-3 text-sm text-white transition-colors duration-200 hover:text-blue-400"
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-200 inline-flex whitespace-pre p-3 text-sm text-white transition-colors duration-200 hover:text-blue-400"
                href="/download"
              >
                Download
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex gap-x-3.5 md:gap-x-4">
          <Link
            className="transition-colors duration-200 leading-none hidden items-center text-sm text-white px-1.5 hover:text-gray-300 md:inline-flex"
            href="https://github.com/your-repo"
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
              className="mr-1.5 h-4 w-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Star Us
          </Link>

          <Link
            className="transition-colors duration-200 transition-all duration-200 uppercase font-bold hidden items-center justify-center h-8 px-4 text-xs border-button-grey relative text-white tracking-snug md:flex"
            href="/login"
          >
            Sign In
          </Link>

          <Link
            className="transition-colors duration-200 transition-all duration-200 uppercase font-bold hidden items-center justify-center h-8 px-4 text-xs border-button-grey relative text-white tracking-snug md:flex"
            href="/signup"
          >
            Get Started
          </Link>

          <button
            className="ml-auto md:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="relative block h-6 w-6">
              <span
                className={`absolute right-0 top-[3px] block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${mobileMenuOpen ? "rotate-45 top-[11px]" : ""}`}
              ></span>
              <span
                className={`absolute right-0 top-[11px] block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`absolute bottom-[3px] right-0 block h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 bottom-[11px]" : ""}`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-30 bg-gray-900 py-4 md:hidden">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  className="block py-2 text-white hover:text-blue-400"
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-white hover:text-blue-400"
                  href="/features"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-white hover:text-blue-400"
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-white hover:text-blue-400"
                  href="/download"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

