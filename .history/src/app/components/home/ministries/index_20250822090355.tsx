import React from 'react';

/**
 * A reusable, responsive image carousel component using DaisyUI and Tailwind CSS.
 * This component is designed to show multiple images at once, with different
 * numbers of images visible on different screen sizes (e.g., 2 on mobile, 4 on desktop).
 *
 * It uses Tailwind's responsive prefixes (sm:, md:, lg:) and fractional widths.
 *
 * @returns {JSX.Element} The responsive carousel component.
 */
const ResponsiveCarousel = (): JSX.Element => {
  // Array of image data to make the component more maintainable.
  const images = [
    { src: "https://placehold.co/600x400/87CEEB/FFFFFF?text=Pineapple", alt: "Pineapple" },
    { src: "https://placehold.co/600x400/96D7D3/FFFFFF?text=Cherries", alt: "Cherries" },
    { src: "https://placehold.co/600x400/E3D4A8/FFFFFF?text=Strawberry", alt: "Strawberry" },
    { src: "https://placehold.co/600x400/F4A261/FFFFFF?text=Orange", alt: "Orange" },
    { src: "https://placehold.co/600x400/2A9D8F/FFFFFF?text=Kiwi", alt: "Kiwi" },
    { src: "https://placehold.co/600x400/E76F51/FFFFFF?text=Lemon", alt: "Lemon" },
    { src: "https://placehold.co/600x400/264653/FFFFFF?text=Lime", alt: "Lime" },
    { src: "https://placehold.co/600x400/FFC8DD/FFFFFF?text=Watermelon", alt: "Watermelon" },
  ];

  return (
    // Main container for the component, centered and with padding.
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800 leading-tight">
        Responsive Image Carousel
      </h1>

      {/*
        The core DaisyUI carousel component.
        - `carousel-center`: This class ensures the items are centered when scrolling.
        - `gap-4`: Adds space between each carousel item.
        - `w-full max-w-7xl`: Sets the width of the container.
      */}
      <div className="carousel carousel-center rounded-2xl shadow-xl w-full max-w-7xl gap-4 p-4">
        {images.map((image, index) => (
          // Each carousel item with responsive width classes.
          // - `w-1/2`: On mobile, each item takes 50% of the width, showing 2 at a time.
          // - `md:w-1/3`: On medium screens (tablets), each item takes 33.3% of the width, showing 3.
          // - `lg:w-1/4`: On large screens (desktops), each item takes 25% of the width, showing 4.
          <div key={index} id={`slide${index + 1}`} className="carousel-item w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src={image.src}
              className="w-full object-cover rounded-lg"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;