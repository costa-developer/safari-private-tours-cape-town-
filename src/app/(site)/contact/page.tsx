import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Studiova",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Contact"
                desc="Ready to <span>start something</span> great? Reach out  we’d love to hear from you." />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
