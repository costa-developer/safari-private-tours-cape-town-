"use client";
import { useEffect, useState } from "react";
import { Carousel } from "../../ui/apple-cards-carousel";

function CalenderEvents() {
  const [upcomingEventsData, setUpcomingEventsData] = useState<any>(null);

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
