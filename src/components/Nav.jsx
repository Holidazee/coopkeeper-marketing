import { DASHBOARD_URL, SIGNUP_URL } from "../config.js";

function InkHen({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className="shrink-0">
      <g
        fill="none"
        stroke="#1F1B15"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 32 Q8 22 16 18 Q22 15 28 17 Q33 18 36 22 Q40 28 36 34 Q30 39 20 37 Q13 36 10 32 Z" />
        <path d="M32 19 Q35 13 40 14 Q42 15 41 18 Q40 21 36 21" />
        <path
          d="M36 13 Q37 11 38 13 Q39 11 40 13 Q41 11 42 13"
          stroke="#B4541E"
          strokeWidth="1.6"
        />
        <circle cx="38" cy="17" r="0.8" fill="#1F1B15" stroke="none" />
        <path d="M41 18 L43 18.5 L41 19.5 Z" fill="#B4541E" stroke="#B4541E" />
        <path d="M18 24 Q24 26 28 30" />
        <path d="M10 30 Q5 26 8 22" strokeWidth="1.6" />
        <path d="M19 37 L18 41 M18 41 L16 41 M18 41 L20 41 M18 41 L18 43" />
        <path d="M27 37 L28 41 M28 41 L26 41 M28 41 L30 41 M28 41 L28 43" />
      </g>
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-paper/85 border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <InkHen />
          <span className="display text-[22px] font-bold text-ink tracking-tight">
            CoopKeeper
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[15px] text-ink-soft">
          <a href="#what" className="hover:text-ink">What it does</a>
          <a href="#why" className="hover:text-ink">Why I built it</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={DASHBOARD_URL}
            className="btn-ghost px-3 sm:px-4 py-2 rounded-md text-sm font-medium"
          >
            Log in
          </a>
          <a
            href={SIGNUP_URL}
            className="btn-rust px-3 sm:px-4 py-2 rounded-md text-sm font-semibold"
          >
            Try it
          </a>
        </div>
      </div>
    </header>
  );
}
