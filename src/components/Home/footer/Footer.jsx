import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                <Shield size={14} className="text-primary-light" />
              </div>
              <span className="font-mono-code text-sm font-bold tracking-wider text-text">
                LEDGER
              </span>
            </div>
            <p className="mt-2 text-xs text-text-muted">
              Deterministic capability diffing and policy enforcement for WebAssembly components.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer transition-colors hover:text-text"
            >
              Overview
            </ScrollLink>
            <ScrollLink
              to="problem"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer transition-colors hover:text-text"
            >
              The Problem
            </ScrollLink>
            <ScrollLink
              to="how-it-works"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer transition-colors hover:text-text"
            >
              How It Works
            </ScrollLink>
            <ScrollLink
              to="example"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer transition-colors hover:text-text"
            >
              Scenario
            </ScrollLink>
            <RouterLink to="/blog" className="transition-colors hover:text-text">
              Blog
            </RouterLink>
            <a
              href="https://github.com/Whispers91/Wasm-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-text"
            >
              <span>GitHub</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-hairline p-4 rounded-2xl text-[11px] text-text-subtle sm:flex-row sm:items-center">
          <div>
            Built for the WebAssembly Component Model &bull; WASI Preview 2
          </div>
          <div>
            &copy; {new Date().getFullYear()} Ledger Project. Open source under MIT license.
          </div>
        </div>
      </div>
    </footer>
  );
}
