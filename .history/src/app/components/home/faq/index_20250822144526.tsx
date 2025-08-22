"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";

function Faq() {
    const [faqData, setFaqData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setFaqData(data?.faqData);
            } catch (error) {
                console.error('Error fetching FAQ data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="relative bg-white dark:bg-darkblack py-16 md:py-40 flex justify-center px-4 sm:px-6 lg:px-8">
            {/* Top-left Badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3 md:gap-8">
                {/* <span className="bg-primary dark:text-white py-1 px-2 md:py-1.5 md:px-2.5 text-white font-medium rounded-full text-sm md:text-base">06</span> */}
            </div>

            {/* Centered FAQ Content */}
            <div className="flex flex-col gap-8 md:gap-12 w-full max-w-4xl md:max-w-7xl items-center relative z-10">
                <div className="text-center flex flex-col gap-3 md:gap-5 px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-secondary/70 dark:text-white/70 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
                        Find answers to common questions about the Zimbabwean Catholic community in Cape Town. Learn about our ministries, events, Mass schedules, volunteering opportunities, and how to participate in community activities.
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex flex-col w-full gap-3 sm:gap-4">
                    {faqData?.data?.map((item: any, index: any) => (
                        <AccordionItem key={index} value={`item-${index}`} className="w-full">
                            <AccordionTrigger>
                                <h4 className="text-sm sm:text-base md:text-lg">{item.faq_que}</h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-xs sm:text-sm md:text-base text-secondary/80 dark:text-white/80">{item.faq_ans}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;
