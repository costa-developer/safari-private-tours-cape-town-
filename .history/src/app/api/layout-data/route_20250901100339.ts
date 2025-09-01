import { NextResponse } from "next/server";

const menuData = [
  { title: "Home", path: "/", newTab: false },
  { title: "About", path: "/about", newTab: false },
  { title: "Ministries & Guides", path: "/#ministries", newTab: false },
  { title: "Events", path: "/#events", newTab: false },
  { title: "Community Stories", path: "/#stories", newTab: false },
  { title: "Blog", path: "/blog", newTab: false },
  { title: "Contact", path: "/contact", newTab: false },
];

const footerData = {
  name: "Zimbabwean Catholic Community Cape Town",
  tagline: "Faith, Fellowship, and Spiritual Growth",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "info@zimromact.co.za",
      href: "mailto:info@zimromact.co.za",
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Cape Town, South Africa",
      href: "https://maps.app.goo.gl/YourLocationLink",
    },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ministries & Guides", href: "/#ministries" },
    { name: "Events", href: "/#events" },
    { name: "Community Stories", href: "/#stories" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
  socialLinks: [
    {
      name: "Facebook",
      href: "https://web.facebook.com/ZimRomaCT?_rdc=1&_rdr#",
    },
    { name: "Youtube", href: "https://www.youtube.com/@ZimRomaCT" },
  ],
  copyright: "© Zimbabwean Catholic Community Cape Town 2025",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    menuData,
  });
};
