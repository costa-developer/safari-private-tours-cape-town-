import { PEOPLE_URL } from "./constants";
import Image from "next/image";

interface ExperienceProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  participants: string;
}

const ExperienceCard = ({ backgroundImage, title, subtitle, participants }: ExperienceProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col justify-between p-6 lg:px-20 lg:py-10 bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
        {/* Top info */}
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-[#1F2A2E] p-4 flex items-center justify-center">
            <Image src="/folded-map.svg" alt="experience" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white text-lg md:text-xl">{title}</h4>
            <p className="text-white/90 text-sm md:text-base">{subtitle}</p>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                className="inline-block h-10 w-10 rounded-full border-2 border-white"
                src={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-semibold text-white text-base md:text-lg">{participants}</p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="2xl:max-w-[1920px] bg-secondary relative flex flex-col py-16 lg:py-24 xl:py-32">
      
      {/* Section Heading */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left px-6 lg:px-20 mb-10">
        <h2 className="max-w-3xl text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Experience <span className="text-[#B6A28F]">Real, Raw Nature</span>
        </h2>
        <p className="max-w-2xl text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
          Traveling is more than the places you visit—it's about people, culture, wildlife, and history. With Wilderness, you'll trek, boat, float, fly, drive, ride, and discover a world of adventures. Every journey is designed to immerse you in nature's beauty and create unforgettable memories.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] px-6 lg:px-20">
        <ExperienceCard
          backgroundImage="/images/home/experiences/a.jpg"
          title="Table Mountain Hike"
          subtitle="Trek up to breathtaking city views"
          participants="20+ Adventurers"
        />
        <ExperienceCard
          backgroundImage="/images/home/experiences/b.jpg"
          title="Robben Island Tour"
          subtitle="Step into South Africa’s history"
          participants="15+ Explorers"
        />
        <ExperienceCard
          backgroundImage="/images/home/experiences/c.jpg"
          title="Cape Point Excursion"
          subtitle="Witness dramatic coastal scenery"
          participants="12+ Travelers"
        />
        <ExperienceCard
          backgroundImage="/images/home/experiences/d.jpg"
          title="Cape Winelands"
          subtitle="Savor world-class wines and views"
          participants="18+ Visitors"
        />
        <ExperienceCard
          backgroundImage="/images/home/experiences/e.jpg"
          title="Bo-Kaap Cultural Walk"
          subtitle="Discover colorful streets and heritage"
          participants="10+ Guests"
        />
      </div>

      {/* Highlight Box */}
      <div className="flex items-end justify-end mt-10 px-6 lg:px-20">
        <div className="bg-[#B6A28F] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl shadow-2xl">
          <h2 className="text-white text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-extrabold leading-tight">
            <strong>Explore Cape Town</strong> and Experience Its Wonders
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg mt-5 leading-relaxed">
            Immerse yourself in the beauty and culture of Cape Town. Hike Table Mountain, explore Robben Island, savor wines in the Winelands, or stroll the colorful streets of Bo-Kaap. Every adventure offers breathtaking views, unforgettable experiences, and stories to cherish.
          </p>
          <Image
            src="/quote.svg"
            alt="experiences-quote"
            width={186}
            height={219}
            className="absolute -top-10 -left-10 opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
