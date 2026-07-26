import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import CtaStrip from "@/components/CtaStrip";
import TefGold from "@/components/TefGold";

export const metadata: Metadata = {
  title: "Study with us | University of Greenwich Clone",
  description:
    "Undergraduate, postgraduate and flexible study options at our Greenwich clone project.",
};

const PATHWAYS = [
  {
    title: "Apply for an undergraduate course — UK",
    text: "Apply through UCAS for full-time bachelor's degrees starting in September.",
    tag: "Via UCAS",
  },
  {
    title: "Apply for a postgraduate taught course — UK",
    text: "Apply directly to us for master's degrees. No application fee.",
    tag: "Direct",
  },
  {
    title: "International applications",
    text: "Country-specific guidance, entry requirements and visa support.",
    tag: "International",
  },
  {
    title: "Apply for a postgraduate research degree",
    text: "MPhil and PhD opportunities across our research communities.",
    tag: "Research",
  },
  {
    title: "Applying to a partner college",
    text: "Study a Greenwich-validated degree at one of our partner institutions.",
    tag: "Partners",
  },
];

const MORE_COURSES = [
  {
    title: "Degree apprenticeships",
    text: "Earn while you learn with one of our employer partners.",
    href: "/partnerships#apprenticeships",
    art: 0,
  },
  {
    title: "Flexible degrees",
    text: "Part-time, online and January-start options that fit your life.",
    href: "/courses",
    art: 1,
  },
  {
    title: "Foundation degrees",
    text: "Step up to a full degree with an integrated foundation year.",
    href: "/courses",
    art: 2,
  },
  {
    title: "Short courses and CPD",
    text: "Sharpen your skills with professional development courses.",
    href: "/courses",
    art: 4,
  },
];

const KENT_FAQS = [
  {
    q: "Will my degree certificate change?",
    a: "No. You will still apply to, study at and graduate from the University of Greenwich, with the same name on your certificate.",
  },
  {
    q: "Will courses or campuses close?",
    a: "There are no changes to Greenwich's identity, courses or campuses as part of the agreement — the group is about sharing strengths, not merging identities.",
  },
  {
    q: "Does this affect my student visa?",
    a: "No. Visa sponsorship continues exactly as before; international students are unaffected.",
  },
  {
    q: "When does the collaboration start?",
    a: "The formal agreement takes effect on 1 August 2026, with joint projects rolling out over the following academic year.",
  },
];

export default function StudyPage() {
  return (
    <>
      <PageHero
        title="Study with us"
        intro="We'd love to welcome you to Greenwich and our diverse, friendly community — where there are no limits on your future. With great bursaries, funding and support, we'll help you every step of the way."
        crumbs={[{ label: "Study" }]}
      >
        <Link
          href="/courses"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Apply now
        </Link>
        <Link
          href="/contact"
          className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
        >
          Request a prospectus
        </Link>
      </PageHero>

      {/* Limitless band */}
      <section className="bg-mist py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
              Limitless
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Degrees built around you
            </h2>
            <p className="mt-4 text-ink/80">
              Every degree is designed with employers, so you graduate with the
              skills they're actually hiring for — plus placements, projects and
              a professional network from day one.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="rounded-none bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
            >
              Get ready for your future
            </Link>
            <Link
              href="/open-days"
              className="rounded-none border-2 border-navy px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-navy hover:text-white"
            >
              Book an open day
            </Link>
          </div>
        </div>
      </section>

      {/* find your course */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Find your course"
            link="More courses"
            href="/courses"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Undergraduate",
                sub: "BA, BSc, BEng, LLB",
                text: "Study at the top modern university in London and Kent, with foundation years and placements built in.",
                href: "/courses?level=Undergraduate",
                art: 0,
              },
              {
                title: "Postgraduate",
                sub: "MA, MSc, MBA, PhD",
                text: "Flexible learning options such as online, part-time and January-start study.",
                href: "/courses?level=Postgraduate",
                art: 1,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={card.art} className="block h-40 w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-navy transition-colors group-hover:text-royal">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-royal">
                    {card.sub}
                  </p>
                  <p className="mt-3 text-[15px] text-ink/80">{card.text}</p>
                  <span className="mt-4 inline-block font-bold text-royal">
                    Browse courses{" "}
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

      {/* scholarships */}
      <section id="fees" className="scroll-mt-24 bg-navy py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Scholarships and bursaries
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              More than £3.3 million in financial support
            </h2>
            <p className="mt-4 text-white/80">
              From the £4,000 Commuter Bursary to international scholarships and
              hardship funds — see what you could be entitled to before you
              apply.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-none bg-mint px-7 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
          >
            Find out more
          </Link>
        </div>
      </section>

      {/* application pathways */}
      <section id="apply" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How to apply" title="Application pathways" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PATHWAYS.map((p) => (
              <article
                key={p.title}
                className="rounded-none bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-block rounded-none bg-mint px-3 py-1 text-xs font-bold text-navy">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-extrabold leading-snug text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink/80">{p.text}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block font-bold text-royal transition-colors hover:text-navy"
                >
                  Start here →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* why greenwich + careers + accommodation */}
      <section id="why-greenwich" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Life at Greenwich" title="Why Greenwich?" />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-none border border-mist p-7 shadow-sm">
              <GradientArt variant={3} className="mb-5 block h-32 w-full rounded-none" />
              <h3 className="text-lg font-extrabold text-navy">
                Historic meets modern
              </h3>
              <p className="mt-2 text-[15px] text-ink/80">
                Lectures in baroque riverside buildings, labs and libraries with
                the latest kit — a campus blend you won't find anywhere else.
              </p>
            </article>
            <article
              id="careers"
              className="scroll-mt-24 rounded-none border border-mist p-7 shadow-sm"
            >
              <GradientArt variant={4} className="mb-5 block h-32 w-full rounded-none" />
              <h3 className="text-lg font-extrabold text-navy">
                Your career starts here
              </h3>
              <p className="mt-2 text-[15px] text-ink/80">
                Careers guidance, skill-building workshops and internship and
                placement support from your first term to well after graduation.
              </p>
            </article>
            <article
              id="accommodation"
              className="scroll-mt-24 rounded-none border border-mist p-7 shadow-sm"
            >
              <GradientArt variant={2} className="mb-5 block h-32 w-full rounded-none" />
              <h3 className="text-lg font-extrabold text-navy">
                A place to live
              </h3>
              <p className="mt-2 text-[15px] text-ink/80">
                Halls at every campus from £120 a week, all bills included —
                with a dedicated team to help you find your home.
              </p>
            </article>
          </div>
        </div>
      </section>

      <TefGold />

      {/* more ways to study */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="More ways to study" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MORE_COURSES.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={c.art} className="block h-28 w-full" />
                <div className="p-5">
                  <h3 className="font-extrabold text-navy transition-colors group-hover:text-royal">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/75">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* kent collaboration */}
      <section id="kent" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="University of Greenwich × University of Kent"
            title="A trailblazing collaboration"
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[15px] leading-relaxed text-ink/80">
                From 1 August 2026, Greenwich and Kent are forming a new
                multi-university group for London and the South East — sharing
                research strengths, facilities and opportunities while keeping
                each university's identity, name and campuses exactly as they
                are.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
                For students, that means more choice: shared modules, joint
                research projects and a bigger network of employers — with no
                change to how you apply, study or graduate.
              </p>
            </div>
            <div className="space-y-3">
              {KENT_FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-none border border-mist bg-white px-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-bold text-navy">
                    {faq.q}
                    <span
                      aria-hidden
                      className="text-royal transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-[15px] text-ink/80">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
