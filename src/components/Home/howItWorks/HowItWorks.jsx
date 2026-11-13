
import React from 'react'
import {
  GitBranch,
  ScanSearch,
  GitCompareArrows,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Layers,
  Network,
} from 'lucide-react'

const workflow = [
  {
    number: '01',
    icon: GitBranch,
    title: 'Establish a baseline',
    description:
      'Start with an approved component release. This becomes the reference for future comparisons.',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: 'Extract capabilities',
    description:
      'Ledger analyzes declared host imports and classifies them into capability categories.',
  },
  {
    number: '03',
    icon: GitCompareArrows,
    title: 'Compare releases',
    description:
      'New and removed capabilities are identified by comparing the current release against the baseline.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Evaluate policy',
    description:
      'New capabilities are checked against configurable security rules to identify unapproved additions.',
  },
  {
    number: '05',
    icon: FileCheck2,
    title: 'Get a clear result',
    description:
      'Ledger generates a report and returns a PASS or FAIL result that can be used in CI pipelines.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      name="how-it-works"
      className="border-b border-border px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <span className="text-xl font-semibold uppercase tracking-[0.2em] text-primary-light">
            How It Works
          </span>

          <h2 className="mt-4 text-section font-bold leading-tight">
            From capability changes to{' '}
            <span className="text-primary-light">security decisions.</span>
          </h2>

          <p className="mt-6 text-body leading-relaxed text-text-muted">
            Ledger compares WebAssembly component releases, identifies
            changes in their declared capabilities, and evaluates those
            changes against your security policy before deployment.
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-label font-semibold uppercase tracking-widest text-text-muted">
              The workflow
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {workflow.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group relative rounded-xl border border-border bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-label font-semibold tracking-widest text-primary-light">
                      STEP {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Icon
                        size={19}
                        className="text-primary-light"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-small leading-relaxed text-text-muted">
                    {step.description}
                  </p>

                  {index !== workflow.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-primary-light xl:block"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-2xl">
            <span className="text-label font-semibold uppercase tracking-[0.2em] text-primary-light">
              Under the hood
            </span>

            <h3 className="mt-3 text-2xl font-bold">
              Two layers. One security decision.
            </h3>

            <p className="mt-3 text-small leading-relaxed text-text-muted">
              Ledger separates capability enforcement from additional
              analysis, keeping its security decisions clear and predictable.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Layers size={21} className="text-primary-light" />
                </div>

                <div>
                  <p className="text-label font-semibold uppercase tracking-widest text-primary-light">
                    Layer 1
                  </p>
                  <h4 className="mt-1 text-lg font-semibold">
                    Capability analysis
                  </h4>
                </div>
              </div>

              <p className="mt-5 text-small leading-relaxed text-text-muted">
                The primary security gate. It extracts declared imports,
                builds capability manifests, compares releases, and evaluates
                additions against policy.
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-primary/20 pt-4">
                <ShieldCheck size={16} className="text-primary-light" />
                <span className="text-small font-semibold text-text">
                  Determines PASS or FAIL
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface/70 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-card">
                  <Network size={21} className="text-text-muted" />
                </div>

                <div>
                  <p className="text-label font-semibold uppercase tracking-widest text-text-muted">
                    Layer 2
                  </p>
                  <h4 className="mt-1 text-lg font-semibold">
                    Reachability analysis
                  </h4>
                </div>
              </div>

              <p className="mt-5 text-small leading-relaxed text-text-muted">
                An additional analysis layer that approximates which
                capabilities may be reachable from component entry points,
                helping reviewers understand the findings.
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <Network size={16} className="text-text-muted" />
                <span className="text-small font-semibold text-text">
                  Provides context, not permission
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 rounded-xl border border-border bg-card/40 p-5 sm:flex-row sm:items-center sm:gap-4">
            <ShieldCheck
              size={22}
              className="shrink-0 text-primary-light"
            />

            <p className="text-small leading-relaxed text-text-muted">
              <span className="font-semibold text-text">
                The core principle:
              </span>{' '}
              Reachability can explain a capability. It can never excuse
              an unapproved capability addition.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
