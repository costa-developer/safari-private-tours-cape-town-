"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const AboutusFullimg = () => {
     const [servicesData, setServicesData] = useState<any>(null);
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('/api/page-data')
                    if (!res.ok) throw new Error('Failed to fetch')
                    const data = await res.json()
                    setServicesData(data?.servicesSliderData)
                } catch (error) {
                    console.error('Error fetching services:', error)
                }
            }
            fetchData()
        }, [])
    return (
        <section>
            <div className="w-full h-50vh lg:h-80vh">
                <Image
                    src={"/images/about-us/image-section/full-w-image.png"}
                    alt="Image"
                    width={1800}
                    height={800}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-primary flex">
                <Marquee autoFill={true}>
                {servicesData?.map((value:any, index:any) => {
                    return (
                        <div key={index} className="flex items-center py-6 gap-6 pr-6 md:pr-10 md:gap-10">
                            <h4 className="dark:text-secondary">{value}</h4>
                            <div className="w-2.5 h-2.5 bg-secondary/12  rounded-full" />
                        </div>
                    )
                })}
                </Marquee>
            </div>
        </section>
    )
}

export default AboutusFullimg