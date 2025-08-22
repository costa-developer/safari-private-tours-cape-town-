import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Zim Roman Catholic Church Cape Town",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Get in Touch"
                desc="Have questions, prayer requests, or want to join our community? <span>Reach out to us</span>—we’d love to hear from you and welcome you to our parish." 
            />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
