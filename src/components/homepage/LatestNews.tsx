"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Zap, Eye } from "lucide-react";

const newsArticles = [
  {
    id: "1",
    title: "haseem GCC Landscape Report has been released",
    description: "Explore the latest GCC discount community with the most recently released trends",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
    category: "Report",
    date: "Dec 15, 2024",
    tag: "15",
    tagColor: "bg-green-500",
  },
  {
    id: "2",
    title: "General discussion for best ever templates for your company",
    description: "Increase production for best ever templates that have been used",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    category: "Templates",
    date: "Dec 12, 2024",
    tag: "13",
    tagColor: "bg-orange-500",
  },
  {
    id: "3",
    title: "Compare VEN Diagnostic processes with full service plans",
    description: "All diagnostic processes being compared from around the world",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    category: "Analysis",
    date: "Dec 10, 2024",
    tag: "4",
    tagColor: "bg-red-500",
  },
  {
    id: "4",
    title: "VEN Diagnostic processes with full service plans",
    description: "Diagnostic processes being compared from around the world",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    category: "Diagnostics",
    date: "Dec 10, 2024",
    tag: "12",
    tagColor: "bg-red-500",
  }
];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const totalCards = newsArticles.length;
  const maxSlide = Math.max(0, totalCards - visibleCards);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setVisibleCards(getVisibleCards());
        setIsMobile(window.innerWidth < 640);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="px-4 bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex mb-4 sm:mb-8 flex-col sm:flex-row gap-3 items-start sm:items-center justify-between sm:gap-0">
            <div className="flex gap-2 items-center sm:gap-3">
              <Zap className="w-6 text-[#951A28] h-6 sm:w-8 sm:h-8" />
              <h2 className="font-bold text-xl sm:text-2xl uppercase text-[#951A28] tracking-wide">
                Latest
              </h2>
            </div>
            <button className="bg-[#951A28] rounded-3xl px-4 text-white py-1 hover:bg-[#7a1520] text-xs sm:text-sm font-semibold transition-all">
              See all
              <span className="ml-1">→</span>
            </button>
          </div>
          <p className="text-sm mb-4 sm:mb-6 sm:text-base text-gray-600">
            Know the latest@ nasscom community with the most recently released blogs
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="z-10 absolute left-0 top-1/2 -translate-x-2 sm:-translate-x-4 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="z-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="px-1 overflow-hidden">
            <div
              className="flex gap-3 sm:gap-4 md:gap-6 ease-in-out transition-transform duration-500"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
              }}
            >
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="cursor-pointer group overflow-hidden bg-white rounded-xl shadow-md hover:shadow-2xl transition-all min-w-0 shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * (isMobile ? 0.75 : 1.5) / visibleCards}rem)` }}
                >
                  <div className="h-40 relative sm:h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="flex absolute items-center gap-1 right-2 sm:right-0 top-32 sm:top-40 bg-[#951A28] rounded-full px-2 py-1 font-semibold text-xs text-white shadow-lg">
                      <Eye size={14} strokeWidth={1.5} className="sm:w-4 sm:h-4" />
                      {article.tag}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex mb-2 items-center gap-2 text-xs text-gray-500">
                      <span className="uppercase font-semibold">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-base mb-2 sm:mb-3 sm:text-lg font-bold text-gray-900 leading-tight group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="line-clamp-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                      {article.description}
                    </p>

                    <button className="inline-flex gap-2 items-center text-xs sm:text-sm text-[#FF6B35] font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <svg className="w-3 h-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {totalCards > visibleCards && (
            <div className="flex mt-4 sm:mt-6 justify-center gap-1.5 sm:gap-2">
              {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 sm:h-3 sm:w-3 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-[#FF6B35] scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
