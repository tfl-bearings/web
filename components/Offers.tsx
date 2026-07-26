/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";

const OFFERS = [
  {
    title: "Scholarships and bursaries",
    text: "Over £4 million awarded every year — including our £4,000 Commuter Bursary for students who live at home.",
    cta: "See what you could get",
    href: "/study#fees",
    img: "/images/real/card-scholarships.jpg",
  },
  {
    title: "Degree apprenticeships",
    text: "Earn a salary and pay no tuition fees while you study, with one of our 300+ employer partners.",
    cta: "Explore apprenticeships",
    href: "/partnerships#apprenticeships",
    img: "/images/real/card-apprentice.jpg",
  },
  {
    title: "Greenwich Online",
    text: "Study 100% online with the same respected degree at the end — built to fit around your life.",
    cta: "Browse online courses",
    href: "/courses",
    img: "/images/real/card-online.jpg",
  },
];

export default function Offers() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="More ways to Greenwich"
          title="Support for every journey"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <article
              key={offer.title}
              className="overflow-hidden rounded-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={offer.img}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-navy">
                  {offer.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                  {offer.text}
                </p>
                <a
                  href={offer.href}
                  className="mt-4 inline-block font-bold text-royal transition-colors hover:text-navy"
                >
                  {offer.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
