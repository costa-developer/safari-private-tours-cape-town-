import { NextResponse } from "next/server";

const avatarList = [
  { image: "/images/avatar/avatar_1.jpg", title: "Sarah Johnson" },
  { image: "/images/avatar/avatar_2.jpg", title: "Olivia Miller" },
  { image: "/images/avatar/avatar_3.jpg", title: "Sophia Roberts" },
  { image: "/images/avatar/avatar_4.jpg", title: "Isabella Clark" },
];

const statsFactData = {
  number: '01',
  name: "Stats & Facts",
  heading: "Connecting Roman Catholics from Zimbabwe in Cape Town",
  description: "We are a vibrant and close-knit community of Zimbabwean Catholics living in Cape Town, dedicated to nurturing our faith, preserving our cultural heritage, and fostering meaningful fellowship. Our community brings together families, youth, and elders to celebrate Mass, participate in spiritual workshops, and engage in cultural and religious events that strengthen our bonds and enrich our spiritual lives. Through outreach programs, volunteer initiatives, and acts of charity, we strive to support one another and contribute positively to the broader Cape Town community. Whether through prayer, education, or cultural celebrations, we aim to provide a home away from home for Zimbabwean Catholics, where every member is welcomed, valued, and encouraged to grow in faith, hope, and love.",
  scoreData: [
    { number: 500, numberValue: '+', scoreDescp: "Community members actively participating in church activities" },
    { number: 20, scoreDescp: "Parishes and community groups serving Zimbabwean Catholics" },
    { number: 50, numberValue: '+', scoreDescp: "Spiritual workshops, events, and outreach programs held annually" },
    { number: 15, numberValue: '+', scoreDescp: "Volunteer and charity initiatives supporting local communities" },
  ],
};




const servicesData = {
  number: '02',
  name: "Services",
  heading: "What we do",
  description: "From building powerful websites to boosting your digital presence, DigitalizeIQ delivers solutions that transform businesses.",
  data: [
    {
      id: 1,
      image: "/images/home/services/services_1.jpg",
      heading: "Web Development",
      descp: "Enterprise-level front and back-end development, covering everything from web applications to database design and deployment."
    },
    {
      id: 2,
      image: "/images/home/services/services_2.jpg",
      heading: "Digital Marketing",
      descp: "Strategic campaigns to grow your brand online, including SEO, social media marketing, and targeted digital advertising."
    },
    {
      id: 3,
      image: "/images/home/services/services_3.jpg",
      heading: "Cyber Security Training",
      descp: "Empowering teams with the knowledge to safeguard digital assets through practical, up-to-date cybersecurity training."
    },
    {
      id: 4,
      image: "/images/home/services/services_4.jpg",
      heading: "Contact Us",
      descp: "Get in touch with our experts to discuss your project and start building your digital success story today."
    },
  ],
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
      faq_que: "What services does DigitalizeIQ offer?",
      faq_ans: "We specialise in Web Development, Digital Marketing, and Cyber Security Training. From building and optimising websites to growing your brand online and equipping your team with essential cyber safety skills, we provide end-to-end digital solutions."
    },
    {
      faq_que: "How long does a typical project take?",
      faq_ans: "Timelines vary depending on the scope. A standard website can take 2–4 weeks, while larger projects with advanced features or marketing campaigns may take 6–8 weeks. We’ll provide a detailed project timeline after our initial consultation."
    },
    {
      faq_que: "Do you create custom designs or use templates?",
      faq_ans: "All our websites are custom-designed to match your brand and business goals. We focus on originality, usability, and performance rather than relying on pre-made templates."
    },
    {
      faq_que: "How much does a project cost?",
      faq_ans: "Our pricing depends on your specific needs and goals. We offer packages starting from R8,500 for smaller projects, with detailed quotes provided after we understand your requirements."
    },
    {
      faq_que: "Do you provide support after project completion?",
      faq_ans: "Yes. We offer post-launch support to ensure everything runs smoothly, along with ongoing maintenance and digital marketing packages for businesses that need regular updates and growth strategies."
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
    number: 45,
    postfix: "+",
    title: "Presence in global markets",
    descp: "Expanding reach across international regions with localized expertise and worldwide impact.",
  },
  {
    number: 15,
    prefix: "$",
    postfix: "M",
    title: "In strategic investments",
    descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives.",
  },
  {
    number: 158,
    postfix: "+",
    title: "Trusted brand collaborations",
    descp: "Shaping industry conversations through innovation, creativity, and lasting influence.",
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
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
