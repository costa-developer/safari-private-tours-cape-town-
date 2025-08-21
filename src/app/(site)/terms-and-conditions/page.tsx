import Herobanner from "@/app/components/shared/hero-banner";
import TermsAndCondition from "@/app/components/terms-and-condition";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Condition | Studiova",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/privacy-policy/privacy-policy.png"
                heading="Terms & Conditions"
                desc="Understand the <span>Rules & Guidelines</span> Before Using Our Services" />
            <TermsAndCondition />
        </main>
    );
};
