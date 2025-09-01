"use client";
import React, { useRef, useState, createContext, useContext, useMemo } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  price: string;
  period: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Debounced scroll check to reduce re-renders
  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };
  const debounce = (fn: Function, ms = 50) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), ms);
    };
  };
  const debouncedCheck = useMemo(() => debounce(checkScrollability, 50), []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = window.innerWidth < 768 ? 230 : 384;
    const gap = window.innerWidth < 768 ? 4 : 8;
    const scrollPosition = (cardWidth + gap) * (index + 1);
    carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={debouncedCheck}
          className="flex w-full overflow-x-scroll scroll-smooth py-10 md:py-20 [scrollbar-width:none] will-change-transform"
        >
          <div className="flex flex-row gap-4 pl-4 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2A2E] disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2A2E] disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card }: { card: Card }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex h-80 w-56 flex-col justify-between overflow-hidden rounded-3xl bg-gray-100 shadow-xl hover:shadow-2xl md:h-[40rem] md:w-96 dark:bg-neutral-900"
    >
      {/* Card Image */}
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Top & bottom gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Card Text */}
      <div className="relative z-10 p-6">
        <p className="text-left font-sans text-sm font-semibold text-white md:text-base tracking-wide">
          {card.category.toUpperCase()}
        </p>
        <p className="mt-2 max-w-xs text-left font-sans text-xl font-bold leading-snug text-white md:text-3xl">
          {card.title}
        </p>
      </div>

      {/* Price & Period */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-[#8a725e]/90 to-transparent px-6 py-3 flex justify-between items-center rounded-b-3xl">
        <p className="text-white text-xl font-extrabold md:text-2xl drop-shadow-lg">{card.price}</p>
        <p className="text-white text-sm font-light md:text-base">{card.period}</p>
      </div>
    </motion.div>
  );
};

// Optimized Next.js image with blur placeholder
export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt || "Background of a beautiful view"}
      {...rest}
    />
  );
};
