import { getAllBlogs } from "@/lib/blogmarkdown";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
    type Blog = {
        title: string;
        slug: string;
        date: string;
        coverImage: string;
    };

    const Blogs: Blog[] = getAllBlogs(["title", "slug", "coverImage", "date"]);

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {Blogs.map((value, index) => {

                            const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            });

                            return (

                                <Link href={`/blog/${value.slug}`} key={index} className="group flex flex-col gap-3">
                                    <div className="group flex flex-col gap-5">
                                        <div className="w-full h-35 overflow-hidden group">
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
