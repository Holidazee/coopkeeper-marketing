const STEPS = [
  {
    num: "01",
    title: "Add your flock",
    body:
      "Start with a name or two. Breed, age, and notes are optional. No setup gauntlet — just tell us who's in the coop.",
  },
  {
    num: "02",
    title: "Log daily",
    body:
      "A tap for eggs in the morning. A quick entry after cleaning. Receipts go in when you feel like it. That's the whole routine.",
  },
  {
    num: "03",
    title: "See trends",
    body:
      "Weekly and monthly views show what's working — which hens are crushing it, when you're overspending, when the coop's overdue.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-16 md:py-24 border-t border-warm-border/60 bg-gradient-to-b from-transparent to-off-white"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">How it works</div>
          <h2 className="section-title">
            Three steps. No onboarding wizard.
          </h2>
          <p className="mt-5 text-lg text-warm-gray leading-relaxed">
            You can be logging your first egg in under a minute. Really.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative">
          {/* decorative dashed line between cards on desktop */}
          <svg
            className="hidden md:block absolute top-10 left-[15%] right-[15%] w-[70%] h-3 text-terracotta/30 pointer-events-none"
            viewBox="0 0 100 3"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 1.5 H100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
          </svg>

          {STEPS.map((s) => (
            <li
              key={s.num}
              className="card-soft p-6 md:p-7 relative"
            >
              <div className="font-display text-sm font-bold text-terracotta-dark tracking-wider">
                STEP {s.num}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mt-2">
                {s.title}
              </h3>
              <p className="mt-2 text-warm-gray leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
