import Herobanner from "@/app/components/shared/hero-banner";
import { getBlogsBySlug } from "@/lib/blogmarkdown";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const blog = getBlogsBySlug(slug, ["title", "detail", "date", "coverImage", "scrolltoread", "description", "galleryImg", "content"]);

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (blog) {
        const metadata = {
            title: `${blog.title || "Single Post Page"} | ${siteName}`,
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
    const blog = getBlogsBySlug(slug, ["title", "detail", "date", "coverImage", "scrolltoread", "description", "galleryImg", "content"]);

    const content = await markdownToHtml(blog.content || "");


    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={blog?.coverImage}
                        heading={blog?.title}
                        desc={blog?.detail}
                        headingClass="blog-heading" />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            <div className="flex flex-col xl:flex xl:flex-row items-start xl:items-center gap-8">
                                <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                                    <h2 className="text-4xl lg:text-5xl xl:text-56">Scroll to read</h2>
                                </div>
                                <p className="text-secondary/70 dark:text-white/70">{blog?.scrolltoread}</p>
                            </div>
                            <div className="w-full h-700px">
                                <Image src={blog?.galleryImg} alt="Image" width={1600} height={750} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-end">
                                {content && (
                                    <div dangerouslySetInnerHTML={{ __html: content }} className="blog-content max-w-6xl"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
