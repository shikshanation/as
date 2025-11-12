'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeroImage {
  id: string;
  src: string;
  alt: string;
  label: string;
  category: string;
}

const heroImages: HeroImage[] = [
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative h-screen w-full">
      <div className="grid h-full grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {heroImages.map((item, index) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'scale-[1.02] shadow-2xl' : ''
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
                quality={90}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            </div>

            {/* Label */}
            <div className="absolute bottom-8 left-6 z-10 transition-all duration-300 group-hover:bottom-10 group-hover:scale-105">
              <div className="bg-[#F26225] px-6 py-3 text-base font-bold uppercase tracking-wider text-white shadow-xl">
                {item.label}
              </div>
            </div>

            {/* Active indicator */}
            {activeIndex === index && (
              <div className="absolute left-0 top-0 h-full w-2 bg-[#FF6B35] shadow-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons overlay */}
      <div className="absolute right-6 top-6 z-20 flex flex-wrap gap-3">
        <button className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl">
          Become a Member
        </button>
        <button className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl">
          Members Zone
        </button>
        <button className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-xl">
          Employee Zone
        </button>
      </div>
    </section>
  );
}
