import Link from "next/link";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaStrip({
  title = "Ready to find your place at Greenwich?",
  text = "Search our courses, or come and see the campuses for yourself.",
}: Props) {
  return (
    <section className="bg-gradient-to-r from-royal to-navy py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="rounded-none bg-white px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint"
          >
            Search courses
          </Link>
          <Link
            href="/open-days"
            className="rounded-none bg-mint px-6 py-3.5 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-mint-pale"
          >
            Book an Open Day
          </Link>
        </div>
      </div>
    </section>
  );
}
