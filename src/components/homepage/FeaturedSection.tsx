'use client';

import Image from 'next/image';
import { useAppStore } from '@/store/useAppStore';

import { Pencil } from 'lucide-react';

export default function FeaturedSection() {
  const { openModal } = useAppStore();

  return (
  <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-3">
          <Pencil className="text-[#951A28]" />
          <h2 className="text-2xl font-bold uppercase tracking-wide text-[#951A28]">
            Featured
          </h2>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          {/* Main Featured Card - Agentic AI (Item 1) */}
          <div className="row-span-3 group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600">
            <div className="relative p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
                
                {/* Left Side - Robot Image */}
                <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 row-span-3">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <Image
                      src="/download.png"
                      alt="AI Robot"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="text-white space-y-6 order-1 lg:order-2">
                  {/* Featured Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    FEATURED
                  </div>

                  {/* Main Heading */}
                  <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Agentic AI Development
                    
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-white/90 leading-relaxed">
                    Why Startups Are Hiring Agentic AI Developers In 2025
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/80">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">Advanced AI Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/80">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-sm">Cutting-Edge Technology</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/80">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm">Future-Ready Development</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openModal('agentic-ai')}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                  >
                    Learn More
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-yellow-400/10 rounded-full"></div>
            </div>
          </div>

          {/* Article 1 (Item 2) */}
          <div className="flex group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600"
                alt="Technology advancement"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                NEW
              </div>
            </div>
            <div className="p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Technology • 2 days ago
              </p>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                Why Leading Agencies Are Now Looking At AI For Key...
              </h4>
            </div>
          </div>

          {/* Article 2 (Item 3) */}
          <div className="flex group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
                alt="Business insights"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                HOT
              </div>
            </div>
            <div className="p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Business • 3 days ago
              </p>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                Top Industry Secrets Are Being Shared, All For Industry...
              </h4>
            </div>
          </div>

          {/* Article 3 (Item 4) */}
          <div className="flex group flex-2 cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                alt="Data analysis"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Insights • 5 days ago
              </p>
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                Think Google Spreadsheets Could Be Killing Your Productivity?
              </h4>
            </div>
          </div>
        </div>

        {/* Additional Scrollable Articles */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-bold text-gray-900">More Featured Content</h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 w-max">
              {/* Extra Article 1 */}
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl w-80 shrink-0">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600"
                    alt="Digital transformation"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                    TRENDING
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Innovation • 1 day ago
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                    Digital Transformation Strategies That Actually Work
                  </h4>
                </div>
              </div>

              {/* Extra Article 2 */}
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl w-80 shrink-0">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                    POPULAR
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Leadership • 3 days ago
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                    Building Remote Teams That Excel in 2025
                  </h4>
                </div>
              </div>

              {/* Extra Article 3 */}
              <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl w-80 shrink-0">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1573167278390-e4d4ab5e8923?w=600"
                    alt="Future technology"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                    FUTURE
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Technology • 4 days ago
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600">
                    The Future of Work: AI and Human Collaboration
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
