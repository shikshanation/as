'use client';

import { ChevronRight } from 'lucide-react';

const pressReleases = [
  {
    id: '1',
    date: 'Oct 14, 2025',
    title: 'India-Brazil aims to achieve foreign trade target of $ 20 billion in 2030; Look at expanding Preferential Trade Agreement: H.E. Mr Geraldo Alckmin, Vice President, Brazil',
  },
  {
    id: '2',
    date: 'Oct 14, 2025',
    title: 'FICCI announces Mr Anant Goenka as President-Elect for the year 2025-26',
  },
  {
    id: '3',
    date: 'Oct 14, 2025',
    title: 'Chief Minister Abdullah outlines sectoral opportunities at National Executive Committee Meeting',
  },
];

export default function PressRelease() {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Press Release</h2>
          <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900">
            <ChevronRight className="h-6 w-6" />
            <ChevronRight className="h-6 w-6 -ml-4" />
          </button>
        </div>

        {/* Press Release Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressReleases.map((release) => (
            <div
              key={release.id}
              className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4 border-b-2 border-gray-200 pb-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  PRESS RELEASE | {release.date}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {release.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
