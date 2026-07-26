/* eslint-disable @next/next/no-img-element */

type Props = {
  dark?: boolean;
};

/* Real University of Greenwich logo (downloaded from the live site).
   The artwork is navy-on-white, so on dark backgrounds it sits on a
   white panel — mirroring how print/partner placements handle it. */
export default function Logo({ dark = false }: Props) {
  return (
    <a
      href="/"
      aria-label="University of Greenwich — home"
      className="flex shrink-0 items-center"
    >
      {dark ? (
        <span className="inline-block bg-white px-3 py-2">
          <img
            src="/images/real/logo.png"
            alt="University of Greenwich logo"
            className="h-9 w-auto"
          />
        </span>
      ) : (
        <img
          src="/images/real/logo.png"
          alt="University of Greenwich logo"
          className="h-10 w-auto sm:h-11"
        />
      )}
    </a>
  );
}
