import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Cape Town Tours & Experiences",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/blog/banner/blog_banner.jpg"
                heading="Travel Blog"
                desc="Stay inspired and informed with our <span>latest insights, tips, and stories</span> from unforgettable Cape Town tours and experiences." 
            />    
            <BlogList/>
        </main>
    );
};
