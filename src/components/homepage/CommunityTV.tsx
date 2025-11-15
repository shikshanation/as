"use client";

import Image from "next/image";
import { useState } from "react";
import { Youtube } from "lucide-react";

const videos = [
  {
    id: "1",
    title:
      "Leader Talk | Automation-as-a-Service & AI Workflows | Mahesh Vinayagam, qBotica",
    thumbnail:
      "https://images.unsplash.com/photo-1558403194-611308249627?w=800",
    views: "12.5K",
    date: "13 Oct 2024",
    isLive: false,
    tag: "Live",
  },
  {
    id: "2",
    title: "Inside Look: AI in 24/7, The Future Unveiled",
    thumbnail:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600",
    views: "8.2K",
    date: "8 Dec 2024",
    tag: "Popular",
  },
  {
    id: "3",
    title: "GCC India: Insights From Industry Leaders",
    thumbnail:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    views: "15.3K",
    date: "5 Dec 2024",
    tag: "Trending",
  },
  {
    id: "4",
    title: "Future of Work: Remote Collaboration Tools",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    views: "9.8K",
    date: "2 Dec 2024",
    tag: "New",
  },
];

export default function CommunityTV() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section className="px-4 bg-white py-12 text-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row mb-4 items-start sm:items-center gap-3 sm:gap-0 justify-between">
          <div className="flex gap-2 sm:gap-3 items-center">
            <Youtube className="w-6 h-6 text-[#951A28] sm:w-8 sm:h-8" />
            <h2 className="font-bold text-xl sm:text-2xl uppercase text-[#951A28] tracking-wide">
              Community TV
            </h2>
          </div>
          <button className="bg-[#951A28] text-white rounded-3xl px-4 py-1 hover:bg-[#7a1520] text-xs sm:text-sm font-semibold transition-all">
            See all
            <span className="ml-1">→</span>
          </button>
        </div>

        <p className="text-black mb-6 sm:mb-8 text-sm sm:text-base">
          Watch the latest videos, interactions, interviews, and blogs on the
          newest topics.
        </p>

        <div className="gap-6 sm:gap-8 grid lg:grid-cols-3">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="group relative ">
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/VGVNdTgq0oI?si=Szort_aPWW067mpP"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-2xl"
                />
                {selectedVideo.isLive && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    <span className="text-xs font-semibold text-white">
                      LIVE
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 text-black">
                <h3 className="mb-3 text-lg font-bold">
                  {selectedVideo.title}
                </h3>
                <div className="flex items-center gap-4 text-sm">
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>{selectedVideo.views} views</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              {videos
                .filter((v) => v.id !== selectedVideo.id)
                .map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="cursor-pointer group overflow-hidden bg-white rounded-lg shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <div className="flex p-2 sm:p-3 gap-2 sm:gap-3">
                      <div className="w-24 relative h-20 sm:w-32 sm:h-30 shrink-0 rounded overflow-hidden">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="line-clamp-2 mb-1 text-xs sm:text-sm font-semibold text-black group-hover:text-[#EAAA02]">
                          {video.title}
                        </h5>
                        <div className="bg-[#E9AB00] rounded px-1.5 sm:px-2 py-0.5 text-xs w-fit font-semibold mb-1">
                          {video.tag}
                        </div>
                        <p className="text-xs text-gray-400">
                          {video.views} views • {video.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
