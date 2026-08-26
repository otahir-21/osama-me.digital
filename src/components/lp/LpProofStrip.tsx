const PROOF_ITEMS = [
  {
    value: "6+ Years",
    detail: "Production software experience",
  },
  {
    value: "20+ Products",
    detail: "Mobile & web products contributed to",
  },
  {
    value: "Dubai, UAE",
    detail: "Local + GCC project experience",
  },
  {
    value: "End-to-End",
    detail: "Build · Backend · Integrations · Launch",
  },
] as const;

export function LpProofStrip() {
  return (
    <section className="border-y border-border bg-surface-alt" aria-label="Credibility">
      <div className="mx-auto grid max-w-content gap-6 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {PROOF_ITEMS.map((item) => (
          <div key={item.value}>
            <p className="text-base font-semibold text-foreground">{item.value}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
