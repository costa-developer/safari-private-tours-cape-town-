"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import NavigationLink from "../../shared/navigation-link";
import { useEffect, useState } from "react";

function StatsFacts() {
    const [statsFactData, setStatsFactData] = useState<any>(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                if (data) {
                    setStatsFactData(data?.statsFactData)
                } else {
                    console.error('No data found for statsFactData')
                }
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="relative bg-white dark:bg-secondary overflow-hidden">
            <div className="relative py-20 md:py-40 z-10">
                {statsFactData && (
                    <div className="absolute top-6 left-6 flex items-center gap-4 md:gap-8">
                        <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                            {statsFactData.number}
                        </span>
                    </div>
                )}

                <div className="container mx-auto">
                    <div className="flex flex-col gap-11 items-center justify-center text-center">
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h2 className="max-w-3xl">{statsFactData?.heading}</h2>
                            <p className="max-w-xl text-secondary/70 dark:text-white/70">{statsFactData?.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                            {statsFactData?.scoreData?.map((value: any, index: any) => (
                                <div
                                    ref={ref}
                                    key={index}
                                    className="flex flex-col gap-5 pt-4 md:pt-11 border-t border-secondary/12 dark:border-white/12 items-center text-center"
                                >
                                    <h3 className="text-5xl md:text-6xl Xxl:text-7xl font-bold">
                                        {inView ? <CountUp start={0} end={value.number} duration={3} /> : "0"}
                                        {value.numberValue && <span>{value.numberValue}</span>}
                                        <span>+</span>
                                    </h3>
                                    <p className="text-base text-secondary/70 dark:text-white/70">{value.scoreDescp}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <NavigationLink navigationTitle="Who we are" navigationLink="/about" transform={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsFacts;
