"use client";

import { FileType } from "lucide-react";
import Image from "next/image";

// TODO: fetch from API instead of hardcoded
// keeping it simple for MVP
const events = [
  {
    id: "1",
    title: "India-Brazil Business Dialogue",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    date: "Oct 16, 2025",
    location: "New Delhi",
  },
  {
    id: "2",
    title: "Global Leadership Summit",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
    date: "Jan 22, 2025",
    location: "Virtual Event",
  },
  {
    id: "3",
    title: "AI & Machine Learning Workshop",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    date: "Feb 5, 2025",
    location: "New York, NY",
  },
  {
    id: "4",
    title: "Sustainable Tech Conference",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    date: "Feb 15, 2025",
    location: "San Francisco, CA",
  },
  {
    id: "5",
    title: "Digital Innovation Forum",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    date: "Mar 10, 2025",
    location: "London, UK",
  },
];

export default function EventHighlights() {
  // TODO: add pagination for events
  // TODO: implement event filtering by date/location
  // BUG: sometimes the image doesn't load on first render, refresh fixes it tho

  const mainEvent = events[0]; // easier to read
  const upcomingEvents = events.slice(1);

  return (
    <section className="px-4 bg-white py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-bold text-2xl uppercase text-gray-900 tracking-wide">
            Event Highlights
          </h2>
        </div>

        <div className="gap-6 grid sm:gap-8 lg:grid-cols-2">
          <div className="relative group overflow-hidden shadow-xl rounded-2xl">
            <div className="h-64 relative sm:h-80 lg:h-96 w-full">
              <Image
                src={mainEvent.image}
                alt={mainEvent.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="top-90 absolute p-4 sm:p-8 text-gray-500">
                <h3 className="text-base mb-2 sm:mb-3 sm:text-lg font-bold">{mainEvent.title}</h3>
                <div className="flex gap-2 flex-wrap sm:gap-4 text-xs sm:text-sm">
                  <div className="flex gap-2 items-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{mainEvent.date}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{mainEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-base mb-3 sm:mb-4 sm:text-lg font-bold text-gray-900">
                Upcoming Events
              </h4>
              <div className="space-y-3 overflow-auto sm:space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex rounded-lg gap-3 sm:gap-4 border-gray-200 border p-3 sm:p-4 hover:border-[#FF6B35] transition-all hover:shadow-md"
                  >
                    <div className="h-16 relative w-16 sm:h-20 sm:w-20 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm mb-1 sm:text-base font-bold line-clamp-2 text-gray-900">
                        {event.title}
                      </h5>
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <p className="text-xs truncate text-gray-500">{event.location}</p>
                    </div>
                    <button className="self-start bg-gray-100 rounded px-2 sm:px-3 py-1 text-xs text-gray-700 font-semibold hover:bg-[#FF6B35] transition-colors hover:text-white whitespace-nowrap">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-4 mt-8 sm:mt-10 sm:ml-10 items-center justify-start">
        <FileType className="w-5 text-[#951A28] h-5 sm:w-6 sm:h-6" />
        <h2 className="ml-2 text-base sm:text-lg font-bold text-[#951A28] uppercase tracking-wide">
          REPORTS & INSIGHTS
        </h2>
      </div>
      <p className="ml-4 sm:ml-10 text-sm mt-3 sm:mt-4 sm:text-base text-gray-800">
        Got key insights on latest topics creating impact for all stakeholders
      </p>
    </section>
  );
}
