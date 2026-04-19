export default function Features() {
  return (
    <section id="what" className="max-w-5xl mx-auto px-5 sm:px-6 py-16 md:py-28">
      <div className="mb-10 md:mb-14">
        <p className="hand text-xl text-rust mb-2">what it does, actually</p>
        <h2 className="display text-[32px] sm:text-4xl md:text-5xl font-semibold text-ink leading-[1.1] max-w-3xl">
          Four small things. Done well.
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-x-10 gap-y-10 md:gap-y-14">
        {/* Feature 1 */}
        <div className="md:col-span-6 md:col-start-1 relative rotate-subtle-l">
          <div className="flex items-start gap-4">
            <span className="display text-rust text-5xl font-bold leading-none shrink-0">
              1.
            </span>
            <div>
              <h3 className="display text-2xl font-semibold text-ink mb-2">
                Log eggs in one tap
              </h3>
              <p className="text-[17px] text-ink-soft leading-relaxed">
                A big fat + button. That's the whole feature. Tap it each time
                you collect one, or punch in the total when you come inside.
                Every tap is date-stamped so your weekly and yearly totals
                just… exist. Works on a phone with flour on your fingers.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="md:col-span-6 md:col-start-7 relative md:mt-16 rotate-subtle-r">
          <div className="flex items-start gap-4">
            <span className="display text-moss text-5xl font-bold leading-none shrink-0">
              2.
            </span>
            <div>
              <h3 className="display text-2xl font-semibold text-ink mb-2">
                Know what it actually costs
              </h3>
              <p className="text-[17px] text-ink-soft leading-relaxed">
                Add a bag of feed, a roll of hardware cloth, a vet visit.
                CoopKeeper divides it by how many eggs you've collected and
                tells you, without euphemism, what a dozen cost you this month.
                (Usually more than the store. It's fine. It's for the vibes.)
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="md:col-span-6 md:col-start-1 relative rotate-subtle-r">
          <div className="flex items-start gap-4">
            <span className="display text-yolk text-5xl font-bold leading-none shrink-0">
              3.
            </span>
            <div>
              <h3 className="display text-2xl font-semibold text-ink mb-2">
                Remember the boring stuff
              </h3>
              <p className="text-[17px] text-ink-soft leading-relaxed">
                Last time you swapped bedding. Last time you dusted for mites.
                When the waterer was deep-cleaned. CoopKeeper keeps the list,
                nudges you when it's been too long, and doesn't judge you when
                it has.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="md:col-span-6 md:col-start-7 relative md:mt-16 rotate-subtle-l">
          <div className="flex items-start gap-4">
            <span className="display text-dusk text-5xl font-bold leading-none shrink-0">
              4.
            </span>
            <div>
              <h3 className="display text-2xl font-semibold text-ink mb-2">
                Keep track of the birds themselves
              </h3>
              <p className="text-[17px] text-ink-soft leading-relaxed">
                Breed, hatch date, name (if you're that kind of keeper),
                whether she's laying, moulting, broody, or recovering. Useful
                later when you're trying to remember why Henrietta stopped
                laying in September.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
