import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Zim Roman Catholic Church Cape Town",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="About Us"
                desc="As a community of Catholic immigrants from Zimbabwe within the Archdiocese of Cape Town, 
                      we strive to be faithful disciples of Christ. We seek to live out our faith through our words 
                      and actions, sharing the Gospel with others and witnessing to the love of God."
            />
            
            <AboutusDetail>
                <p>
                    We embrace unity with the local Church and society, while cherishing our Zimbabwean heritage 
                    and its unique contributions. We support and encourage one another in our faith journeys, 
                    fostering a welcoming and inclusive community that reflects the love and mercy of Christ. 
                    Through prayer and shared experiences, we strive to strengthen our faith and contribute to the 
                    vibrant Christian life within the Archdiocese.
                </p>
            </AboutusDetail>

            <AboutusStats/>
            <AboutusFullimg/>
            <Team teamdataNumber="01"/>
        </main>
    );
};
