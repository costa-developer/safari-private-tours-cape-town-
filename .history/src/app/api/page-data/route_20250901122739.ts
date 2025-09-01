import { NextResponse } from "next/server";

const avatarList = [
  { image: "/images/avatar/avatar_1.jpg", title: "Sarah Johnson" },
  { image: "/images/avatar/avatar_2.jpg", title: "Olivia Miller" },
  { image: "/images/avatar/avatar_3.jpg", title: "Sophia Roberts" },
  { image: "/images/avatar/avatar_4.jpg", title: "Isabella Clark" },
];

const statsFactData = {
  number: '02',
  name: "Global Recognition",
  heading: "Cape Town Tourism: A World-Class Success Story",
  description: "As the reigning 'Best City in the World' (Time Out, 2025), Cape Town is more than a destination—it’s a global icon. With record-breaking visitor numbers and thriving cultural attractions, the Mother City continues to shine as one of the world’s leading travel hubs.",
  scoreData: [
    { number: 4.7, numberValue: 'M+', scoreDescp: "Annual visitors exploring Cape Town’s natural and cultural wonders" },
    { number: 1, scoreDescp: "Voted the #1 'Best City in the World' by Time Out in 2025" },
    { number: 948, numberValue: 'K+', scoreDescp: "Tourists visiting Table Mountain each year" },
    { number: 106, numberValue: 'K+', scoreDescp: "Jobs supported by the local tourism industry" },
  ],
};

const ToursData = { 
  number: '01',
  heading: "Our Iconic Destinations",
  description: "Join our guided tours and explore Cape Town’s top attractions—from Table Mountain and Robben Island to wine estates, vibrant markets, and beautiful beaches. Experience the Mother City like never before.",
};

const testimonialData = {
  data_1: {
    preTitle: "Traveler Stories",
    title: "Our Cape Point tour was unforgettable. The guides were knowledgeable and the scenery was breathtaking.",
    author: "Callister",
    company: "Visitor from UK",
  },
  data_2: {
    preTitle: "Traveler Stories",
    title: "From the Winelands to Table Mountain, every experience was perfectly organized and full of adventure.",
    author: "Warren",
    company: "Visitor from USA",
  },
  data_3: {
    preTitle: "Traveler Stories",
    title: "Professional, friendly, and seamless tours. We felt safe, engaged, and inspired throughout our trip.",
    author: "Xavier",
    company: "Cape Archives Tours",
  },
};

const teamData = {
  number: '05',
  data: [
    {
      image: "/images/home/team/tendai.jpg",
      name: "Tendai",
      position: "Lead Tour Guide",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "Nomsa",
      position: "Wine Tour Specialist",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "David",
      position: "Adventure Guide",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
    {
      image: "/images/home/team/tendai.jpg",
      name: "Lerato",
      position: "Cultural Tour Coordinator",
      socialLinks: [
        { icon: "/images/socialIcon/linkedin.svg", link: "https://linkedin.com" },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "City Explorer",
      planPrice: "R850",
      planDescp: "Perfect for first-time visitors wanting to experience Cape Town’s highlights in a single day.",
      planIncludes: [
        "Half-day guided city tour",
        "Visit Table Mountain (ticket excluded)",
        "Bo-Kaap cultural walk",
        "Company Gardens & Castle of Good Hope",
        "Transport included",
      ],
    },
    {
      planName: "Cape Adventure",
      tag: "Most popular",
      planPrice: "R1,850",
      cancelPrice: "R2,200",
      planDescp: "Ideal for adventurers wanting nature, culture, and iconic landmarks in one package.",
      planIncludes: [
        "Full-day Cape Peninsula tour",
        "Cape Point & Cape of Good Hope",
        "Boulders Beach penguin colony",
        "Chapman’s Peak scenic drive",
        "Transport & bottled water included",
      ],
    },
    {
      planName: "Winelands Luxury",
      planPrice: "R3,200",
      planDescp: "A premium wine-tasting and gourmet dining experience in Stellenbosch & Franschhoek.",
      planIncludes: [
        "Private driver-guide",
        "Visits to 3 award-winning estates",
        "Wine & cheese pairing",
        "Lunch in Franschhoek",
        "Luxury transport",
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
      faq_que: "What is included in your Cape Peninsula Tour?",
      faq_ans: "The full-day Cape Peninsula Tour includes visits to Cape Point, the Cape of Good Hope, Boulders Beach penguins, Chapman’s Peak, and more. Transport and guide are included."
    },
    {
      faq_que: "Do you offer private tours?",
      faq_ans: "Yes, we offer customizable private tours tailored to your group’s interests and schedule."
    },
    {
      faq_que: "Are tickets to attractions included?",
      faq_ans: "Most entry tickets (such as Table Mountain cable car or Robben Island ferry) are not included, but we assist with bookings."
    },
    {
      faq_que: "Do your tours include meals?",
      faq_ans: "Some tours include meals, such as our Winelands packages. For others, we stop at recommended restaurants or provide time to explore local dining."
    },
    {
      faq_que: "How do I book a tour?",
      faq_ans: "You can book directly on our website, through email, or by calling our office. Payments are secure and confirmations are sent instantly."
    },
  ],
};

const contactData = {
  keypoint: ["24/7 Customer Support", "Guided Tours Across Cape Town"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Tour Operations Manager",
  },
};

const aboutusStats = [
  {
    number: 2025,
    postfix: "",
    title: "Cape Town’s Year",
    descp: "Voted the World’s Best City to Visit in 2025 by Time Out magazine.",
  },
  {
    number: 4.7,
    postfix: "M+",
    title: "Happy Travelers",
    descp: "Visitors welcomed annually to Cape Town’s breathtaking landmarks and attractions.",
  },
  {
    number: 300,
    postfix: "+",
    title: "Unique Experiences",
    descp: "From wine tours and safaris to city walks and shark diving, Cape Town offers unforgettable adventures.",
  },
];

const servicesSliderData = [
  "Table Mountain & City Tours",
  "Cape Point & Peninsula Tours",
  "Stellenbosch & Franschhoek Winelands",
  "Robben Island Heritage Tour",
  "Adventure Activities (Shark Diving, Paragliding)",
  "Beaches & Coastal Getaways",
  "Cultural & Township Experiences",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    ToursData,
    testimonialData,
    teamData,
    pricingData,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
