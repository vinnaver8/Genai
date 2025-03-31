import Link from "next/link"

export default function Footer() {
  return (
    <footer className="absolute bottom-0 z-10 w-full overflow-hidden py-4 px-safe">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 text-sm leading-none tracking-tight md:px-6">
        <p className="text-gray-400 md:order-1 sm:mt-2 sm:w-full sm:text-center">
          <span>
            Copyright © {new Date().getFullYear()}{" "}
            <a
              className="transition-colors duration-200 hover:text-white"
              href="https://yourcompany.com"
              aria-label="Your Company"
              target="_blank"
              rel="noopener noreferrer"
            >
              Your Company
            </a>
          </span>
          <span className="ml-1">. All rights reserved.</span>
        </p>

        <ul className="z-10 ml-[70px] flex items-center gap-x-6 md:order-3 md:ml-0 md:w-1/2 md:justify-end sm:mt-4 sm:w-full sm:justify-center">
          <li>
            <Link
              className="transition-colors duration-200 leading-none inline-flex items-center text-sm text-gray-400 tracking-tight hover:text-white"
              href="/terms"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors duration-200 leading-none inline-flex items-center text-sm text-gray-400 tracking-tight hover:text-white"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>

        <ul className="ml-auto flex gap-x-4 md:order-2 md:ml-0 md:w-1/2 sm:w-full sm:justify-center">
          <li>
            <a
              className="transition-colors duration-200"
              href="https://twitter.com/your-handle"
              aria-label="Twitter"
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
                className="h-4.5 w-4.5 translate-y-0 text-gray-400 opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="transition-colors duration-200"
              href="https://github.com/your-repo"
              aria-label="Github"
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
                className="h-4.5 w-4.5 translate-y-0 text-gray-400 opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

