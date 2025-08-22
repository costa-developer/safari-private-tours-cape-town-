import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Zim Roman Catholic Church Cape Town",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/blog/banner/blog_banner.png"
                heading="Church Blog"
                desc="Stay inspired and informed with our <span>latest reflections, events, and faith stories</span> from the Zimbabwean Roman Catholic community in Cape Town." 
            />    
            <BlogList/>
        </main>
    );
};
