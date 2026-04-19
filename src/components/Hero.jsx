import { SIGNUP_URL } from "../config.js";

function DashboardSketch() {
  return (
    <svg viewBox="0 0 260 400" className="w-full">
      {/* Today's counter */}
      <g>
        <rect x="10" y="14" width="240" height="130" rx="6" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="1.4" />
        <text x="24" y="34" fontFamily="Caveat" fontSize="14" fill="#7B715E">today · Sun Apr 19</text>
        <text x="24" y="52" fontFamily="Inter" fontSize="10" fill="#1F1B15" fontWeight="600">eggs collected</text>

        <circle cx="44" cy="96" r="22" fill="#FFF" stroke="#1F1B15" strokeWidth="1.6" />
        <path d="M32 96 L56 96" stroke="#1F1B15" strokeWidth="2.5" strokeLinecap="round" />

        <text x="130" y="108" fontFamily="Fraunces" fontSize="56" fontWeight="700" fill="#1F1B15" textAnchor="middle">7</text>

        <circle cx="216" cy="96" r="22" fill="#B4541E" />
        <path d="M204 96 L228 96 M216 84 L216 108" stroke="#F3EBDB" strokeWidth="2.5" strokeLinecap="round" />

        <text x="130" y="134" fontFamily="Caveat" fontSize="14" fill="#7B715E" textAnchor="middle">
          tap + every time you collect one
        </text>
      </g>

      {/* Weekly log */}
      <g>
        <rect x="10" y="156" width="240" height="138" rx="6" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="1.4" />
        <text x="24" y="176" fontFamily="Caveat" fontSize="14" fill="#7B715E">this week</text>

        <g fontFamily="Inter" fontSize="10" fill="#1F1B15">
          <line x1="24" y1="192" x2="236" y2="192" stroke="#1F1B15" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
          <text x="24" y="206">Sat Apr 18</text>
          <text x="236" y="206" textAnchor="end" fontWeight="600">8</text>
          <line x1="24" y1="214" x2="236" y2="214" stroke="#1F1B15" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
          <text x="24" y="228">Fri Apr 17</text>
          <text x="236" y="228" textAnchor="end" fontWeight="600">6</text>
          <line x1="24" y1="236" x2="236" y2="236" stroke="#1F1B15" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
          <text x="24" y="250">Thu Apr 16</text>
          <text x="236" y="250" textAnchor="end" fontWeight="600">7</text>
          <line x1="24" y1="258" x2="236" y2="258" stroke="#1F1B15" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
          <text x="24" y="272">Wed Apr 15</text>
          <text x="236" y="272" textAnchor="end" fontWeight="600">5</text>
          <line x1="24" y1="280" x2="236" y2="280" stroke="#1F1B15" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
        </g>
        <text x="24" y="290" fontFamily="Caveat" fontSize="12" fill="#556B3C" fontWeight="600">
          = 33 eggs · avg 6.6/day
        </text>
      </g>

      {/* Status card */}
      <g>
        <rect x="10" y="306" width="240" height="78" rx="6" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="1.4" />
        <text x="24" y="325" fontFamily="Caveat" fontSize="13" fill="#7B715E">quick status</text>
        <circle cx="20" cy="345" r="2.5" fill="#556B3C" />
        <text x="28" y="348" fontFamily="Inter" fontSize="10" fill="#1F1B15">
          bedding: <tspan fill="#556B3C" fontWeight="600">fresh</tspan> (3d ago)
        </text>
        <text x="28" y="365" fontFamily="Inter" fontSize="10" fill="#1F1B15">feed: half bag left</text>
        <text x="28" y="380" fontFamily="Inter" fontSize="10" fill="#556B3C" fontWeight="600">
          $2.40 per dozen this month
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-5xl mx-auto px-5 sm:px-6 pt-12 md:pt-24 pb-14 md:pb-16 relative overflow-hidden"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-7 relative">
          <p className="hand text-xl text-rust mb-3">howdy —</p>
          <h1 className="display text-[40px] sm:text-5xl md:text-[68px] leading-[1.05] md:leading-[1.02] font-semibold text-ink tracking-tight">
            I kept losing track of
            <br />
            <span className="sketch-underline">the little stuff.</span>
            <br />
            So I made this.
          </h1>
          <p className="mt-6 md:mt-7 text-[17px] md:text-[19px] text-ink-soft leading-relaxed max-w-xl">
            CoopKeeper is a small web thing for logging eggs, tracking what
            your flock costs you, and remembering when you last cleaned the
            coop. It is not venture-backed. It is not going to boil the ocean.
            It is just useful.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SIGNUP_URL}
              className="btn-rust px-6 py-3 rounded-md text-[15px] font-semibold"
            >
              Give it a try — it's free
            </a>
            <a
              href="#what"
              className="text-ink-soft hover:text-ink text-[15px] px-2 py-3 inline-flex items-center gap-1"
            >
              or see what it actually does →
            </a>
          </div>
          <p className="hand text-[17px] text-ink-muted mt-5">
            no credit card, no "book a demo" nonsense
          </p>
        </div>

        {/* Dashboard sketch + polaroid */}
        <div className="md:col-span-5 relative">
          <div className="hidden md:block absolute -top-6 -left-10 z-0 rotate-[-7deg] pointer-events-none">
            <div className="bg-paper-dark border border-ink/15 p-2 pb-6 shadow-[3px_4px_0_rgba(31,27,21,0.12)] w-40">
              <img
                src="https://loremflickr.com/320/240/chicken,backyard,hen"
                alt="my hens"
                className="w-full h-28 object-cover"
              />
              <p className="hand text-center text-sm text-ink-soft mt-1">
                the girls, march '24
              </p>
            </div>
          </div>
          <div className="relative rotate-subtle-r z-10">
            <div className="tape left-1/2 -translate-x-1/2 -top-3" />
            <div className="bg-paper-dark border border-ink/15 rounded-sm p-5 shadow-[2px_3px_0_rgba(31,27,21,0.08)]">
              <DashboardSketch />
            </div>
            <p className="hand text-rust text-lg mt-3 ml-2">
              ← roughly what the dashboard looks like
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
