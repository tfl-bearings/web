import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  link?: string;
  href?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  link,
  href = "#",
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-royal">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {title}
        </h2>
        <div className="mt-3 h-1.5 w-16 rounded-full bg-mint" aria-hidden />
      </div>
      {link && (
        <Link
          href={href}
          className="group text-sm font-bold text-royal transition-colors hover:text-navy"
        >
          {link}{" "}
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      )}
    </div>
  );
}
