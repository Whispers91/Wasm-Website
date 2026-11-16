
import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Comparison from "../Comparison/Comparison";

export default function Hero() {
  return (
    <section
      id="hero"
      name="hero"
      className="relative isolate border-b border-hairline"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">

        {/* Left column: value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-hero">
            Know what your components can{" "}
            <span className="text-primary-light">access.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Track capability changes between releases. Detect unexpected
            permissions before they reach production.
          </p>

          {/* Calls to action */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ScrollLink
              to="problem"
              smooth
              duration={600}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow-primary/25 active:translate-y-0.5"
            >
              Explore Ledger
              <ArrowDown
                size={15}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </ScrollLink>

            <ScrollLink
              to="example"
              smooth
              duration={600}
              offset={-80}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2.5 text-sm font-medium text-text-muted transition-colors duration-200 hover:border-border hover:bg-surface-hover hover:text-text"
            >
              <Terminal size={14} className="text-primary-light" />
              <span>View an Example</span>
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right column: comparison inspector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full min-w-0"
        >
          <Comparison />
        </motion.div>

      </div>
    </section>
  );
}
