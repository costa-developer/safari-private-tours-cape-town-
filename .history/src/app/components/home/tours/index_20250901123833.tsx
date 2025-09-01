"use client";
import { useEffect, useState } from "react";
import { Carousel, Card } from "../../ui/apple-cards-carousel";

function AllToursData() {
  const [ToursData, setToursData] = useState<any>(null);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} />
  ));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setToursData(data?.ToursData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="relative bg-secondary py-20 md:py-40">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          {ToursData?.heading}
        </h2>
        <p className="text-white/70 mb-10">
          {ToursData?.description}
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

export default AllToursData;



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
    category: "Table Mountain",
    title: "Hike or Cable Car Adventure",
    price: "R350",
    period: "2-3 hours",
    src: "images/tours/a.jpg",
    content: (
      <DummyContent
        title="Iconic Views"
        description="Take in breathtaking panoramic views of Cape Town from the top of Table Mountain, whether you hike up or ride the cable car."
      />
    ),
  },
  {
    category: "Cape Peninsula",
    title: "Cape Point & Penguins",
    price: "R350",
    period: "Half Day",
    src: "images/tours/b.jpg",
    content: (
      <DummyContent
        title="Cape of Good Hope"
        description="Explore the dramatic cliffs of Cape Point, visit Boulders Beach to meet the African penguins, and enjoy one of the world’s most scenic drives."
      />
    ),
  },
  {
    category: "Winelands",
    title: "Stellenbosch & Franschhoek",
    price: "R350",
    period: "Full Day",
    src: "images/tours/c.jpg",
    content: (
      <DummyContent
        title="Wine & Dine"
        description="Sip award-winning wines, indulge in gourmet food pairings, and wander through picturesque vineyards in Cape Town’s world-famous Winelands."
      />
    ),
  },
  {
    category: "Robben Island",
    title: "Heritage & History Tour",
    price: "R350",
    period: "3-4 hours",
    src: "images/tours/a.jpg",
    content: (
      <DummyContent
        title="Nelson Mandela’s Legacy"
        description="Take a ferry to Robben Island, a UNESCO World Heritage Site, and learn about South Africa’s history and Nelson Mandela’s time in prison."
      />
    ),
  },
  {
    category: "Beaches",
    title: "Clifton & Camps Bay",
    price: "R350",
    period: "Half Day",
    src: "images/tours/b.jpg",
    content: (
      <DummyContent
        title="Relax & Unwind"
        description="Spend the day soaking up the sun on Cape Town’s world-class beaches, with soft white sand and turquoise waters framed by the Twelve Apostles mountains."
      />
    ),
  },
  {
    category: "Adventure",
    title: "Shark Cage Diving & More",
    price: "R350",
    period: "Full Day",
    src: "images/tours/c.jpg",
    content: (
      <DummyContent
        title="Thrill Seekers Welcome"
        description="Dive with great white sharks, paraglide over the city, or surf the Atlantic waves – Cape Town is an adventure lover’s paradise."
      />
    ),
  },
];
