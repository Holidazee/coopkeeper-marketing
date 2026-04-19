const ITEMS = [
  {
    q: "Is it actually free?",
    a: (
      <>
        Yes, right now it is free. I am one person paying ~$7/month to host
        it. If it gets popular enough that I can't eat that cost anymore,
        I'll introduce a small paid tier and the basics will stay free
        forever. Nobody is ever going to lose access to their own flock data
        over money.
      </>
    ),
  },
  {
    q: "Do I need an app?",
    a: (
      <>
        No. It's a website. You open it in the browser on your phone, tablet,
        laptop, whatever. If you add it to your home screen it acts like an
        app. There is no App Store download because I didn't want to beg two
        corporations for permission to let you count eggs.
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
        . I read every one. I won't build all of them, but the ones I hear
        three times tend to happen.
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
