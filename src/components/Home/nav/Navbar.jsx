
import { useEffect } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink, scroller } from 'react-scroll'

import { ArrowUpRight, CodeXml } from 'lucide-react'
import { RxGithubLogo } from 'react-icons/rx'

import SiteNavigation from '../../Sidebar/SiteNavigation'

const homeSections = [
  { label: 'Overview', id: 'hero' },
  { label: 'The problem', id: 'problem' },
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Example', id: 'example' },
]

const githubUrl = 'https://github.com/Whispers91/Wasm-Website'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/'

  // Handle navigation from other pages back to a homepage section.
  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (!isHomePage || !sectionId) return

    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 550,
      offset: -88,
    })

    // Clear the navigation state after handling it.
    navigate('/', { replace: true, state: null })
  }, [isHomePage, location.state, navigate])

  const handleSectionClick = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[#080D18]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-5 px-5 sm:px-8">
        <SiteNavigation />

        <RouterLink
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Ledger home"
        >
          <span className="inline-flex size-[34px] items-center justify-center rounded-md border border-primary-light/30 bg-primary/10 text-primary-light">
            <CodeXml size={20} strokeWidth={1.8} />
          </span>

          <span className="text-[17px] font-semibold tracking-[0.16em] text-text">
            LEDGER
          </span>
        </RouterLink>

        <nav
          aria-label="Homepage sections"
          className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {homeSections.map((section) =>
            isHomePage ? (
              <ScrollLink
                key={section.id}
                to={section.id}
                smooth
                duration={550}
                offset={-88}
                spy
                activeClass="!text-text"
                className="cursor-pointer whitespace-nowrap py-[25px] text-[13px] font-medium text-text-muted transition-colors hover:text-text"
              >
                {section.label}
              </ScrollLink>
            ) : (
              <button
                key={section.id}
                type="button"
                onClick={() => handleSectionClick(section.id)}
                className="cursor-pointer whitespace-nowrap py-[25px] text-[13px] font-medium text-text-muted transition-colors hover:text-text"
              >
                {section.label}
              </button>
            )
          )}
        </nav>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Ledger on GitHub"
          className="ml-auto inline-flex cursor-pointer items-center gap-2 border-l border-border pl-4 text-[13px] text-text-muted transition-colors hover:text-text lg:ml-0"
        >
          <RxGithubLogo size={24} />
          <ArrowUpRight size={13} />
        </a>
      </div>
    </header>
  )
}
