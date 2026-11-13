import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll'
import Comparison from "../Comparison/Comparison";

export default function Hero() {
  return (
    <section
      id="hero"
      name="hero"
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(59,130,246,0.10),transparent_50%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2">
            <ShieldCheck size={15} className="text-primary-light" />
            <span className="text-label font-semibold uppercase tracking-[0.15em] text-primary-light">
              WebAssembly Security
            </span>
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-hero">
            Know what your components can{" "}
            <span className="text-primary-light">access.</span>
          </h1>

          <p className="mt-7 max-w-xl text-body leading-relaxed text-text-muted">
            Track capability changes between releases. Detect unexpected
            permissions before they reach production.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <ScrollLink
              to="problem"
              smooth={true}
              duration={700}
              offset={-80}
              className="group flex items-center gap-3 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore Ledger
              <ArrowDown
                size={15}
                className="transition-transform duration-300"
              />
            </ScrollLink>

            <span className="text-small text-text-muted">
              Built for WebAssembly component security
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full min-w-0"
        >
          <Comparison />
        </motion.div>
      </div>
    </section>
  );
}
