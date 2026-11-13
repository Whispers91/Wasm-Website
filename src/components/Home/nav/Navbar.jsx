import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import {
  CodeXml,
  ChevronDown,
  House,
  CircleAlert,
  Workflow,
  GitCompareArrows,
  Network,
  Terminal,
} from "lucide-react";

const homeSections = [
  { label: "Overview", id: "hero", icon: House },
  { label: "The Problem", id: "problem", icon: CircleAlert },
  { label: "How It Works", id: "how-it-works", icon: Workflow },
  { label: "Example", id: "example", icon: GitCompareArrows },
  { label: "Architecture", id: "architecture", icon: Network },
  { label: "Getting Started", id: "getting-started", icon: Terminal },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between">
        <RouterLink to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
            <CodeXml
              size={21}
              className="text-primary-light transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <span className="text-xl font-bold tracking-[0.15em] text-text">
            LEDGER
          </span>
        </RouterLink>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="group relative">
              <a
                href="/"
                className="relative flex items-center gap-2 py-2 text-body font-medium text-text-muted transition-colors duration-200 hover:text-text"
              >
                Home
                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
                <span className="absolute bottom-0 left-0 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </a>

              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-xl border border-border bg-surface/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="mb-2 px-3 pb-3 pt-1">
                    <p className="text-label font-semibold uppercase tracking-[0.15em] text-primary-light">
                      Explore Ledger
                    </p>
                    <p className="mt-1 text-small text-text-muted">
                      Navigate through the project
                    </p>
                  </div>

                  <div className="space-y-1 cursor-pointer">
                    {homeSections.map((section) => {
                      const Icon = section.icon;

                      return (
                        <ScrollLink
                          key={section.id}
                          to={section.id}
                          smooth={true}
                          duration={600}
                          offset={-80}
                          className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-small text-text-muted transition-all duration-200 hover:translate-x-1 hover:bg-card hover:text-primary-light"
                        >
                          <Icon
                            size={16}
                            className="shrink-0 transition-colors group-hover/item:text-primary-light"
                          />

                          {section.label}
                        </ScrollLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <RouterLink
              to="/blog"
              className="group relative py-2 text-body font-medium text-text-muted transition-colors duration-200 hover:text-text"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </RouterLink>
          </div>

          <div className="border-l border-border pl-6">
            <a
              href="https://github.com/Whispers91/Wasm-Website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ledger on GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary-light hover:shadow-lg hover:shadow-primary/10"
            >
              <CodeXml
                size={21}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
