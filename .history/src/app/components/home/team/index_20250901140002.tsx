"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Team = (props: { teamdataNumber?: string }) => {
  const { teamdataNumber } = props;
  const [teamData, setTeamData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTeamData(data?.teamData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white dark:bg-secondary py-20 md:py-40">
      <div className="flex flex-col gap-24">
        {/* Section Header */}
        <div className="container">
          <div className="flex flex-col gap-14 xl:gap-24">
            <div className="flex flex-col xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                  {teamdataNumber ? teamdataNumber : teamData?.number}
                </span>
                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                <p className="section-bedge py-1.5 px-4 rounded-full">Our Tour Guides</p>
              </div>

              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5">
                  <h2 className="max-w-3xl text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                    Meet Our Expert Guides
                  </h2>
                  <p className="max-w-2xl text-gray-700 dark:text-white/70 text-base md:text-lg leading-relaxed">
                    Our knowledgeable tour guides bring Cape Town to life. From the majestic Table Mountain to historic Robben Island, each guide ensures a safe, engaging, and unforgettable experience. Learn about the culture, history, and hidden gems of this vibrant city with our passionate team.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
              {teamData?.data?.map((data: any, index: any) => (
                <div key={index} className="group flex flex-col gap-6">
                  <div className="relative">
                    <Image
                      src={data?.image}
                      alt={data?.name}
                      width={390}
                      height={470}
                      style={{ width: "100%" }}
                      className="rounded-2xl object-cover"
                    />
                    <div className="absolute hidden bg-black/40 bottom-0 left-0 w-full h-full group-hover:flex items-end justify-end p-8 rounded-2xl">
                      <div className="flex gap-3">
                        {data?.socialLinks?.map((socialData: any, idx: any) => (
                          <a
                            key={idx}
                            href={socialData.link}
                            className="block w-fit bg-white hover:bg-primary p-3 rounded-full transition-colors"
                          >
                            <Image
                              src={socialData.icon}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {data?.name}
                    </h4>
                    <span className="text-gray-700 dark:text-white/70 text-sm md:text-base">
                      {data?.position}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
