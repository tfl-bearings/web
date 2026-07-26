/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";
import { CAMPUSES } from "@/lib/data";

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

export default function Campuses() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="London and Kent"
          title="Three campuses, one community"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {CAMPUSES.map((campus) => (
            <article
              key={campus.name}
              className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={campus.img}
                  alt={`Illustration of ${campus.name}`}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy">
                  {campus.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                  {campus.desc}
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-royal">
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
                <a
                  href="/campuses"
                  className="mt-5 inline-flex items-center gap-1.5 font-bold text-royal transition-colors hover:text-navy"
                >
                  Explore campus
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
