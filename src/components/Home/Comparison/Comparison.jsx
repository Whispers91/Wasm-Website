import { ShieldCheck, Plus, ArrowRight, AlertTriangle } from "lucide-react";

function CapabilityComparison() {
  const capabilities = [
    { name: "Network access", category: "Network" },
    { name: "TCP sockets", category: "Network" },
    { name: "I/O polling", category: "Support" },
  ];

  return (
    <div className="w-full rounded-2xl border border-border bg-surface p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-label font-semibold uppercase tracking-widest text-text-muted">
            Release comparison
          </p>
          <h3 className="mt-2 text-subheading font-semibold">Versions</h3>
        </div>

        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-label font-semibold text-red-400 text-center">
          Policy failed
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 rounded-lg bg-card p-3">
          <p className="text-small text-text-muted">Baseline</p>
          <p className="mt-1 font-semibold">v0.4.1</p>
        </div>

        <ArrowRight className="text-text-muted" size={20} />

        <div className="flex-1 rounded-lg bg-card p-3">
          <p className="text-small text-text-muted">New release</p>
          <p className="mt-1 font-semibold">v0.4.2</p>
        </div>
      </div>

      <div className="mt-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-small font-semibold">
            Newly declared capabilities
          </h4>

          <span className="text-label text-text-muted">3 additions</span>
        </div>

        <div className="space-y-3">
          {capabilities.map((capability) => (
            <div
              key={capability.name}
              className="flex items-center justify-between rounded-lg border border-border bg-card/50 p-3"
            >
              <div className="flex items-center gap-3">
                <Plus size={16} className="text-red-400" />
                <div>
                  <p className="text-small font-medium">{capability.name}</p>
                  <p className="text-label text-text-muted">
                    {capability.category}
                  </p>
                </div>
              </div>

              <span className="text-label font-semibold text-red-400">
                Added
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
        <AlertTriangle size={20} className="shrink-0 text-red-400" />

        <div>
          <p className="text-small font-semibold text-red-400">
            3 policy violations
          </p>
          <p className="text-label text-text-muted">
            Unapproved network capabilities detected.
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-text-muted">
        <ShieldCheck size={15} />
        <span className="text-label">Protected by capability policy</span>
      </div>
    </div>
  );
}

export default CapabilityComparison;
