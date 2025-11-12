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
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Pencil className=" text-[#951A28]" />
            {/* <Youtube size={16} strokeWidth={0.75} absoluteStrokeWidth /> */}
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#951A28]">
              Featured
            </h2>
          </div>
          <button className="rounded-3xl bg-[#951A28] px-4 py-1 text-sm font-semibold text-white transition-all hover:bg-[#7a1520]">
            See all
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main Featured Card - Agentic AI (Item 1) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-800">
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

                  {/* Main Heading */}
                  <h3 className="text-4xl text-center lg:text-5xl font-bold leading-tight">
                    Agentic AI Development
                    
                  </h3>

                  {/* Description */}
                  <p className="text-lg top-10 right-3 text-white bg-black/20 text-center leading-loose">
                    Why Startups Are Hiring Agentic AI Developers in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Articles */}
          <div className="space-y-4">
            {/* Article 1 */}
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
              <div className="flex gap-3 p-3">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600"
                    alt="Leadership dilemma"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 mb-1">
                    The Leadership Dilemma In The Age Of AI: Are You Ready To Lead What You Don't Fully Understand?
                  </h4>
                  <p className="text-xs text-gray-600    mb-1">Unfold Consulting</p>
                  <div className="absolute right-20 rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-white">
                    AI
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      403
                    </span>
                    <span>10 Oct 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
              <div className="flex gap-3 p-3">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
                    alt="Agentic AI Development"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 mb-1">
                    Why Startups Are Hiring Agentic AI Developers In 2025
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">Sparkout Tech</p>
                  <div className="absolute right-20 rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-white">
                    AI
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      788
                    </span>
                    <span>05 Oct 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl">
              <div className="flex gap-3 p-3">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                    alt="Data Lineage"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 mb-1">
                    Data Lineage: Demystifying Data For Trust, Compliance, And Governance
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">Vidyatech</p>
                  <div className="absolute right-20 rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-white">
                    Data Sc. & AI Com..
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      1254
                    </span>
                    <span>24 Sep 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
