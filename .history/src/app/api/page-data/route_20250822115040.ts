import { NextResponse } from "next/server";

const avatarList = [
  { image: "/images/avatar/avatar_1.jpg", title: "Sarah Johnson" },
  { image: "/images/avatar/avatar_2.jpg", title: "Olivia Miller" },
  { image: "/images/avatar/avatar_3.jpg", title: "Sophia Roberts" },
  { image: "/images/avatar/avatar_4.jpg", title: "Isabella Clark" },
];

const statsFactData = {
  number: '02',
  name: "Stats & Facts",
  heading: "Connecting Roman Catholics from Zimbabwe in Cape Town",
  description: "We are a vibrant community of Zimbabwean Catholics living in Cape Town, dedicated to nurturing faith, preserving our cultural heritage, and fostering fellowship. Through Masses, spiritual workshops, cultural events, and outreach programs, we strive to support one another and strengthen our bond as a faith-based community.",
  scoreData: [
    { number: 500, numberValue: '+', scoreDescp: "Community members actively participating in church activities" },
    { number: 20, scoreDescp: "Parishes and community groups serving Zimbabwean Catholics" },
    { number: 50, numberValue: '+', scoreDescp: "Spiritual workshops, events, and outreach programs held annually" },
    { number: 15, numberValue: '+', scoreDescp: "Volunteer and charity initiatives supporting local communities" },
  ],
};



const UpcomingEventsData = { 
  number: '01',
  heading: "Our Community Events",
  description: "We bring Zimbabwean Catholics in Cape Town together through Mass, prayer, cultural celebrations, youth programs, and outreach activities. Join us in worship and fellowship to strengthen our faith and heritage.",
};


const testimonialData = {
  data_1: {
    preTitle: "Hear from our clients",
    title: "DigitalizeIQ transformed our website into a high-performing, modern platform. They captured our vision perfectly and exceeded expectations.",
    author: "Callister",
    company: "Beatrice Guest House",
  },
  data_2: {
    preTitle: "Hear from our clients",
    title: "From concept to launch, the team delivered with precision, creativity, and professionalism. Truly an outstanding experience.",
    author: "Warren",
    company: "Sky Global Education",
  },
  data_3: {
    preTitle: "Hear from our clients",
    title: "The entire process was smooth, collaborative, and efficient—resulting in a website that’s both beautiful and effective.",
    author: "Xavier",
    company: "Cape Archives Tours",
  },
};


const teamData = {
  number: '05',
  data: [
    {
      image: "/images/home/team/team-img-1.png",
      name: "Hillary",
      position: "Creative Director",
      socialLinks: [
        { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
        { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/team-img-2.png",
      name: "Hillary",
      position: "Marketing Strategist",
      socialLinks: [
        { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
        { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/team-img-3.png",
      name: "Hillary",
      position: "Lead Designer",
      socialLinks: [
        { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
        { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/team-img-4.png",
      name: "Hillary",
      position: "UX/UI Developer",
      socialLinks: [
        { icon: "/images/socialIcon/twitter.svg", link: "https://twitter.com" },
        { icon: "/images/socialIcon/Be.svg", link: "https://www.behance.net/" },
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Starter",
      planPrice: "R8,500",
      planDescp: "Perfect for small businesses or individuals needing a professional online presence.",
      planIncludes: [
        "Custom 5-page responsive website",
        "Basic SEO setup for visibility",
        "Social media linking",
        "Standard contact form integration",
        "One month of technical support",
      ],
    },
    {
      planName: "Growth",
      tag: "Most popular",
      planPrice: "R18,500",
      cancelPrice: "R22,000",
      planDescp: "Ideal for growing brands wanting strong digital marketing and online reach.",
      planIncludes: [
        "Everything in Starter Plan",
        "Up to 12-page custom design",
        "SEO optimisation for all key pages",
        "Social media marketing campaign (1 month)",
        "Google Ads setup & tracking",
        "Two months of technical support",
      ],
    },
    {
      planName: "Enterprise",
      planPrice: "R32,000",
      planDescp: "Comprehensive web, marketing, and cyber security solution for established brands.",
      planIncludes: [
        "Everything in Growth Plan",
        "E-commerce functionality (if required)",
        "Advanced analytics and reporting",
        "Cyber Security training for your team",
        "Branded email template design",
        "Priority support for six months",
      ],
    },
  ],
  partnerLogo: [
    { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
    { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
    { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
    { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
    { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "When is the Community Mass held?",
      faq_ans: "Community Mass is held on the first Sunday of every month at 12:00 noon. All Zimbabwean Catholics in Cape Town are welcome to join and participate in prayer and fellowship."
    },
    {
      faq_que: "What is the House Mass?",
      faq_ans: "House Mass takes place on the third Saturday of each month at 14:00. These smaller gatherings allow for more intimate prayer, reflection, and community bonding."
    },
    {
      faq_que: "How can I get involved with community ministries?",
      faq_ans: "We encourage all members to join our ministries and volunteer groups. You can participate in youth outreach, choir, charitable projects, and event organization. Contact us via our website or parish office to get started."
    },
    {
      faq_que: "Are there special events throughout the year?",
      faq_ans: "Yes. We celebrate cultural festivals, religious feasts, youth gatherings, and outreach programs. All events are announced on our calendar, and members can RSVP or add them to their personal calendars."
    },
    {
      faq_que: "Can I share my own testimony or story?",
      faq_ans: "Absolutely! We welcome members to share their experiences, success stories, and testimonials. Submissions can include text, photos, or videos from parish activities and community events."
    },
  ],
};



const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};

const aboutusStats = [
  {
    number: 100,
    postfix: "+",
    title: "Years of Ministry",
    descp: "Serving the Zimbabwean Catholic community in Cape Town with faith, fellowship, and spiritual growth.",
  },
  {
    number: 500,
    postfix: "+",
    title: "Active Members",
    descp: "A welcoming and diverse congregation of Zimbabwean Catholics participating in worship and community events.",
  },
  {
    number: 25,
    postfix: "+",
    title: "Community Events",
    descp: "Organizing regular gatherings, prayer meetings, and cultural celebrations to strengthen our faith and unity.",
  },
];


const servicesSliderData = [
  "Custom Websites",
  "SEO & SEM",
  "Social Media Marketing",
  "Cyber Security Awareness",
  "Web Applications",
  "Content Strategy",
  "Team Cyber Training",
];


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    UpcomingEventsData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
