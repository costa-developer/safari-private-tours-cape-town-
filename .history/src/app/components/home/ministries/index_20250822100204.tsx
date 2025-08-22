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
      <section className="2xl:max-w-[1920px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        
        <h3 className="mb-4 block lg:hidden 2xl:max-w-3xl text-secondary dark:text-white font-semibold text-center">
          Swipe to discover our ministries
        </h3>
  
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <MinistriesSite
            backgroundImage="/images/home/ministries/communion.jpg"
            title="Extra-ordinary Ministers of Holy Communion"
            subtitle="Serving the Eucharist with devotion"
            peopleJoined="20+ Members"
          />
          <MinistriesSite
            backgroundImage="/images/home/ministries/proclaimers.jpg"
            title="Proclaimers"
            subtitle="Sharing the Word of God"
            peopleJoined="15+ Members"
          />
          <MinistriesSite
            backgroundImage="/images/home/ministries/ushers.jpg"
            title="Ushers"
            subtitle="Welcoming the faithful"
            peopleJoined="10+ Members"
          />
          <MinistriesSite
            backgroundImage="/images/home/ministries/servers.jpg"
            title="Servers"
            subtitle="Assisting during the Mass"
            peopleJoined="12+ Members"
          />
          <MinistriesSite
            backgroundImage="/images/home/ministries/choir.jpg"
            title="Choir"
            subtitle="Lifting voices in praise"
            peopleJoined="25+ Members"
          />
        </div>
  
        <div className="flex items-end justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-[#1F2A2E] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="text-white capitalize text-2xl md:text-3xl 2xl:text-6xl">
              <strong>Join Our Ministries</strong> And Serve With Heart
            </h2>
            <p className="text-white text-sm xl:text-base mt-5">
              Be part of our parish community by joining one of our ministries. Whether assisting at Mass, proclaiming the Word, welcoming the faithful, or singing in the choir, your participation brings life and joy to our Church.
            </p>
            <Image
              src="/quote.svg"
              alt="ministries-quote"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
        </div>
      </section>
    );
  };
  

export default Ministries;