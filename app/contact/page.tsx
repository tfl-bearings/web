import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { ADMISSIONS_WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact us | University of Greenwich Clone",
  description: "Questions about courses, applications or visits — ask away.",
};

const CONTACT_CARDS: {
  title: string;
  lines: { text: string; href?: string }[];
  note: string;
}[] = [
  {
    title: "Admissions on WhatsApp",
    lines: [{ text: ADMISSIONS_WHATSAPP.display, href: ADMISSIONS_WHATSAPP.href }],
    note: "For admission enquiries, message us on this number",
  },
  {
    title: "Course and application enquiries",
    lines: [{ text: "020 8331 8000" }, { text: "courseinfo@gre.ac.uk" }],
    note: "Monday to Friday, 9am–5pm",
  },
  {
    title: "International students",
    lines: [{ text: "+44 (0)20 8331 8136" }, { text: "international@gre.ac.uk" }],
    note: "Replies within two working days",
  },
  {
    title: "Clearing hotline",
    lines: [{ text: "020 8331 9000" }],
    note: "Extended hours on Results Day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        intro="Whatever your question — courses, applications, visits or anything else — we're happy to help."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Talk to us" title="Get in touch" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-none border border-mist p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-extrabold text-navy">
                  {card.title}
                </h3>
                <div className="mt-3 space-y-1">
                  {card.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-semibold text-royal underline-offset-4 hover:underline"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="font-semibold text-royal">
                        {line.text}
                      </p>
                    ),
                  )}
                </div>
                <p className="mt-3 text-sm text-ink/60">{card.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Write to us" title="Send a message" />
            <p className="max-w-md text-[15px] leading-relaxed text-ink/80">
              Fill in the form and the right team will get back to you. In a
              hurry? The phone lines are usually fastest.
            </p>
            <address className="mt-8 rounded-none border-l-4 border-mint bg-white p-6 text-[15px] not-italic leading-relaxed text-ink/80">
              <strong className="text-navy">University of Greenwich</strong>
              <br />
              Old Royal Naval College
              <br />
              Park Row, Greenwich
              <br />
              London SE10 9LS
            </address>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
