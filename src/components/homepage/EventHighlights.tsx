'use client';

import Image from 'next/image';

const events = [
  {
    id: '1',
    title: 'TechCrunch Startup Conference 2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    date: 'Jan 15-17, 2025',
    location: 'San Francisco, CA',
    attendees: '2000+',
  },
  {
    id: '2',
    title: 'Global Leadership Summit',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
    date: 'Jan 22, 2025',
    location: 'Virtual Event',
    attendees: '5000+',
  },
  {
    id: '3',
    title: 'AI & Machine Learning Workshop',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
    date: 'Feb 5, 2025',
    location: 'New York, NY',
    attendees: '500+',
  },
  {
    id: '4',
    title: 'AI & Machine Learning Workshop',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
    date: 'Feb 5, 2025',
    location: 'New York, NY',
    attendees: '500+',
  },
  {
    id: '4',
    title: 'AI & Machine Learning Workshop',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
    date: 'Feb 5, 2025',
    location: 'New York, NY',
    attendees: '500+',
  }
];

const highlights = [
  {
    id: '1',
    text: 'Exclusive industry insights shared on LinkedIn Engagement increased 70% YoY',
    badge: 'LinkedIn',
    badgeColor: 'bg-blue-600',
  },
  {
    id: '2',
    text: 'Community leaders gathered for annual networking summit',
    badge: 'Summit',
    badgeColor: 'bg-purple-600',
  },
  {
    id: '3',
    text: 'New partnership announcements driving innovation forward',
    badge: 'Partnership',
    badgeColor: 'bg-green-600',
  },
];

export default function EventHighlights() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="text-[#951A28]" />
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
            Event Highlights
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Event Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-96 w-full">
              <iframe 
                src="https://www.youtube.com/embed/VGVNdTgq0oI?si=Szort_aPWW067mpP" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="absolute inset-0 h-full w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Event Info Overlay */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-3 inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-semibold">
                  UPCOMING
                </div>
                <h3 className="mb-3 text-2xl font-bold">{events[0].title}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{events[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{events[0].location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{events[0].attendees} Attendees</span>
                  </div>
                </div>
                <button className="mt-4 rounded-lg bg-[#FF6B35] px-6 py-2 font-semibold text-white transition-all hover:bg-[#e55a2b] hover:shadow-xl">
                  Register Now
                </button>
              </div> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-900">Upcoming Events</h4>
              <div className="space-y-4 overflow-scroll">
                {events.slice(1).map((event) => (
                  <div key={event.id} className="flex gap-4 rounded-lg border border-gray-200 p-4 transition-all hover:border-[#FF6B35] hover:shadow-md">
                    <div className="relative h-20 w-20 shrink-0 overflow-scroll rounded-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1 font-bold text-gray-900">{event.title}</h5>
                      <p className="text-xs text-gray-500">{event.date}</p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                    <button className="self-start rounded bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition-colors hover:bg-[#FF6B35] hover:text-white">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Highlights */}
            {/* <div>
              <h4 className="mb-4 text-lg font-bold text-gray-900">Community Highlights</h4>
              <div className="space-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight.id} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                    <span className={`rounded ${highlight.badgeColor} px-2 py-1 text-xs font-semibold text-white`}>
                      {highlight.badge}
                    </span>
                    <p className="flex-1 text-sm text-gray-700">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
