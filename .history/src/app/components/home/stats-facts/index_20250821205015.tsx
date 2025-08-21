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
        // For demonstration, we can use static Jubilee data instead of fetching
        const jubileeData = {
            heading: "Celebrating the Holy Jubilee",
            description: "Join the faithful around the world as we commemorate mercy, reconciliation, and renewal during the Jubilee Year.",
            scoreData: [
                { number: 50, numberValue: "", scoreDescp: "Years of Jubilee Tradition" },
                { number: 1200, numberValue: "", scoreDescp: "Participating Churches" },
                { number: 500000, numberValue: "", scoreDescp: "Pilgrims & Visitors" }
            ]
        };
        setStatsFactData(jubileeData);
    }, []);

    return (
        <section className="relative bg-white dark:bg-secondary overflow-hidden">
            <div className="relative py-20 md:py-40 z-10">
                {statsFactData && (
                    <div className="absolute top-6 left-6 flex items-center gap-4 md:gap-8">
                        <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                            Jubilee
                        </span>
                    </div>
                )}

                <div className="container mx-auto">
                    <div className="flex flex-col gap-11 items-center justify-center text-center">
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h2 className="max-w-3xl text-4xl font-serif text-black dark:text-white">{statsFactData?.heading}</h2>
                            <p className="max-w-xl text-secondary/70 dark:text-white/70 text-lg">{statsFactData?.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-12">
                            {statsFactData?.scoreData?.map((value: any, index: any) => (
                                <div
                                    ref={ref}
                                    key={index}
                                    className="flex flex-col gap-5 pt-4 md:pt-11 border-t border-secondary/12 dark:border-white/12 items-center text-center"
                                >
                                    <h3 className="text-5xl md:text-6xl Xxl:text-7xl font-bold text-primary">
                                        {inView ? <CountUp start={0} end={value.number} duration={3} /> : "0"}
                                        {value.numberValue && <span>{value.numberValue}</span>}
                                    </h3>
                                    <p className="text-base text-secondary/70 dark:text-white/70">{value.scoreDescp}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <NavigationLink navigationTitle="Learn More About Jubilee" navigationLink="/jubilee" transform={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsFacts;
