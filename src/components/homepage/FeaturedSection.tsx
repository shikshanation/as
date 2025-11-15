"use client";

import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";
import { Pencil } from "lucide-react";

export default function FeaturedSection() {
  const { openModal } = useAppStore(); // might use this for article modal later
  // TODO: make articles clickable and show full content in modal
  // FIXME: the robot image path might break in production, need to verify

  return (
  <section className="px-4 bg-white py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-8 items-center justify-between">
          <div className="flex gap-3 items-center">
            <Pencil className=" text-[#951A28]" />
            <h2 className="font-bold text-2xl uppercase text-[#951A28] tracking-wide">
              Featured
            </h2>
          </div>
          <button className="bg-[#951A28] rounded-3xl px-4 py-1 text-white text-sm font-semibold hover:bg-[#7a1520] transition-all">
            See all
            <span className="ml-1">→</span>
          </button>
        </div>

        <div className="gap-5 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 relative group overflow-hidden bg-gradient-to-r rounded-xl from-blue-600 to-purple-800">
            <div className="relative p-8 sm:p-12">
              <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px]">

                <div className="flex relative justify-center lg:justify-start order-2 lg:order-1 row-span-3">
                  <div className="w-64 relative h-64 lg:w-80 lg:h-80">
                    <Image
                      src="/robot.png"
                      alt="AI Robot"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="text-white space-y-6 lg:order-2 order-1">

                  <h3 className="text-4xl font-bold text-center lg:text-5xl leading-tight">
                    Agentic AI Development

                  </h3>

                  <p className="text-lg top-10 right-3 bg-black/20 text-white text-center leading-loose">
                    Why Startups Are Hiring Agentic AI Developers in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="cursor-pointer group overflow-hidden border rounded-xl border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="flex p-3 gap-3">
                <div className="h-28 relative w-28 shrink-0 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600"
                    alt="Leadership dilemma"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-purple-600">
                    The Leadership Dilemma In The Age Of AI: Are You Ready To Lead What You Don't Fully Understand?
                  </h4>
                  <p className="text-xs mb-1 text-gray-600">Unfold Consulting</p>
                  <div className="right-20 absolute bg-yellow-500 rounded px-2 py-0.5 font-semibold text-xs text-white">
                    AI
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500">

                    <span className="flex gap-1 items-center">
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

            <div className="cursor-pointer group overflow-hidden border rounded-xl border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="flex p-3 gap-3">
                <div className="h-28 relative w-28 shrink-0 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
                    alt="Agentic AI Development"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-purple-600">
                    Why Startups Are Hiring Agentic AI Developers In 2025
                  </h4>
                  <p className="text-xs mb-1 text-gray-600">Sparkout Tech</p>
                  <div className="right-20 absolute bg-yellow-500 rounded px-2 py-0.5 font-semibold text-xs text-white">
                    AI
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <span className="flex gap-1 items-center">
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

            <div className="cursor-pointer group overflow-hidden border rounded-xl border-gray-200 bg-white hover:shadow-xl transition-all">
              <div className="flex p-3 gap-3">
                <div className="h-28 relative w-28 shrink-0 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                    alt="Data Lineage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900 mb-1 group-hover:text-purple-600">
                    Data Lineage: Demystifying Data For Trust, Compliance, And Governance
                  </h4>
                  <p className="text-xs mb-1 text-gray-600">Vidyatech</p>
                  <div className="right-20 absolute bg-yellow-500 rounded px-2 py-0.5 font-semibold text-xs text-white">
                    Data Sc. & AI Com..
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500">
                    <span className="flex gap-1 items-center">
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
