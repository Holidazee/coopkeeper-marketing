// Stylized, hand-built mock of the CoopKeeper dashboard.
// Pure SVG + divs so it's crisp at any size and zero-cost.
export default function DashboardMock() {
  return (
    <div className="relative">
      {/* soft halo behind the mock */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 md:-inset-10 rounded-[40px] bg-gradient-to-br from-terracotta-soft via-white to-forest-soft opacity-70 blur-2xl"
      />

      <div className="relative rounded-xl3 bg-white border border-warm-border shadow-lift overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-warm-border bg-off-white/70">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EB6A5A]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#65C466]" />
          <span className="ml-3 text-xs text-warm-gray-light font-medium">
            coopkeeper.net
          </span>
        </div>

        <div className="p-5 md:p-6 space-y-5">
          {/* Hero row: Today's eggs widget */}
          <div className="rounded-xl2 p-5 md:p-6 bg-gradient-to-br from-[#FFF4E6] to-[#FFE9D3] border border-[#F2DCC2]">
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow">Today</div>
                <div className="font-display text-xl md:text-2xl font-semibold text-ink">
                  Quick egg log
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  aria-hidden="true"
                  className="w-11 h-11 rounded-2xl bg-white border border-[#EACBA3] text-xl font-semibold shadow-soft"
                >
                  −
                </button>
                <div className="text-center min-w-[72px]">
                  <div className="font-display text-4xl font-bold leading-none">
                    7
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-warm-gray-light mt-1">
                    eggs today
                  </div>
                </div>
                <button
                  aria-hidden="true"
                  className="w-11 h-11 rounded-2xl bg-terracotta text-white text-xl font-semibold shadow-card"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            <Kpi label="Chickens" value="6" hint="In your flock" />
            <Kpi label="Eggs (30d)" value="148" hint="Avg 4.9/day" />
            <Kpi label="Cost / dozen" value="$2.40" accent />
          </div>

          {/* Chart */}
          <div className="rounded-xl2 border border-warm-border p-4 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm font-semibold text-ink">Eggs over time</div>
                <div className="text-xs text-warm-gray-light">Last 30 days</div>
              </div>
              <div className="flex gap-1 text-[11px] font-semibold text-warm-gray-light">
                <span className="px-2 py-1 rounded-md bg-off-white">7d</span>
                <span className="px-2 py-1 rounded-md bg-white border border-warm-border text-ink">30d</span>
                <span className="px-2 py-1 rounded-md bg-off-white">90d</span>
              </div>
            </div>
            <MiniChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, hint, accent = false }) {
  return (
    <div
      className={`rounded-xl p-3 md:p-4 border ${
        accent
          ? "bg-terracotta-soft border-[#F2DCC2]"
          : "bg-off-white border-warm-border"
      }`}
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-warm-gray-light">
        {label}
      </div>
      <div className="font-display text-xl md:text-2xl font-semibold mt-0.5 text-ink">
        {value}
      </div>
      {hint && (
        <div className="text-[11px] text-warm-gray-light mt-0.5">{hint}</div>
      )}
    </div>
  );
}

function MiniChart() {
  // Friendly hand-tuned data.
  const pts = [3, 5, 4, 6, 5, 7, 6, 8, 6, 7, 5, 6, 7, 8, 7];
  const max = Math.max(...pts);
  const w = 320, h = 90, pad = 6;
  const step = (w - pad * 2) / (pts.length - 1);
  const toY = (v) => h - pad - (v / max) * (h - pad * 2);
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${toY(v)}`).join(" ");
  const areaPath =
    `M ${pad} ${h - pad} ` +
    pts.map((v, i) => `L ${pad + i * step} ${toY(v)}`).join(" ") +
    ` L ${w - pad} ${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[90px]">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E07A3A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E07A3A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#cg)" />
      <path d={path} stroke="#E07A3A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((v, i) => (
        <circle
          key={i}
          cx={pad + i * step}
          cy={toY(v)}
          r={i === pts.length - 1 ? 3.5 : 2}
          fill={i === pts.length - 1 ? "#E07A3A" : "#FFFFFF"}
          stroke="#E07A3A"
          strokeWidth="1.6"
        />
      ))}
    </svg>
  );
}
