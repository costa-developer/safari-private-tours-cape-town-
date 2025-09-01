const AboutusDetail = () => {
    return (
      <section className="py-10 md:py-20 xl:py-40 bg-white dark:bg-secondary">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Heading */}
            <div className="max-w-xl w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                About Our Cape Town Tours
              </h2>
            </div>
  
            {/* Description */}
            <div className="flex flex-col gap-8">
              <p className="text-gray-700 dark:text-white text-base md:text-lg leading-relaxed">
                At Safari Private Tours, we specialize in creating unforgettable experiences in Cape Town. Our curated tours take you from the iconic Table Mountain and Robben Island to the stunning Winelands and vibrant city neighborhoods. Every journey is designed to immerse you in the city’s natural beauty, history, and culture.
              </p>
              <p className="text-gray-700 dark:text-white text-base md:text-lg leading-relaxed">
                We believe that travel is about more than sightseeing—it’s about creating memories, discovering hidden gems, and experiencing the heart of Cape Town. Our team of local guides ensures personalized, authentic experiences, blending adventure, culture, and relaxation for every traveler. Join us and explore Cape Town like never before.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutusDetail;
  