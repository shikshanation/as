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
    <section className="bg-white px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Youtube className="text-[#951A28] w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#951A28]">
              Community TV
            </h2>
          </div>
          <button className="rounded-3xl bg-[#951A28] px-4 py-1 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#7a1520]">
            See all
            <span className="ml-1">→</span>
          </button>
        </div>

        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-black">
          Watch the latest videos, interactions, interviews, and blogs on the
          newest topics.
        </p>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
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

          {/* Video Playlist */}
          <div className="space-y-8">
            <div className="space-y-4">
              {videos
                .filter((v) => v.id !== selectedVideo.id)
                .map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:bg-gray-700"
                  >
                    <div className="flex gap-2 sm:gap-3 p-2 sm:p-3">
                      <div className="relative w-24 h-20 sm:w-32 sm:h-30 shrink-0 overflow-hidden rounded">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="mb-1 line-clamp-2 text-xs sm:text-sm text-black font-semibold group-hover:text-[#EAAA02]">
                          {video.title}
                        </h5>
                        <div className="rounded bg-[#E9AB00] px-1.5 sm:px-2 py-0.5 w-fit text-xs font-semibold mb-1">
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
