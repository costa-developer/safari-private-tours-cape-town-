"use client";
import { useEffect, useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { getDay, parse, format } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": require("date-fns/locale/en-US") };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek: () => new Date(), getDay, locales });

function CalenderEvents() {
  const [upcomingEventsData, setUpcomingEventsData] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // <-- selected event state
  const today = new Date();
  const year = today.getFullYear();

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

  // --- Calendar Helpers ---
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
        description: "Join the community mass for spiritual gathering.",
      });

      tempEvents.push({
        title: "House Mass",
        start: new Date(thirdSaturday.setHours(14, 0)),
        end: new Date(thirdSaturday.setHours(15, 30)),
        color: "#4B0082",
        description: "House mass for smaller gatherings at home.",
      });
    }

    tempEvents.push({
      title: "Cultural Celebration",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10, 10, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10, 16, 0),
      color: "#006400",
      description: "Celebrate cultural diversity with performances and food.",
    });

    return tempEvents;
  }, []);

  return (
    <section className="relative bg-secondary py-20 md:py-40">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-white mb-4">{upcomingEventsData?.heading}</h2>
        <p className="text-white/70 mb-10">{upcomingEventsData?.description}</p>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h3 className="text-3xl md:text-4xl text-center text-primary mb-8">Upcoming Events</h3>
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
              onSelectEvent={(event) => setSelectedEvent(event)} // <-- set selected event
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setSelectedEvent(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.description}</p>
            <p className="text-gray-500">
              {selectedEvent.start.toLocaleString()} - {selectedEvent.end.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CalenderEvents;
