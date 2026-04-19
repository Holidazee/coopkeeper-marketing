const CASES = [
  {
    title: "First-time keepers",
    body:
      "Starting with three hens and a lot of questions? CoopKeeper is a friendly co-pilot — gentle reminders, easy logging, and zero jargon.",
    tag: "Perfect for your first coop",
  },
  {
    title: "Growing flocks",
    body:
      "Scaling from a starter coop to a small homestead? Track ten, fifteen, twenty birds without losing the plot.",
    tag: "Built to grow with you",
  },
  {
    title: "Multi-coop setups",
    body:
      "Running two or three coops? Keep each flock's eggs, expenses, and cleanings clearly separated — still one dashboard.",
    tag: "For the committed chicken person",
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 border-t border-warm-border/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">Perfect for</div>
          <h2 className="section-title">
            Whether you have three hens or thirty.
          </h2>
          <p className="mt-5 text-lg text-warm-gray leading-relaxed">
            CoopKeeper scales from a single backyard coop to a small homestead
            — and never gets in your way.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="card-soft p-6 md:p-7 relative overflow-hidden group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-10 w-32 h-32 rounded-full bg-terracotta-soft/50 blur-2xl group-hover:bg-terracotta-soft/80 transition-colors"
              />
              <div className="relative">
                <div className="inline-block text-xs font-semibold text-terracotta-dark bg-terracotta-soft px-2.5 py-1 rounded-full">
                  {c.tag}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-warm-gray leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 card-soft p-7 md:p-9 bg-off-white border-warm-border flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <div className="font-display text-xl md:text-2xl font-semibold text-ink">
              "Finally, a tool that actually feels like it was made for chicken people."
            </div>
            <div className="mt-2 text-warm-gray-light text-sm">
              — A happy keeper, probably · testimonial placeholder
            </div>
          </div>
          <a href="#faq" className="btn btn-ghost self-start md:self-auto">
            Read common questions
          </a>
        </div>
      </div>
    </section>
  );
}
