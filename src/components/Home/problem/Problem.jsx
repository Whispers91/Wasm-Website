
import React from 'react'
import { ShieldAlert, GitBranch, EyeOff, ArrowRight } from 'lucide-react'

const problems = [
  {
    icon: GitBranch,
    title: 'Silent capability changes',
    description:
      'A dependency update can introduce new host imports without changing the component’s intended functionality.',
  },
  {
    icon: EyeOff,
    title: 'Limited visibility',
    description:
      'Traditional version comparisons show code changes, but not necessarily what new capabilities a component declares.',
  },
  {
    icon: ShieldAlert,
    title: 'Unexpected privileges',
    description:
      'Newly declared capabilities may expand what a component is allowed to access, often going unnoticed during review.',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}
      <div className="max-w-2xl">
        <span className="text-label font-semibold uppercase tracking-[0.2em] text-primary-light">
          The Problem
        </span>

        <h2 className="mt-4 text-section font-bold leading-tight">
          Dependencies change.
          <span className="text-text-muted"> But do their capabilities?</span>
        </h2>

        <p className="mt-6 text-body leading-relaxed text-text-muted">
          WebAssembly components rely on declared host capabilities to interact
          with their environment. However, dependency updates can introduce
          new imports and permissions without making those changes obvious
          during a normal version review.
        </p>
      </div>

      {/* Problem points */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon

          return (
            <div
              key={problem.title}
              className="rounded-xl border border-border bg-surface/70 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10">
                <Icon size={21} className="text-red-400" />
              </div>

              <h3 className="mt-5 text-subheading font-semibold">
                {problem.title}
              </h3>

              <p className="mt-3 text-small leading-relaxed text-text-muted">
                {problem.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Takeaway */}
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <ArrowRight size={19} className="mt-0.5 shrink-0 text-primary-light" />

        <p className="text-small leading-relaxed text-text-muted">
          <span className="font-semibold text-text">
            The missing piece:
          </span>{' '}
          A way to track capability changes between releases and identify
          unapproved additions before they reach production.
        </p>
      </div>
    </section>
  )
}
