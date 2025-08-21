"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function Services() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [imagePosition, setImagePosition] = useState<number>(0);
    const [isMdScreen, setIsMdScreen] = useState(false);
    const [servicesData, setServicesData] = useState<any>(null);

    useEffect(() => {
        const checkScreenSize = () => setIsMdScreen(window.innerWidth >= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setServicesData(data?.servicesData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
        setActiveIndex(index);

        const serviceDiv = event.currentTarget;
        const container = serviceDiv.parentElement;

        if (container) {
            const serviceRect = serviceDiv.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const topOffset = serviceRect.top - containerRect.top + serviceRect.height / 2;
            setImagePosition(topOffset);
        }
    };

    return (
        <section id="services" className="relative bg-secondary py-20 md:py-40">
            {/* Top-left Badge */}
            {servicesData && (
                <div className="absolute top-6 left-6 flex items-center gap-4 md:gap-8">
                    <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                        {servicesData?.number}
                    </span>
                </div>
            )}

            <div className="flex flex-col gap-24 relative z-10">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl text-white">{servicesData?.heading}</h2>
                                    <p className="max-w-2xl text-white/70">{servicesData?.description}</p>
                                </div>
                            </div>
                        </div>
{/* 
                        <div className="flex flex-col md:flex-row relative gap-10 2xl:gap-56">
                            <div className="w-full flex flex-col gap-16">
                                <div>
                                    {servicesData?.data.map((value: any, index: any) => (
                                        <div
                                            key={index}
                                            onMouseEnter={(e) => handleMouseEnter(index, e)}
                                            className="group py-6 xl:py-10 border-t border-white/12 cursor-pointer flex xl:flex-row flex-col xl:items-center items-start justify-between xl:gap-10 gap-1 relative"
                                        >
                                            <h3 className="text-white group-hover:text-primary 2xl:w-full 2xl:max-w-sm py-1">
                                                {value.heading}
                                            </h3>
                                            {activeIndex === index && (
                                                <p className="text-white/70 text-base transition-all duration-300 flex-1">
                                                    {value.descp}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <Link href="/projects" className="group flex gap-4 items-center w-fit bg-primary border border-primary hover:border hover:border-white/30 hover:bg-secondary rounded-full transition-all duration-200 ease-in-out">
                                        <span className="pl-6 text-lg font-bold text-secondary group-hover:text-white group-hover:translate-x-12 transform transition-transform duration-200 ease-in-out">See our Work</span>
                                        <svg className="py-1 group-hover:-translate-x-37 group-hover:rotate-45 transition-all duration-200 ease-in-out" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1_873)">
                                                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                                                <path d="M24 23H34M34 23V33M34 23L24 33" stroke="#1F2A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_1_873" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="1" />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_873" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_873" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative w-full md:max-w-sm">
                                <div
                                    className={`relative md:absolute md:right-0 xl:left-0 transition-all duration-300 z-10 h-80`}
                                    style={isMdScreen ? { top: `${imagePosition}px`, transform: "translateY(-40%)" } : {}}
                                >
                                    {servicesData?.data[activeIndex]?.image && (
                                        <Image
                                            src={servicesData?.data[activeIndex]?.image}
                                            alt="Service Image"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
