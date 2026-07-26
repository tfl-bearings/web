"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { NEWS } from "@/lib/data";

const TAGS = ["All", ...new Set(NEWS.map((n) => n.tag))];

export default function NewsGrid() {
  const [active, setActive] = useState("All");

  const items = active === "All" ? NEWS : NEWS.filter((n) => n.tag === active);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* tag filter */}
        <div
          role="group"
          aria-label="Filter news by topic"
          className="mb-10 flex flex-wrap gap-2"
        >
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              aria-pressed={active === tag}
              className={`rounded-none px-4 py-2 text-sm font-semibold transition-colors ${
                active === tag
                  ? "bg-navy text-white"
                  : "border border-mist text-navy hover:bg-mist"
              }`}
            >
              {tag}
            </button>
          ))}
          <p
            className="ml-auto self-center text-sm font-semibold text-ink/60"
            aria-live="polite"
          >
            {items.length} {items.length === 1 ? "story" : "stories"}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group">
              <a href="#" className="block">
                <div className="overflow-hidden rounded-none">
                  <img
                    src={item.img}
                    alt=""
                    className="block h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="rounded-none bg-mint px-3 py-1 text-xs font-bold text-navy">
                    {item.tag}
                  </span>
                  <span className="text-xs text-ink/60">{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy transition-colors group-hover:text-royal">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
                    {item.excerpt}
                  </p>
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
