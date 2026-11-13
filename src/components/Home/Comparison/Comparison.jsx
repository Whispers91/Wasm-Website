
import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Plus,
  ArrowRight,
  AlertTriangle,
  GitBranch,
  Activity
} from 'lucide-react'

const capabilities = [
  { name: 'Network access', category: 'Network' },
  { name: 'TCP sockets', category: 'Network' },
  { name: 'I/O polling', category: 'Support' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
  },
}

function Comparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="relative w-full rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-black/20 sm:p-7"
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-text-muted">
            <GitBranch size={15} />
            <p className="text-label font-semibold uppercase tracking-widest">
              Release comparison
            </p>
          </div>

          <h3 className="mt-2 text-subheading font-semibold">
            Capability changes
          </h3>
        </div>

        <span className="flex shrink-0 items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-label font-semibold text-red-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          Policy failed
        </span>
      </div>

      {/* Version comparison */}
      <div className="mt-7 flex items-center gap-3">
        <div className="flex-1 rounded-xl border border-border bg-card p-3 sm:p-4">
          <p className="text-label text-text-muted">BASELINE</p>
          <p className="mt-2 text-lg font-semibold">v0.4.1</p>
        </div>

        <ArrowRight size={20} className="shrink-0 text-primary-light" />

        <div className="flex-1 rounded-xl border border-primary/30 bg-primary/5 p-3 sm:p-4">
          <p className="text-label text-primary-light">NEW RELEASE</p>
          <p className="mt-2 text-lg font-semibold">v0.4.2</p>
        </div>
      </div>

      {/* Capability additions */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h4 className="text-small font-semibold">
            Newly declared capabilities
          </h4>

          <span className="rounded-md bg-red-500/10 px-2 py-1 text-label font-semibold text-red-400">
            +3 additions
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.name}
              variants={itemVariants}
              className="group flex items-center justify-between rounded-xl border border-border bg-card/50 p-3 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                  <Plus size={16} className="text-red-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-small font-medium">
                    {capability.name}
                  </p>
                  <p className="text-label text-text-muted">
                    {capability.category}
                  </p>
                </div>
              </div>

              <span className="ml-2 text-label font-semibold text-red-400">
                Added
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Policy result */}
      <div className="mt-7 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={20}
            className="mt-0.5 shrink-0 text-red-400"
          />

          <div>
            <p className="text-small font-semibold text-red-400">
              3 policy violations
            </p>
            <p className="mt-1 text-label leading-relaxed text-text-muted">
              Unapproved network capabilities detected.
              This release does not meet the configured policy.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-text-muted">
          <ShieldCheck size={15} className="text-primary-light" />
          <span className="text-label">
            Protected by capability policy
          </span>
        </div>

        <div className="flex items-center gap-2 text-text-muted">
          <Activity size={14} />
          <span className="text-label">Illustrative example</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Comparison
