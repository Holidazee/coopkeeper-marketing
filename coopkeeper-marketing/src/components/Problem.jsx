import ChickenIllustration from "./ChickenIllustration.jsx";

export default function Problem() {
  return (
    <section className="py-16 md:py-24 border-t border-warm-border/60">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <div className="eyebrow mb-4">The problem</div>
            <h2 className="section-title">
              You got chickens for the joy —{" "}
              <span className="underline-squiggle">not the spreadsheet.</span>
            </h2>
            <div className="mt-6 grid gap-5 text-lg text-warm-gray leading-relaxed max-w-2xl">
              <p>
                A note on the fridge. A tally in your head. A half-finished
                spreadsheet you haven't opened since spring. Somewhere in there
                is the answer to "when did I last clean the coop?" — probably.
              </p>
              <p>
                CoopKeeper replaces the clutter with one friendly place to log
                eggs, costs, and coop care. Less admin. Healthier birds. You
                actually know your numbers.
              </p>
            </div>
          </div>
          <div className="mx-auto md:mx-0 md:mt-8">
            <ChickenIllustration size={150} className="animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
