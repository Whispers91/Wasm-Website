
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Eye,
  Terminal,
  FileCode2,
  FileDiff,
} from 'lucide-react'

const imports = [
  {
    name: 'wasi:http/outgoing-handler@0.2.0',
    category: 'Network',
    policy: 'Denied',
    reachability: 'Reachable',
    reason: 'Outbound HTTP requests are not permitted',
  },
  {
    name: 'wasi:http/types@0.2.0',
    category: 'HTTP types',
    policy: 'Review',
    reachability: null,
    reason: 'Type definitions; no network operation by themselves',
  },
  {
    name: 'wasi:sockets/tcp-create-socket@0.2.0',
    category: 'Network',
    policy: 'Denied',
    reachability: 'Not reached',
    reason: 'TCP socket creation is not permitted',
  },
  {
    name: 'wasi:io/poll@0.2.0',
    category: 'I/O',
    policy: 'Allowed',
    reachability: null,
    reason: 'Permitted polling interface',
  },
]

export default function Example() {
  return (
    <section
      id="example"
      name="example"
      className="border-b border-hairline py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-section">
            A harmless update.{' '}
            <span className="text-primary-light">An unexpected change.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-muted">
            A developer updates a Markdown rendering dependency. The new
            component release declares additional host imports, including
            network interfaces that were not part of the approved baseline.
          </p>
        </div>

        {/* Scenario */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Component Context */}
          <div className="flex flex-col justify-between rounded-xl border border-hairline bg-surface/60 p-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-card text-text-muted">
                  <FileCode2 size={18} />
                </div>

                <div>
                  <h3 className="font-mono-code text-base font-bold text-text">
                    md-render.wasm
                  </h3>
                  <span className="font-mono-code text-[11px] text-text-subtle">
                    wasm32-wasip2
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-text-muted">
                A utility component that converts Markdown into HTML.
                Its expected functionality does not require outbound
                network access.
              </p>

              {/* Version Comparison */}
              <div className="mt-7 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-hairline bg-card/60 p-3.5">
                  <div>
                    <span className="font-mono-code text-[10px] uppercase text-text-subtle">
                      Approved baseline
                    </span>
                    <p className="mt-0.5 font-mono-code text-sm font-semibold text-text">
                      v0.4.1
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono-code text-xs font-medium text-emerald-400">
                    <CheckCircle2 size={15} />
                    Compliant
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/[0.04] p-3.5">
                  <div>
                    <span className="font-mono-code text-[10px] uppercase text-red-400/80">
                      Candidate release
                    </span>
                    <p className="mt-0.5 font-mono-code text-sm font-semibold text-text">
                      v0.4.2
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono-code text-xs font-medium text-red-400">
                    <XCircle size={15} />
                    Policy failed
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Summary */}
            <div className="mt-8 border-t border-hairline p-3 rounded-2xl">
              <div className="flex items-center gap-1 text-text-muted">
                <FileDiff size={15} />
                <span className="text-xs font-semibold">
                  Release comparison
                </span>
              </div>

              <div className="mt-3 rounded-lg border border-hairline bg-card/40 p-3.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-code text-xs text-text-muted">
                    New imports
                  </span>
                  <span className="font-mono-code text-sm font-semibold text-text">
                    4
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="font-mono-code text-xs text-text-muted">
                    Policy violations
                  </span>
                  <span className="font-mono-code text-sm font-semibold text-red-400">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Capability Analysis */}
          <div className="overflow-hidden rounded-xl border border-hairline bg-surface shadow-xl shadow-black/20">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-hairline bg-card/60 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <Terminal size={14} className="text-text-muted" />
                <span className="font-mono-code text-xs text-text-muted">
                  ledger diff
                </span>
              </div>

              <span className="font-mono-code text-[11px] text-text-subtle">
                md-render.wasm
              </span>
            </div>

            <div className="p-5">
              <div>
                <h4 className="text-sm font-semibold text-text">
                  Declared import changes
                </h4>
                <p className="mt-1 text-xs text-text-subtle">
                  Candidate release compared against v0.4.1
                </p>
              </div>

              {/* Import List */}
              <div className="mt-5 space-y-2.5">
                {imports.map((item) => {
                  const denied = item.policy === 'Denied'
                  const review = item.policy === 'Review'

                  return (
                    <div
                      key={item.name}
                      className={`rounded-lg border p-3 ${
                        denied
                          ? 'border-red-500/20 bg-red-500/[0.03]'
                          : 'border-hairline bg-card/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start gap-2">
                            <span
                              className={`font-mono-code font-bold ${
                                denied
                                  ? 'text-red-400'
                                  : review
                                    ? 'text-amber-400'
                                    : 'text-emerald-400'
                              }`}
                            >
                              +
                            </span>

                            <span className="break-all font-mono-code text-[11px] font-semibold leading-relaxed text-text sm:text-xs">
                              {item.name}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="rounded border border-border-subtle bg-surface px-1.5 py-0.5 text-[10px] text-text-subtle">
                              {item.category}
                            </span>

                            {item.reachability && (
                              <span className="inline-flex items-center gap-1 rounded bg-card px-1.5 py-0.5 text-[10px] text-text-muted">
                                <Eye size={10} />
                                {item.reachability}
                              </span>
                            )}
                          </div>

                          <p className="mt-2 text-[11px] leading-relaxed text-text-subtle">
                            {item.reason}
                          </p>
                        </div>

                        <div className="shrink-0">
                          {denied ? (
                            <span className="inline-flex items-center gap-1 rounded bg-red-500/10 px-2 py-1 text-[10px] font-semibold text-red-400">
                              <XCircle size={11} />
                              Denied
                            </span>
                          ) : review ? (
                            <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-1 text-[10px] font-semibold text-amber-400">
                              Review
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                              <CheckCircle2 size={11} />
                              Allowed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Policy Result */}
              <div className="mt-5 rounded-lg border border-red-500/25 bg-red-500/[0.04] p-4">
                <div className="flex items-start gap-2.5">
                  <ShieldAlert
                    size={16}
                    className="mt-0.5 shrink-0 text-red-400"
                  />

                  <div>
                    <p className="text-xs font-semibold text-red-400">
                      2 policy violations
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      The candidate introduces two denied network
                      capabilities. The release does not satisfy the
                      configured policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="flex items-center justify-between border-t border-hairline bg-card/40 px-4 py-2.5 font-mono-code text-[11px]">
              <span className="text-text-subtle">
                Policy evaluation
              </span>
              <span className="font-semibold text-red-400">
                FAILED
              </span>
            </div>
          </div>
        </div>

        {/* Final Result */}
        <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/[0.04] p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-400">
                <XCircle size={21} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-text sm:text-xl">
                  Release rejected
                </h3>

                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-text-muted">
                  The candidate adds network capabilities that violate
                  the active policy. CI can use this result to stop the
                  release before deployment.
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-lg border border-red-500/30 bg-red-500/[0.06] px-5 py-2.5 text-center">
              <span className="font-mono-code text-[10px] font-semibold uppercase text-red-400/80">
                Policy result
              </span>
              <p className="font-mono-code text-lg font-bold tracking-wider text-red-400">
                FAILED
              </p>
            </div>
          </div>
        </div>

        {/* Reachability Principle */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-hairline bg-card/30 p-4">
          <Eye size={16} className="mt-0.5 shrink-0 text-primary-light" />

          <p className="text-xs leading-relaxed text-text-muted">
            <span className="font-semibold text-text">
              Why reachability matters:
            </span>{' '}
            The TCP socket import is marked as not reached by the
            supplementary analysis. It still violates policy because
            declared capabilities are evaluated independently of
            estimated runtime usage.
          </p>
        </div>
      </div>
    </section>
  )
}
