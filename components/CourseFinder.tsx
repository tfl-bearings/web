"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COURSES, SUBJECTS } from "@/lib/data";

const LEVELS = ["All", "Undergraduate", "Postgraduate"];
const CAMPUS_LIST = [
  "Greenwich Campus",
  "Avery Hill Campus",
  "Medway Campus",
];

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
      <circle
        cx="7.5"
        cy="7.5"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.5 4.5v3.2l2.2 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
      <path
        d="M7.5 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3.2-4.5 7.5-4.5 7.5S3 9.2 3 6a4.5 4.5 0 0 1 4.5-4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="6" r="1.6" fill="currentColor" />
    </svg>
  );
}

const subjectName = (slug: string) =>
  SUBJECTS.find((s) => s.slug === slug)?.name ?? slug;

export default function CourseFinder() {
  const params = useSearchParams();

  const initialLevel = params.get("level");
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [level, setLevel] = useState(
    initialLevel === "Undergraduate" || initialLevel === "Postgraduate"
      ? initialLevel
      : "All"
  );
  const [subject, setSubject] = useState(params.get("subject") ?? "all");
  const [campus, setCampus] = useState("all");

  /* subjects that actually have courses in this demo dataset */
  const subjectOptions = useMemo(() => {
    const used = new Set(COURSES.map((c) => c.subject));
    const options = SUBJECTS.filter((s) => used.has(s.slug));
    /* keep an incoming ?subject= that has no sample courses selectable */
    if (subject !== "all" && !options.some((s) => s.slug === subject)) {
      options.unshift({ name: subjectName(subject), slug: subject });
    }
    return options;
  }, [subject]);

  const results = COURSES.filter((course) => {
    if (level !== "All" && course.level !== level) return false;
    if (subject !== "all" && course.subject !== subject) return false;
    if (campus !== "all" && course.campus !== campus) return false;
    const q = query.trim().toLowerCase();
    if (
      q &&
      !course.title.toLowerCase().includes(q) &&
      !subjectName(course.subject).toLowerCase().includes(q)
    )
      return false;
    return true;
  });

  const hasFilters =
    query !== "" || level !== "All" || subject !== "all" || campus !== "all";

  const clearAll = () => {
    setQuery("");
    setLevel("All");
    setSubject("all");
    setCampus("all");
  };

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* filter bar */}
        <div className="rounded-none bg-white p-6 shadow-sm sm:p-8">
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <div className="flex overflow-hidden rounded-none border-2 border-navy transition-colors focus-within:border-royal">
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by course or subject — e.g. nursing, law, computing…"
              className="w-full flex-1 px-6 py-3.5 text-[15px] outline-none placeholder:text-ink/45"
            />
            <span className="flex items-center bg-navy px-6 text-sm font-bold text-white">
              Search
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* level pills */}
            <div
              role="group"
              aria-label="Filter by level"
              className="flex rounded-none border border-mist p-1"
            >
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  aria-pressed={level === l}
                  className={`rounded-none px-4 py-1.5 text-sm font-semibold transition-colors ${
                    level === l
                      ? "bg-navy text-white"
                      : "text-navy hover:bg-mist"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* subject select */}
            <label className="sr-only" htmlFor="subject-filter">
              Filter by subject
            </label>
            <select
              id="subject-filter"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-none border border-mist bg-white px-4 py-2 text-sm font-semibold text-navy outline-none transition-colors focus:border-royal"
            >
              <option value="all">All subjects</option>
              {subjectOptions.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>

            {/* campus select */}
            <label className="sr-only" htmlFor="campus-filter">
              Filter by campus
            </label>
            <select
              id="campus-filter"
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className="rounded-none border border-mist bg-white px-4 py-2 text-sm font-semibold text-navy outline-none transition-colors focus:border-royal"
            >
              <option value="all">All campuses</option>
              {CAMPUS_LIST.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-sm font-bold text-royal underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            )}

            <p
              className="ml-auto text-sm font-semibold text-ink/70"
              aria-live="polite"
            >
              Showing {results.length} of {COURSES.length} courses
            </p>
          </div>
        </div>

        {/* results */}
        {results.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((course) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-2 ${course.accent}`} aria-hidden />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-royal">
                      {course.level}
                    </p>
                    <span className="rounded-none bg-mist px-2.5 py-0.5 text-[11px] font-bold text-ink/70">
                      {subjectName(course.subject)}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy transition-colors group-hover:text-royal">
                    {course.title}
                  </h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
                    <li className="flex items-center gap-2">
                      <ClockIcon />
                      {course.mode}
                    </li>
                    <li className="flex items-center gap-2">
                      <PinIcon />
                      {course.campus}
                    </li>
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-bold text-royal">View course</span>
                    <span
                      aria-hidden
                      className="text-royal transition-transform group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-none bg-white p-12 text-center shadow-sm">
            <p className="text-xl font-extrabold text-navy">
              No courses match your search
            </p>
            <p className="mx-auto mt-2 max-w-md text-[15px] text-ink/70">
              This demo lists a sample of {COURSES.length} courses — try
              clearing a filter or searching for something broader.
            </p>
            <button
              onClick={clearAll}
              className="mt-6 rounded-none bg-navy px-7 py-3 font-bold text-white transition-colors hover:bg-royal"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
