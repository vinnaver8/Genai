import Image from "next/image"
import Link from "next/link"
import { GlowingButton } from "@/components/glowing-button"
import { GlowingBox } from "@/components/glowing-box"
import { GithubSection } from "@/components/github-section"

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="hero relative h-[100vh] overflow-hidden bg-gray-950 pt-[120px]">
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-30 mx-auto flex h-full flex-col px-4 md:px-6">
          <h1 className="relative z-30 max-w-[616px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-6xl font-semibold leading-[0.9] tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Everything App for your teams
          </h1>

          <p className="relative z-30 mt-5 max-w-md text-lg leading-snug tracking-tight text-gray-200">
            Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
          </p>

          <div className="mt-11">
            <GlowingButton href="/signup" className="px-16">
              <span className="text-[#5A250A]">Try It Free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 9"
                className="h-[9px] w-[17px] text-[#5A250A]"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                  clipRule="evenodd"
                />
              </svg>
            </GlowingButton>
          </div>

          <div className="absolute bottom-[88px] z-30 overflow-hidden text-sm tracking-tight">
            <p className="mb-3.5 font-light leading-none text-white/60">
              Everything you need for productive team work:
            </p>
            <ul className="flex font-semibold leading-tight text-white">
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle">
                AI Room Remodeling
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle">
                Virtual Design
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle">
                Smart Layouts
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle">
                Style Matching
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle">
                3D Visualization
              </li>
            </ul>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[340px] w-full bg-gradient-to-b from-gray-950/0 to-gray-950"></div>
      </section>

      {/* AI Room Remodeling Section */}
      <section className="relative overflow-hidden bg-[#f6f6f6] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-title text-5xl font-semibold leading-tight tracking-tighter text-black md:text-6xl lg:text-7xl">
                AI Room Remodeling
              </h2>
              <p className="mt-6 max-w-[705px] text-lg leading-tight tracking-tight">
                Transform your living spaces with our cutting-edge AI technology. Upload a photo of your room and watch
                as our AI generates stunning redesign options in seconds.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Instant Visualization</h3>
                    <p className="mt-2 text-gray-700">See your redesigned space in seconds, not days</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Multiple Style Options</h3>
                    <p className="mt-2 text-gray-700">Choose from dozens of design styles and color schemes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Furniture Recommendations</h3>
                    <p className="mt-2 text-gray-700">
                      Get personalized product suggestions that match your new design
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <GlowingBox>
                <video
                  className="h-full w-full rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg?height=720&width=1280"
                >
                  <source src="/background-video.mp4" type="video/mp4" />
                </video>
              </GlowingBox>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Integration Section */}
      <GithubSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gray-950 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative z-10 lg:col-start-2">
              <h2 className="max-w-[510px] bg-gradient-to-br from-white from-30% via-[#d5d8f6] via-80% to-[#fdf7fe] bg-clip-text text-5xl font-medium leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl">
                Join the Movement
              </h2>
              <p className="relative z-10 mb-7 mt-2 leading-snug tracking-tight text-gray-200">
                Unlock the future of home design with our AI technology.
                <br />
                Remember, this journey is just getting started.
              </p>
              <div className="relative z-0 flex h-fit w-fit gap-8 md:flex-col md:gap-4">
                <GlowingButton href="/signup" className="w-[174px] !px-0">
                  <span className="text-[#5A250A]">Start now</span>
                </GlowingButton>

                <Link
                  href="https://github.com/your-repo"
                  className="relative flex w-[174px] items-center gap-x-1.5 rounded-full border border-white/10 bg-[#0B0C0F] pl-5 pr-6 tracking-snug text-white hover:border-white/15"
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
                  <span className="z-10">GitHub Repo</span>
                </Link>
              </div>
            </div>

            <div className="absolute left-0 top-0 h-full w-full opacity-20 lg:relative lg:opacity-100">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Abstract design"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

