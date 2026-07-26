/* eslint-disable @next/next/no-img-element */

export default function TefGold() {
  return (
    <section className="bg-mint py-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* real TEF Gold award badge */}
        <img
          src="/images/real/badge-tef.png"
          alt="Teaching Excellence Framework Gold award"
          className="h-28 w-auto shrink-0"
        />

        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy">
            We&apos;re Gold!
          </h2>
          <p className="mt-2 text-lg text-navy/80">
            Rated Gold overall in the Teaching Excellence Framework (TEF) 2023 —
            the highest possible rating for outstanding teaching, learning and
            student outcomes.
          </p>
        </div>

        <a
          href="/study"
          className="font-bold text-navy underline underline-offset-4 transition-colors hover:text-royal lg:ml-auto"
        >
          What TEF Gold means →
        </a>
      </div>
    </section>
  );
}
