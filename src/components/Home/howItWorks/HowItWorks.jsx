
import {
  GitBranch,
  ScanSearch,
  GitCompareArrows,
  ShieldCheck,
  FileCheck2,
  Layers,
  Network,
  Cpu,
} from 'lucide-react'

const workflow = [
  {
    number: '01',
    icon: GitBranch,
    title: 'Establish a baseline',
    description:
      'Select an approved WebAssembly component release as the reference for future capability comparisons.',
    meta: 'Release reference',
  },
  {
    number: '02',
    icon: ScanSearch,
    title: 'Extract capabilities',
    description:
      'Inspect declared component imports and identify the host interfaces the component requests.',
    meta: 'Declared imports',
  },
  {
    number: '03',
    icon: GitCompareArrows,
    title: 'Compare releases',
    description:
      'Generate a deterministic diff showing which capabilities were added, changed, or removed.',
    meta: 'Capability diff',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Evaluate policy',
    description:
      'Compare capability changes against security rules to identify additions that require approval.',
    meta: 'Policy evaluation',
  },
  {
    number: '05',
    icon: FileCheck2,
    title: 'Enforce in CI',
    description:
      'Produce a structured report and a result that your CI pipeline can use to accept or reject a release.',
    meta: 'CI result',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      name="how-it-works"
      className="border-b border-hairline py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-section">
            From capability changes to{' '}
            <span className="text-primary-light">security decisions.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Ledger compares WebAssembly component releases, identifies
            changes in their declared capabilities, and evaluates those
            changes against your security policy before deployment.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {workflow.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group flex flex-col justify-between rounded-xl border border-hairline bg-surface/60 p-5 transition-colors duration-200 hover:border-primary/30 hover:bg-surface"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-xs font-bold text-primary-light">
                        {step.number}
                      </span>

                    </div>

                    <h3 className="mt-4 text-sm font-bold text-text">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 flex min-h-6 justify-center rounded-2xl border-hairline p-2 font-mono-code text-[12px] text-text-subtle">
                    <span>{step.meta}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Two-Layer Architecture */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-text">
              Two layers. One security decision.
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Ledger separates capability enforcement from supplementary
              reachability analysis, keeping security decisions independent
              of runtime usage estimates.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Layer 1 */}
            <div className="rounded-xl border border-primary/30 bg-primary/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary-light">
                  <Layers size={18} />
                </div>

                <div>
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-primary-light">
                    Layer 1
                  </span>
                  <h4 className="text-base font-bold text-text">
                    Capability Analysis
                  </h4>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                The primary security layer. It inspects declared host imports,
                organizes them into capability manifests, compares releases,
                and evaluates capability changes against policy.
              </p>

              <div className="mt-5 rounded-lg border border-hairline bg-card/60 p-3 font-mono-code text-[11px]">
                <div className="text-[10px] text-text-subtle">
                  # Illustrative policy rule
                </div>
                <div className="mt-1 break-words text-primary-light">
                  deny_new_capabilities(["network", "sockets"])
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 rounded-2xl border-hairline p-3 text-xs text-text">
                <ShieldCheck size={14} className="shrink-0 text-primary-light" />
                <span className="font-semibold">
                  Determines the policy result
                </span>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="rounded-xl border border-hairline bg-surface/60 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-card text-text-muted">
                  <Network size={18} />
                </div>

                <div>
                  <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-text-subtle">
                    Layer 2
                  </span>
                  <h4 className="text-base font-bold text-text">
                    Reachability Analysis
                  </h4>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                An additional analysis layer that examines call relationships
                from component entry points to estimate which imported
                functions may be reachable during execution.
              </p>

              <div className="mt-5 rounded-lg border border-hairline bg-card/60 p-3 font-mono-code text-[11px]">
                <div className="text-[10px] text-text-subtle">
                  # Illustrative callgraph trace
                </div>
                <div className="mt-1 break-words text-text-muted">
                  run() → render() → wasi:http
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 rounded-2xl border-hairline p-3 text-xs text-text">
                <Cpu size={14} className="shrink-0 text-text-subtle" />
                <span>
                  Provides context for review, not security approval
                </span>
              </div>
            </div>
          </div>

          {/* Core Principle */}
          <div className="mt-6 rounded-xl border border-hairline bg-card/40 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary-light">
                <ShieldCheck size={16} />
              </div>

              <p className="text-sm leading-relaxed text-text-muted">
                <span className="font-semibold text-text">
                  The core principle:
                </span>{' '}
                Reachability analysis can help explain how a capability might
                be used. It cannot override a policy violation. An unapproved
                capability remains subject to enforcement regardless of
                whether it appears reachable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
