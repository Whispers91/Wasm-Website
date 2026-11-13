
import React from 'react'
import { motion } from 'framer-motion'
import {
  GitBranch,
  ArrowRight,
  Plus,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Eye,
  Terminal,
  FileCode2,
} from 'lucide-react'

const imports = [
  {
    name: 'wasi:http/outgoing-handler',
    category: 'Network',
    policy: 'Denied',
    reachability: 'Reachable',
  },
  {
    name: 'wasi:http/types',
    category: 'Network',
    policy: 'Denied',
    reachability: 'Reachable',
  },
  {
    name: 'wasi:sockets/tcp-create-socket',
    category: 'Network',
    policy: 'Denied',
    reachability: 'Not reached',
  },
  {
    name: 'wasi:io/poll',
    category: 'Support',
    policy: 'Allowed',
    reachability: null,
  },
]

export default function Example() {
  return (
    <section
      id="example"
      name="example"
      className="border-b border-border px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="max-w-2xl">
          <span className="text-label font-semibold uppercase tracking-[0.2em] text-primary-light">
            Example Scenario
          </span>

          <h2 className="mt-4 text-section font-bold leading-tight">
            A harmless update.
            <span className="text-primary-light"> An unexpected change.</span>
          </h2>

          <p className="mt-6 text-body leading-relaxed text-text-muted">
            A developer updates a dependency to fix a formatting issue.
            The new release introduces additional host imports, including
            network capabilities that were not part of the approved baseline.
          </p>
        </div>

        {/* Scenario */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left: scenario details */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface/70 p-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <FileCode2 size={22} className="text-primary-light" />
                </div>

                <div>
                  <p className="text-label uppercase tracking-widest text-text-muted">
                    Component
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    md-render
                  </h3>
                </div>
              </div>

              <p className="mt-7 text-small leading-relaxed text-text-muted">
                A Markdown rendering component receives a dependency update.
                Its intended functionality hasn't changed, but its declared
                capabilities have.
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-card p-4">
                  <div>
                    <p className="text-label text-text-muted">Approved baseline</p>
                    <p className="mt-1 font-semibold">v0.4.1</p>
                  </div>
                  <CheckCircle2 size={19} className="text-emerald-400" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <div>
                    <p className="text-label text-primary-light">Updated release</p>
                    <p className="mt-1 font-semibold">v0.4.2</p>
                  </div>
                  <GitBranch size={19} className="text-primary-light" />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-5">
              <p className="text-label font-semibold uppercase tracking-widest text-text-muted">
                What changed?
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
                  <Plus size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-small font-semibold">4 new imports</p>
                  <p className="text-label text-text-muted">
                    Including 3 network-related imports
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: capability report */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">

            {/* Report header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card/50 px-5 py-4">
              <div className="flex items-center gap-2">
                <Terminal size={17} className="text-primary-light" />
                <span className="text-small font-semibold">
                  Ledger / Release analysis
                </span>
              </div>

              <span className="rounded-md border border-border px-2 py-1 text-label text-text-muted">
                Illustrative output
              </span>
            </div>

            {/* Report body */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-label uppercase tracking-widest text-text-muted">
                    Capability diff
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Newly declared imports
                  </h3>
                </div>

                <span className="rounded-lg bg-red-500/10 px-3 py-2 text-small font-semibold text-red-400">
                  +4
                </span>
              </div>

              {/* Import list */}
              <div className="mt-6 space-y-3">
                {imports.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="rounded-xl border border-border bg-card/40 p-3 sm:p-4"
                  >
                    <div className="flex items-start gap-3">
                      <Plus size={16} className="mt-1 shrink-0 text-red-400" />

                      <div className="min-w-0 flex-1">
                        <p className="break-all font-mono text-xs leading-relaxed text-text sm:text-sm">
                          {item.name}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-primary/10 px-2 py-1 text-label text-primary-light">
                            {item.category}
                          </span>

                          {item.reachability && (
                            <span className="flex items-center gap-1 rounded-md bg-card px-2 py-1 text-label text-text-muted">
                              <Eye size={12} />
                              {item.reachability}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {item.policy === 'Denied' ? (
                          <span className="flex items-center gap-1 text-label font-semibold text-red-400">
                            <XCircle size={14} />
                            Denied
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-label font-semibold text-emerald-400">
                            <CheckCircle2 size={14} />
                            Allowed
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Policy summary */}
              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert size={20} className="mt-0.5 shrink-0 text-red-400" />

                  <div>
                    <p className="text-small font-semibold text-red-400">
                      Policy violations detected
                    </p>
                    <p className="mt-1 text-label leading-relaxed text-text-muted">
                      Three network capability additions violate the configured policy.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Report footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card/40 px-5 py-4">
              <span className="text-label text-text-muted">
                Policy evaluation complete
              </span>
              <span className="font-mono text-label text-red-400">
                exit code: 1
              </span>
            </div>
          </div>
        </div>

        {/* Final verdict */}
        <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                <XCircle size={25} className="text-red-400" />
              </div>

              <div>
                <p className="text-label font-semibold uppercase tracking-widest text-red-400">
                  CI pipeline result
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Release rejected.
                </h3>
                <p className="mt-2 max-w-2xl text-small leading-relaxed text-text-muted">
                  The updated component introduced unapproved network
                  capabilities. Ledger reports the changes and prevents
                  the release from passing the configured security gate.
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-3 text-center">
              <p className="text-label text-red-400">RESULT</p>
              <p className="mt-1 text-xl font-bold tracking-wider text-red-400">
                FAILED
              </p>
            </div>
          </div>
        </div>

        {/* Important note */}
        <div className="mt-6 flex items-start gap-3">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary-light" />
          <p className="text-small leading-relaxed text-text-muted">
            Even though one network import is marked as not reached,
            it remains a policy violation. Reachability provides context;
            it does not override the capability security gate.
          </p>
        </div>

      </div>
    </section>
  )
}
