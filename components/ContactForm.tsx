"use client";

import { useState } from "react";

const TOPICS = [
  "Undergraduate study",
  "Postgraduate study",
  "International applications",
  "Clearing",
  "Open days and visits",
  "Something else",
];

export default function ContactForm() {
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
        <h3 className="mt-6 text-2xl font-extrabold">Message received!</h3>
        <p className="mt-3 max-w-sm text-white/80">
          The right team will reply within two working days.
        </p>
        <p className="mt-4 text-xs text-white/50">
          (This is a demo form — no data was actually sent.)
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-none border-2 border-mint px-6 py-2.5 text-sm font-bold text-mint transition-colors hover:bg-mint hover:text-navy"
        >
          Send another message
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
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ct-name"
              className="mb-1.5 block text-sm font-bold text-navy"
            >
              Full name
            </label>
            <input
              id="ct-name"
              required
              type="text"
              placeholder="Alex Taylor"
              className="w-full rounded-none border border-mist px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
            />
          </div>
          <div>
            <label
              htmlFor="ct-email"
              className="mb-1.5 block text-sm font-bold text-navy"
            >
              Email address
            </label>
            <input
              id="ct-email"
              required
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-none border border-mist px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="ct-topic"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            What's it about?
          </label>
          <select
            id="ct-topic"
            required
            defaultValue=""
            className="w-full rounded-none border border-mist bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          >
            <option value="" disabled>
              Choose a topic…
            </option>
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="ct-message"
            className="mb-1.5 block text-sm font-bold text-navy"
          >
            Your message
          </label>
          <textarea
            id="ct-message"
            required
            rows={5}
            placeholder="Tell us what you'd like to know…"
            className="w-full resize-y rounded-none border border-mist px-4 py-3 text-[15px] outline-none transition-colors focus:border-royal"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-none bg-navy py-3.5 font-bold text-white transition-colors hover:bg-royal"
      >
        Send message
      </button>
    </form>
  );
}
