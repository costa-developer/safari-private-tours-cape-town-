
"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";

function Testimonial() {
    const [testimonialData, setTestimonialData] = useState<any>(null);
    useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch('/api/page-data')
              if (!res.ok) throw new Error('Failed to fetch')
              const data = await res.json()        
              setTestimonialData(data?.testimonialData)
            } catch (error) {
              console.error('Error fetching services:', error)
            }
          }
          fetchData()
        }, [])
        
    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">05</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12"/>
                                <p className="section-bedge py-1.5 px-4 rounded-full">Testimonial</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">Stories from clients</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
                            <div className="bg-primary p-4 lg:p-7 flex flex-col gap-32">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-secondary/70">{testimonialData?.data_1?.preTitle}</p>
                                    <h4 className="dark:text-secondary">{testimonialData?.data_1?.title}</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={"/images/testimonial/testimonial_1.png"} alt="Image" width={60} height={60} className="rounded-full" />
                                    <div>
                                        <p className="dark:text-secondary">{testimonialData?.data_1?.author}</p>
                                        <p className="text-secondary/70 text-base font-normal">{testimonialData?.data_1?.company}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-2 bg-secondary dark:bg-lightgray/10 p-4 lg:p-7 flex flex-col justify-between gap-14">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-white/70">{testimonialData?.data_2?.preTitle}</p>
                                    <h4 className="text-white">{testimonialData?.data_2?.title}</h4>
                                    <div className="flex items-center gap-2.5">
                                        <StarRating count={4.5} color='#FFFFFF' />
                                        <span className="text-base text-white">4.5</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Image src={"/images/testimonial/testimonial_2.png"} alt="Image" width={60} height={60} className="rounded-full" />
                                        <div>
                                            <p className="text-white">{testimonialData?.data_2?.author}</p>
                                            <p className="text-white/70 text-base font-normal">{testimonialData?.data_2?.company}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={"/images/testimonial/comma_vector.svg"} alt="comma" width={45} height={45}/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-black/20 p-4 lg:p-7 flex flex-col justify-between gap-32">
                                <div className="flex flex-col gap-6">
                                    <p className="text-base text-secondary/70 dark:text-white/70">{testimonialData?.data_3?.preTitle}</p>
                                    <h4>{testimonialData?.data_3?.title}</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={"/images/testimonial/testimonial_3.png"} alt="Image" width={60} height={60} className="rounded-full" />
                                    <div>
                                        <p>{testimonialData?.data_3?.author}</p>
                                        <p className="text-secondary/70 dark:text-white/70 text-base font-normal">{testimonialData?.data_3?.company}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
