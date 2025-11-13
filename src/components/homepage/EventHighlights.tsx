"use client";

import { FileType } from "lucide-react";
import Image from "next/image";

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
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
            Event Highlights
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Main Event Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <Image
                src={events[0].image}
                alt={events[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Event Info Overlay */}
              <div className="absolute top-90 p-4 sm:p-8 text-gray-500">
                <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold">{events[0].title}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{events[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
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
                    <span>{events[0].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div>
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-gray-900">
                Upcoming Events
              </h4>
              <div className="space-y-3 sm:space-y-4 overflow-auto">
                {events.slice(1).map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-3 sm:gap-4 rounded-lg border border-gray-200 p-3 sm:p-4 transition-all hover:border-[#FF6B35] hover:shadow-md"
                  >
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="mb-1 text-sm sm:text-base font-bold text-gray-900 line-clamp-2">
                        {event.title}
                      </h5>
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <p className="text-xs text-gray-500 truncate">{event.location}</p>
                    </div>
                    <button className="self-start rounded bg-gray-100 px-2 sm:px-3 py-1 text-xs font-semibold text-gray-700 transition-colors hover:bg-[#FF6B35] hover:text-white whitespace-nowrap">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 sm:mt-10 ml-4 sm:ml-10 items-center justify-start">
        <FileType className="text-[#951A28] w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-base sm:text-lg ml-2 font-bold uppercase tracking-wide text-[#951A28]">
          REPORTS & INSIGHTS
        </h2>
      </div>
      <p className="ml-4 sm:ml-10 mt-3 sm:mt-4 text-sm sm:text-base text-gray-800">
        Got key insights on latest topics creating impact for all stakeholders
      </p>
    </section>
  );
}
