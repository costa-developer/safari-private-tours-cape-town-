import React from 'react';
import Head from 'next/head';

// Define the component props for better type safety
interface ImageItem {
  src: string;
  alt: string;
}

/**
 * A reusable, responsive image carousel component using DaisyUI and Tailwind CSS.
 * It's designed to show multiple images at once, with the number of visible
 * images changing based on the screen size (2 on mobile, 3 on tablet, 4 on desktop).
 *
 * @param {Object} props - The component props.
 * @param {ImageItem[]} props.images - An array of image objects to display.
 * @returns {JSX.Element} The responsive carousel component.
 */
const ResponsiveCarousel: React.FC = () => {
  // Array of image data to make the component more maintainable.
  // Using placeholder images for demonstration.
  const images: ImageItem[] = [
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
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800 leading-tight">
        Responsive Image Carousel
      </h1>

      <div className="carousel carousel-center rounded-2xl shadow-xl w-full max-w-7xl gap-4 p-4">
        {images.map((image, index) => (
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