'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppStore } from '@/store/useAppStore';

// might add more images here
// these unsplash images are good enough for now
const heroImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
    alt: 'Business professional working',
    label: 'We Listen',
    category: 'approach',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    alt: 'Team collaboration',
    label: 'We Analyze',
    category: 'process',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    alt: 'Professional presentation',
    label: 'We Influence',
    category: 'impact',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    alt: 'Business networking',
    label: 'We Connect',
    category: 'network',
  },
];

export default function HeroGrid() {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  const { openModal } = useAppStore();

  // thought about adding animations but seems overkill for now

  // const handleImageClick = (idx: number) => {
  //   setActiveIndex(idx);
  //   // maybe add modal here later?
  // };

  return (
    <section className="w-full relative h-[60vh] sm:h-[70vh] lg:h-screen">
      <div className="h-full grid-cols-2 gap-1 grid sm:grid-cols-2 lg:grid-cols-4">
        {heroImages.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
          <div
            key={item.id}
            className={`relative group overflow-hidden transition-all duration-300 ${isActive ? 'scale-[1.02] shadow-2xl' : ''}`}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority={idx < 2}
                quality={90}
              />
              <div className="absolute inset-0 from-black/60 via-black/20 to-transparent bg-gradient-to-t opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            <div className="z-10 absolute bottom-4 left-3 sm:bottom-8 sm:left-6 group-hover:bottom-6 sm:group-hover:bottom-10 transition-all duration-300 group-hover:scale-105">
              <div className="bg-[#F26225] text-white font-bold uppercase tracking-wider shadow-xl px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-base">
                {item.label}
              </div>
            </div>

            {isActive && (
              <div className="bg-[#FF6B35] shadow-lg absolute left-0 top-0 h-full w-1 sm:w-2" />
            )}
          </div>
        )})}
      </div>

      <div className="z-20 absolute right-3 top-3 sm:right-6 sm:top-6 flex-col sm:flex-row flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={() => openModal('member-registration')}
          className="bg-green-500 text-white font-semibold rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-green-600 shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
        >
          Become a Member
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg text-xs sm:text-sm hover:shadow-xl transition-all whitespace-nowrap">
          Members Zone
        </button>
        <button className="text-white font-semibold bg-red-500 hover:bg-red-600 rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
          Employee Zone
        </button>
      </div>
    </section>
  );
}
