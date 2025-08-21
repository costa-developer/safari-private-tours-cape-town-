import { Metadata } from "next";
import Aboutus from "./components/home/about-us";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Resources from "./components/home/resources";
import CalenderEvents from "./components/home/events";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";

export const metadata: Metadata = {
    title: "Digitalizeiq",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
     <CalenderEvents />
      <Aboutus/>
      <Faq/>
      <Resources/>
      <Testimonialss />
      <Contact contactdataNumber="8"/>
    </>
  );
}
