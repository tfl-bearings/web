/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { ADMISSIONS_WHATSAPP, FOOTER_COLUMNS } from "@/lib/data";

const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/uniofgreenwich",
    path: "M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V14h2.7v8Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/uniofgreenwich/",
    path: "M12 4.3c2.5 0 2.8 0 3.8.06 2.4.1 3.7 1.4 3.8 3.8.06 1 .06 1.3.06 3.8s0 2.8-.06 3.8c-.1 2.4-1.4 3.7-3.8 3.8-1 .06-1.3.06-3.8.06s-2.8 0-3.8-.06c-2.4-.1-3.7-1.4-3.8-3.8-.06-1-.06-1.3-.06-3.8s0-2.8.06-3.8c.1-2.4 1.4-3.7 3.8-3.8 1-.06 1.3-.06 3.8-.06ZM12 2.5c-2.6 0-2.9 0-3.9.06-3.4.16-5.4 2.1-5.5 5.5-.06 1-.06 1.3-.06 3.9s0 2.9.06 3.9c.16 3.4 2.1 5.4 5.5 5.5 1 .06 1.3.06 3.9.06s2.9 0 3.9-.06c3.4-.16 5.4-2.1 5.5-5.5.06-1 .06-1.3.06-3.9s0-2.9-.06-3.9c-.16-3.4-2.1-5.4-5.5-5.5-1-.06-1.3-.06-3.9-.06Zm0 4.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.1-9.4a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@uniofgreenwich/",
    path: "M16.6 3c.35 1.9 1.5 3.2 3.4 3.55V9.7c-1.3 0-2.45-.4-3.4-1.1v6.05A5.65 5.65 0 1 1 11 9v3.2a2.5 2.5 0 1 0 2.5 2.45V3Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/edu/school?id=12704",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.12 1.4-2.12 2.9V21H10Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/subscription_center?add_user=UniversityGreenwich",
    path: "M22 12s0-3.3-.42-4.9a3 3 0 0 0-2.1-2.1C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.5.5a3 3 0 0 0-2.1 2.1C2 8.7 2 12 2 12s0 3.3.4 4.9a3 3 0 0 0 2.1 2.1c1.6.5 7.5.5 7.5.5s5.9 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15.3 22 12 22 12Zm-12 3.5v-7l6 3.5Z",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/uniofgreenwich.bsky.social",
    path: "M12 10.8C11 8.7 8.1 4.9 5.4 3.4 2.8 2 2 2.5 2 4.7c0 1.3.7 5.4 1.2 6.9.6 2 2.8 2.4 4.8 2.1-3.5.6-4.4 2.6-2.5 4.6 3.7 3.8 5.3-1 6.3-3.7 1 2.7 2.6 7.5 6.3 3.7 1.9-2 1-4-2.5-4.6 2 .3 4.2-.1 4.8-2.1.5-1.5 1.2-5.6 1.2-6.9 0-2.2-.8-2.7-3.4-1.3C15.9 4.9 13 8.7 12 10.8Z",
  },
];

/* real accreditation badges downloaded from the live site footer */
const BADGES: { src: string; alt: string }[] = [
  { src: "/images/real/badge-tef.png", alt: "Teaching Excellence Framework Gold Award" },
  { src: "/images/real/badge-alliance.png", alt: "Member of University Alliance" },
  { src: "/images/real/badge-stonewall.png", alt: "Stonewall Proud Employer Trailblazer" },
  { src: "/images/real/badge-studentcrowd.png", alt: "Top 5 in London by StudentCrowd" },
];

export default function Footer() {
  return (
    <footer className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-10">
          <Logo dark />
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-mint hover:bg-mint hover:text-navy"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} fill="currentColor" fillRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-mint">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* contact block */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-mint">
              Get in touch
            </p>
            <address className="text-[15px] not-italic leading-relaxed text-white/75">
              Old Royal Naval College
              <br />
              Park Row, Greenwich
              <br />
              London SE10 9LS
            </address>
            <p className="mt-3 text-[15px] text-white/75">020 8331 8000</p>
            <div className="mt-3 text-[15px] leading-relaxed text-white/75">
              For admission, contact us on WhatsApp:
              <a
                href={ADMISSIONS_WHATSAPP.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 font-semibold text-mint transition-colors hover:text-white"
              >
                <WhatsAppIcon size={17} />
                {ADMISSIONS_WHATSAPP.display}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-none border-2 border-mint px-5 py-2.5 text-sm font-bold text-mint transition-colors hover:bg-mint hover:text-navy"
            >
              Ask us a question
            </Link>
          </div>
        </div>

        {/* real accreditation badges */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {BADGES.map((badge) => (
            <span
              key={badge.alt}
              className="flex h-16 items-center bg-white px-3 py-2"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-full w-auto"
              />
            </span>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>
            © 2026 — an unofficial clone built for web-development practice.
            Not affiliated with the University of Greenwich.
          </p>
          <div className="flex gap-5">
            {["Terms", "Privacy", "Cookies", "Sitemap"].map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-mint">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
