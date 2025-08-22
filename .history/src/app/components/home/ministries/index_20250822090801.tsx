"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";

function MinistriesGuides() {
    const [avatarList, setAvatarList] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setAvatarList(data?.avatarList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="py-20 md:py-40 dark:bg-darkblack">
            <div className="container">
                <div className="flex flex-col 2xl:flex-col gap-10 2xl:gap-28">
                    {/* Centered Heading and Text */}
                    <div className="flex flex-col gap-5 2xl:gap-7 w-full 2xl:max-w-2xl 2xl:w-full mx-auto text-center items-center">
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <h2 className="2xl:max-w-3xl text-secondary dark:text-white">Our Ministries & Guides</h2>
                            <p className="5xl:max-w-sm text-secondary/70 dark:text-white/70">
                                Explore the vibrant ministries of our Zimbabwean Catholic community in Cape Town. 
                                From youth groups and choirs to outreach programs, discover how you can participate, grow spiritually, 
                                and serve alongside fellow parishioners.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 2xl:gap-7">
                        {/* Ministry Highlight Card */}
                        <div className="relative bg-primary p-4 2xl:p-7 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10 flex flex-col gap-2 lg:gap-4">
                                <div>
                                    <StarRating count={5} color='#fff' />
                                </div>
                                <p className="dark:text-white text-white">
                                    Our Youth Ministry fosters spiritual growth, fellowship, and service among the younger members of our community.
                                </p>
                            </div>
                            <div className="relative z-10">
                                <div className="relative border-b border-secondary/12 pb-5">
                                    <h2 className="dark:text-white text-white">500+</h2>
                                    <p className="text-base text-white">Active Youth Participants</p>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-5 pt-5">
                                    <Image src={"/images/home/aboutusIndex/avatar.svg"} alt="Youth" width={64} height={64} />
                                    <div>
                                        <p className="font-medium text-white">Youth Leaders</p>
                                        <p className="text-base text-white">Guiding and inspiring the youth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <Image src={"/images/home/aboutusIndex/bg-ellipse.svg"} alt="background" width={100} height={200} />
                            </div>
                        </div>

                        {/* Ministry Image / Visual Card */}
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <div className="w-full h-full">
                                <Image src={"/images/home/services/services_2.jpg"} alt="Choir & Music Ministry" width={340} height={215} style={{ width: '100%', height:'100%' }} />
                            </div>
                            <div className="bg-secondary dark:bg-lightgray/10 p-5 2xl:p-7 flex flex-col justify-between gap-8">
                                <div>
                                    <h2 className="text-white">50+</h2>
                                    <p className="text-base text-white/70">Choir & Music Ministry Members</p>
                                </div>
                                <div>
                                    <ul className='avatar flex flex-row items-center'>
                                        {avatarList?.map((items:any, index:any) => (
                                            <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                                                <Image src={items.image} alt='Member' width={44} height={44} quality={100} className='rounded-full border-2 border-secondary' />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Outreach & Guides Card */}
                        <div className="relative overflow-hidden p-5 2xl:p-7 border border-secondary/12 dark:border-white/30 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10">
                                <h2>20+</h2>
                                <p>Outreach Programs & Guides</p>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10">
                                <h1 className="text-black text-lg">Community Service</h1>
                                <p>
                                    Our outreach initiatives and guides connect members, support those in need, and help preserve the traditions of Zimbabwean Catholics in Cape Town.
                                </p>
                            </div>
                            <div className="absolute -top-72 right-0 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                            <div className="absolute -bottom-36 -right-14 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MinistriesGuides;
