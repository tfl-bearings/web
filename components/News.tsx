/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";
import { NEWS } from "@/lib/data";

export default function News() {
  const [featured, ...rest] = NEWS;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest news"
          link="All news and stories"
          href="/news"
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {/* featured story */}
          <article className="group lg:col-span-2">
            <a href="/news" className="block">
              <div className="overflow-hidden rounded-none">
                <img
                  src={featured.img}
                  alt=""
                  className="block h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-none bg-mint px-3 py-1 text-xs font-bold text-navy">
                  {featured.tag}
                </span>
                <span className="text-xs text-ink/60">{featured.date}</span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold leading-snug text-navy transition-colors group-hover:text-royal">
                {featured.title}
              </h3>
              {featured.excerpt && (
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/75">
                  {featured.excerpt}
                </p>
              )}
            </a>
          </article>

          {/* side list */}
          <div>
            <ul className="divide-y divide-mist">
              {rest.slice(0, 4).map((item) => (
                <li key={item.title} className="py-5 first:pt-0 last:pb-0">
                  <a href="/news" className="group flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-none">
                      <img
                        src={item.img}
                        alt=""
                        className="block h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold uppercase tracking-wide text-royal">
                          {item.tag}
                        </span>
                        <span className="text-ink/50">{item.date}</span>
                      </div>
                      <h4 className="mt-1.5 text-[15px] font-bold leading-snug text-navy transition-colors group-hover:text-royal">
                        {item.title}
                      </h4>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
