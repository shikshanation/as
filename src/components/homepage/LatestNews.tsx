'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Zap} from 'lucide-react';

const newsArticles = [
  {
    id: '1',
    title: 'haseem GCC Landscape Report has been released',
    description: 'Explore the latest GCC discount community with the most recently released trends',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
    category: 'Report',
    date: 'Dec 15, 2024',
    tag: 'Latest',
    tagColor: 'bg-green-500',
  },
  {
    id: '2',
    title: 'General discussion for best ever templates for your company',
    description: 'Increase production for best ever templates that have been used',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
    category: 'Templates',
    date: 'Dec 12, 2024',
    tag: 'Popular',
    tagColor: 'bg-orange-500',
  },
  {
    id: '3',
    title: 'Compare VEN Diagnostic processes with full service plans',
    description: 'All diagnostic processes being compared from around the world',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    category: 'Analysis',
    date: 'Dec 10, 2024',
    tag: 'Trending',
    tagColor: 'bg-red-500',
  },
];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'report', 'templates', 'analysis', 'insights'];

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <Zap className="text-[#951A28]" />
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#941926]">
              Latest
            </h2>
          </div>

          <p className="mb-6 text-gray-600">
            Know the latest@ nasscom community with the most recently released blogs
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all ${
                  activeCategory === category
                    ? 'bg-[#FF6B35] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute right-3 top-3 rounded-full ${article.tagColor} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
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

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B35] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#e55a2b] hover:shadow-xl">
            View All Articles
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
