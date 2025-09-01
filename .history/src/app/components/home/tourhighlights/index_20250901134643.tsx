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
      className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Top info */}
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#1F2A2E] p-4">
            <Image src="/folded-map.svg" alt="experience" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <p className="text-white text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-bold text-white text-base md:text-lg">{participants}</p>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="2xl:max-w-[1920px] bg-secondary relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      
      <div className="flex-1 flex flex-col gap-5 items-center md:items-start justify-center">
                            <h2 className="max-w-3xl">Experience real, raw nature</h2>
                            <p className="max-w-xl text-secondary/70 dark:text-white/70">{statsFactData?.description}</p>
                        </div>

      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
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

      <div className="flex items-end justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#B6A28F] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-white capitalize text-2xl md:text-3xl 2xl:text-6xl">
            <strong>Explore Cape Town</strong> And Experience Its Wonders
          </h2>
          <p className="text-white text-sm xl:text-base mt-5">
            Immerse yourself in the beauty and culture of Cape Town. Hike Table Mountain, explore Robben Island, savor wines in the Winelands, or stroll the colorful streets of Bo-Kaap. Every adventure offers breathtaking views, unforgettable experiences, and stories to cherish.
          </p>
          <Image
            src="/quote.svg"
            alt="experiences-quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
