import { motion } from 'framer-motion'
import {
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  GitCompare,
  Terminal
} from 'lucide-react'

const capabilityDiff = [
  {
    wit: 'wasi:http/outgoing-handler',
    label: 'Outbound HTTP requests',
    category: 'Network',
    status: 'violation',
    policyNote: 'deny(network:*)',
  },
  {
    wit: 'wasi:sockets/tcp-create-socket',
    label: 'Direct TCP socket creation',
    category: 'Network',
    status: 'violation',
    policyNote: 'deny(sockets:*)',
  },
  {
    wit: 'wasi:io/poll',
    label: 'Non-blocking I/O polling',
    category: 'Runtime',
    status: 'allowed',
    policyNote: 'allow(io:*)',
  },
]

export default function Comparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden rounded-xl border border-hairline bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur-sm"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-hairline bg-card/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80" />
          </div>
          <span className="mx-2 h-3.5 w-px bg-border-subtle" />
          <div className="flex items-center gap-1.5 font-mono-code text-[11px] text-text-muted">
            <Terminal size={12} className="text-primary-light" />
            <span className="hidden sm:inline">ledger diff</span>
            <span className="text-text-subtle">v0.4.1..v0.4.2</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 font-mono-code text-[11px] font-medium text-red-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            Policy Failed
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Version Comparison Nodes */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          {/* Baseline */}
          <div className="rounded-lg border border-hairline bg-card/40 p-3 sm:p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[10px] uppercase tracking-wider text-text-subtle">
                Baseline Release
              </span>
              <CheckCircle2 size={13} className="text-emerald-400" />
            </div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-mono-code text-sm font-bold text-text sm:text-base">
                v0.4.1
              </span>
              <span className="font-mono-code text-[10px] text-text-subtle">
                approved
              </span>
            </div>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-surface text-primary-light">
            <ArrowRight size={14} />
          </div>

          {/* New Release */}
          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 sm:p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[10px] uppercase tracking-wider text-red-400/80">
                Candidate Release
              </span>
              <AlertTriangle size={13} className="text-red-400" />
            </div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-mono-code text-sm font-bold text-text sm:text-base">
                v0.4.2
              </span>
              <span className="font-mono-code text-[10px] text-red-400">
                +3 imports
              </span>
            </div>
          </div>
        </div>

        {/* Capability Diff Inspector */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitCompare size={14} className="text-primary-light" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Declared WIT Capability Diff
              </span>
            </div>
            <span className="font-mono-code text-[11px] text-text-subtle">
              3 additions detected
            </span>
          </div>

          <div className="space-y-2">
            {capabilityDiff.map((item) => (
              <div
                key={item.wit}
                className={`group flex items-center justify-between rounded-lg border p-2.5 transition-colors sm:p-3 ${
                  item.status === 'violation'
                    ? 'border-red-500/20 bg-red-500/[0.03] hover:border-red-500/35 hover:bg-red-500/[0.06]'
                    : 'border-hairline bg-card/30 hover:border-border'
                }`}
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono-code text-xs font-bold ${
                      item.status === 'violation'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-emerald-500/10 text-emerald-400'
                    }`}
                  >
                    +
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-mono-code text-xs font-medium text-text">
                      {item.wit}
                    </p>
                    <p className="text-[11px] text-text-muted">
                      {item.label}
                    </p>
                  </div>
                </div>

                <div className="ml-2 flex shrink-0 items-center gap-2">
                  <span className="hidden rounded border border-border-subtle bg-surface px-1.5 py-0.5 font-mono-code text-[10px] text-text-subtle sm:inline-block">
                    {item.category}
                  </span>

                  {item.status === 'violation' ? (
                    <span className="rounded bg-red-500/10 px-2 py-0.5 font-mono-code text-[10px] font-semibold text-red-400">
                      Denied
                    </span>
                  ) : (
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono-code text-[10px] font-semibold text-emerald-400">
                      Allowed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Result Banner */}
        <div className="mt-5 rounded-lg border border-red-500/25 bg-red-500/5 p-3.5">
          <div className="flex items-start gap-2.5">
            <ShieldAlert size={16} className="mt-0.5 shrink-0 text-red-400" />
            <div className="min-w-0">
              <p className="font-mono-code text-xs font-semibold text-red-400">
                Rule Violation: Unexpected Network Host Access
              </p>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                Candidate introduces unapproved outbound HTTP and socket imports.
                Release rejected by policy rule <code className="rounded bg-card px-1 py-0.5 font-mono-code text-[11px] text-text">deny(wasi:http/*)</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer Telemetry */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-3 font-mono-code text-[11px] text-text-subtle">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>WASI Preview 2 (Wasmtime 20+)</span>
          </div>
          <span>Scan time: 11ms</span>
        </div>
      </div>
    </motion.div>
  )
}
