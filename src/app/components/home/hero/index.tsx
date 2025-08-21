"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
  return (
    <ParallaxProvider>
      <Parallax speed={-20}>
        <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/video/banner-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center w-full max-w-6xl mb-2">
              <div className="h-px bg-white/50 flex-1"></div>
              <h1 className="mx-6 text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Grow Your Brand
              </h1>
              <div className="h-px bg-white/50 flex-1"></div>
            </div>
            <div className="flex items-center w-full max-w-6xl mt-2">
              <div className="h-px bg-white/50 flex-1"></div>
              <h2 className="mx-6 text-xl sm:text-1xl lg:text-2xl font-serif text-white">
              With SEO, Social Media & Strategy
              </h2>
              <div className="h-px bg-white/50 flex-1"></div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
