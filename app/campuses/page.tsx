/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { CAMPUSES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our campuses | University of Greenwich Clone",
  description:
    "Three campuses across London and Kent — Greenwich, Avery Hill and Medway.",
};

function TrainIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect
        x="3"
        y="1.5"
        width="10"
        height="10"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <line
        x1="3"
        y1="7"
        x2="13"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="5.8" cy="9.3" r="0.9" fill="currentColor" />
      <circle cx="10.2" cy="9.3" r="0.9" fill="currentColor" />
      <path
        d="M5 11.5 3.5 14.5M11 11.5l1.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CampusesPage() {
  return (
    <>
      <PageHero
        eyebrow="London and Kent"
        title="Three campuses, one community"
        intro="A World Heritage Site on the Thames, a Victorian parkland estate, and a historic naval dockyard — each campus has its own character, and you're welcome at all three."
        crumbs={[{ label: "Campuses" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {CAMPUSES.map((campus, i) => (
            <article
              key={campus.name}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`overflow-hidden rounded-none shadow-lg ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={campus.img}
                  alt={`Illustration of ${campus.name}`}
                  className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-navy">
                  {campus.name}
                </h2>
                <div className="mt-3 h-1.5 w-16 rounded-full bg-mint" aria-hidden />
                <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
                  {campus.desc}
                </p>

                <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-royal">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {campus.facilities.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-[10px] font-bold text-navy"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-[15px] text-ink/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-royal">
                  <TrainIcon />
                  {campus.travel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {campus.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-none border border-mist px-3 py-1 text-xs font-semibold text-ink/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* visit strip */}
      <section className="bg-mist py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
              See them for yourself
            </h2>
            <p className="mt-2 text-ink/75">
              Campus tours run most Wednesdays — or come to the big one on 17
              October.
            </p>
          </div>
          <Link
            href="/open-days"
            className="rounded-none bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
          >
            Book a visit
          </Link>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
