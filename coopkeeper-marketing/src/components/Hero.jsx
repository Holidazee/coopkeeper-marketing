import DashboardMock from "./DashboardMock.jsx";
import { SIGNUP_URL } from "../config.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background flourishes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-terracotta-soft/60 blur-3xl" />
        <div className="absolute -top-24 right-0 w-[460px] h-[460px] rounded-full bg-forest-soft/50 blur-3xl" />
      </div>

      <div className="container-page pt-12 md:pt-20 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="animate-fade-up">
            <div className="eyebrow mb-5">For backyard chicken keepers</div>
            <h1 className="headline text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.04]">
              Happy hens.{" "}
              <span className="underline-squiggle">Cleaner coops.</span>{" "}
              Costs that add up.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-warm-gray leading-relaxed max-w-xl">
              CoopKeeper is the calm little dashboard for backyard chicken keepers.
              Log eggs in a tap, see what your flock actually costs, and never
              forget cleaning day again.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={SIGNUP_URL} className="btn btn-primary text-base">
                Start free
                <ArrowRight />
              </a>
              <a
                href="#how"
                className="btn btn-ghost text-base"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 text-sm text-warm-gray-light flex items-center gap-2">
              <span aria-hidden="true">🥚</span>
              Free while in early access · works on any phone · no app install
            </p>
          </div>

          <div className="relative lg:-mr-4">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8 h10 M9 4 l4 4 l-4 4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
