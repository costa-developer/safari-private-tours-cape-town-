"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const AboutusStats = () => {
    const [aboutusStats, setAboutusStats] = useState<any>(null);
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
                setAboutusStats(data?.aboutusStats)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="pb-10 md:pb-20 xl:pb-40 dark:bg-secondary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
                    {aboutusStats?.map((value:any, index:any) => {
                        return (
                            <div ref={ref} key={index} className="flex flex-col gap-5 md:gap-8 xl:pr-10">
                                <h3 className="text-5xl md:text-6xl Xxl:text-7xl font-bold border-b border-secondary/12 dark:border-white/12 pb-4 md:pb-8">
                                    {value.prefix && <span>{value.prefix}</span>}
                                    {inView ? <CountUp start={0} end={value.number} duration={3} /> : "0"}
                                    {value.postfix && <span>{value.postfix}</span>}</h3>
                                <div className="flex flex-col gap-2 md:gap-4">
                                    <h4>{value.title}</h4>
                                    <p className="text-base text-secondary/70 dark:text-white/70">{value.descp}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default AboutusStats