"use client";

import { ChevronRight } from "lucide-react";

const pressReleases = [
  {
    id: "1",
    date: "Oct 14, 2025",
    title: "India-Brazil aims to achieve foreign trade target of $ 20 billion in 2030; Look at expanding Preferential Trade Agreement: H.E. Mr Geraldo Alckmin, Vice President, Brazil",
  },
  {
    id: "2",
    date: "Oct 14, 2025",
    title: "FICCI announces Mr Anant Goenka as President-Elect for the year 2025-26",
  },
  {
    id: "3",
    date: "Oct 14, 2025",
    title: "Chief Minister Abdullah outlines sectoral opportunities at National Executive Committee Meeting",
  },
];

export default function PressRelease() {
  return (
    <section className="px-4 bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-6 sm:mb-8 items-center justify-between">
          <h2 className="font-bold text-2xl sm:text-3xl text-gray-800">Press Release</h2>
          <button className="flex gap-1 items-center sm:gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronRight className="w-5 h-5 sm:h-6 sm:w-6" />
            <ChevronRight className="w-5 h-5 sm:h-6 sm:w-6 -ml-3 sm:-ml-4" />
          </button>
        </div>

        <div className="gap-4 grid sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressReleases.map((release) => (
            <div
              key={release.id}
              className="cursor-pointer group bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="border-b-2 mb-3 sm:mb-4 border-gray-200 pb-2">
                <p className="text-xs sm:text-sm uppercase font-semibold text-gray-400 tracking-wide">
                  PRESS RELEASE | {release.date}
                </p>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {release.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
