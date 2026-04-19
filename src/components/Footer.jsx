import { SIGNUP_URL } from "../config.js";

export default function Footer() {
  return (
    <>
      {/* Closing CTA */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-20 text-center">
        <p className="hand text-xl text-moss mb-2 leaf-accent">okay last thing</p>
        <h2 className="display text-[32px] sm:text-4xl md:text-5xl font-semibold text-ink leading-tight mb-5">
          Try it, see if it's for you.
        </h2>
        <p className="text-[17px] text-ink-soft max-w-xl mx-auto mb-8">
          Takes under a minute to set up. If you hate it, delete your account
          and no one will bother you again.
        </p>
        <a
          href={SIGNUP_URL}
          className="btn-rust inline-block px-8 py-4 rounded-md text-[16px] font-semibold"
        >
          Start logging eggs
        </a>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-ink/10 text-sm text-ink-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 48 48">
            <g
              fill="none"
              stroke="#7B715E"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 32 Q8 22 16 18 Q22 15 28 17 Q33 18 36 22 Q40 28 36 34 Q30 39 20 37 Q13 36 10 32 Z" />
              <path d="M32 19 Q35 13 40 14 Q42 15 41 18 Q40 21 36 21" />
              <path
                d="M41 18 L43 18.5 L41 19.5 Z"
                fill="#B4541E"
                stroke="#B4541E"
              />
            </g>
          </svg>
          <span>CoopKeeper · made by one person, for small flocks</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="mailto:hello@coopkeeper.net" className="hover:text-ink">
            hello@coopkeeper.net
          </a>
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
        </div>
      </footer>
    </>
  );
}
