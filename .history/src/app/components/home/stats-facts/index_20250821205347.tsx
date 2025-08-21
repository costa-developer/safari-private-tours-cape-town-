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
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                if (data) setStatsFactData(data?.statsFactData);
                else console.error('No data found for statsFactData');
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="relative bg-white dark:bg-secondary overflow-hidden">
            <div className="relative py-20 md:py-40 z-10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                        {/* Left side: Heading + Description */}
                        <div className="flex-1 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{statsFactData?.heading}</h2>
                            <p className="text-secondary/70 dark:text-white/70 mb-6">{statsFactData?.description}</p>
                            <NavigationLink navigationTitle="Who we are" navigationLink="/about" transform={true} />
                        </div>

                        {/* Right side: Stats */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {statsFactData?.scoreData?.map((value: any, index: any) => (
                                <div
                                    ref={ref}
                                    key={index}
                                    className="flex flex-col gap-3 md:gap-5 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-secondary/12 dark:border-white/12 items-center md:items-start text-center md:text-left"
                                >
                                    <h3 className="text-4xl md:text-5xl font-bold">
                                        {inView ? <CountUp start={0} end={value.number} duration={3} /> : "0"}
                                        {value.numberValue && <span>{value.numberValue}</span>}
                                        <span>+</span>
                                    </h3>
                                    <p className="text-base text-secondary/70 dark:text-white/70">{value.scoreDescp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsFacts;
