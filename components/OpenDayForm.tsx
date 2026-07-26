"use client";

import { useState } from "react";
import { OPEN_DAYS } from "@/lib/data";

export default function OpenDayForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-none bg-navy p-10 text-center text-white">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-2xl font-extrabold text-navy"
          aria-hidden
        >
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-extrabold">You&apos;re booked in!</h3>
        <p className="mt-3 max-w-sm text-white/80">
          Check your inbox for your confirmation and a plan for the day.
        </p>
        <p className="mt-4 text-xs text-white/50">
          (This is a demo form — no data was actually sent.)
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-none border-2 border-mint px-6 py-2.5 text-sm font-bold text-mint transition-colors hover:bg-mint hover:text-navy"
        >
          Book another place
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-none bg-white p-8 shadow-sm"
    >
      <h3 className="text-xl font-extrabold text-navy">Book your place</h3>
      <p className="mt-1 text-sm text-ink/70">
        Takes less than a minute — we&apos;ll send everything you need.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="od-name"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            Full name
          </label>
          <input
            id="od-name"
            required
            type="text"
            placeholder="Alex Taylor"
            className="w-full rounded-none border border-mist px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          />
        </div>

        <div>
          <label
            htmlFor="od-email"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            Email address
          </label>
          <input
            id="od-email"
            required
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-none border border-mist px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          />
        </div>

        <div>
          <label
            htmlFor="od-event"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            Which event?
          </label>
          <select
            id="od-event"
            required
            defaultValue=""
            className="w-full rounded-none border border-mist bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          >
            <option value="" disabled>
              Choose an event…
            </option>
            {OPEN_DAYS.map((event) => (
              <option key={event.type} value={event.type}>
                {event.type} — {event.date}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="od-level"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            What are you interested in?
          </label>
          <select
            id="od-level"
            defaultValue="Undergraduate"
            className="w-full rounded-none border border-mist bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          >
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Degree apprenticeships</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-none bg-navy py-3.5 font-bold text-white transition-colors hover:bg-royal"
      >
        Book my place
      </button>
    </form>
  );
}
