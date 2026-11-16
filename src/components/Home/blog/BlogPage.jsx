
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  GitBranch,
  Newspaper,
  Rss,
} from 'lucide-react'

const topics = [
  {
    icon: GitBranch,
    number: '01',
    title: 'Development updates',
    description:
      'Follow the progress of Ledger, from early prototypes to implementation milestones.',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Engineering notes',
    description:
      'Explore technical decisions, challenges, and the reasoning behind how things are built.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Research and insights',
    description:
      'Discover ideas and findings around WebAssembly, capability security, and software analysis.',
  },
]


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-text">

      <main className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-8">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">

          <div className="pointer-events-none absolute -right-20 -top-24 size-[350px] rounded-full bg-primary/10 blur-[110px]" />

          <div className="relative max-w-[760px]">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-light/20 bg-primary/5 px-3 py-1.5">
              <Rss size={13} className="text-primary-light" />
              <span className="text-[10px] font-semibold tracking-[0.13em] text-primary-light">
                THE LEDGER JOURNAL
              </span>
            </div>

            <h1 className="text-[clamp(38px,6vw,64px)] font-semibold leading-[1.08] tracking-[-0.045em]">
              Ideas, progress,
              <span className="block text-text-muted">
                and everything in between.
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-[1.85] text-text-muted sm:text-base">
              Follow the development of Ledger. From engineering decisions
              and technical discoveries to project milestones and improvements.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-primary-light"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>

              <span className="h-4 w-px bg-border" />

              <Link
                to="/docs/introduction"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                Explore documentation
                <ArrowUpRight size={15} />
              </Link>
            </div>

          </div>
        </section>

        {/* Latest updates */}
        <section className="py-16">

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-primary-light">
                THE LATEST
              </p>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Latest updates
              </h2>

              <p className="mt-2 text-sm text-text-muted">
                News and notes from the development of Ledger.
              </p>
            </div>

            <span className="rounded-md border border-border px-3 py-1.5 text-[11px] text-text-muted">
              Updates coming soon
            </span>
          </div>

          {/* Empty state */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-surface/60 px-6 py-14 text-center sm:px-10 sm:py-20">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

            <div className="relative mx-auto flex size-14 items-center justify-center rounded-xl border border-border bg-background text-primary-light">
              <Newspaper size={24} strokeWidth={1.5} />
            </div>

            <div className="relative mx-auto mt-6 max-w-[420px]">
              <h3 className="text-lg font-semibold">
                Nothing published just yet.
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-text-muted">
                We're still shaping Ledger and working through its
                implementation. Development updates will appear here as
                meaningful milestones take shape.
              </p>

              <Link
                to="/docs/introduction"
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-border bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-text transition-colors hover:border-primary-light/40 hover:bg-primary/5"
              >
                Explore Ledger
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </section>

        {/* Journal topics */}
        <section className="border-t border-border pt-14">

          <div className="mb-8">
            <p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-primary-light">
              WHAT TO EXPECT
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">
              Behind the development
            </h2>

            <p className="mt-2 max-w-[550px] text-sm leading-[1.8] text-text-muted">
              A closer look at the ideas, decisions, and work that shape
              the project.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon

              return (
                <article
                  key={topic.number}
                  className="group rounded-lg border border-border bg-surface/40 p-5 transition-colors hover:border-primary-light/30 hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-text-muted">
                      / {topic.number}
                    </span>

                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className="text-primary-light transition-transform group-hover:-translate-y-0.5"
                    />
                  </div>

                  <h3 className="mt-7 text-base font-semibold">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.8] text-text-muted">
                    {topic.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7 text-[11px] text-text-muted">
          <span className="font-semibold tracking-[0.13em]">
            LEDGER
          </span>

          <span>
            Capability diffing for WebAssembly components.
          </span>

          <Link
            to="/"
            className="transition-colors hover:text-text"
          >
            Back to home
          </Link>
        </footer>

      </main>
    </div>
  )
}
