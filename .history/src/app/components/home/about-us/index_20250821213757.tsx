import React from 'react'; // Assuming this is a React component
import Image from 'next/image'; // Assuming you use Next.js Image component
import Link from 'next/link'; // Assuming you use Next.js Link component

// Assuming this is part of a larger component, like a Services or About section
function DigitalizeIQSection() {
    return (
        <section className="bg-white dark:bg-black py-20">
            <div className="container mx-auto px-4">
                {/* --- HEADER BLOCK (MOVED TO TOP) --- */}
                {/* This block contains the heading and description */}
                <div className="flex flex-col gap-5 2xl:gap-7 w-full 2xl:max-w-2xl 2xl:w-full mb-10 mx-auto text-center">
                    <h2 className="2xl:max-w-3xl text-secondary dark:text-white mx-auto">Why DigitalizeIQ?</h2>
                    <p className="2xl:max-w-sm text-secondary/70 dark:text-white/70 mx-auto">
                        At DigitalizeIQ, we blend innovation with strategic execution to craft digital experiences that engage, inspire, and deliver measurable growth. 
                        Every solution is tailored to your vision with meticulous attention to detail and a passion for excellence.
                    </p>
                </div>
                {/* --- END HEADER BLOCK --- */}

                {/* --- CARDS BLOCK --- */}
                {/* This is the container for all the service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* --- CARD 1 --- */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Card Title 1</h3>
                            <p className="text-secondary/70 dark:text-white/70">Card description 1.</p>
                        </div>
                    </div>
                    {/* --- CARD 2 --- */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Card Title 2</h3>
                            <p className="text-secondary/70 dark:text-white/70">Card description 2.</p>
                        </div>
                    </div>
                    {/* --- CARD 3 --- */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-secondary dark:text-white">Card Title 3</h3>
                            <p className="text-secondary/70 dark:text-white/70">Card description 3.</p>
                        </div>
                    </div>
                    {/* Add more cards as needed */}
                </div>
                {/* --- END CARDS BLOCK --- */}
            </div>
        </section>
    );
}

export default DigitalizeIQSection;