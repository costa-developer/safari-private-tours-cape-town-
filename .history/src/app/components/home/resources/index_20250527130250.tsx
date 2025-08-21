
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
    title: string;
    slug: string;
    date: string;
    coverImage: string;
};
const Resources = () => {
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        fetch("/api/blog")
            .then((res) => res.json())
            .then((data) => setblogs(data.slice(0, 3)));
    }, []);

    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">09</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">Resources</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">Recent news</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">Explore the latest trends, bold projects, and creative insights from our agency—shaping the future of branding, digital experiences, and storytelling.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7">
                                {blogs.map((value, index) => {
                                    const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    });
                                    return (
                                        <Link href={`/blog/${value.slug}`} key={index} className={`group flex flex-col gap-5 ${index === 0 ? 'sm:col-span-2' : ''}`}>
                                            <div className="group flex flex-col gap-5">
                                                <div className="w-full h-450px overflow-hidden group">
                                                    <Image
                                                        src={value.coverImage}
                                                        alt="image"
                                                        width={805}
                                                        height={450}
                                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-secondary/70 dark:text-white/70">{formattedDate}</span>
                                                    <h4>{value.title}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;
