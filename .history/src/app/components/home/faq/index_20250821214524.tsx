"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";

function Faq() {
    const [faqData, setFaqData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFaqData(data?.faqData)
            } catch (error) {
                console.error('Error fetching FAQ data:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="relative bg-white dark:bg-darkblack py-20 md:py-40 flex justify-center">
            {/* Top-left Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-4 md:gap-8">
                <span className="bg-primary dark:text-white py-1.5 px-2.5 text-white font-medium rounded-full">06</span>
            </div>

            {/* Centered FAQ Content */}
            <div className="flex flex-col gap-12 w-full max-w-5xl items-center relative z-10">
                <div className="text-center flex flex-col gap-5">
                    <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-secondary/70 dark:text-white/70 max-w-2xl mx-auto">
                        Find answers to common questions about the Zimbabwean Catholic community in Cape Town. Learn about our ministries, events, Mass schedules, volunteering opportunities, and how to participate in community activities.
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex flex-col w-full gap-4">
                    {faqData?.data?.map((item:any, index:any) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                <h4>{item.faq_que}</h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>{item.faq_ans}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;
