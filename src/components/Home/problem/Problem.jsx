
import { ShieldAlert, GitBranch, EyeOff, ArrowRight } from 'lucide-react'

const problems = [
  {
    icon: GitBranch,
    title: 'Silent capability changes',
    description:
      'A routine dependency update can introduce new host imports, even when the component’s intended API and functionality appear unchanged.',
    codeSnippet: {
      file: 'Cargo.toml',
      lines: [
        { type: 'subtle', text: '[dependencies]' },
        { type: 'remove', text: '- some-dependency = "0.4.1"' },
        { type: 'add', text: '+ some-dependency = "0.4.2" # may introduce wasi:http' },
      ],
    },
  },
  {
    icon: EyeOff,
    title: 'Limited visibility in binaries',
    description:
      'A source diff shows changes to your code, while a binary diff can tell you that a compiled WebAssembly component changed. Neither explains which host capabilities it now declares.',
    codeSnippet: {
      file: 'Terminal',
      lines: [
        { type: 'subtle', text: '$ git diff -- ./dist/component.wasm' },
        { type: 'warn', text: 'Binary files differ' },
        { type: 'subtle', text: '# No visibility into changed imports' },
      ],
    },
  },
  {
    icon: ShieldAlert,
    title: 'Unexpected host privileges',
    description:
      'Newly declared WIT imports may expose interfaces for networking or filesystem access. Without capability-aware checks, unexpected additions can go unnoticed during code review.',
    codeSnippet: {
      file: 'Example policy result',
      lines: [
        { type: 'warn', text: '! unapproved import: wasi:sockets/tcp' },
        { type: 'danger', text: 'FAIL: import violates policy' },
        { type: 'subtle', text: 'status: blocked by policy' },
      ],
    },
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      name="problem"
      className="border-b border-hairline py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-section">
            Dependencies change.{" "}
            <span className="text-text-muted">
              But do their capabilities?
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-muted">
            WebAssembly components rely on declared host capabilities to
            interact with their environment. Dependency updates can introduce
            new imports and permissions without making those changes obvious
            during a normal version review.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon

            return (
              <div
                key={problem.title}
                className="group flex flex-col justify-between rounded-xl border border-hairline bg-surface/60 p-6 transition-colors duration-200 hover:border-primary/30 hover:bg-surface"
              >
                <div>
                  <h3 className="mt-5 text-lg font-bold text-text">
                    {problem.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                    {problem.description}
                  </p>
                </div>

                {/* Code preview */}
                <div className="mt-6 overflow-hidden rounded-lg border border-hairline bg-card/70 p-3 font-mono-code text-[11px]">
                  <div className="mb-2 flex items-center justify-between border-b border-hairline p-2.5 rounded-2xl text-[10px] text-text-subtle">
                    <span>{problem.codeSnippet.file}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                  </div>

                  <div className="space-y-1">
                    {problem.codeSnippet.lines.map((line) => (
                      <p
                        key={line.text}
                        className={`truncate ${
                          line.type === 'remove'
                            ? 'text-red-400'
                            : line.type === 'add'
                              ? 'text-emerald-400'
                              : line.type === 'warn'
                                ? 'text-amber-400'
                                : line.type === 'danger'
                                  ? 'font-semibold text-red-400'
                                  : 'text-text-subtle'
                        }`}
                      >
                        {line.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* The missing piece */}
        <div className="mt-8 flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/[0.04] p-5 sm:items-center">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary-light">
            <ArrowRight size={16} />
          </div>

          <p className="text-sm leading-relaxed text-text-muted">
            <span className="font-semibold text-text">
              The missing piece:
            </span>{' '}
            A capability-aware diffing tool that tracks declared host imports
            between releases and identifies unapproved additions before
            compiled WebAssembly reaches production.
          </p>
        </div>

      </div>
    </section>
  )
}
