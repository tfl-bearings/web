import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import OpenDayForm from "@/components/OpenDayForm";
import CtaStrip from "@/components/CtaStrip";
import { OPEN_DAYS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Open days | University of Greenwich Clone",
  description:
    "Book an open day — tour the campuses, meet lecturers and see student life for yourself.",
};

const EXPECT = [
  "Subject talks with the academics who'll actually teach you",
  "Campus and accommodation tours led by current students",
  "Fees, funding and application advice one-to-one",
  "The chance to explore Greenwich town, the park and the river",
];

export default function OpenDaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit us"
        title="Open days and events"
        intro="The best way to choose a university is to stand in the middle of it. Come and see the campuses, meet your lecturers and imagine yourself here."
        crumbs={[{ label: "Study", href: "/study" }, { label: "Open days" }]}
      />

      {/* upcoming events */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Save the date" title="Upcoming events" />
          <div className="grid gap-6 md:grid-cols-3">
            {OPEN_DAYS.map((event) => (
              <article
                key={event.type}
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={event.art} className="block h-36 w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-navy">
                    {event.type}
                  </h3>
                  <p className="mt-2 font-semibold text-royal">{event.date}</p>
                  <p className="mt-1 text-sm text-ink/70">{event.location}</p>
                  <a
                    href="#book"
                    className="mt-4 inline-block font-bold text-royal transition-colors hover:text-navy"
                  >
                    Book your place →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* what to expect + booking form */}
      <section id="book" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Plan your day" title="What to expect" />
            <ul className="space-y-4">
              {EXPECT.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-navy"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-[15px] text-ink/85">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-none border-l-4 border-mint bg-white p-5 text-[15px] text-ink/80">
              <strong className="text-navy">Can&apos;t make these dates?</strong>{" "}
              Campus tours run most Wednesdays during term time, and our
              virtual tour is always open.
            </p>
          </div>

          <OpenDayForm />
        </div>
      </section>

      <CtaStrip
        title="Prefer to explore from home?"
        text="Browse courses now and visit us when you're ready."
      />
    </>
  );
}
