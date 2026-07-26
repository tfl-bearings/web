import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Research | University of Greenwich Clone",
  description:
    "Inclusive, collaborative and impactful research across London and Kent.",
};

const FEATURED = [
  {
    tag: "Sustainability",
    title:
      "Accelerating circular and sustainable business practices in tourism and hospitality",
    art: 2,
  },
  {
    tag: "Health",
    title:
      "Greenwich academic creates formulation to help reduce hair loss during chemotherapy",
    art: 1,
  },
  {
    tag: "Society",
    title:
      "Harnessing group bonds for social good: spotlight on the Twinning Project",
    art: 0,
  },
  {
    tag: "Innovation",
    title:
      "Think Wild pilot boosts NHS forecasting with emergency care modelling",
    art: 4,
  },
];

const AREAS = [
  {
    title: "Research spotlight",
    text: "The stories behind our latest discoveries, told by the people who made them.",
  },
  {
    title: "Institutes, centres and facilities",
    text: "From our natural resources institute to maritime research groups and specialist labs.",
  },
  {
    title: "Research disciplines",
    text: "Explore active research across science, engineering, health, business, education and the arts.",
  },
];

const STUDY_CARDS = [
  {
    title: "The research experience",
    text: "What it's like to do an MPhil or PhD here — supervision, training and community.",
  },
  {
    title: "Our research community",
    text: "Meet the academics, postdocs and doctoral students behind the work.",
  },
  {
    title: "Policy, governance and awards",
    text: "How we keep research ethical, open and recognised at the highest level.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research"
        intro="Our research culture is shaped by shared values of being inclusive, collaborative and impactful — because the best research is developed through partnership and openness."
        crumbs={[{ label: "Research" }]}
      >
        <Link
          href="/courses?level=Postgraduate"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Research degrees
        </Link>
        <Link
          href="/contact"
          className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
        >
          Work with our researchers
        </Link>
      </PageHero>

      {/* featured research */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Making an impact"
            title="Featured research"
            link="All research news"
            href="/news"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((story) => (
              <Link
                key={story.title}
                href="/news"
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={story.art} className="block h-36 w-full" />
                <div className="p-5">
                  <span className="rounded-none bg-mint px-3 py-1 text-xs font-bold text-navy">
                    {story.tag}
                  </span>
                  <h3 className="mt-3 text-[15px] font-bold leading-snug text-navy transition-colors group-hover:text-royal">
                    {story.title}
                  </h3>
                  <span className="mt-3 inline-block text-sm font-bold text-royal">
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

      {/* current research areas */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our current research" />
          <div className="grid gap-6 md:grid-cols-3">
            {AREAS.map((area) => (
              <article
                key={area.title}
                className="rounded-none bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-navy">
                  {area.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink/80">{area.text}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block font-bold text-royal transition-colors hover:text-navy"
                >
                  Discover more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* research culture */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">
            Research culture
          </p>
          <blockquote className="mt-6 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
            &ldquo;We champion collaboration across disciplines and professional
            boundaries — recognising that the best research is developed
            through partnership and openness.&rdquo;
          </blockquote>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6">
            {[
              { big: "1,000+", label: "active research projects" },
              { big: "60+", label: "countries with research partners" },
              { big: "£20m+", label: "in annual research funding" },
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

      {/* research study */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Join us"
            title="Research study at Greenwich"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STUDY_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-none border border-mist p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink/80">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-none bg-mist p-8 text-center">
            <h3 className="text-2xl font-extrabold text-navy">
              Thinking about a PhD?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-ink/75">
              Fully-funded studentships open every year across all faculties.
            </p>
            <Link
              href="/courses?level=Postgraduate"
              className="mt-5 inline-block rounded-none bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
            >
              Explore research degrees
            </Link>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Curious about research at Greenwich?"
        text="Talk to our team about degrees, partnerships and funding."
      />
    </>
  );
}
