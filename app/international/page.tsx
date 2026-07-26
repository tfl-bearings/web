import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "International students | University of Greenwich Clone",
  description:
    "Study abroad in London and Kent — entry requirements, fees, scholarships and visa support.",
};

const HELP_CARDS = [
  {
    title: "Greenwich in your country",
    text: "Entry requirements, agents and application advice specific to where you live.",
    art: 0,
  },
  {
    title: "Applications: step-by-step guide",
    text: "The documents you need and exactly what happens after you apply.",
    art: 1,
  },
  {
    title: "Visas and immigration",
    text: "Student visa guidance, plus how to stay and work in the UK after you graduate.",
    art: 2,
  },
];

const FEES_CARDS = [
  {
    title: "Tuition fees",
    text: "Clear fees for EU and international students, published for every course.",
  },
  {
    title: "Scholarships and bursaries",
    text: "The International Scholarship Award gives eligible offer holders up to £3,000 off.",
  },
  {
    title: "How to pay",
    text: "Pay securely by bank transfer or instalments — with step-by-step instructions.",
  },
];

const OTHER_WAYS = [
  {
    title: "UGIC — International College",
    text: "Our embedded college with pathway courses that lead straight into a Greenwich degree.",
    art: 3,
  },
  {
    title: "Pre-sessional English",
    text: "Build your academic English before your course starts — on campus or online.",
    art: 4,
  },
  {
    title: "Study abroad and exchanges",
    text: "Join us for a semester or year through exchange and study-abroad partnerships.",
    art: 5,
  },
];

const LIFE_LINKS = [
  "Why study in the UK",
  "Living in London and the South East",
  "Medical services and healthcare",
  "University accommodation",
];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        title="International students"
        intro="Study abroad at the University of Greenwich in London and Kent and earn an internationally recognised education — at historic campuses just minutes from central London."
        crumbs={[{ label: "International" }]}
      >
        <Link
          href="/courses"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Browse courses
        </Link>
        <Link
          href="/contact"
          className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
        >
          Apply now
        </Link>
      </PageHero>

      {/* applications open */}
      <section className="bg-mint py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Applications are open now
            </h2>
            <p className="mt-2 max-w-xl text-navy/80">
              Start in <strong>September</strong>, <strong>January</strong> or{" "}
              <strong>April</strong> on selected programmes — so you can begin
              when it suits you.
            </p>
          </div>
          <Link
            href="/courses"
            className="rounded-none bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
          >
            Find your start date
          </Link>
        </div>
      </section>

      {/* help and support */}
      <section id="help" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="We're here for you" title="Help and support" />
          <div className="grid gap-6 md:grid-cols-3">
            {HELP_CARDS.map((card) => (
              <Link
                key={card.title}
                href="/contact"
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={card.art} className="block h-36 w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-navy transition-colors group-hover:text-royal">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink/80">{card.text}</p>
                  <span className="mt-4 inline-block font-bold text-royal">
                    Read more{" "}
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* why choose greenwich */}
      <section id="why" className="scroll-mt-24 bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
            Why choose Greenwich?
          </p>
          <blockquote className="mt-6 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
            &ldquo;Greenwich is more than a collection of individual students
            and staff — it is a community of people united by their passion for
            learning.&rdquo;
          </blockquote>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6">
            {[
              { big: "150+", label: "nationalities on campus" },
              { big: "Top 5", label: "London university (StudentCrowd)" },
              { big: "3", label: "start dates a year" },
            ].map((stat) => (
              <div key={stat.big}>
                <p className="text-3xl font-extrabold text-mint sm:text-4xl">
                  {stat.big}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fees and finance */}
      <section id="fees" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Plan your budget" title="Fees and finance" />
          <div className="grid gap-6 md:grid-cols-3">
            {FEES_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-none bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink/80">{card.text}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block font-bold text-royal transition-colors hover:text-navy"
                >
                  Find out more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* explore virtually */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">
              Explore Greenwich from wherever you are
            </h2>
            <p className="mt-3 text-ink/80">
              Can&apos;t visit in person? Take a virtual campus tour, join a
              live webinar or watch on-demand sessions about your subject.
            </p>
          </div>
          <Link
            href="/open-days"
            className="rounded-none bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
          >
            Discover
          </Link>
        </div>
      </section>

      {/* other ways to study */}
      <section id="other-ways" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Other ways to study" />
          <div className="grid gap-6 md:grid-cols-3">
            {OTHER_WAYS.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <GradientArt variant={card.art} className="block h-32 w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink/80">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* life at greenwich */}
      <section id="life" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Life at Greenwich" title="How we can help" />
            <p className="text-[15px] leading-relaxed text-ink/80">
              Our international advisers support you with settling in, personal
              matters and immigration questions — from the moment you accept
              your offer to the day you graduate. You&apos;ll join a welcome
              programme designed to help you make friends fast.
            </p>
          </div>
          <div className="space-y-3 lg:pt-24">
            {LIFE_LINKS.map((l) => (
              <Link
                key={l}
                href="/contact"
                className="group flex items-center justify-between rounded-none border border-mist px-5 py-4 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-royal hover:shadow-md"
              >
                {l}
                <span
                  aria-hidden
                  className="text-royal transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section id="contact" className="scroll-mt-24 bg-navy py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-3 text-white/80">
              Our international team replies within two working days.
            </p>
            <p className="mt-4 font-semibold text-mint">
              international@gre.ac.uk · +44 (0)20 8331 8136
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-none bg-mint px-7 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
          >
            Ask a question
          </Link>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
