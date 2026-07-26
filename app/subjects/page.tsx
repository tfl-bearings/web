import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GradientArt from "@/components/GradientArt";
import CtaStrip from "@/components/CtaStrip";
import { SUBJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Subjects | University of Greenwich Clone",
  description:
    "Browse subjects A–Z at foundation, undergraduate and postgraduate level.",
};

export default function SubjectsPage() {
  /* group subjects by first letter */
  const groups = SUBJECTS.reduce<Record<string, typeof SUBJECTS>>(
    (acc, subject) => {
      const letter = subject.name[0].toUpperCase();
      (acc[letter] ||= []).push(subject);
      return acc;
    },
    {}
  );
  const letters = Object.keys(groups).sort();

  return (
    <>
      <PageHero
        title="Subjects"
        intro="Choose from a broad range of subjects at foundation, undergraduate and postgraduate level."
        crumbs={[{ label: "Subjects" }]}
      >
        <Link
          href="/courses"
          className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
        >
          Search all courses
        </Link>
      </PageHero>

      {/* A–Z listing */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="A to Z" title="Browse by subject" />

          {/* letter jump list */}
          <nav
            aria-label="Jump to letter"
            className="mb-10 flex flex-wrap gap-2"
          >
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-mist text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {letter}
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {letters.map((letter) => (
              <div
                key={letter}
                id={`letter-${letter}`}
                className="scroll-mt-28"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-mint">
                    {letter}
                  </span>
                  <div className="h-px flex-1 bg-mist" aria-hidden />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {groups[letter].map((subject) => (
                    <Link
                      key={subject.slug}
                      href={`/courses?subject=${subject.slug}`}
                      className="group flex items-center justify-between rounded-none border border-mist px-5 py-4 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-royal hover:shadow-md"
                    >
                      {subject.name}
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
            ))}
          </div>
        </div>
      </section>

      {/* not found CTA */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            Haven&apos;t found the course you were looking for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/75">
            Try the course search — you can filter by level, subject and campus.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-block rounded-none bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
          >
            Search courses
          </Link>
        </div>
      </section>

      {/* explore more */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Explore more" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Study here",
                text: "Fees, funding and how to apply — everything in one place.",
                href: "/study",
                art: 0,
              },
              {
                title: "Visit us",
                text: "Book an open day and see the campuses for yourself.",
                href: "/open-days",
                art: 2,
              },
              {
                title: "Our campuses",
                text: "Three riverside and parkland campuses across London and Kent.",
                href: "/campuses",
                art: 1,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <GradientArt variant={card.art} className="block h-36 w-full" />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-navy transition-colors group-hover:text-royal">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink/80">{card.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
