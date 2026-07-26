import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsGrid from "@/components/NewsGrid";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "News | University of Greenwich Clone",
  description: "The latest stories from our university community.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News and stories"
        intro="Research breakthroughs, student successes and life across our three campuses."
        crumbs={[{ label: "News" }]}
      />
      <NewsGrid />
      <CtaStrip />
    </>
  );
}
