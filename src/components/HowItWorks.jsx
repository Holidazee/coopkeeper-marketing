function PhoneSketch() {
  return (
    <svg viewBox="0 0 180 320" className="w-full max-w-[200px] mx-auto">
      <g fill="none" stroke="#1F1B15" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="10" width="140" height="300" rx="20" fill="#F3EBDB" />
        <text x="90" y="40" fontFamily="Caveat" fontSize="13" fill="#7B715E" stroke="none" textAnchor="middle">
          Sun · Apr 19
        </text>
        <text x="90" y="88" fontFamily="Fraunces" fontSize="38" fontWeight="700" fill="#1F1B15" stroke="none" textAnchor="middle">
          7
        </text>
        <text x="90" y="104" fontFamily="Inter" fontSize="9" fill="#7B715E" stroke="none" textAnchor="middle">
          eggs today
        </text>
        <circle cx="55" cy="140" r="18" fill="#F3EBDB" />
        <path d="M46 140 L64 140" strokeWidth="2.5" />
        <circle cx="125" cy="140" r="18" fill="#B4541E" stroke="#8C3E12" />
        <path d="M116 140 L134 140 M125 131 L125 149" stroke="#F3EBDB" strokeWidth="2.5" />

        <text x="35" y="188" fontFamily="Caveat" fontSize="13" fill="#7B715E" stroke="none">
          this week
        </text>
        <line x1="35" y1="196" x2="145" y2="196" strokeDasharray="2 3" />
        <text x="35" y="214" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none">Sat Apr 18</text>
        <text x="145" y="214" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none" fontWeight="600" textAnchor="end">8</text>
        <text x="35" y="232" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none">Fri Apr 17</text>
        <text x="145" y="232" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none" fontWeight="600" textAnchor="end">6</text>
        <text x="35" y="250" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none">Thu Apr 16</text>
        <text x="145" y="250" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none" fontWeight="600" textAnchor="end">7</text>
        <text x="35" y="268" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none">Wed Apr 15</text>
        <text x="145" y="268" fontFamily="Inter" fontSize="10" fill="#1F1B15" stroke="none" fontWeight="600" textAnchor="end">5</text>
        <text x="90" y="288" fontFamily="Caveat" fontSize="11" fill="#556B3C" stroke="none" textAnchor="middle" fontWeight="600">
          33 this week
        </text>

        <circle cx="90" cy="301" r="4" />
      </g>
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-28">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <p className="hand text-xl text-moss mb-2 leaf-accent">the idea</p>
          <h2 className="display text-3xl md:text-4xl font-semibold text-ink leading-snug mb-5">
            Open it, log a thing, close it. Under 10 seconds.
          </h2>
          <p className="text-[17px] text-ink-soft leading-relaxed">
            I measured this. Loading CoopKeeper on a phone, tapping today's
            eggs once, and closing the tab takes me between 6 and 9 seconds
            depending on how slow my cell signal is by the coop. If that ever
            stops being true, I've done something wrong.
          </p>
        </div>
        <div className="md:col-span-2 relative">
          <PhoneSketch />
        </div>
      </div>
    </section>
  );
}
