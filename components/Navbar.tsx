"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/lib/data";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`transition-transform duration-200 ${className}`}
    >
      <path
        d="M2 4l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle
        cx="8.5"
        cy="8.5"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="13"
        y1="13"
        x2="17.5"
        y2="17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  /* close all panels when the route changes */
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setOpen(null);
    setSearchOpen(false);
  };

  const activeItem = NAV_ITEMS.find((i) => i.label === open && i.columns);

  return (
    <header className="sticky top-0 z-50">
      {/* dim the page while a panel is open */}
      {(open || searchOpen) && (
        <div
          aria-hidden
          onClick={closeAll}
          className="fixed inset-0 -z-10 bg-navy/30 backdrop-blur-[2px]"
        />
      )}

      {/* utility bar */}
      <div className="bg-navy text-xs text-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-4 py-1.5 sm:px-6 lg:px-8">
          {[
            { label: "Portal", href: "https://portal.gre.ac.uk" },
            {
              label: "Faculties",
              href: "https://www.gre.ac.uk/about-us/faculty",
            },
            {
              label: "Alumni and giving",
              href: "https://www.gre.ac.uk/alumni",
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mint"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* main bar */}
      <div className="relative border-b border-mist bg-white shadow-sm">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return item.columns ? (
                <button
                  key={item.label}
                  onClick={() => {
                    setSearchOpen(false);
                    setOpen(open === item.label ? null : item.label);
                  }}
                  aria-expanded={open === item.label}
                  className={`flex items-center gap-1.5 rounded-none px-4 py-2 text-[15px] font-semibold transition-colors ${
                    open === item.label
                      ? "bg-navy text-white"
                      : isActive
                        ? "bg-mist text-navy"
                        : "text-navy hover:bg-mist"
                  }`}
                >
                  {item.label}
                  <Chevron className={open === item.label ? "rotate-180" : ""} />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-none px-4 py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? "bg-mist text-navy" : "text-navy hover:bg-mist"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/clearing"
              className="ml-2 rounded-none bg-mint px-5 py-2 text-[15px] font-bold text-navy transition-colors hover:bg-mint-pale"
            >
              Clearing
            </Link>
          </div>

          {/* right controls */}
          <div className="flex items-center gap-1.5">
            <button
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => {
                setOpen(null);
                setSearchOpen(!searchOpen);
              }}
              className={`rounded-full p-2.5 transition-colors ${
                searchOpen ? "bg-navy text-white" : "text-navy hover:bg-mist"
              }`}
            >
              <SearchIcon />
            </button>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2.5 text-navy hover:bg-mist lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                {mobileOpen ? (
                  <g
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="5" x2="17" y2="17" />
                    <line x1="17" y1="5" x2="5" y2="17" />
                  </g>
                ) : (
                  <g
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <line x1="3" y1="6" x2="19" y2="6" />
                    <line x1="3" y1="11" x2="19" y2="11" />
                    <line x1="3" y1="16" x2="19" y2="16" />
                  </g>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* mega menu (desktop) */}
        {activeItem && (
          <div className="menu-in absolute inset-x-0 top-full hidden border-t border-mist bg-white shadow-2xl lg:block">
            <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
              <Link
                href={activeItem.href}
                className="inline-flex items-center gap-2 font-bold text-navy underline-offset-4 hover:text-royal hover:underline"
              >
                Visit {activeItem.label.toLowerCase()} overview
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 px-4 py-8 sm:px-6 lg:px-8">
              {activeItem.columns!.map((col) => (
                <div key={col.heading}>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-royal">
                    {col.heading}
                  </p>
                  <ul className="space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-[15px] text-ink underline-offset-4 transition-colors hover:text-royal hover:underline"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* promo card fills the last column */}
              <div className="rounded-none bg-navy p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">
                  Open Day
                </p>
                <p className="mt-2 text-lg font-extrabold leading-snug">
                  Visit us in person on 17 October
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Tour the campuses, meet your lecturers and see where you could
                  live.
                </p>
                <Link
                  href="/open-days"
                  className="mt-4 inline-block font-bold text-mint underline-offset-4 hover:underline"
                >
                  Book your place →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* search panel */}
        {searchOpen && (
          <div className="menu-in absolute inset-x-0 top-full border-t border-mist bg-white shadow-2xl">
            <form
              action="/courses"
              method="get"
              className="mx-auto flex max-w-3xl gap-3 px-4 py-6 sm:px-6"
            >
              <input
                autoFocus
                type="search"
                name="q"
                placeholder="Search courses, subjects and more…"
                aria-label="Search the site"
                className="w-full flex-1 rounded-none border-2 border-navy px-5 py-3 text-[15px] outline-none transition-colors focus:border-royal"
              />
              <button className="rounded-none bg-navy px-7 font-bold text-white transition-colors hover:bg-royal">
                Search
              </button>
            </form>
          </div>
        )}

        {/* mobile menu */}
        {mobileOpen && (
          <div className="menu-in max-h-[72vh] overflow-y-auto border-t border-mist bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {NAV_ITEMS.map((item) =>
                item.columns ? (
                  <details key={item.label} className="group border-b border-mist">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold text-navy">
                      {item.label}
                      <span className="transition-transform group-open:rotate-180">
                        <Chevron />
                      </span>
                    </summary>
                    <div className="space-y-5 pb-5">
                      <Link
                        href={item.href}
                        className="inline-block font-bold text-royal underline-offset-4 hover:underline"
                      >
                        {item.label} overview →
                      </Link>
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-royal">
                            {col.heading}
                          </p>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  className="text-[15px] text-ink hover:text-royal"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block border-b border-mist py-3 font-semibold text-navy"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/clearing"
                className="!mt-4 block rounded-none bg-mint px-5 py-3 text-center font-bold text-navy"
              >
                Clearing — apply now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
