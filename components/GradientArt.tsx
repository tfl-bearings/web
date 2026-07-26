/* eslint-disable @next/next/no-img-element */
/*
  Card artwork — renders real photography downloaded from the live site.
  The `variant` index picks a photo from the pool, so every existing
  usage site gets a real image without further changes.
*/

const PHOTOS = [
  "/images/real/card-ug.jpg", // 0 — undergraduate students
  "/images/real/card-pg.jpg", // 1 — postgraduate study
  "/images/real/card-int.jpg", // 2 — international students
  "/images/real/banner-kent.jpg", // 3 — Kent collaboration
  "/images/real/card-scholarships.jpg", // 4 — scholarships
  "/images/real/card-online.jpg", // 5 — online learning
  "/images/real/card-apprentice.jpg", // 6 — apprenticeships
  "/images/real/card-openday.jpg", // 7 — open day
  "/images/real/campus-greenwich.jpg", // 8 — campus life
  "/images/real/card-openday2.jpg", // 9 — campus visit
];

type Props = {
  variant?: number;
  className?: string;
};

export default function GradientArt({ variant = 0, className = "" }: Props) {
  return (
    <img
      src={PHOTOS[variant % PHOTOS.length]}
      alt=""
      className={`object-cover ${className}`}
    />
  );
}
