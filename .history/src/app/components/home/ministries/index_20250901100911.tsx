import { PEOPLE_URL } from "./constants";
import Image from "next/image";

interface MinistriesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const MinistriesSite = ({ backgroundImage, title, subtitle, peopleJoined }: MinistriesProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-3xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Top info */}
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#1F2A2E] p-4">
            <Image src="/folded-map.svg" alt="ministry" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white text-lg">{title}</h4>
            <p className="text-white text-sm">{subtitle}</p>
          </div>
        </div>

        {/* People joined */}
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
          <p className="font-bold text-white text-base md:text-lg">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Ministries = () => {
    return (
      <section className="2xl:max-w-[1920px] bg-[#B6A28F] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        
      </section>
    );
  };
  

export default Ministries;