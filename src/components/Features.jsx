const FEATURES = [
  {
    title: "Egg production tracking",
    body:
      "One tap per egg. See your best layers, quiet weeks, and seasonal patterns at a glance — without ever touching a spreadsheet.",
    Icon: EggIcon,
    tint: "bg-terracotta-soft",
  },
  {
    title: "Expense monitoring",
    body:
      "Feed, bedding, a new heat lamp, the vet. Track what the flock actually costs — and your real cost per dozen eggs.",
    Icon: CoinIcon,
    tint: "bg-forest-soft",
  },
  {
    title: "Cleaning & care logs",
    body:
      "Log a cleaning in five seconds. Get a gentle nudge when it's been too long. Healthier birds, less mental load.",
    Icon: BroomIcon,
    tint: "bg-[#FFE9D3]",
  },
  {
    title: "Flock management",
    body:
      "Name your birds. Track breeds and ages. Retire old layers. Welcome new ones. Your whole flock in one place.",
    Icon: ChickenIcon,
    tint: "bg-[#F4EFE5]",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 border-t border-warm-border/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">Features</div>
          <h2 className="section-title">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-5 text-lg text-warm-gray leading-relaxed">
            Four simple tools, one calm dashboard. Built for the way you
            actually keep chickens — on the porch, at the coop, on your phone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {FEATURES.map(({ title, body, Icon, tint }) => (
            <article
              key={title}
              className="card-soft p-6 md:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl2 ${tint} mb-5`}
              >
                <Icon />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-warm-gray leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Icons — simple, hand-tuned SVG */
function EggIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3c4 0 7 5 7 10 0 4-3 7-7 7s-7-3-7-7c0-5 3-10 7-10z"
        fill="none" stroke="#C66328" strokeWidth="1.8" strokeLinejoin="round"
      />
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="#1F3A2E" strokeWidth="1.8" />
      <path d="M12 8v8 M9.5 10.5c1-1.2 4-1.2 5 0 M9.5 13.5c1 1.2 4 1.2 5 0" stroke="#1F3A2E" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function BroomIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3l6 6" stroke="#8A3E15" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 4l-9 9 4 4 9-9" fill="none" stroke="#8A3E15" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 14l-5 5 M10 16l-5 3 M6 12l-3 5" stroke="#E07A3A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function ChickenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 19c-3 0-5-3-5-6 0-4 3-8 7-8s6 3 6 7c0 2 2 3 3 4-2 1-4 1-6 1 0 1-1 2-3 2z" fill="none" stroke="#2A2420" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="10" r="0.9" fill="#2A2420" />
      <path d="M6 7c0-1 1-2 2-2" stroke="#E07A3A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}
