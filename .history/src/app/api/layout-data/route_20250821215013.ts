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
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];

const footerData = {
    name: "DigitalizeIQ",
    tagline: "Empowering Your Digital Growth",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@digitalizeiq.co.za",
            href: "mailto:info@digitalizeiq.co.za"
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
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/projects" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "404 Page", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/DigitalizeIQ" },
        { name: "Instagram", href: "https://www.instagram.com/DigitalizeIQ" },
        { name: "Twitter", href: "https://twitter.com/DigitalizeIQ" }
    ],
    copyright: "© DigitalizeIQ 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};
