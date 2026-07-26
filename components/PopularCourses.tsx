import SectionHeading from "./SectionHeading";
import { COURSES } from "@/lib/data";

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

export default function PopularCourses() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Popular courses"
          link="View all courses"
          href="/courses"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((course) => (
            <article
              key={course.title}
              className="group overflow-hidden rounded-none border border-mist bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 ${course.accent}`} aria-hidden />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-royal">
                  {course.level}
                </p>
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
                <a
                  href="/courses"
                  className="mt-5 flex items-center justify-between"
                >
                  <span className="font-bold text-royal">View course</span>
                  <span
                    aria-hidden
                    className="text-royal transition-transform group-hover:translate-x-1.5"
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
