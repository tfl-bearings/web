import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Clearing 2026 | University of Greenwich Clone",
  description:
    "Clearing is open — how to apply, what to prepare and how to get your place.",
};

const STEPS = [
  {
    title: "Get ready before Results Day",
    text: "Research courses, have your grades and personal statement to hand, and sign up to Priority Clearing so you can beat the queue.",
  },
  {
    title: "Get your results",
    text: "UCAS Hub updates on the morning of Results Day. If you're unplaced — or you've changed your mind — Clearing is your route in.",
  },
  {
    title: "Call us or apply online",
    text: "Speak to our friendly hotline team or use the online form. Have your UCAS ID ready and we'll talk through your options.",
  },
  {
    title: "Receive your offer",
    text: "Verbal offers are usually made on the same call, then confirmed by email so you have everything in writing.",
  },
  {
    title: "Add us in your UCAS Hub",
    text: "Add your Clearing choice with the course code and institution code G70 — and that's it, you're coming to Greenwich.",
  },
];

const FAQS = [
  {
    q: "What is Clearing?",
    a: "Clearing is how UK universities fill remaining places before term starts. It runs from July to October and is open to anyone not holding a confirmed offer — including people applying for the first time.",
  },
  {
    q: "What does 'self-release' mean?",
    a: "If you're holding a confirmed place elsewhere but have changed your mind, you can release yourself in UCAS Hub and enter Clearing to accept a place with us instead.",
  },
  {
    q: "Can I apply if I've never used UCAS?",
    a: "Yes — you can register with UCAS during Clearing and apply directly. Our hotline team will walk you through it step by step.",
  },
  {
    q: "What grades do I need?",
    a: "Entry requirements are often more flexible in Clearing, and we consider your application as a whole. Call us — you may be surprised.",
  },
  {
    q: "Are there alternative routes?",
    a: "Yes — degree apprenticeships and foundation years are great alternatives if a standard degree isn't right for you this year.",
  },
];

const SUBJECT_CHIPS = [
  "Business", "Computing", "Engineering", "Law", "Nursing",
  "Psychology", "Education", "Science", "Architecture", "Media",
];

export default function ClearingPage() {
  return (
    <>
      <PageHero
        eyebrow="Clearing is now open"
        title="Clearing 2026"
        intro="Explore student life at the University of Greenwich and get prepared for your Clearing journey — your place could be one phone call away."
        crumbs={[{ label: "Clearing" }]}
      >
        <a
          href="tel:02083319000"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Call 020 8331 9000
        </a>
        <Link
          href="/contact"
          className="rounded-none border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
        >
          Sign up to Priority Clearing
        </Link>
      </PageHero>

      {/* hotline band */}
      <section className="bg-mint py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-extrabold text-navy">
            Hotline open 9am–5pm, Monday to Friday
          </p>
          <p className="text-navy/80">
            Extended hours on Results Day:{" "}
            <strong>7.30am–8pm, 13 August</strong>
          </p>
        </div>
      </section>

      {/* what is clearing */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="New to this?" title="What is Clearing?" />
            <p className="text-[15px] leading-relaxed text-ink/80">
              Clearing is how universities fill their remaining places for
              September. Whether you missed your grades, did better than
              expected, changed your mind or are applying for the very first
              time — it&apos;s a completely normal route to university, used by
              tens of thousands of students every year.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
              At Greenwich, our Clearing team can check your eligibility, make
              you an offer on the phone, and even help you sort accommodation
              on the same day.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUBJECT_CHIPS.map((chip) => (
                <Link
                  key={chip}
                  href="/courses"
                  className="rounded-none border border-mist px-4 py-1.5 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal"
                >
                  {chip}
                </Link>
              ))}
            </div>
          </div>

          {/* steps timeline */}
          <div>
            <h3 className="mb-6 text-xl font-extrabold text-navy">
              Your step-by-step guide
            </h3>
            <ol className="space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-extrabold text-mint">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-extrabold text-navy">{step.title}</h4>
                    <p className="mt-1 text-[15px] text-ink/80">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* why greenwich strip */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { big: "Gold", label: "TEF 2023 rating" },
            { big: "Top 5", label: "London uni — StudentCrowd" },
            { big: "£4m+", label: "in scholarships yearly" },
            { big: "10 min", label: "to central London" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-mint sm:text-4xl">
                {stat.big}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Good to know" title="Clearing FAQs" />
          <div className="space-y-3">
            {FAQS.map((faq) => (
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
      </section>

      <CtaStrip
        title="Ready for your Clearing call?"
        text="Have your UCAS ID and grades to hand — we'll do the rest."
      />
    </>
  );
}
