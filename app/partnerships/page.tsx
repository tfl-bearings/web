import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Partnerships | University of Greenwich Clone",
  description:
    "Work with Greenwich — degree apprenticeships, business support and knowledge exchange.",
};

const ACCREDITATIONS = [
  "Small Business Charter",
  "EFMD-accredited programmes",
  "PRME signatory",
  "300+ employer partners",
];

const SERVICES = [
  {
    title: "The Generator Team",
    text: "Start-up support, mentoring and funding competitions for student and graduate entrepreneurs.",
    art: 0,
  },
  {
    title: "Help to Grow: Management",
    text: "A 12-week, 90%-subsidised programme for senior leaders of small and medium businesses.",
    art: 1,
  },
  {
    title: "Knowledge Transfer Partnerships",
    text: "Embed a graduate and an academic team in your business to deliver an innovation project.",
    art: 2,
  },
  {
    title: "Recruit our students",
    text: "Advertise roles, host placements and meet your next hires at our careers fairs.",
    art: 4,
  },
];

const SCHOOLS = [
  "School of Accounting, Finance & Economics",
  "School of Business, Operations & Strategy",
  "School of Management & Marketing",
  "Executive Business Centre",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        title="Partnerships and business"
        intro="A place to thrive, a place to forge your future. We work with change-makers, bold thinkers, innovators and disruptors — from global employers to local start-ups."
        crumbs={[{ label: "Partnerships" }]}
      >
        <Link
          href="/contact"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Work with us
        </Link>
        <Link
          href="#apprenticeships"
          className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
        >
          Degree apprenticeships
        </Link>
      </PageHero>

      {/* accreditations strip */}
      <section className="bg-mist py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {ACCREDITATIONS.map((a) => (
            <span
              key={a}
              className="rounded-none border-l-4 border-mint bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm"
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* greenwich means business */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Greenwich Business School"
              title="Greenwich means business"
            />
            <p className="text-[15px] leading-relaxed text-ink/80">
              Our Thames-side campus sits minutes from Canary Wharf — and our
              teaching, research and consultancy are plugged straight into
              London&apos;s business ecosystem. Whatever your background or
              goals, you&apos;ll find a community that backs you.
            </p>
            <ul className="mt-6 space-y-3">
              {SCHOOLS.map((school) => (
                <li
                  key={school}
                  className="flex items-center gap-3 font-semibold text-navy"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-mint"
                    aria-hidden
                  />
                  {school}
                </li>
              ))}
            </ul>
          </div>
          <GradientArt
            variant={3}
            className="block h-72 w-full rounded-none lg:h-96"
          />
        </div>
      </section>

      {/* apprenticeships */}
      <section
        id="apprenticeships"
        className="scroll-mt-24 bg-navy py-20 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Degree apprenticeships
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Earn while you learn
            </h2>
            <p className="mt-4 text-white/80">
              Apprentices split their week between paid work and university —
              graduating debt-free with a full degree and years of experience.
              We deliver programmes with more than 300 employers, from the NHS
              to global engineering firms.
            </p>
            <ul className="mt-6 grid gap-2 text-white/85 sm:grid-cols-2">
              {[
                "No tuition fees for apprentices",
                "A salary from day one",
                "Levels 4 to 7 available",
                "Day-release and block teaching",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-[10px] font-bold text-navy"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contact"
            className="rounded-none bg-mint px-7 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
          >
            Become a partner
          </Link>
        </div>
      </section>

      {/* services */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For business"
            title="How we can work together"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <GradientArt variant={s.art} className="block h-28 w-full" />
                <div className="p-5">
                  <h3 className="font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{s.text}</p>
                  <Link
                    href="/contact"
                    className="mt-3 inline-block text-sm font-bold text-royal transition-colors hover:text-navy"
                  >
                    Enquire →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Let's build something together"
        text="Tell us about your organisation and we'll find the right way to partner."
      />
    </>
  );
}
