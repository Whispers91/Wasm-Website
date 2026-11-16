
import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CodeXml, List, X, ChevronRight } from 'lucide-react'
import { FaSquareGithub } from 'react-icons/fa6'
import SiteNavigation from '../Sidebar/SiteNavigation'


const groups = [
  {
    title: 'GETTING STARTED',
    items: [
      ['Introduction', '/docs/introduction'],
      ['Core concepts', '/docs/core-concepts'],
    ],
  },
  {
    title: 'UNDERSTANDING LEDGER',
    items: [
      ['Architecture', '/docs/architecture'],
      ['Capability model', '/docs/capability-model'],
      ['Policy configuration', '/docs/policy-configuration'],
      ['CLI reference', '/docs/cli-reference'],
    ],
  },
  {
    title: 'GUIDES',
    items: [
      ['Installation', '/guides/installation'],
      ['Compare releases', '/guides/compare-releases'],
      ['Write a policy', '/guides/write-a-policy'],
      ['CI integration', '/guides/ci-integration'],
    ],
  },
]

const githubUrl = 'https://github.com/Whispers91/Wasm-Website'

export default function DocsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen">
      {/* Documentation topbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-[#080D18]/95 backdrop-blur-xl">
        <div className="flex h-16 items-center gap-4 px-4 sm:px-6">
          <SiteNavigation />

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open documentation contents"
            aria-expanded={mobileOpen}
            className="inline-flex size-[38px] cursor-pointer items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary-light/50 hover:bg-primary/10 hover:text-text lg:hidden"
          >
            <List size={20} />
          </button>

          <Link to="/" className="flex items-center gap-2.5">
            <span className="inline-flex size-[34px] items-center justify-center rounded-md border border-primary-light/30 bg-primary/10 text-primary-light">
              <CodeXml size={19} />
            </span>
            <span className="text-sm font-semibold tracking-[0.16em]">
              LEDGER
            </span>
          </Link>

          <span className="hidden h-5 w-px bg-border sm:block" />

          <Link
            to="/docs/introduction"
            className="hidden text-sm text-text-muted transition-colors hover:text-text sm:block"
          >
            Documentation
          </Link>

          <div className="ml-auto flex items-center gap-4">
            <Link
              to="/blog"
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              Blog
            </Link>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="text-text-muted transition-colors hover:text-primary-light"
            >
              <FaSquareGithub size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main documentation layout */}
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1600px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-[250px] shrink-0 overflow-y-auto border-r border-border lg:block">
          <SidebarGroups groups={groups} />
        </aside>

        {/* Mobile documentation sidebar */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-[80] lg:hidden"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setMobileOpen(false)
              }
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

            <aside className="absolute inset-y-0 left-0 flex w-[min(330px,88vw)] flex-col border-r border-border bg-surface shadow-2xl">
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <span className="text-sm font-semibold tracking-widest">
                  CONTENTS
                </span>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close documentation contents"
                  className="inline-flex size-[38px] cursor-pointer items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary-light/50 hover:bg-primary/10 hover:text-text"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <SidebarGroups
                  groups={groups}
                  onNavigate={() => setMobileOpen(false)}
                />
              </div>
            </aside>
          </div>
        )}

        {/* Article area */}
        <main className="min-w-0 flex-1 px-5 pt-[22px] sm:px-8 lg:px-[clamp(22px,4vw,64px)] lg:pt-[26px]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="transition-colors hover:text-primary-light">
              Ledger
            </Link>

            <ChevronRight size={13} />

            <span>Documentation</span>

            <ChevronRight size={13} />

            <span className="text-text">
              {pageLabel(location.pathname)}
            </span>
          </div>

          <Outlet />

          <footer className="mt-[60px] flex flex-wrap justify-between gap-3 border-t border-border py-6 text-[11px] text-text-muted lg:mt-[90px]">
            <span>Ledger documentation</span>
            <span>
              Designed to make capability changes reviewable.
            </span>
          </footer>
        </main>
      </div>
    </div>
  )
}

function SidebarGroups({ groups: navGroups, onNavigate }) {
  return (
    <nav aria-label="Documentation pages" className="px-4 py-6">
      {navGroups.map((group) => (
        <section key={group.title} className="mb-7">
          <h2 className="mb-3 text-[10px] font-bold tracking-[0.13em] text-text-muted">
            {group.title}
          </h2>

          <div className="flex flex-col gap-0.5">
            {group.items.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  [
                    'flex w-full items-center rounded-r border-l-2 px-[10px] py-2 text-[13px] transition-colors',
                    isActive
                      ? 'border-primary bg-primary/10 text-primary-light'
                      : 'border-transparent text-text-muted hover:bg-white/[0.025] hover:text-text',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </section>
      ))}
    </nav>
  )
}

function pageLabel(path) {
  const slug =
    path.split('/').filter(Boolean).at(-1) || 'introduction'

  return slug
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
