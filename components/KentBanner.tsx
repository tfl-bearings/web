export default function KentBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white">
      {/* decorative circles */}
      <svg
        className="absolute -right-24 -top-28 h-[440px] w-[440px] opacity-25"
        viewBox="0 0 440 440"
        aria-hidden="true"
      >
        <circle
          cx="220"
          cy="220"
          r="180"
          fill="none"
          stroke="#89e9d7"
          strokeWidth="2"
        />
        <circle
          cx="220"
          cy="220"
          r="130"
          fill="none"
          stroke="#61ccf3"
          strokeWidth="2"
        />
        <circle cx="220" cy="220" r="80" fill="#89e9d7" opacity="0.15" />
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
            University of Greenwich × University of Kent
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A trailblazing collaboration
          </h2>
          <p className="mt-4 text-white/80">
            We&apos;re joining forces with the University of Kent to build a new
            powerhouse for education and research across London and the South
            East — launching August 2026.
          </p>
        </div>
        <a
          href="/study#kent"
          className="rounded-none bg-mint px-7 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Find out more
        </a>
      </div>
    </section>
  );
}
