"use client";
import { useEffect, useState } from "react";
import { Carousel, Card } from "../../ui/apple-cards-carousel";

function CalenderEvents() {
  const [upcomingEventsData, setUpcomingEventsData] = useState<any>(null);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUpcomingEventsData(data?.UpcomingEventsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="relative bg-secondary py-20 md:py-40">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          {upcomingEventsData?.heading}
        </h2>
        <p className="text-white/70 mb-10">
          {upcomingEventsData?.description}
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

export default CalenderEvents;



interface DummyContentProps {
  title: string;
  description: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, description }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src="https://assets.aceternity.com/macbook.png"
        alt="Chatbot demo"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};


const data = [
  {
    category: "Lead Generation",
    title: "Convert Visitors into Qualified Leads",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
    content: (
      <DummyContent
        title="24/7 Lead Capture"
        description="Engage website visitors instantly, qualify leads automatically, and route them directly to your sales team – even outside business hours."
      />
    ),
  },
  {
    category: "Customer Support",
    title: "Provide Instant Customer Support",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Faster Resolutions"
        description="Answer FAQs, resolve issues, and escalate complex queries to your team seamlessly – improving satisfaction while reducing support costs."
      />
    ),
  },
  {
    category: "E-Commerce",
    title: "Boost Online Sales",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Personalized Shopping"
        description="Recommend products, guide purchases, and upsell with personalized conversations that drive higher conversions."
      />
    ),
  },
  {
    category: "Appointments",
    title: "Simplify Appointment Bookings",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Automated Scheduling"
        description="Let customers schedule calls, consultations, or demos directly through the chatbot – synced with your calendar in real time."
      />
    ),
  },
  {
    category: "Analytics",
    title: "Gain Actionable Insights",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Smarter Sales Decisions"
        description="Track conversations, measure engagement, and analyze customer intent to refine your sales and marketing strategies."
      />
    ),
  },
  {
    category: "Multi-Channel",
    title: "Engage Customers Anywhere",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop",
    content: (
      <DummyContent
        title="Omnichannel Experience"
        description="Connect with customers on your website, WhatsApp, Messenger, and more – all through one AI-powered chatbot."
      />
    ),
  },
];
