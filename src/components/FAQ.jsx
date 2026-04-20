const ITEMS = [
  {
    q: "Is it actually free?",
    a: (
      <>
        Yes. Right now the whole thing is free — I'm one person paying about
        $7/month to host it. Somewhere down the road there may be paid
        features for folks who want extras, but the basics — logging eggs,
        tracking feed and costs, cleaning reminders — will stay free
        forever. Nobody is ever going to lose access to their own flock data
        over money.
      </>
    ),
  },
  {
    q: "Is there an app?",
    a: (
      <>
        Not yet. It's a website — you open it in the browser on your phone,
        tablet, laptop, whatever. Add it to your home screen and it acts
        like an app. Someday there may be a proper native app, but for now
        this works just fine and means I don't have to beg two corporations
        for permission to let you count eggs.
      </>
    ),
  },
  {
    q: "Will you sell my data? Does my feed supplier get emails about me?",
    a: (
      <>
        No. There are no third-party trackers, no ad pixels, no email list
        rented to Tractor Supply. If I ever change that, I'll tell you before
        I do it, and you can delete your account.
      </>
    ),
  },
  {
    q: "What if I have 40 birds? Or 4?",
    a: (
      <>
        Both work. CoopKeeper was built for backyard flocks (3–30-ish birds),
        but people have used it for single pet hens and for small homesteads
        with a few dozen. If you're running a commercial layer operation with
        500+ birds, you probably want real farm software — and I'll happily
        point you somewhere.
      </>
    ),
  },
  {
    q: "Do you take feature requests?",
    a: (
      <>
        Yes, enthusiastically. Email me at{" "}
        <a
          href="mailto:hello@coopkeeper.net"
          className="text-moss-dark underline underline-offset-2"
        >
          hello@coopkeeper.net
        </a>
        {" "}— I read every one. A lot of what ends up getting built (including
        the "maybe someday" stuff up there — a native app, paid extras,
        whatever) will get built because enough people wrote in and asked for
        it. So if there's something you want, tell me. I won't build
        everything, but the ones I hear three times tend to happen.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-5 sm:px-6 py-20 md:py-24">
      <p className="hand text-xl text-rust mb-2">before you ask</p>
      <h2 className="display text-[32px] sm:text-4xl md:text-5xl font-semibold text-ink leading-[1.1] mb-8 md:mb-10">
        Questions real people have asked me.
      </h2>

      <div className="space-y-6">
        {ITEMS.map((item, i) => (
          <details key={i} className="border-b border-ink/10 pb-5 group">
            <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
              <span className="display text-xl font-semibold text-ink">
                {item.q}
              </span>
              <span className="display text-rust text-2xl leading-none group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-[17px] text-ink-soft leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
