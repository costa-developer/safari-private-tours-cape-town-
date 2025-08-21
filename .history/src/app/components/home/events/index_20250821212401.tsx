"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { getDay, parse, format } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({ format, parse, startOfWeek: () => new Date(), getDay, locales });

function CalenderEvents() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imagePosition, setImagePosition] = useState<number>(0);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [upcomingEventsData, setUpcomingEventsData] = useState<any>(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMdScreen(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUpcomingEventsData(data?.UpcomingEventsData);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }
    fetchData();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setActiveIndex(index);
    const serviceDiv = event.currentTarget;
    const container = serviceDiv.parentElement;
    if (container) {
      const serviceRect = serviceDiv.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const topOffset = serviceRect.top - containerRect.top + serviceRect.height / 2;
      setImagePosition(topOffset);
    }
  };

  // --- Calendar Helpers ---
  const today = new Date();
  const year = today.getFullYear();

  const getFirstSunday = (year: number, month: number) => {
    let date = new Date(year, month, 1);
    while (date.getDay() !== 0) date.setDate(date.getDate() + 1);
    return date;
  };

  const getThirdSaturday = (year: number, month: number) => {
    let date = new Date(year, month, 1);
    let saturdays = 0;
    while (true) {
      if (date.getDay() === 6) saturdays++;
      if (saturdays === 3) return date;
      date.setDate(date.getDate() + 1);
    }
  };

  const calendarEvents = useMemo(() => {
    const monthsToShow = 6;
    let tempEvents: any[] = [];

    for (let m = today.getMonth(); m < today.getMonth() + monthsToShow; m++) {
      const firstSunday = getFirstSunday(year, m);
      const thirdSaturday = getThirdSaturday(year, m);

      tempEvents.push({
        title: "Community Mass",
        start: new Date(firstSunday.setHours(12, 0)),
        end: new Date(firstSunday.setHours(13, 30)),
        color: "#8B0000",
      });

      tempEvents.push({
        title: "House Mass",
        start: new Date(thirdSaturday.setHours(14, 0)),
        end: new Date(thirdSaturday.setHours(15, 30)),
        color: "#4B0082",
      });
    }

    tempEvents.push({
      title: "Cultural Celebration",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10, 10, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10, 16, 0),
      color: "#006400",
    });

    return tempEvents;
  }, []);

  return (
    <section id="services" className="relative bg-secondary py-20 md:py-40">
      {/* Top-left Badge */}
      {upcomingEventsData && (
        <div className="absolute top-6 left-6 flex items-center gap-4 md:gap-8">
          <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
            {upcomingEventsData?.number}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-24 relative z-10">
        <div className="container">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5">
                  <h2 className="max-w-3xl text-3xl md:text-4xl text-white">
                    {upcomingEventsData?.heading}
                  </h2>
                  <p className="max-w-2xl text-base md:text-lg text-white/70">
                    {upcomingEventsData?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* --- CALENDAR SECTION --- */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mt-10">
              <h3 className="text-3xl md:text-4xl font-serif text-center text-primary mb-8">
                Upcoming Events
              </h3>
              <div className="h-[500px] md:h-[600px] w-full overflow-auto">
                <Calendar
                  localizer={localizer}
                  events={calendarEvents}
                  startAccessor="start"
                  endAccessor="end"
                  views={["month", "week", "day"]}
                  eventPropGetter={(event) => ({
                    style: {
                      backgroundColor: event.color,
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      padding: "4px",
                    },
                  })}
                  onSelectEvent={(event) => alert(`Event: ${event.title}`)}
                />
              </div>
            </div>
            {/* --- END CALENDAR --- */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default CalenderEvents;
