import { useEffect, useRef } from "react";
import { FaMountain, FaBinoculars, FaWineBottle, FaStar, FaUsers } from "react-icons/fa";

const highlights = [
  {
    icon: <FaMountain size={36} className="text-white" />,
    title: "City Tours",
    description: "Explore Cape Town’s iconic landmarks, from Table Mountain to the V&A Waterfront.",
  },
  {
    icon: <FaBinoculars size={36} className="text-white" />,
    title: "Adventure",
    description: "Enjoy shark cage diving, paragliding, surfing, and scenic hikes.",
  },
  {
    icon: <FaWineBottle size={36} className="text-white" />,
    title: "Winelands",
    description: "Savor wine tastings, gourmet dining, and vineyard tours nearby.",
  },
  {
    icon: <FaStar size={36} className="text-white" />,
    title: "Bespoke Experiences",
    description: "Tailor your itinerary with private tours and curated activities.",
  },
  {
    icon: <FaUsers size={36} className="text-white" />,
    title: "Cultural Immersion",
    description: "Connect with local communities, explore markets, and experience heritage.",
  },
];

const TourHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="2xl:max-w-[1920px] bg-[#B6A28F] relative flex flex-col py-10 lg:py-20 overflow-hidden">
      <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-10">
        Tour Highlights
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap animate-scroll overflow-x-hidden px-4"
      >
        {/* Duplicate the highlights array for seamless scrolling */}
        {[...highlights, ...highlights].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 lg:w-72 p-6 bg-white/10 rounded-3xl backdrop-blur-md text-white flex flex-col items-center gap-4 hover:scale-105 transform transition-all duration-500"
          >
            <div>{item.icon}</div>
            <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
            <p className="text-center text-white/80 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourHighlights;
