'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
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
    title: 'VEN Diagnostic processes with full service plans',
    description: 'Diagnostic processes being compared from around the world',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    category: 'Diagnostics',
    date: 'Dec 10, 2024',
    tag: '12',
    tagColor: 'bg-red-500',
  }
];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive visible cards: 1 on mobile, 2 on tablet, 3 on desktop
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const totalCards = newsArticles.length;
  const maxSlide = Math.max(0, totalCards - visibleCards);

  // Update visible cards on resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setVisibleCards(getVisibleCards());
        setIsMobile(window.innerWidth < 640);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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
        <div className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="text-[#951A28] w-6 h-6 sm:w-8 sm:h-8" />
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#951A28]">
                Latest
              </h2>
            </div>
            <button className="rounded-3xl bg-[#951A28] px-4 py-1 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-[#7a1520]">
              See all
              <span className="ml-1">→</span>
            </button>
          </div>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
            Know the latest@ nasscom community with the most recently released blogs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 z-10 -translate-x-2 sm:-translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 sm:translate-x-4 rounded-full bg-white p-2 sm:p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-1">
            <div
              className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
              }}
            >
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl min-w-0 shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * (isMobile ? 0.75 : 1.5) / visibleCards}rem)` }}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute flex items-center gap-1 right-2 sm:right-0 top-32 sm:top-40 rounded-full bg-[#951A28] px-2 py-1 text-xs font-semibold text-white shadow-lg">
                      <Eye size={14} strokeWidth={1.5} className="sm:w-4 sm:h-4" />
                      {article.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold uppercase">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-[#FF6B35] line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm text-gray-600">
                      {article.description}
                    </p>

                    <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6B35] transition-all group-hover:gap-3">
                      Read More
                      <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          {totalCards > visibleCards && (
            <div className="mt-4 sm:mt-6 flex justify-center gap-1.5 sm:gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
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
