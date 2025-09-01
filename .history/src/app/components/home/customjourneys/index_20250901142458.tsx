"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Variants, Transition } from "framer-motion";

const CustomeJourneys = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/safari.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Subtle moving light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-20 pointer-events-none animate-lightShift"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      ></motion.div>

      {/* Centered Content */}
      <div ref={ref} className="relative z-10 max-w-3xl text-center px-6">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="text-sm sm:text-base lg:text-[14px] font-medium text-white mb-4 uppercase tracking-widest"
        >
          Our custom-designed journeys
        </motion.h3>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight"
        >
          Tailor-made itineraries for every traveller
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
          className="text-white/90 text-sm sm:text-base lg:text-[16px] mb-8 max-w-3xl mx-auto"
        >
          We’re excited to take you on a journey to experience sights and sounds found nowhere else on Earth. Unique scenery, wildlife, and cultures are waiting to be revealed, and we at Wilderness can’t wait to share them with you. Our custom-designed journeys are intended to inspire but can be tailor made to suit your every need. It’s time to let your safari dreams run wild.
        </motion.p>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          href="#journeys"
          className="inline-flex items-center gap-3 bg-[#B6A28F] hover:bg-[#8C6B4A] text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          EXPLORE OUR JOURNEYS <FaArrowRight />
        </motion.a>
      </div>

      {/* Light shift animation */}
      <style jsx>{`
        @keyframes lightShift {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-lightShift {
          animation: lightShift 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomeJourneys;
