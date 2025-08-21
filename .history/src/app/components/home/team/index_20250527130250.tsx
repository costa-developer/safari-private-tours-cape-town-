
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Team = (props: {teamdataNumber: string}) => {
    const { teamdataNumber } = props;
    const [teamData, setTeamData] = useState<any>(null);

    useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch('/api/page-data')
              if (!res.ok) throw new Error('Failed to fetch')
              const data = await res.json()        
              setTeamData(data?.teamData)
            } catch (error) {
              console.error('Error fetching services:', error)
            }
          }
          fetchData()
        }, [])

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">{teamdataNumber ? teamdataNumber : teamData.number}</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12"/>
                                <p className="section-bedge py-1.5 px-4 rounded-full">The team</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">Meet our team</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
                            {teamData?.data?.map((data:any, index:any) => {
                                return (
                                    <div key={index} className="group flex flex-col gap-6">
                                        <div className="relative">
                                            <Image src={data?.image} alt="image" width={390} height={470} style={{ width: '100%' }} />
                                            <div className="absolute hidden bg-secondary/40 bottom-0 left-0 w-full h-full group-hover:flex items-end justify-end p-8">
                                                <div className="flex gap-3">
                                                    {data?.socialLinks?.map((socialdata:any, index:any) => {
                                                        return (
                                                            <a key={index} href={socialdata.link} className="block w-fit bg-white hover:bg-primary p-3 rounded-full">
                                                                <Image src={socialdata.icon} alt="icon" width={20} height={20} />
                                                            </a>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>{data?.name}</h4>
                                            <span className="text-secondary/70 dark:text-white/70">{data?.position}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
