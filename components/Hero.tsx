/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="relative">
      {/* clearing alert strip */}
      <div className="bg-mint text-navy">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-sm font-semibold sm:px-6 lg:px-8">
          <span
            className="inline-flex h-2 w-2 animate-pulse rounded-full bg-alert"
            aria-hidden
          />
          <span>Clearing 2026 is now open.</span>
          <a
            href="/clearing"
            className="font-bold underline underline-offset-4 transition-colors hover:text-royal"
          >
            Apply today →
          </a>
        </div>
      </div>

      {/* hero */}
      <div className="relative overflow-hidden bg-navy text-white">
        <img
          src="/images/real/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/15"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="rise-in max-w-2xl">
            <p className="mb-5 inline-block rounded-none border border-mint/50 bg-navy/60 px-4 py-1.5 text-sm font-semibold text-mint">
              Welcome to the University of Greenwich
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              This is your moment.
              <br />
              <span className="text-mint">Choose Greenwich.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Award-winning teaching in London and Kent — on a World Heritage
              Site campus just 10 minutes from central London.
            </p>

            {/* course search */}
            <form
              action="/courses"
              method="get"
              className="mt-9 flex max-w-xl overflow-hidden rounded-none bg-white shadow-xl shadow-navy-deep/40 ring-4 ring-white/10 transition-shadow focus-within:ring-mint/40"
            >
              <input
                type="search"
                name="q"
                placeholder="Search undergraduate and postgraduate courses…"
                aria-label="Search courses"
                className="w-full flex-1 bg-transparent px-6 py-4 text-[15px] text-ink outline-none placeholder:text-ink/50"
              />
              <button
                type="submit"
                className="m-1.5 shrink-0 rounded-none bg-navy px-7 text-sm font-bold text-white transition-colors hover:bg-royal"
              >
                Search
              </button>
            </form>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              {[
                { label: "Browse subjects A–Z", href: "/subjects" },
                { label: "Order a prospectus", href: "/contact" },
                { label: "Chat to our students", href: "/contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="underline underline-offset-4 transition-colors hover:text-mint"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/open-days"
                className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
              >
                Book an Open Day — 17 October
              </a>
              <a
                href="/clearing"
                className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
              >
                Sign up to Priority Clearing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
