import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="flex items-center gap-2.5">
        <Link href={"https://getnextjstemplates.com/products/endeavor-pro-nextjs-charity-website-template"} target="_blank" className="hidden lg:block text-sm bg-primary hover:bg-primary/70 text-secondary font-semibold px-4 py-3.5 leading-none rounded-lg duration-300 text-nowrap">
          Get This Template
        </Link>
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex cursor-pointer items-center justify-center transition duration-300 ease-in-out"
          >
            <Image src={"/images/Icon/up-arrow.svg"} alt="Images" width={55} height={55} />
          </div>
        )}
      </div>
    </div>
  );
}
