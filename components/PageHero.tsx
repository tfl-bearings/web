import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* decorative circles */}
      <svg
        className="absolute -right-28 -top-32 h-[460px] w-[460px] opacity-20"
        viewBox="0 0 460 460"
        aria-hidden="true"
      >
        <circle
          cx="230"
          cy="230"
          r="190"
          fill="none"
          stroke="#89e9d7"
          strokeWidth="2"
        />
        <circle
          cx="230"
          cy="230"
          r="140"
          fill="none"
          stroke="#61ccf3"
          strokeWidth="2"
        />
        <circle cx="230" cy="230" r="85" fill="#89e9d7" opacity="0.12" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-mint">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-mint"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/85">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-mint">
            {eyebrow}
          </p>
        )}
        <h1 className="rise-in max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>

      <div className="h-1.5 bg-mint" aria-hidden />
    </section>
  );
}
