import Hero from "@/components/Hero";
import StudyLevels from "@/components/StudyLevels";
import KentBanner from "@/components/KentBanner";
import Offers from "@/components/Offers";
import ChooseGreenwich from "@/components/ChooseGreenwich";
import PopularCourses from "@/components/PopularCourses";
import TefGold from "@/components/TefGold";
import News from "@/components/News";
import Campuses from "@/components/Campuses";

export default function Home() {
  return (
    <>
      <Hero />
      <StudyLevels />
      <KentBanner />
      <Offers />
      <ChooseGreenwich />
      <PopularCourses />
      <TefGold />
      <News />
      <Campuses />
    </>
  );
}
