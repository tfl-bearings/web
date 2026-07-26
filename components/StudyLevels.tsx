import GradientArt from "./GradientArt";
import SectionHeading from "./SectionHeading";

const LEVELS = [
  {
    title: "Undergraduate",
    sub: "BA, BSc, BEng, LLB",
    text: "Kick-start your career with a bachelor's degree taught by experts — with placement years, study abroad and foundation-year routes.",
    art: 0,
    cta: "Explore undergraduate",
    href: "/courses?level=Undergraduate",
  },
  {
    title: "Postgraduate",
    sub: "MA, MSc, MBA, PhD",
    text: "Stand out from the crowd with a master's or research degree — full-time, part-time and January-start options available.",
    art: 1,
    cta: "Explore postgraduate",
    href: "/courses?level=Postgraduate",
  },
  {
    title: "International",
    sub: "Students from 150+ countries",
    text: "Join a truly global community, with country-specific entry advice, English language support and a warm London welcome.",
    art: 2,
    cta: "International students",
    href: "/international",
  },
];

export default function StudyLevels() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Study with us" title="Find your path" />
        <div className="grid gap-6 md:grid-cols-3">
          {LEVELS.map((level) => (
            <article
              key={level.title}
              className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <GradientArt variant={level.art} className="block h-44 w-full" />
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy">
                  {level.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-royal">
                  {level.sub}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  {level.text}
                </p>
                <a
                  href={level.href}
                  className="mt-5 inline-flex items-center gap-1.5 font-bold text-royal transition-colors hover:text-navy"
                >
                  {level.cta}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
