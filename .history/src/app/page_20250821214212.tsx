import { Metadata } from "next";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Resources from "./components/home/resources";
import CalenderEvents from "./components/home/events";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";
import MinistriesGuides from "./components/home/about-us";

export const metadata: Metadata = {
    title: "Digitalizeiq",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CalenderEvents />
      <StatsFacts/>
      <MinistriesGuides />
      <Faq/>
      <Resources/>
      <Testimonialss />
      <Contact contactdataNumber="8"/>
    </>
  );
}
