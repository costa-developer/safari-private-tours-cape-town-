import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Tours & Experiences",
    path: "/#tours",
    newTab: false,
  },
  {
    id: 4,
    title: "Destinations",
    path: "/#destinations",
    newTab: false,
  },
  {
    id: 5,
    title: "Travel Stories",
    path: "/#stories",
    newTab: false,
  },
  {
    id: 6,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
    name: "Wilderness Cape Town Tours",
    tagline: "Experience the Beauty, Culture, and Adventure of Cape Town",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@wildernesscapetown.co.za",
            href: "mailto:info@wildernesscapetown.co.za"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Cape Town, South Africa",
            href: "https://maps.app.goo.gl/YourLocationLink"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tours & Experiences", href: "/#tours" },
        { name: "Destinations", href: "/#destinations" },
        { name: "Travel Stories", href: "/#stories" },
        { name: "Blog", href: "/blog" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/WildernessCapeTownTours" },
        { name: "Youtube", href: "https://www.youtube.com/@WildernessCapeTownTours" },
    ],
    copyright: "© Safari Private Tours Cape Town Tours 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};
