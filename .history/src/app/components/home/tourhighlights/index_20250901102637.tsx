"use client";

import { useEffect, useRef } from "react";
import { FaMountain, FaBinoculars, FaWineBottle, FaStar, FaUsers } from "react-icons/fa";

const highlights = [
  {
    icon: <FaMountain size={40} className="text-white" />,
    title: "City Tours",
    description: "Explore Cape Town’s iconic landmarks, from Table Mountain to the V&A Waterfront.",
  },
  {
    icon: <FaBinoculars size={40} className="text-white" />,
    title: "Adventure",
    description: "Enjoy shark cage diving, paragliding, surfing, and scenic hikes.",
  },
  {
    icon: <FaWineBottle size={40} className="text-white" />,
    title: "Winelands",
    description: "Savor wine tastings, gourmet dining, and vineyard tours nearby.",
  },
  {
    icon: <FaStar size={40} className="text-white" />,
    title: "Bespoke Experiences",
    description: "Tailor your itinerary with private tours and curated activities.",
  },
  {
    icon: <FaUsers size={40} className="text-white" />,
    title: "Cultural Immersion",
    description: "Connect with local communities, explore markets, and experience heritage.",
  },
];

const TourHighlights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5; // slower and smoother
    let animationFrameId: number;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="2xl:max-w-[1920px] bg-gradient-to-b from-[#B6A28F] to-[#8C6B4A] relative flex flex-col py-16 lg:py-24 overflow-hidden">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
        Tour Highlights
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap overflow-x-hidden px-6 cursor-grab touch-pan-x"
      >
        {[...highlights, ...highlights].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 lg:w-72 p-6 bg-white/10 rounded-3xl backdrop-blur-md text-white flex flex-col items-center gap-4 
            hover:scale-110 hover:bg-white/20 transform transition-all duration-500
            animate-fadeUp"
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
            <p className="text-center text-white/80 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Optional gradient fade for edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#B6A28F] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#B6A28F] to-transparent" />
    </section>
  );
};

export default TourHighlights;
