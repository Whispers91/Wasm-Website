
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CircleAlert } from 'lucide-react'

const pages = {
  introduction: {
    eyebrow: 'GETTING STARTED',
    title: 'Introduction to Ledger',
    lead: 'Track what WebAssembly components declare they can access — and review changes before they become part of a release.',
    sections: [
      [
        'What is Ledger?',
        'Ledger is a Rust-based tool concept for comparing the declared host capabilities of WebAssembly components across releases. It turns changes in component imports into reviewable findings and evaluates additions against a configurable security policy.',
      ],
      [
        'Why capability diffing?',
        'A source or dependency diff tells you what changed in code. It does not always make the security significance of a new host interface obvious. Ledger focuses on that missing view: what new capabilities does this release declare compared with the approved baseline?',
      ],
      [
        'How it fits into a workflow',
        'A team establishes an approved baseline, analyzes a candidate release, reviews the capability diff, and evaluates additions against policy. The result can be used as a release check in continuous integration.',
      ],
    ],
    next: ['Core concepts', '/docs/core-concepts'],
  },

  'core-concepts': {
    eyebrow: 'FOUNDATIONS',
    title: 'Core concepts',
    lead: 'The vocabulary behind Ledger: components, imports, capabilities, baselines, and capability widening.',
    sections: [
      [
        'Declared imports',
        'A WebAssembly component can declare interfaces it imports from its host environment. Those imports describe the external functionality the component expects to use. Ledger treats them as evidence of declared capability, not proof that a particular operation executes at runtime.',
      ],
      [
        'Capability manifest',
        'A manifest is a normalized representation of the imports found in a component, including their classification. It gives two releases a consistent form that can be compared.',
      ],
      [
        'Baseline and candidate',
        'The baseline is the previously approved release. The candidate is the release being evaluated. Comparing their manifests reveals additions, removals, and other changes in declared capabilities.',
      ],
      [
        'Capability widening',
        'Capability widening occurs when a newer release declares additional host interfaces or capability classes. An addition may be intentional, but it should be visible and evaluated rather than silently accepted.',
      ],
    ],
    next: ['Architecture', '/docs/architecture'],
  },

  architecture: {
    eyebrow: 'SYSTEM DESIGN',
    title: 'Architecture',
    lead: 'Ledger separates declared-capability enforcement from optional reachability context so that the security decision remains understandable.',
    sections: [
      [
        'The analysis pipeline',
        'At a high level, Ledger parses a component, extracts its declared imports, maps those imports to capability classes, builds a manifest, compares it with the approved baseline, and evaluates the resulting changes against policy.',
      ],
      [
        'Layer 1 — Declared capability analysis',
        'This is the primary analysis and the authoritative security gate. It extracts declared imports, classifies them, compares manifests, and supplies the findings to policy evaluation. Its verdict must not depend on reachability estimates.',
      ],
      [
        'Layer 2 — Reachability analysis',
        'This optional layer builds a conservative approximation of call relationships from component entry points. It can annotate whether a capability appears reachable, helping reviewers prioritize investigation. Indirect calls and tables make this analysis approximate.',
      ],
      [
        'The non-suppression rule',
        'Reachability can explain a capability. It can never excuse an unapproved capability addition. A declared import remains visible to policy even when the reachability layer does not find a path to it.',
      ],
      [
        'Planned crate boundaries',
        'The proposed Rust workspace separates core parsing and manifests (ledger-core), reachability (ledger-reach), policy and diff evaluation (ledger-policy), command-line behavior (ledger-cli), and research/evaluation tooling (ledger-eval). These are architectural responsibilities, not a claim that every crate is already implemented.',
      ],
    ],
    next: ['Capability model', '/docs/capability-model'],
  },

  'capability-model': {
    eyebrow: 'SECURITY MODEL',
    title: 'Capability model',
    lead: 'Ledger groups declared host interfaces into categories that make capability changes easier to review and govern.',
    sections: [
      [
        'Capability categories',
        'The proposed categories include network, filesystem, time, randomness, process I/O, and support interfaces. The categories are a policy-friendly abstraction over lower-level interface names.',
      ],
      [
        'Interface classification',
        'Classification maps versioned interface identifiers to one or more capability categories. Some interfaces may imply multiple categories. The mapping needs to be explicit, reviewable, and kept aligned with the supported interface versions.',
      ],
      [
        'Unknown interfaces',
        'An interface that Ledger cannot classify must not silently disappear from the report. Policy should define how unknown interfaces are handled; a fail-closed setting is one possible configuration.',
      ],
      [
        'Declared does not mean executed',
        'An import indicates a declared dependency on a host interface. It does not prove that the component invokes it, nor does it establish the host runtime’s actual grants or configuration.',
      ],
    ],
    next: ['Policy configuration', '/docs/policy-configuration'],
  },

  'policy-configuration': {
    eyebrow: 'POLICY',
    title: 'Policy configuration',
    lead: 'Policies define which capability changes are acceptable for a component or release workflow.',
    sections: [
      [
        'Policy decisions',
        'A policy can allow, warn about, or deny capability additions. The exact defaults and precedence rules should be documented alongside the implemented policy engine.',
      ],
      [
        'Example configuration',
        'The following is an illustrative policy shape, not a promise of a finalized schema or supported CLI behavior.',
      ],
      [
        'Reviewing exceptions',
        'Intentional exceptions should be explicit and reviewable. A waiver design can record the affected interface or component, the reason, an approver, and an expiration date. Expired waivers should no longer suppress a finding.',
      ],
    ],
    code: `version: 1
default: warn
unclassified: fail

deny:
  - class: network
  - class: filesystem

allow:
  - class: time
  - class: randomness
  - class: support

on_violation: fail`,
    next: ['CLI reference', '/docs/cli-reference'],
  },

  'cli-reference': {
    eyebrow: 'REFERENCE',
    title: 'CLI reference',
    lead: 'A reference for Ledger commands, arguments, output formats, and exit codes.',
    notice: 'This page is a placeholder until the CLI interface is implemented and its command syntax is stable.',
    sections: [
      [
        'What will be documented',
        'Each command will include its purpose, required inputs, optional flags, configuration behavior, output format, and exit status. Examples will be taken from the actual CLI rather than invented in advance.',
      ],
    ],
    next: ['Installation', '/guides/installation'],
  },

  installation: {
    eyebrow: 'GUIDE',
    title: 'Installation',
    lead: 'Set up Ledger in a local development environment or CI runner.',
    notice: 'Installation instructions will be added once the project has a working build and a defined distribution method.',
    sections: [
      [
        'Before you begin',
        'The final guide will list supported operating systems, Rust toolchain requirements, WebAssembly tooling requirements, and any external dependencies.',
      ],
    ],
    next: ['Compare releases', '/guides/compare-releases'],
  },

  'compare-releases': {
    eyebrow: 'GUIDE',
    title: 'Compare component releases',
    lead: 'Understand how a baseline and a candidate release are compared.',
    sections: [
      [
        '1. Choose an approved baseline',
        'Start with the component release whose declared capabilities have already been reviewed. This is the reference point, not simply whichever version happens to be oldest.',
      ],
      [
        '2. Analyze the candidate',
        'Extract the candidate component’s declared imports and classify them using the same capability mapping.',
      ],
      [
        '3. Review the diff',
        'Inspect newly declared and removed imports, their capability categories, and the policy outcome. Investigate additions that are unexpected or broader than the intended change.',
      ],
      [
        '4. Decide what happens next',
        'If the addition is intentional, update the approved policy or record a reviewed exception using the supported mechanism. If it is not intended, address the dependency or component configuration before release.',
      ],
    ],
    next: ['Write a policy', '/guides/write-a-policy'],
  },

  'write-a-policy': {
    eyebrow: 'GUIDE',
    title: 'Write a security policy',
    lead: 'Turn your project’s capability expectations into explicit, reviewable rules.',
    sections: [
      [
        'Start with your threat model',
        'Decide which host capabilities are expected for this component and which would require additional review. Different components may reasonably need different access.',
      ],
      [
        'Choose how to handle unknowns',
        'Avoid silently accepting interfaces that the current classification map does not recognize. Decide whether they should warn or fail until reviewed.',
      ],
      [
        'Keep exceptions accountable',
        'For every exception, record why it exists, who approved it, and when it should expire. Treat policy changes as code-reviewable changes.',
      ],
    ],
    next: ['CI integration', '/guides/ci-integration'],
  },

  'ci-integration': {
    eyebrow: 'GUIDE',
    title: 'CI integration',
    lead: 'Use capability policy evaluation as part of a release pipeline.',
    notice: 'This guide will be finalized when the CLI and CI exit-code contract are implemented.',
    sections: [
      [
        'Expected workflow',
        'A CI job will analyze the candidate component against an approved baseline, evaluate the capability diff, publish a report, and return a status that the pipeline can use to allow or block the release.',
      ],
    ],
    next: ['Introduction', '/docs/introduction'],
  },
}

