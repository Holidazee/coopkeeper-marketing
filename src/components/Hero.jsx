import { SIGNUP_URL, DASHBOARD_URL } from "../config.js";

function DashboardSketch() {
  return (
    <svg viewBox="0 0 420 320" className="w-full">
      {/* Browser frame */}
      <rect x="4" y="4" width="412" height="312" rx="8" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="1.4" />
      <rect x="4" y="4" width="412" height="22" rx="8" fill="#E8DDC4" stroke="#1F1B15" strokeWidth="1.4" />
      <circle cx="16" cy="15" r="3" fill="#B4541E" />
      <circle cx="26" cy="15" r="3" fill="#E6B547" />
      <circle cx="36" cy="15" r="3" fill="#556B3C" />
      <rect x="120" y="9" width="180" height="12" rx="6" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="0.8" opacity="0.7" />
      <text x="210" y="18" fontFamily="Inter" fontSize="7.5" fill="#7B715E" textAnchor="middle">
        app.coopkeeper.net
      </text>

      {/* Topbar inside the app */}
      <g transform="translate(16, 36)">
        <g transform="translate(0, 2) scale(0.45)">
          <g fill="none" stroke="#1F1B15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 32 Q8 22 16 18 Q22 15 28 17 Q33 18 36 22 Q40 28 36 34 Q30 39 20 37 Q13 36 10 32 Z" />
            <path d="M32 19 Q35 13 40 14 Q42 15 41 18 Q40 21 36 21" />
            <path d="M36 13 Q37 11 38 13 Q39 11 40 13 Q41 11 42 13" stroke="#B4541E" />
            <circle cx="38" cy="17" r="1.1" fill="#1F1B15" stroke="none" />
            <path d="M41 18 L43 18.5 L41 19.5 Z" fill="#B4541E" stroke="#B4541E" />
          </g>
        </g>
        <text x="26" y="15" fontFamily="Fraunces" fontSize="12" fontWeight="700" fill="#1F1B15">
          CoopKeeper
        </text>
        <rect x="328" y="4" width="60" height="14" rx="7" fill="#E8DDC4" stroke="#1F1B15" strokeWidth="0.6" opacity="0.6" />
        <text x="358" y="13" fontFamily="Inter" fontSize="6.5" fill="#3E3830" textAnchor="middle">Signed in as Tay</text>
      </g>

      {/* Welcome */}
      <g transform="translate(16, 64)">
        <text x="0" y="10" fontFamily="Caveat" fontSize="16" fill="#556B3C" fontWeight="600">
          Morning, Tay —
        </text>
        <text x="0" y="25" fontFamily="Caveat" fontSize="11" fill="#7B715E">
          sun · apr 19
        </text>
      </g>

      {/* KPI row */}
      <g transform="translate(16, 96)">
        {[
          { x: 0,   label: "Chickens",   value: "6" },
          { x: 96,  label: "Eggs (30d)", value: "187" },
          { x: 192, label: "$/dozen",    value: "$2.40" },
          { x: 288, label: "Last clean", value: "3d" },
        ].map((k, i) => (
          <g key={i} transform={`translate(${k.x}, 0)`}>
            <rect x="0" y="0" width="88" height="42" rx="5" fill="#FAF4E6" stroke="#1F1B15" strokeWidth="0.8" opacity="0.95" />
            <text x="8" y="14" fontFamily="Caveat" fontSize="10" fill="#7B715E">{k.label}</text>
            <text x="8" y="33" fontFamily="Fraunces" fontSize="16" fontWeight="700" fill="#1F1B15">{k.value}</text>
          </g>
        ))}
      </g>

      {/* Eggs-over-time chart card */}
      <g transform="translate(16, 148)">
        <rect x="0" y="0" width="250" height="156" rx="6" fill="#FAF4E6" stroke="#1F1B15" strokeWidth="0.8" />
        <text x="10" y="16" fontFamily="Fraunces" fontSize="11" fontWeight="600" fill="#1F1B15">Eggs over time</text>
        <text x="10" y="28" fontFamily="Inter" fontSize="7" fill="#7B715E">last 30 days</text>

        {/* grid lines */}
        <g stroke="#1F1B15" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.25">
          <line x1="20" y1="50" x2="240" y2="50" />
          <line x1="20" y1="75" x2="240" y2="75" />
          <line x1="20" y1="100" x2="240" y2="100" />
          <line x1="20" y1="125" x2="240" y2="125" />
        </g>

        {/* moss area fill */}
        <path
          d="M 20 125 L 20 95 L 50 78 L 80 88 L 110 60 L 140 72 L 170 55 L 200 68 L 230 48 L 230 125 Z"
          fill="#556B3C"
          opacity="0.18"
        />
        {/* ink line */}
        <path
          d="M 20 95 L 50 78 L 80 88 L 110 60 L 140 72 L 170 55 L 200 68 L 230 48"
          fill="none"
          stroke="#1F1B15"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* rust points */}
        {[
          [20, 95], [50, 78], [80, 88], [110, 60],
          [140, 72], [170, 55], [200, 68], [230, 48],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.6" fill="#B4541E" stroke="#FAF4E6" strokeWidth="0.8" />
        ))}

        {/* axis labels */}
        <g fontFamily="Inter" fontSize="6" fill="#7B715E">
          <text x="20" y="140">Mar 20</text>
          <text x="110" y="140">Apr 4</text>
          <text x="210" y="140">Apr 19</text>
        </g>
      </g>

      {/* Records list */}
      <g transform="translate(276, 148)">
        <rect x="0" y="0" width="128" height="156" rx="6" fill="#FAF4E6" stroke="#1F1B15" strokeWidth="0.8" />
        <text x="10" y="16" fontFamily="Fraunces" fontSize="11" fontWeight="600" fill="#1F1B15">Egg records</text>

        {[
          { d: "Apr 19", v: "7 eggs" },
          { d: "Apr 18", v: "8 eggs" },
          { d: "Apr 17", v: "6 eggs" },
          { d: "Apr 16", v: "7 eggs" },
          { d: "Apr 15", v: "5 eggs" },
        ].map((r, i) => (
          <g key={i} transform={`translate(8, ${28 + i * 24})`}>
            <rect x="0" y="0" width="112" height="20" rx="3" fill="#F3EBDB" stroke="#1F1B15" strokeWidth="0.5" opacity="0.7" />
            <text x="6" y="13" fontFamily="Fraunces" fontSize="8" fill="#1F1B15">{r.d}</text>
            <text x="106" y="13" fontFamily="Inter" fontSize="8" fill="#1F1B15" fontWeight="600" textAnchor="end">{r.v}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-4xl mx-auto px-5 sm:px-6 pt-12 md:pt-20 pb-14 md:pb-16 relative overflow-hidden text-center"
    >
      <p className="hand text-xl text-rust mb-3">howdy —</p>
      <h1 className="display text-[30px] sm:text-[38px] md:text-[46px] leading-[1.15] font-semibold text-ink tracking-tight max-w-3xl mx-auto">
        Spend less time tracking your flock,
        <br />
        more time{" "}
        <span className="sketch-underline">enjoying it.</span>
      </h1>

      {/* Dashboard sketch */}
      <div className="mt-10 md:mt-14 relative max-w-2xl mx-auto">
        <div className="relative rotate-subtle-r z-10">
          <div className="tape left-1/2 -translate-x-1/2 -top-3" />
          <div className="bg-paper-dark border border-ink/15 rounded-sm p-5 shadow-[2px_3px_0_rgba(31,27,21,0.08)]">
            <DashboardSketch />
          </div>
        </div>
      </div>

      <p className="mt-10 md:mt-12 text-[17px] md:text-[19px] text-ink-soft leading-relaxed max-w-xl mx-auto">
        Keep track of eggs, expenses, feed, and your flock — all in one
        simple place.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={SIGNUP_URL}
          className="btn-rust px-7 py-3.5 rounded-md text-[16px] font-semibold shadow-[2px_3px_0_rgba(31,27,21,0.15)]"
        >
          Get Started
        </a>
        <a
          href={DASHBOARD_URL}
          className="btn-ghost px-7 py-3.5 rounded-md text-[16px] font-semibold"
        >
          Log In
        </a>
      </div>
      <p className="hand text-[17px] text-ink-muted mt-5">
        No spreadsheets. No guesswork. Just better chicken keeping.
      </p>
    </section>
  );
}
