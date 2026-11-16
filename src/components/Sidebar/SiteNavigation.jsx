import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import {
  Menu,
  X,
  CodeXml,
  ArrowUpRight,
  House,
  BookOpen,
  Newspaper,
  Layers,
  Network,
  ShieldCheck,
  FileCode2,
  Terminal,
  Download,
  GitCompareArrows,
  Settings,
  Workflow,
} from "lucide-react";
import { RxGithubLogo } from "react-icons/rx";

const menuGroups = [
  {
    title: "Documentation",
    items: [
      { label: "Introduction", to: "/docs/introduction", icon: BookOpen },
      { label: "Core concepts", to: "/docs/core-concepts", icon: Layers },
      { label: "Architecture", to: "/docs/architecture", icon: Network },
      {
        label: "Capability model",
        to: "/docs/capability-model",
        icon: ShieldCheck,
      },
      {
        label: "Policy configuration",
        to: "/docs/policy-configuration",
        icon: FileCode2,
      },
      {
        label: "CLI reference",
        to: "/docs/cli-reference",
        icon: Terminal,
        planned: true,
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        label: "Installation",
        to: "/guides/installation",
        icon: Download,
        planned: true,
      },
      {
        label: "Compare releases",
        to: "/guides/compare-releases",
        icon: GitCompareArrows,
      },
      { label: "Write a policy", to: "/guides/write-a-policy", icon: Settings },
      {
        label: "CI integration",
        to: "/guides/ci-integration",
        icon: Workflow,
        planned: true,
      },
    ],
  },
];

const githubUrl = "https://github.com/Whispers91/Wasm-Website";

export default function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!menuOpen) {
      setMenuVisible(false);
      return;
    }

    setMenuMounted(true);
    setMenuVisible(false);

    let secondFrame;

    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        setMenuVisible(true);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuVisible(false);
  };

  const handleSidebarTransitionEnd = (event) => {
    if (
      event.target === event.currentTarget &&
      event.propertyName === "translate" &&
      !menuVisible
    ) {
      setMenuMounted(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open site navigation"
        aria-expanded={menuOpen}
        className="inline-flex size-[38px] shrink-0 cursor-pointer items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary-light/50 hover:bg-primary/10 hover:text-text"
      >
        <Menu size={21} strokeWidth={1.8} />
      </button>

      {menuMounted &&
        createPortal(
          <div className="fixed inset-0 z-[90]">
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              className={`absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ${
                menuVisible ? "opacity-100" : "opacity-0"
              }`}
            />

            <aside
              aria-label="Site navigation"
              onTransitionEnd={handleSidebarTransitionEnd}
              className={`absolute inset-y-0 left-0 flex w-[min(360px,88vw)] flex-col border-r border-border bg-surface shadow-2xl transition-transform duration-300 ease-out ${
                menuVisible ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex h-[72px] items-center justify-between border-b border-border px-5">
                <RouterLink
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2.5"
                >
                  <span className="inline-flex size-[34px] items-center justify-center rounded-md border border-primary-light/30 bg-primary/10 text-primary-light">
                    <CodeXml size={19} />
                  </span>
                  <span className="text-sm font-semibold tracking-[0.16em]">
                    LEDGER
                  </span>
                </RouterLink>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                  className="inline-flex size-[38px] cursor-pointer items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary-light/50 hover:bg-primary/10 hover:text-text"
                >
                  <X size={19} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5">
                <RouterLink
                  to="/"
                  onClick={closeMenu}
                  className="mb-6 flex min-h-[38px] items-center gap-3 rounded-md px-2.5 py-2 text-[13px] text-text-muted transition-colors hover:bg-primary/10 hover:text-text"
                >
                  <House size={17} />
                  Home
                  <span className="ml-auto text-xs text-text-muted">
                    Overview
                  </span>
                </RouterLink>

                {menuGroups.map((group) => (
                  <div key={group.title} className="mb-7">
                    <p className="text-[10px] font-bold tracking-[0.13em] text-text-muted">
                      {group.title.toUpperCase()}
                    </p>

                    <div className="mt-2 space-y-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;

                        return (
                          <RouterLink
                            key={item.to}
                            to={item.to}
                            onClick={closeMenu}
                            className="flex min-h-[38px] items-center gap-3 rounded-md px-2.5 py-2 text-[13px] text-text-muted transition-colors hover:bg-primary/10 hover:text-text"
                          >
                            <Icon size={16} strokeWidth={1.8} />
                            <span>{item.label}</span>

                            {item.planned && (
                              <span className="ml-auto text-[10px] uppercase tracking-wider text-text-muted">
                                Planned
                              </span>
                            )}
                          </RouterLink>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="border-t border-border pt-4">
                  <RouterLink
                    to="/blog"
                    onClick={closeMenu}
                    className="flex min-h-[38px] items-center gap-3 rounded-md px-2.5 py-2 text-[13px] text-text-muted transition-colors hover:bg-primary/10 hover:text-text"
                  >
                    <Newspaper size={16} />
                    Blog
                  </RouterLink>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[38px] items-center gap-3 rounded-md px-2.5 py-2 text-[13px] text-text-muted transition-colors hover:bg-primary/10 hover:text-text"
                  >
                    <RxGithubLogo size={24} />
                    GitHub repository
                    <ArrowUpRight size={13} className="ml-auto" />
                  </a>
                </div>
              </div>

              <div className="border-t border-border px-5 py-4 text-xs text-text-muted">
                Capability diffing for WebAssembly components
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}
