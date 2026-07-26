import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import CourseFinder from "@/components/CourseFinder";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Course search | University of Greenwich Clone",
  description:
    "Search undergraduate and postgraduate courses by subject, level and campus.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Course search"
        intro="Search our undergraduate and postgraduate courses — filter by level, subject and campus to find the one that fits."
        crumbs={[{ label: "Study", href: "/study" }, { label: "Courses" }]}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-20 text-ink/60 sm:px-6 lg:px-8">
            Loading course search…
          </div>
        }
      >
        <CourseFinder />
      </Suspense>
      <CtaStrip
        title="Not sure which course is right?"
        text="Come to an open day and talk it through with our academics."
      />
    </>
  );
}
