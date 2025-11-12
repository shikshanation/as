'use client';

import Image from 'next/image';
import { useState } from 'react';

const videos = [
  {
    id: '1',
    title: 'Leader Talk: Driving Client Service Excellence',
    thumbnail: 'https://images.unsplash.com/photo-1558403194-611308249627?w=800',
    speakers: [
      { name: 'Sameera Jain', role: 'CEO, Tech Innovations' },
      { name: 'Ramesh Venkatesan', role: 'Director, Global Solutions' },
    ],
    duration: '45:30',
    views: '12.5K',
    date: 'Dec 10, 2024',
    isLive: false,
  },
  {
    id: '2',
    title: 'Inside Look: AI in 24/7, The Future Unveiled',
    thumbnail: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600',
    duration: '32:15',
    views: '8.2K',
    date: 'Dec 8, 2024',
    tag: 'Popular',
  },
  {
    id: '3',
    title: 'GCC India: Insights From Industry Leaders',
    thumbnail: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600',
    duration: '28:45',
    views: '15.3K',
    date: 'Dec 5, 2024',
    tag: 'Trending',
  },
];

export default function CommunityTV() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#FF6B35]" />
            <h2 className="text-2xl font-bold uppercase tracking-wide">
              Community TV
            </h2>
          </div>
          <button className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/10">
            View All Videos
          </button>
        </div>

        <p className="mb-8 text-gray-300">
          Discover the expert series, conversations, interviews, and blogs all the newest topics
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-2xl bg-black">
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video w-full">
                <iframe 
                src="https://www.youtube.com/embed/VGVNdTgq0oI?si=Szort_aPWW067mpP" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="absolute inset-0 h-full w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />


                

                {/* Live Badge */}
                {selectedVideo.isLive && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    <span className="text-xs font-semibold">LIVE</span>
                  </div>
                )}

                {/* Duration */}
                <div className="absolute bottom-4 right-4 rounded bg-white px-2 py-1 text-xs font-semibold">
                  {selectedVideo.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">{selectedVideo.title}</h3>

                {/* {selectedVideo.speakers && (
                  <div className="mb-4 flex flex-wrap gap-4">
                    {selectedVideo.speakers.map((speaker, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                        <div>
                          <p className="text-sm font-semibold">{speaker.name}</p>
                          <p className="text-xs text-gray-400">{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )} */}

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {selectedVideo.views} views
                  </span>
                  <span>•</span>
                  <span>{selectedVideo.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Up Next</h4>
            <div className="space-y-4">
              {videos.filter(v => v.id !== selectedVideo.id).map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group cursor-pointer overflow-hidden rounded-lg bg-gray-800 transition-all hover:bg-gray-700"
                >
                  <div className="flex gap-3 p-3">
                    <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      {video.tag && (
                        <div className="absolute right-1 top-1 rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold">
                          {video.tag}
                        </div>
                      )}
                      <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1 line-clamp-2 text-sm font-semibold group-hover:text-[#FF6B35]">
                        {video.title}
                      </h5>
                      <p className="text-xs text-gray-400">{video.views} views</p>
                      <p className="text-xs text-gray-400">{video.date}</p>
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
