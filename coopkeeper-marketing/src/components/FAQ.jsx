import { useState } from "react";

const ITEMS = [
  {
    q: "Is it free?",
    a: "Yep, fully free while we're in early access. If that ever changes, you'll know well in advance — and your data always stays yours to export.",
  },
  {
    q: "Does it work on my phone?",
    a: "CoopKeeper is built mobile-first. Add it to your home screen and it behaves like an app on iOS and Android — no install required.",
  },
  {
    q: "Can I track multiple coops?",
    a: "You can track as many birds as you want, grouped however you like — separate flocks, separate coops, no problem. Everything lives on one dashboard.",
  },
  {
    q: "What about roosters or hens that aren't laying?",
    a: "They're part of the family too. Track them without any pressure to log eggs — they just live in your flock view and count toward your chicken total.",
  },
  {
    q: "Do I need internet at the coop?",
    a: "You only need internet to sign in. Day-to-day logging is lightweight, so a spotty connection at the coop is fine. Offline mode is on the roadmap.",
  },
  {
    q: "Do you sell my data?",
    a: "Never. Your flock is your business. We don't sell, share, or train models on your data — and you can export or delete everything, any time.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16 md:py-24 border-t border-warm-border/60">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-14">
          <div>
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="section-title">
              Questions people <span className="underline-squiggle">actually</span> ask.
            </h2>
            <p className="mt-5 text-warm-gray leading-relaxed">
              Still have a question? We'd love to hear it — it's probably
              something other keepers are wondering too.
            </p>
          </div>
          <ul className="divide-y divide-warm-border border-y border-warm-border">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="font-display text-lg md:text-xl font-semibold text-ink">
                      {item.q}
                    </span>
                    <Chevron open={isOpen} />
                  </button>
                  <div
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-warm-gray leading-relaxed max-w-prose">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Chevron({ open }) {
  return (
    <svg
      width="22" height="22" viewBox="0 0 22 22"
      className={`flex-shrink-0 text-warm-gray-light transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M5 8 l6 6 l6 -6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
