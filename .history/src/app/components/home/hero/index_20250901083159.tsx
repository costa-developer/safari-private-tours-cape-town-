"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
  return (
    <ParallaxProvider>
      <Parallax speed={-20}>
        <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
          {/* Sacred or church-themed video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/video/banner-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center w-full max-w-6xl mb-4">
              <div className="h-px bg-white/50 flex-1"></div>
              <h1 className="mx-6 text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Ready to get lost?
              </h1>
              <div className="h-px bg-white/50 flex-1"></div>
            </div>

            <p className="mt-6 max-w-3xl text-white text-center text-lg sm:text-xl">
              Welcome to Wilderness.
            </p>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
