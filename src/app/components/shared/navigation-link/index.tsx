import Link from "next/link";

const NavigationLink = (props: { navigationTitle: string, navigationLink: string , transform: boolean }) => {
    const { navigationTitle, navigationLink ,transform } = props;
    

    return (
        <>
            <Link href={navigationLink} className="group flex gap-4 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-200 ease-in-out">
                <span className="pl-8 text-lg font-bold text-white group-hover:text-white group-hover:translate-x-10 transform transition-transform duration-200 ease-in-out">{navigationTitle}</span>
                <svg className={` py-1 ${transform === true ? "group-hover:-translate-x-36 group-hover:rotate-45" : ""} transition-all duration-200 ease-in-out `} width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_873)">
                        <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                        <path d="M24 23H34M34 23V33M34 23L24 33" stroke="#1F2A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_873" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_873" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_873" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Link>
        </>
    );
};

export default NavigationLink;
