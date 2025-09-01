"use client";

import { FaArrowRight } from "react-icons/fa";

const CustomeJourneys = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/safari.jpg')" }} // Replace with your image path
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Sub-heading */}
        <h3 className="text-lg lg:text-xl font-medium text-white mb-4 uppercase tracking-widest">
          Our custom-designed journeys
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Tailor-made itineraries for every traveller
        </h1>

        {/* Paragraph */}
        <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-8 max-w-3xl mx-auto">
          We’re excited to take you on a journey to experience sights and sounds found nowhere else on Earth. Unique scenery, wildlife, and cultures are waiting to be revealed, and we at Wilderness can’t wait to share them with you. Our custom-designed journeys are intended to inspire but can be tailor made to suit your every need. It’s time to let your safari dreams run wild.
        </p>

        {/* CTA Button */}
        <a
          href="#journeys"
          className="inline-flex items-center gap-3 bg-[#B6A28F] hover:bg-[#8C6B4A] text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          EXPLORE OUR JOURNEYS <FaArrowRight />
        </a>
      </div>

      {/* Smooth Scroll Anchor */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#next-section" className="animate-bounce text-white/80">
          ▼
        </a>
      </div>
    </section>
  );
};

export default CustomeJourneys;
