
import Herobanner from "@/app/components/shared/hero-banner";
import { getProjectsBySlug } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const project = getProjectsBySlug(slug, ["title", "ScopeOfWork", "industry", "raised", "website", "description", "coverImage", "gallery", "content"]);

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (project) {
        const metadata = {
            title: `${project.title || "Single Post Page"} | ${siteName}`,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const project = getProjectsBySlug(slug, [
        "title", "ScopeOfWork", "industry", "raised", "website", "description", "coverImage", "gallery", "content"
    ]);

    const content = await markdownToHtml(project.content || "");


    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={project.coverImage}
                        heading={project.title}
                        desc={project.description} />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            <div className="flex flex-col gap-10">
                                <div>
                                    <Link href="/projects" className="group flex gap-3 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-500 ease-in-out">
                                        <Image src={"/images/Icon/back-btn.svg"} alt="Image" width={42} height={42} className="group-hover:translate-x-16.5 transform transition-transform duration-500 ease-in-out" />
                                        <span className="pr-4 text-lg font-bold text-secondary group-hover:text-white group-hover:-translate-x-10 transform transition-transform duration-500 ease-in-out">Back</span>
                                    </Link>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Scope of work</span>
                                        <p className="font-medium">{project.ScopeOfWork.join(", ")}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Industry</span>
                                        <p className="font-medium">{project.industry}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Raised</span>
                                        <p className="font-medium">{project.raised}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Website</span>
                                        <p className="font-medium">{project.website}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                    <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                                        <h2 className="text-4xl lg:text-5xl xl:text-56">Description</h2>
                                    </div>
                                    <div className="flex flex-col gap-11">
                                        <div className="project-descp flex flex-col gap-5">
                                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-8">
                                {project.gallery.map((image: string, index: number) => (
                                    index === 0 ? (
                                        <div key={index} className="col-span-2 ">
                                            <Image src={image} alt="image" width={1600} height={750} className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <div key={index} className="col-span-2 md:col-span-1 ">
                                            <Image src={image} alt="image" width={805} height={750} className="w-full h-full object-cover" />
                                        </div>
                                    )
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
