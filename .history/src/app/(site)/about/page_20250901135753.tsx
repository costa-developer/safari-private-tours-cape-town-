import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cape Town Tours | Studiova",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.jpg"
        heading="Discover Cape Town with Us"
        desc="Explore the beauty, culture, and adventures of Cape Town. From Table Mountain to Robben Island, our curated tours give you unforgettable experiences and insider access to the city's top attractions." 
      />
      
      <AboutusDetail />
      <AboutusStats />
      <AboutusFullimg />
      <Team teamdataNumber="01" />
    </main>
  );
};
