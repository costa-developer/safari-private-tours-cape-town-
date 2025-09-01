import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";
import CustomeJourneys from "./components/home/customjourneys";
import Experiences from "./components/home/tourhighlights";
import AllToursData from "./components/home/tours";

export const metadata: Metadata = {
    title: "Digitalizeiq",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AllToursData />
      <StatsFacts/>
      <CustomeJourneys />
     <Experiences />
      <Faq/>
      <Testimonialss />
    </>
  );
}
