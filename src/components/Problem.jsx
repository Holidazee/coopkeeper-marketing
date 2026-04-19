export default function Problem() {
  return (
    <section id="why" className="max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-28">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
        <div className="md:col-span-7">
          <p className="hand text-xl text-moss mb-3 leaf-accent">the honest bit</p>
          <h2 className="display text-[28px] sm:text-3xl md:text-4xl font-semibold text-ink leading-snug mb-6">
            Spreadsheets are a graveyard. Notebooks get rained on.
          </h2>
          <div className="space-y-5 text-[17px] md:text-[18px] leading-relaxed text-ink-soft">
            <p>
              I got six hens in the spring of 2024. Within a month I had three
              half-filled notebooks, a kitchen whiteboard nobody updated, and a
              Google Sheet I'd open twice then forget about for two weeks. By
              October I genuinely could not remember which hen was molting, when
              I last bought feed, or whether I was losing money on eggs.
            </p>
            <p>
              I looked for an app. What I found was either spreadsheet-shaped
              farm software built for a 500-bird operation, or $9.99 / month
              "pet chicken trackers" with cartoon chickens winking at me.
            </p>
            <p>
              So this is the one I wanted. It opens fast, it remembers which coop
              is yours, you can log today's eggs in one tap, and at the end of the
              year you can actually tell whether your hens paid for themselves. No
              login walls to features, no upsells, no boiling the ocean.
            </p>
            <p className="text-ink">
              — Tay, who is still bad at remembering cleaning days
            </p>
          </div>
        </div>

        {/* Polaroid cluster */}
        <div className="md:col-span-5 relative md:pt-6 max-w-sm mx-auto md:max-w-none">
          <div className="relative rotate-[2deg]">
            <div className="tape right left-1/2 -translate-x-1/2 -top-3" />
            <div className="bg-paper-dark border border-ink/15 p-3 pb-10 shadow-[3px_5px_0_rgba(31,27,21,0.1)]">
              <img
                src="https://loremflickr.com/480/360/backyard,chicken,coop"
                alt="our coop"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="hand text-center text-base text-ink-soft mt-3">
                the coop I built. Mostly square.
              </p>
            </div>
          </div>
          <div className="relative rotate-[-4deg] -mt-4 md:-mt-6 ml-6 sm:ml-12 mr-2 sm:mr-0">
            <div className="bg-paper-dark border border-ink/15 p-3 pb-10 shadow-[3px_5px_0_rgba(31,27,21,0.1)]">
              <img
                src="https://loremflickr.com/400/400/hen,face,closeup"
                alt="Henrietta"
                className="w-full aspect-square object-cover"
              />
              <p className="hand text-center text-base text-ink-soft mt-3">
                Henrietta. In charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
