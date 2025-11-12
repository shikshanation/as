'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Zap, Eye } from 'lucide-react';

const newsArticles = [
  {
    id: '1',
    title: 'haseem GCC Landscape Report has been released',
    description: 'Explore the latest GCC discount community with the most recently released trends',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
    category: 'Report',
    date: 'Dec 15, 2024',
    tag: '15',
    tagColor: 'bg-green-500',
  },
  {
    id: '2',
    title: 'General discussion for best ever templates for your company',
    description: 'Increase production for best ever templates that have been used',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
    category: 'Templates',
    date: 'Dec 12, 2024',
    tag: '13',
    tagColor: 'bg-orange-500',
  },
  {
    id: '3',
    title: 'Compare VEN Diagnostic processes with full service plans',
    description: 'All diagnostic processes being compared from around the world',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    category: 'Analysis',
    date: 'Dec 10, 2024',
    tag: '4',
    tagColor: 'bg-red-500',
  },
  {
    id: '4',
    title: 'Compare VEN Diagnostic processes with full service plans',
    description: 'All diagnostic processes being compared from around the world',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    category: 'Analysis',
    date: 'Dec 10, 2024',
    tag: '12',
    tagColor: 'bg-red-500',
  }
];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Show 3 cards on screen, carousel starts when there are more than 3
  const visibleCards = 3;
  const totalCards = newsArticles.length;
  const maxSlide = Math.max(0, totalCards - visibleCards);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className=" text-[#951A28]" />
            {/* <Youtube size={16} strokeWidth={0.75} absoluteStrokeWidth /> */}
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#951A28]">
              Latest
            </h2>
          </div>
          <button className="rounded-3xl bg-[#951A28] px-4 py-1 text-sm font-semibold text-white transition-all hover:bg-[#7a1520]">
            See all
            <span className="ml-1">→</span>
          </button>
        </div>
          <p className="mb-6 text-gray-600">
            Know the latest@ nasscom community with the most recently released blogs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
            aria-label="Next slide"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
              }}
            >
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl min-w-0 shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 1.5 / visibleCards}rem)` }}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute flex right-0 top-40 rounded-full bg-[#951A28] p-5 py-1 text-xs font-semibold text-white shadow-lg `}>
                      <Eye size={16} strokeWidth={1.5} />
                      {article.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold uppercase">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#FF6B35]">
                      {article.title}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                      {article.description}
                    </p>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B35] transition-all group-hover:gap-3">
                      Read More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Slide Indicators - Only show if more than 3 cards */}
          {totalCards > visibleCards && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-[#FF6B35] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
