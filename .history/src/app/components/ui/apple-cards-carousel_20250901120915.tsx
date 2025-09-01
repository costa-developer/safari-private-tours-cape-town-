// Simplified Card component (no modal)
export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="relative flex h-80 w-56 flex-col justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
      {/* Card image */}
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Category & Title */}
      <div className="relative z-10 p-6">
        <p className="text-sm font-medium text-white">{card.category}</p>
        <p className="mt-1 text-xl font-semibold text-white md:text-3xl">
          {card.title}
        </p>
      </div>

      {/* Bottom full-width price & period */}
      <div className="relative z-10 w-full bg-white px-6 py-3 flex justify-between items-center">
        <p className="text-neutral-900 text-lg font-semibold">{card.price}</p>
        <p className="text-neutral-700 text-sm font-medium">{card.period}</p>
      </div>
    </div>
  );
};
