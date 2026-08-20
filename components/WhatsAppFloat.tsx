"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { ADMISSIONS_WHATSAPP } from "@/lib/data";

/* Floating WhatsApp button, bottom-right on every page.
   Tap/click opens a small card with the admissions number. */
export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Contact admissions on WhatsApp"
          className="w-[268px] rounded-none border border-mist bg-white shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 bg-navy px-4 py-3">
            <p className="text-sm font-extrabold leading-snug text-white">
              Admissions enquiries
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="-mr-1 -mt-0.5 text-xl leading-none text-white/70 transition-colors hover:text-mint"
            >
              &times;
            </button>
          </div>
          <div className="px-4 py-4">
            <p className="text-[14px] leading-relaxed text-ink/80">
              For more info, contact us on WhatsApp.
            </p>
            <p className="mt-2 text-[15px] font-semibold text-royal">
              {ADMISSIONS_WHATSAPP.display}
            </p>
            <a
              href={ADMISSIONS_WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon size={16} />
              Start chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={
          open ? "Close WhatsApp enquiries" : "Contact admissions on WhatsApp"
        }
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon size={30} />
        <span className="pointer-events-none absolute right-[4.5rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap bg-navy px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
          Contact us on WhatsApp
        </span>
      </button>
    </div>
  );
}
