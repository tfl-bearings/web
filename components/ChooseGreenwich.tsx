const STATS = [
  { big: "Gold", label: "Teaching Excellence Framework 2023" },
  { big: "Top 5", label: "university in London — StudentCrowd 2025" },
  { big: "36,000+", label: "students from around the world" },
  { big: "£4m+", label: "in scholarships and bursaries every year" },
];

export default function ChooseGreenwich() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
          Choose Greenwich
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
          A place to{" "}
          <span className="underline decoration-mint decoration-8 underline-offset-4">
            belong
          </span>
          . A place to{" "}
          <span className="underline decoration-sky decoration-8 underline-offset-4">
            learn
          </span>
          . A place to{" "}
          <span className="underline decoration-gold decoration-8 underline-offset-4">
            thrive
          </span>
          .
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/75">
          However you get here, you&apos;ll find award-winning teaching, a
          community from more than 150 countries, and support from your first
          open day to your first job.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.big} className="text-center">
            <p className="text-4xl font-extrabold text-royal sm:text-5xl">
              {stat.big}
            </p>
            <p className="mx-auto mt-2 max-w-[220px] text-sm text-ink/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