export default function DocsPage() {
  const location = useLocation()

  const slug =
    location.pathname.split('/').filter(Boolean).at(-1) || 'introduction'

  const page = pages[slug] || pages.introduction
  const toc = page.sections.map(([heading]) => heading)

  return (
    <div className="grid grid-cols-1 justify-between gap-12 pt-[38px] xl:grid-cols-[minmax(0,760px)_190px] xl:pt-[52px]">
      <article className="min-w-0 max-w-[760px]">
        <p className="text-[10px] font-bold tracking-[0.16em] text-primary-light">
          {page.eyebrow}
        </p>

        <h1 className="mt-[15px] text-[clamp(34px,4vw,48px)] font-semibold leading-[1.12] tracking-[-0.04em] text-text">
          {page.title}
        </h1>

        <p className="mt-5 max-w-[690px] text-base leading-[1.75] text-text-muted sm:text-lg">
          {page.lead}
        </p>

        {page.notice && (
          <div className="mt-7 flex gap-3 rounded-md border border-primary-light/25 bg-primary/5 px-4 py-3.5 text-primary-light">
            <CircleAlert size={18} className="mt-0.5 shrink-0" />
            <p className="text-[13px] leading-[1.65] text-text-muted">
              {page.notice}
            </p>
          </div>
        )}

        <div className="my-9 h-px bg-border" />

        {page.sections.map(([heading, body], index) => (
          <section
            key={heading}
            id={`section-${index + 1}`}
            className="mb-[34px] scroll-mt-[90px]"
          >
            <h2 className="mb-3 text-[22px] font-semibold tracking-[-0.02em] text-text">
              {heading}
            </h2>

            <p className="text-[15px] leading-[1.85] text-text-muted">
              {body}
            </p>

            {page.code && index === 1 && (
              <pre className="mt-[18px] overflow-x-auto rounded-md border border-border bg-[#080D18] p-[18px] text-[13px] leading-[1.7] text-slate-300">
                <code>{page.code}</code>
              </pre>
            )}
          </section>
        ))}

        {page.next && (
          <Link
            to={page.next[1]}
            className="mt-12 flex items-center justify-between rounded-md border border-border px-[18px] py-4 text-text transition-colors hover:border-primary-light/45 hover:bg-primary/5"
          >
            <span>
              <span className="block text-xs text-text-muted">NEXT</span>
              <span className="mt-1 block font-medium">
                {page.next[0]}
              </span>
            </span>

            <ArrowRight size={18} />
          </Link>
        )}
      </article>

      <aside className="sticky top-[105px] hidden h-fit self-start pt-1 xl:block">
        <p className="text-[10px] font-bold tracking-[0.13em] text-text-muted">
          ON THIS PAGE
        </p>

        <nav className="mt-3 space-y-2.5">
          {toc.map((heading, index) => (
            <a
              key={heading}
              href={`#section-${index + 1}`}
              className="block border-l border-border pl-3 text-xs leading-[1.5] text-text-muted transition-colors hover:border-primary hover:text-primary-light"
            >
              {heading}
            </a>
          ))}
        </nav>

      </aside>
    </div>
  )
}
