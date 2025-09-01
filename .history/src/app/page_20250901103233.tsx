import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import CalenderEvents from "./components/home/events";
import StatsFacts from "./components/home/stats-facts";
import Testimonialss from "./components/home/testimonial";
import Ministries from "./components/home/tourhighlights";

export const metadata: Metadata = {
    title: "Digitalizeiq",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
      <CalenderEvents />
     <Ministries />
      <Faq/>
      <Testimonialss />
    </>
  );
}
